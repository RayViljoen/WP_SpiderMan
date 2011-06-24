<?php

/**
 * Import site content from the a website into WordPress.
 *
 *
 * @author Carlos Morillo
 * @copyright Fubra Limited
 * @version 1.0
 * @uses WordPress (Core)
 * @uses Common sense
 */

set_time_limit(0);

require_once ABSPATH.'/wp-load.php';
require_once 'ImportWebsite/simple_html_dom.php';

class ImportWebsite
{
	/*
	 * Site properties
	 */
	private $_site;
	/**
	 * 
	 * List with all the css detected on the pages
	 * @var unknown_type
	 */
	private $_css;
	/**
	 * 
	 * List with all the js detected on the pages
	 * @var unknown_type
	 */
	private $_js;
	/**
	 * 
	 * The uploads dir for wp
	 * @var unknown_type
	 */
	private $_uploads;
	/**
	 * 
	 * List with the url of all the images uploades
	 * @var unknown_type
	 */
	private $_images;

	public function __construct($site)
	{
		//initialise all the properties
		$this->_js = array();
		$this->_css = array();
		$this->_images = array();
		//set up the site array
		$siteArray = array('hostname' => $site);
		$this->_site = $siteArray;
		
		if ($this->_getUploadDir()) {
			$this->_output('<h2>Importing.. </h2>');
		} else {
			$this->_output('ERROR: Upload Directory could not be found.<br />');
		}

	}
	/**
	 * 
	 * Import an array with the url of the pages to wp
	 * @param unknown_type $pagesArray
	 */
	public function pages($pagesArray)
	{
		$this->_output('<h3>Insert Pages</h3>');

		$this->_import('page', $pagesArray);

	}
	/*
	 public function blog()
	 {
		$this->_output('<h3>Insert Blog Posts</h3>');
		if ($posts = $this->_db->query('
		SELECT `blog_post`.`blog_post_id` AS `id`, `blog_post`.`date`,
		`blog_post`.`friendly_url` AS `slug`, `blog_post`.`title`,
		`blog_post`.`body` AS `content`, `blog_post`.`display` AS `status`
		FROM `blog_post`, `blog`
		WHERE `blog`.`blog_id` = `blog_post`.`blog_id`
		AND `blog`.`site_id` = '.$this->site['site_id'].'
		')) {
		$this->_import('post', $posts);
		} else {
		$this->_output('ERROR: No posts.<br />');
		}
		}

		public function providers()
		{
		$this->_output('<h3>Insert Providers</h3>');
		$parentPath = 'providers';
		if ($parent = get_page_by_path($parentPath)) {
		if ($providers = $this->_db->query('
		SELECT `provider_id` AS `id`, `name` AS `title`, `published` AS `status`,
		`url_site` AS `slug`, `html_content` AS `content`
		FROM `plugin_provider`
		WHERE `site_id` = '.$this->site['site_id'].'
		')) {
		$this->_import('provider', $providers);
		} else {
		$this->_output('ERROR: No providers.<br />');
		}
		} else {
		$this->_output('ERROR: Parent page path "'.$parentPath.'" not found.');
		}
		$this->_output('<br />');
		}
		*/
	private function _import($type = 'post', $posts)
	{
		// get all the pages
		$pages = get_pages();
		$postIdList = array();
		
		foreach($posts as $post) {
			$new = true;
			// title
			$title = wp_filter_kses($post['title']);


			// Getting the content of the page
			$html = str_get_html($post['content']);
			$body = $html->find('body');
			$bodyHtml = (string)$body[0]->innertext;
			$content = $bodyHtml;
			
			//get all the css files
			$cssList = $html->find('link[href]');
			//get all the js files
			$jsList = $html->find('script[src]');
			foreach ($cssList as $css){
				//if it doesn't exist already, add it
				if (!in_array($this->_site['hostname'].'/'.$css->attr['href'], $this->_css)){
					$this->_css[] = $this->_site['hostname'].'/'.$css->attr['href'];
				}
			}
			foreach ($jsList as $js){
				//if it doesn't exist already, add it
				if (!in_array($this->_site['hostname'].'/'.$js->attr['src'], $this->_js)){
					$this->_js[] = $this->_site['hostname'].'/'.$js->attr['src'];
				}
			}

			// Filter the post title...

			// Match the parent if required...

			$postParent = 0;
			if (isset($post['post_parent']) && $type == 'page') {
				$this->_output('[Parent: ');
				if ($parentPath = $this->_slug($post['post_parent_url'])) {
					if ($parent = get_page_by_path($parentPath)) {
						$postParent = $parent->ID;
					}
				}
				$this->_output($postParent.'] ');
			}
			
			//If the page exists already don't add it again, don't do anything
			foreach ($pages as $pagg) {
				if ($pagg->post_title == $title){
					$new = false;
					$postId = $pagg->ID;
					break;
				}
			}

			if ($new){
				// adding the page
				$postId = wp_insert_post(array(
				'post_title' => $title,
				'post_content' => $content,
				'post_name' => $this->_slug($post['slug']),
				'post_author' => 1,
				'post_category' => array(1),
				'post_type' => ($type == 'page' ? 'page' : 'post'),
				'post_date' => $post['date'],
				'post_status' => ($post['status'] == 'y') ? 'publish' : 'draft',
				'post_parent' => $postParent,
				'comment_status' => ($type == 'page' ? 'closed' : 'open'),
				'ping_status' => ($type == 'page' ? 'closed' : 'open'),
				));

				// Now we need to grab the images...
				$this->_output('[Images: ');
				if (!$this->_parseImages($postId, $content)) {
					$this->_output('None');
				}
				$this->_output('] ');
				$this->_output('<a href="'.get_permalink($postId).'" target="_blank">DONE</a>');

				$postIdList[$title] = $postId;
			}
			$this->_output('<br />');
		}
		// Maping the new post in order to change the links in the pages
		$guidList = array();
		foreach($postIdList as $title=>$postId) {
			$postLinked = wp_get_single_post($postId, OBJECT);
			$guidList[$postId] = $postLinked->guid;
		}

		// We change the url of all the links for the page which are going to the own website
		foreach($postIdList as $title=>$postId) {

			$post = wp_get_single_post($postId, OBJECT);
			$content = $post->post_content;
			$html = str_get_html($content);

			$linkList = $html->find('a[href]');
			foreach ($linkList as $link){
				if (preg_match('/\/*(.*)?\.(php|html)/isU', $link->attr['href'],$links)){
					if (isset($postIdList[$links[1]])){
						$content = str_replace($link->attr['href'], $guidList[$postIdList[$links[1]]], $content);
						wp_update_post(array(
										'ID' => $postId,
										'post_content' => $content
						));
					}
				}
			}
		}
	}


