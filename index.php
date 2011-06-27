<?php
/*
Plugin Name: Spiderman
Plugin URI: http://catn.com
Description: WordPress plugin for importing a static website to WordPress.
Version: 1.0
Author: Carlos Merino, Ray Viljoen
Author URI: http://fubra.com
*/
?>

<?php add_action('admin_menu', 'spiderman_admin_auth' ); ?>


<?php function spiderman_admin_auth(){ add_menu_page( "Spiderman", "Spiderman", "manage_options", "spiderman", "spiderman_admin" ); } ?>

<?php function spiderman_admin(){ ?>

<div id="icon-options-general" class="icon32"><br></div>
<h2>Spiderman WP Importer</h2>
<br/><br/>
<form action="" method="post">
	
	<input style="width:200px;" type="text" name="spider_site" placeholder="http://www.exmple.com"/>
	<input type="submit" name="Spider" value="Start Spiderman" />

</form>



<?php if (isset($_POST['Spider'])){
	
	$websiteUrl = $_POST['spider_site']; // TARGET URL
	
	require 'Spiderman.php';
	
}

}
?>

