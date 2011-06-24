<?php
require 'WebSpider.php';
require 'ImportWebsite.php';

$websiteUrl = 'http://example.com'; // TARGET URL
$webSpider = new WebSpider($websiteUrl);
$importWebsite = new ImportWebsite($websiteUrl);

$pagesArray = array();
$websiteMap = $webSpider->getWebsiteMap();
foreach ($websiteMap as $websiteUrl => $level){
	$content = $webSpider->getContent($websiteUrl);
	
	preg_match("/http:\/\/".$websiteUrl."\/(.*)?\.[html|php]/", $websiteUrl, $matches);
	if (empty($matches)){
		$matches[1] = 'index';
	}
	$pagesArray[] = array(
						'title' => $matches[1],
						'status' => 'y',
						'slug' => $matches[1],
						'content' => $content,
						'date' => date('j M Y')
	);
}

$importWebsite->pages($pagesArray);
$importWebsite->buildTemplate();


/*
 require 'Process/Manager.php';
 require 'Process/Process.php';

 $launchPath = rtrim(realpath(dirname(__FILE__)), '/').'/webSpider.php';

 $manager = new Oara_Import_Process_Manager();
 $manager->executable = "php -f";
 $manager->root = $launchPath;
 $manager->processes = 10;
 $manager->sleep_time = 2;
 $manager->exec();
 */