	private function _slug($url)
	{
		if (is_string($url)) {
			return str_replace('.html', '', basename(trim($url)));
		}
		return false;
	}


	private function _parseImages($postId, $content = '')
	{
		$html = str_get_html($content);

		$imageList = $html->find('img[src]');
		//$backgroundList = $html->find('td[background]');
		$images = array();
		foreach ($imageList as $image){
			$images[] = $image->attr['src'];
		}
/*
		foreach ($backgroundList as $background){
			$images[] = $background->attr['background'];
		}
*/
		// Search for any images and remove the cache string...
		if (count($images) > 0) {
			foreach ($images AS $key => $image) {
				$imageSrc = $image;
				if (!preg_match("/http:\/\//", $image, $matches)){
					$imageSrc = $this->_site['hostname'].$image;
				}
				
				$filename = wp_unique_filename($this->_uploads['path'], basename($imageSrc));
				$filePath = $this->_uploads['path'].'/'.$filename;
				//Only one time the same image
				if (!isset($this->_images[$imageSrc])){
					
					if (@copy($imageSrc, $filePath)) {
						$filetype = wp_check_filetype($filename, null);
						$attachId = wp_insert_attachment(array(
						'post_mime_type' => $filetype['type'],
						'post_title' => preg_replace('/\.[^.]+$/', '', $filename),
						'post_content' => '',
						'post_status' => 'inherit'
						), $filePath, $postId);
						require_once(ABSPATH.'wp-admin/includes/image.php');
						$attachData = wp_generate_attachment_metadata($attachId, $filePath);
						wp_update_attachment_metadata($attachId, $attachData);
						$content = str_replace($imageSrc, $this->_uploads['url'].'/'.$filename, $content);
						$this->_output('.'); // Successful
						$this->_images[$imageSrc] = $this->_uploads['url'].'/'.$filename;
					} else {
						$this->_output('Failed<br/>'); // Failed
						echo $imageSrc.'<br/>';
						echo $filePath.'<br/>';

					}

				} else {
					$content = str_replace($imageSrc, $this->_images[$imageSrc], $content);
				}

			}
			wp_update_post(array(
				'ID' => $postId,
				'post_content' => $content
			));
			//echo $content;
			return true;
		}
		return false;
	}

