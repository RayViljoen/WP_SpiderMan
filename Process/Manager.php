<?php
/**
 * Class wich manage all the processes in the import.
 * @author carlos
 *
 */
class Oara_Import_Process_Manager {
	
	public $executable = "";
	public $root = "";
	private $processesRunning = 0;
	public $processes = 10;
	private $running = array();
	public $sleep_time = 2;


	/**
	 * Execute the import
	 */
	public function exec() {
		$i = 0;
		
		for(;;) {
			// Fill up the slots
			while ($i < $this->processes) {
				
				$this->running[] = new Oara_Import_Process_Process($this->executable, $this->root, 0);
				$this->processesRunning++;
				$i++;
			}

			// Check if done
			if ($this->processesRunning == 0) {
				break;
			}
			// sleep, this duration depends on your script execution time, the longer execution time, the longer sleep time
			//sleep($this->sleep_time);

			// check what is done
			foreach ($this->running as $proccess) {
				if ($proccess->isRunning()){
					$output = $proccess->read();
					echo $output;
				}else {
					echo "Done \n";
					$proccess->close();
					
					$this->processesRunning--;
				}
			}
		}
	}
	
}