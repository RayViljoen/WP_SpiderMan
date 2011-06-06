	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
					 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
					<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
					<head profile="http://gmpg.org/xfn/11">
						<title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>
						<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
						<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="<?php bloginfo('rss2_url'); ?>" />
						<link rel="alternate" type="text/xml" title="RSS .92" href="<?php bloginfo('rss_url'); ?>" />
						<link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="<?php bloginfo('atom_url'); ?>" />
						<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
						<link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url'); ?>" media="screen"></link>
						
						<?php wp_get_archives('type=monthly&format=link'); ?>
						<?php wp_head(); ?>
						
					</head><script type="text/javascript" language="javascript" src="<?php bloginfo('template_directory');?>/template.js"></script>

<body <?php body_class(); ?>>