	private function _getUploadDir()
	{
		if (!$this->_uploads) {
			$dir = wp_upload_dir();
			if (!file_exists($dir['path']) ){
				mkdir($dir['path']);
			}
			$this->_uploads = $dir;
		}
		return $this->_uploads;
	}

	private function _output($str = '')
	{
		echo $str; flush(); ob_flush();
	}

	public function buildTemplate(){

		$templatePath = "Release/template";
		$imagesFolder = $templatePath."/images";
		if (is_dir($templatePath)){
			$this->rrmdir($templatePath);
		}

		if (!mkdir($imagesFolder, 0777, true)) {
			die('Failed to create folders...');
		}

		$jsString = "";
		foreach ($this->_js as $jsPath){
			$jsString .= file_get_contents($jsPath)."\n\n";
		}
		// creating js
		$fileName = $templatePath."/template.js";

		$fp = fopen($fileName, "w");

		fwrite($fp, $jsString);

		fclose($fp);



		// creating the 404 file

		$string = "<?php get_header(); ?>
					<span>This page is not available at the moment.</span>
				  <?php get_footer(); ?>";

		$fileName = $templatePath."/404.php";

		$fp = fopen($fileName, "w");

		fwrite($fp, $string);

		fclose($fp);

		// creating the footer file

		$string = "	<?php wp_footer(); ?>
					</body>
					</html>";

		$fileName = $templatePath."/footer.php";

		$fp = fopen($fileName, "w");

		fwrite($fp, $string);

		fclose($fp);

		// creating the functions file

		$string = "	<?php

					add_theme_support( 'menus' );
					
					if ( function_exists('register_sidebar') ){
					    register_sidebar();
					}";

		$fileName = $templatePath."/functions.php";

		$fp = fopen($fileName, "w");

		fwrite($fp, $string);

		fclose($fp);

		// creating the header file

		$string = "	<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"
					 \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">
					<html xmlns=\"http://www.w3.org/1999/xhtml\" <?php language_attributes(); ?>>
					<head profile=\"http://gmpg.org/xfn/11\">
						<title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>
						<meta http-equiv=\"Content-Type\" content=\"<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>\" />
						<link rel=\"alternate\" type=\"application/rss+xml\" title=\"RSS 2.0\" href=\"<?php bloginfo('rss2_url'); ?>\" />
						<link rel=\"alternate\" type=\"text/xml\" title=\"RSS .92\" href=\"<?php bloginfo('rss_url'); ?>\" />
						<link rel=\"alternate\" type=\"application/atom+xml\" title=\"Atom 1.0\" href=\"<?php bloginfo('atom_url'); ?>\" />
						<link rel=\"pingback\" href=\"<?php bloginfo('pingback_url'); ?>\" />
						<link rel=\"stylesheet\" type=\"text/css\" href=\"<?php bloginfo('stylesheet_url'); ?>\" media=\"screen\"></link>
						
						<?php wp_get_archives('type=monthly&format=link'); ?>
						<?php wp_head(); ?>
						
					</head>";
			
		$string.= "<script type=\"text/javascript\" language=\"javascript\" src=\"<?php bloginfo('template_directory');?>/template.js\"></script>\n\n";
			
			
			
		$string.= "<body <?php body_class(); ?>>";

		$fileName = $templatePath."/header.php";

		$fp = fopen($fileName, "w");

		fwrite($fp, $string);

		fclose($fp);

		// creating index file

		$string= "<?php get_header(); ?>

				<?php get_template_part( 'loop', 'index' ); ?>
				
				<?php get_footer(); ?>";

		$fileName = $templatePath."/index.php";

		$fp = fopen($fileName, "w");

		fwrite($fp, $string);

		fclose($fp);

		// creating loop file

		$string= "<?php if (have_posts()) : ?>
					<?php while (have_posts()) : the_post(); ?>
						<div class=\"individual_post\">
							
							<div <?php post_class() ?> id=\"post-<?php the_ID(); ?>\">
								<h2>
									<a href=\"<?php the_permalink() ?>\" rel=\"bookmark\" title=\"Permanent Link to <?php the_title_attribute(); ?>\"><?php the_title(); ?></a>
								</h2>
								<p class=\"author\">
									Posted <?php the_time('l F jS Y') ?> <span> by <?php the_author(); ?></span>
								</p>
	
								<?php
									the_content('Read the rest of this entry &raquo;');
								?>
	
							</div>
						</div>
					<?php endwhile; ?>
					<?php if (next_posts_link() || previous_posts_link()): ?>
						<?php next_posts_link('&laquo; Older Entries') ?> | 
						<?php previous_posts_link('Newer Entries &raquo;') ?>
					<?php endif ?>
				<?php else : ?>
					<h2>Not Found</h2>
					<p>Sorry, but you are looking for something that isn't here.</p>
					<?php get_search_form(); ?>
				<?php endif; ?>";

		$fileName = $templatePath."/loop.php";

		$fp = fopen($fileName, "w");

		fwrite($fp, $string);

		fclose($fp);

		// creating page file

		$string= "<?php get_header(); ?>
						<?php if (have_posts()) : ?>
							<?php while (have_posts()) : the_post(); ?>
										
									<?php
										the_content();
									?>
							<?php endwhile; ?>
							<?php if (next_posts_link() || previous_posts_link()): ?>
								<?php next_posts_link('&laquo; Older Entries') ?> | 
								<?php previous_posts_link('Newer Entries &raquo;') ?>
							<?php endif ?>
						<?php else : ?>
							<h2>Not Found</h2>
							<p>Sorry, but you are looking for something that isn't here.</p>
							<?php get_search_form(); ?>
						<?php endif; ?>
				<?php get_footer(); ?>";

		$fileName = $templatePath."/page.php";

		$fp = fopen($fileName, "w");

		fwrite($fp, $string);

		fclose($fp);

		// creating style file

		$string= "/*
					Theme Name: Template
					Theme URI: http://www.template.co.uk
					Description: This is an autoTemplate.
					Author: Carlos Morillo (Fubra Limited)
					Author URI: http://www.template.co.uk
					Version: 1.0
					Tags: blue
					.
					Auto Template
					.
					*/ \n\n";

		foreach ($this->_css as $cssPath){

			$cssContent = file_get_contents($cssPath);
			$characters = array("'");
			if (preg_match_all('/url\((.*)?\)/isU', $cssContent, $images)){
				foreach ($images[1] as $imageUrl){
					$imageUrl = str_replace($characters, "", $imageUrl);

					$filePath = $templatePath."/".$imageUrl;

					if (@copy($this->_site['hostname'].'/'.$imageUrl, $filePath)) {
							
					} else {
						echo "Problem copying image\n\n";
					}

				}

				$string .= $cssContent."\n\n";
			}

			$fileName = $templatePath."/style.css";

			$fp = fopen($fileName, "w");

			fwrite($fp, $string);

			fclose($fp);

		}
	}

	function rrmdir($dir) {
		if (is_dir($dir)) {
			$objects = scandir($dir);
			foreach ($objects as $object) {
				if ($object != "." && $object != "..") {
					if (filetype($dir."/".$object) == "dir") $this->rrmdir($dir."/".$object); else unlink($dir."/".$object);
				}
			}
			reset($objects);
			rmdir($dir);
		}
	}

}
