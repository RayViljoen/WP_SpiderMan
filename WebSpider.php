<?php
require 'Curl/Access.php';
require 'Curl/Parameter.php';
require 'Curl/Request.php';

error_reporting(E_ALL ^ E_WARNING);
class WebSpider{

	private $_websiteMap = null;
	/**
	 *
	 * Initialise the website map
	 * @param unknown_type $websiteUrl
	 */
	public function __construct($websiteUrl){
		$this->_websiteMap = array();
		$this->recursiveAffiliateSearch($websiteUrl, 0);
	}

	/*
	 Read robots.txt file in the server, to find any disallowed files/folders
	 */
	private function check_robot_txt($url, $useragent = 'AffjetRobot') {
		$parsed = parse_url($url);
		$agents = array(preg_quote('*'));
		if($useragent){
			$agents[] = preg_quote($useragent);
		}

		$agents = implode('|', $agents);
		# location of robots.txt file
		$robotstxt = @file("http://{$parsed['host']}/robots.txt");
		if(!$robotstxt)
		return true;
			
		$rules = array();
		$ruleapplies = false;
		foreach($robotstxt as $line) {
			# skip blank lines
			if(!$line = trim($line)){
				continue;
			}
			# following rules only apply if User-agent matches $useragent or '*'
			if(preg_match('/User-agent: (.*)/i', $line, $match)) {
				$ruleapplies = preg_match("/($agents)/i", $match[1]);
			}
			if($ruleapplies && preg_match('/Disallow:(.*)/i', $line, $regs)) {
				# an empty rule implies full access - no further tests required
				if(!$regs[1]) {
					return true;
				}
				# add rules that apply to array for testing
				$rules[] = preg_quote(trim($regs[1]), '/');
			}
		}
		foreach($rules as $rule) {
			# check if page is disallowed to us
			if (isset($parsed['path']) && preg_match("/^$rule/", $parsed['path'])) {
				return false;
			}

		} # page is not disallowed return true;
		return true;
	}

	/**
	 *
	 * Read the website and build the map
	 * @param unknown_type $websiteUrl
	 * @param unknown_type $websiteId
	 * @param unknown_type $enc
	 */
	private function recursiveAffiliateSearch($websiteUrl, $websiteId, $level = 0){

		if ($this->check_robot_txt($websiteUrl)){
				
			$access = new Oara_Curl_Access($websiteUrl, $websiteId);
			if($access->_result){
				echo "Webpage added: $websiteUrl \n\n";
				$this->_websiteMap[$websiteUrl] = $level;
				$parsedUrl = parse_url($websiteUrl);

				$scapedDirectory = str_replace("/", "\/", $websiteUrl);
				$scapedDirectory = str_replace(".", "\.", $scapedDirectory);
				$scapedDirectory = str_replace("w", "\w", $scapedDirectory);
				preg_match_all("/href=\"([^\s]*.(\/|php|phtml|htm|html|shtml|asp|aspx|php|jsp|cgi))\"/", $access->_result, $matches);
				$urls = array();
				foreach ($matches[1] as  $newUrl){

					$parsedNewUrl = parse_url($newUrl);
					if (!isset($parsedNewUrl["host"])){
						$slash = "";
						if (substr($newUrl,0,1) != "/"){
							$slash ="/";
						}

						$newUrl = "http://".$parsedUrl["host"].$slash.$newUrl;

						$parsedNewUrl = parse_url($newUrl);
					}


					$compareHost = !(isset($parsedNewUrl["host"]) && isset($parsedUrl["host"]) && $parsedNewUrl["host"] !== $parsedUrl["host"]);
					if(!isset($parsedUrl["path"]) ){
						$parsedUrl["path"] = "/";
					}
					if(!isset($parsedNewUrl["path"])){
						$parsedNewUrl["path"] = "/";
					}
					$comparePath = strpos($parsedNewUrl["path"], $parsedUrl["path"]) !== false;
					if ($compareHost && $comparePath){
						if (!isset($this->_websiteMap[$newUrl])){
							$urls[] = new Oara_Curl_Request($newUrl, array());
						}
					}
				}
				try{

					$exportReport = $access->get($urls);
				} catch(Exception $e){
					echo "Problems accessing $websiteUrl Sub Pages \n\n";
					$exportReport = array();
				}

				for ($i = 0; $i < count($exportReport); $i++){
					$newWebsiteUrl = $urls[$i]->getUrl();
					if ($exportReport[$i]){
						$parsedUrl = parse_url($newWebsiteUrl);
						$newLevel = $level + 1;
						self::recursiveAffiliateSearch($newWebsiteUrl, $websiteId, $newLevel);
					} else {
						echo "Problems accessing $newWebsiteUrl \n\n";
					}
				}
			} else {
				echo "Problems accessing $websiteUrl \n\n";
			}
		} else {
			echo "Access forbidden by robot.txt $websiteUrl \n\n";
		}

	}
	/**
	 *
	 * Get the Website Map
	 */
	public function getWebsiteMap(){
		return $this->_websiteMap;
	}
	/**
	 * 
	 * Get the content for an url
	 * @param unknown_type $websiteUrl
	 */
	public function getContent($websiteUrl){
		$content = null;
		if ($this->check_robot_txt($websiteUrl)){
				
			$access = new Oara_Curl_Access($websiteUrl, 0);
			if($access->_result){
				$content = $access->_result;
			} else {
				echo "Problems accessing $websiteUrl \n\n";
			}
			$access->deleteCookie();
		} else {
			echo "Access forbidden by robot.txt $websiteUrl \n\n";
		}
		return $content;
	}

}