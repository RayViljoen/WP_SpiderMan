<?php
class Oara_Import_Process_Process {
	public $resource;
    public $pipes;
    public $max_execution_time;
    public $start_time;
 
    function __construct($executable, $root, $max_execution_time) {
        $this->max_execution_time = $max_execution_time;
        $descriptorspec    = array(
            0 => array('pipe', 'r'),
            1 => array('pipe', 'w'),
            2 => array('pipe', 'w')
        );
        $this->resource = proc_open($executable." ".$root, $descriptorspec, $this->pipes, null, null);
        $this->start_time = time();
    }
   
    // is still running?
    function isRunning() {
        $status = proc_get_status($this->resource);
        return $status["running"];
    }

    // long execution time, proccess is going to be killer
    function isOverExecuted() {
        if (($this->max_execution_time != 0) && 
        	($this->start_time + $this->max_execution_time < time())){
        	return true;
        } else {
        	return false;
        } 
    }
    //read the output
	public function read() {
	
		$retval	= '';
		if (is_resource($this->resource)) {
	
			$error = '';
			
			$stdin = $this->pipes[0];
			
			$stdout = $this->pipes[1];
			
			$stderr = $this->pipes[2];
			
			//while (! feof($stdout)) {
				$retval	.= fgets($stdout);
			//}
			
			//while (! feof($stderr)) {
				//$error .= fgets($stderr);
			//}
			
			//fclose($stdin);
			//fclose($stdout);
			//fclose($stderr);
			
			
		}
	
		if (! empty($error)) {
			return $error;
		} else {
			return $retval;	
		}
	
	}
 	//read the output
	public function close() {
		$exit_code = -1;
		if (is_resource($this->resource)) {
	
			$error = '';
			
			$stdin = $this->pipes[0];
			
			$stdout = $this->pipes[1];
			
			$stderr = $this->pipes[2];
			
			//while (! feof($stdout)) {
				//$retval	.= fgets($stdout);
			//}
			
			//while (! feof($stderr)) {
			//	$error .= fgets($stderr);
			//}
			
			fclose($stdin);
			fclose($stdout);
			fclose($stderr);
			$exit_code = proc_close($this->resource);
			
		}
		return $exit_code;
	}
}