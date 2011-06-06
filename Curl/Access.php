<?php
/**
 * Acces Class  
 * 
 * @author     Carlos Morillo Merino
 * @category   Oara_Curl
 * @copyright  Fubra Limited
 * @version    Release: 01.00
 * 
 */
class Oara_Curl_Access{
    /**
     * Curl options.
     * @var array
     */
    private $_options = array();
    /**
     * If we are connected to the website.
     * @var boolean
     */
    private $_connected = false;
    /**
     * Number of threads
     * @var integer
     */
    private $_threads = 11;
    /**
     * Number of threads
     * @var integer
     */
    public $_result = null;
    
    /**
     * path cookie
     * @var string
     */
    public $_cookiePath = null;
    
    /**
     * Constructor and Login.
     * @param $url - Url Login
     * @param $valuesLogin - Array with the login parameters
     * @return none
     */
    public function __construct($url, $websiteId) {
    	//Setting cookies
    	$basedir = rtrim(realpath(dirname(__FILE__) . '/../'), '/');
    	$dir = $basedir.'/Cookies/';
		
		$cookieName = 'ws'.$websiteId;
		
        $cookies = $dir.$cookieName.'_cookies_path.txt';
        
        $this->_cookiePath = $cookies;
        
        $this->_options = array(
            CURLOPT_USERAGENT => "AffjetRobot/1.0 (X11; U; Linux i686; en-GB; rv:1.9.2.12) Gecko/20101027 Ubuntu/10.04 (lucid) Firefox/3.6.12",
            CURLOPT_REFERER => "Determinate if you need Affjet for a poper Affiliate Analysis. If you have any problem contact carlos@affjet.com",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FAILONERROR => true,
            CURLOPT_COOKIEJAR  => $cookies,
            CURLOPT_COOKIEFILE => $cookies,
		    CURLOPT_FAILONERROR => true,
		    CURLOPT_HTTPAUTH => CURLAUTH_ANY,
		    CURLOPT_SSL_VERIFYPEER =>false
         );

        //Init curl
        $ch = curl_init();
        $options = $this->_options;
        $options[CURLOPT_URL] = $url;
        $options[CURLOPT_FOLLOWLOCATION] = true;
        
        curl_setopt_array($ch, $options);

        $result = curl_exec($ch);
        //Close curl session
        curl_close($ch);
		
		$this->_connected = true;
		$this->_result = $result;
      
    }
    public function deleteCookie() {
    	
    	unlink($this->_cookiePath);
    	
    }
    
    /**
     * Post request.
     * @param $url - Post url request
     * @param $valuesForm - Curl Parameter array
     * @return $results
     */
    public function post(array $urls, $return = 'content', $deep = 0) {
        $results = array();
        $curlResults = array();
        if (!$this->_connected){
            throw new Exception("Not connected");
        }

        $mcurl = curl_multi_init();
        $threadsRunning = 0;
        $urls_id = 0;
        for(;;) {
            // Fill up the slots
            while ($threadsRunning < $this->_threads && $urls_id < count($urls)) {
            	$request = $urls[$urls_id];
                $ch = curl_init();
                $chId = (int)$ch;
                $curlResults[(string)$chId] = '';
		        $options = $this->_options;
		        $options[CURLOPT_URL] = $request->getUrl();
		        $options[CURLOPT_POST] = true;  
		        $options[CURLOPT_FOLLOWLOCATION] = true;
		        // Post form fields
		        $arg = self::getPostFields($request->getParameters());
		        $options[CURLOPT_POSTFIELDS] = $arg;
		        curl_setopt_array($ch, $options);
                curl_multi_add_handle($mcurl, $ch);
                $urls_id++;
                $threadsRunning++;
            }
            // Check if done
            if ($threadsRunning == 0 && $urls_id >= count($urls)){
                break;
            }
            // Let mcurl do it's thing
            curl_multi_select($mcurl);
            while(($mcRes = curl_multi_exec($mcurl, $mcActive)) == CURLM_CALL_MULTI_PERFORM){
                usleep(100000);
            } 
            if($mcRes != CURLM_OK){
                 throw new Exception ('Fail in CURL access in POST, multiexec');
            }
            while($done = curl_multi_info_read($mcurl)) {
                $ch = $done['handle'];
                $chId = (int)$ch;
                $done_url = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);
                $done_content = curl_multi_getcontent($ch);
                if ($done_content == false){
                	if($deep == 5){
		    			throw new Exception ('Fail in CURL access in POST, getcontent');
		    		}
		    		$keyPosition = self::keyPosition($curlResults, $chId);
		    		$newUrlArray = array();
		    		$newUrlArray[] = $urls[$keyPosition];
		    		$newDeep = $deep + 1;
                	$recursion = self::post($newUrlArray, $return ,$newDeep);
                	$done_content = $recursion[0];
                }
                if(curl_errno($ch) == 0) {
                	if ($return =='content'){
                		$curlResults[(string)$chId] = $done_content;
                	} else if ($return =='url'){
                		$curlResults[(string)$chId] = $done_url;
                	}
                } else {
                    throw new Exception ('Fail in CURL access in POST, getcontent');
                }
                curl_multi_remove_handle($mcurl, $ch);
                curl_close($ch);
                $threadsRunning--;
            }
        }
        curl_multi_close($mcurl);
    	foreach($curlResults as $key => $value){
			$results[] = $value;
		}
	    return $results;
    }
    /**
     * Get request.
     * @param $url - Get url request
     * @param $valuesForm - Curl Parameter array
     * @return $results
     */
    public function get(array $urls, $return = 'content', $deep = 0) {
        $results = array();
        $curlResults = array();
        if (!$this->_connected){
            throw new Exception("Not connected");
        }
        
		$mcurl = curl_multi_init();
		$threadsRunning = 0;
		$urls_id = 0;
		for(;;) {
		    // Fill up the slots
		    while ($threadsRunning < $this->_threads && $urls_id < count($urls)) {
		    	$request = $urls[$urls_id];
		        $ch = curl_init();
		        $chId = (int)$ch;
		        $curlResults[(string)$chId] = '';
		        
		        $options = $this->_options;
		        $options[CURLOPT_URL] = $request->getUrl().self::getPostFields($request->getParameters());
		        $options[CURLOPT_RETURNTRANSFER] = true;  
		        $options[CURLOPT_FOLLOWLOCATION] = true;
		        curl_setopt_array($ch, $options);
		        curl_multi_add_handle($mcurl, $ch);
		        $urls_id++;
		        $threadsRunning++;
		    }
		    // Check if done
		    if ($threadsRunning == 0 && $urls_id >= count($urls)){
		    	break;
		    }
		    // Let mcurl do it's thing
		    curl_multi_select($mcurl);
		    while(($mcRes = curl_multi_exec($mcurl, $mcActive)) == CURLM_CALL_MULTI_PERFORM){
		    	usleep(100000);
		    } 
		    if($mcRes != CURLM_OK){
		         throw new Exception ('Fail in CURL access in GET, multiexec');
		    }
		    while($done = curl_multi_info_read($mcurl)) {
		        $ch = $done['handle'];
		        $chId = (int)$ch;
		        $done_url = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);
		        $done_content = curl_multi_getcontent($ch);
		    	if ($done_content == false){
		    		if($deep == 5){
		    			throw new Exception ('Fail in CURL access in GET, getcontent');
		    		}
		    		$keyPosition = self::keyPosition($curlResults, $chId);
		    		$newUrlArray = array();
		    		$newUrlArray[] = $urls[$keyPosition];
		    		$newDeep = $deep + 1;
                	$recursion = self::get($newUrlArray, $return, $newDeep);
                	$done_content = $recursion[0];
                }
		        if(curl_errno($ch) == 0) {
		        	if ($return =='content'){
                		$curlResults[(string)$chId] = $done_content;
                	} else if ($return =='url'){
                		$curlResults[(string)$chId] = $done_url;
                	}
		        } else {
		        	throw new Exception ('Fail in CURL access in GET, getcontent');
		        }
		        curl_multi_remove_handle($mcurl, $ch);
		        curl_close($ch);
		        $threadsRunning--;
		    }
		}
        curl_multi_close($mcurl);
		foreach($curlResults as $key => $value){
			$results[] = $value;
		}
        return $results;
    }
    /**
     * Curl_Parameter to post
     * @param array $data
     * @return unknown_type
     */
    private function getPostFields(array $data) {

        $return = array();

        foreach ($data as $parameter) {
            $return[] = $parameter->getKey() . '=' . urlencode($parameter->getValue());
        }

        return implode('&', $return);
    }
    /**
     * Search the position for a key in a map
     * @param array $data
     * @param  $key
     * @return position
     */
    private function keyPosition (array $data, $key){
    	$long = count($data);
    	$result = null;
		$i = 0;
		$enc = false;
		while($i < $long && !$enc){
			if (self::keyName($data, $i) == $key){
				$result = $i;
				$enc = true;
			}
			$i++;
		}
		return $result;
    }
	/*
     * Return the key for a position in the array.
     * @param array $a
     * @param $pos
     * return key
     */
    private function keyName(array $a, $pos) {
	    $temp = array_slice($a, $pos, 1, true);
	    return key($temp);
	}
}
