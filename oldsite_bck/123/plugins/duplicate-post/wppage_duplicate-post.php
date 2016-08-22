<?php

// i18n plugin domain
define('WPPAGE_DUPLICATE_POST_I18N_DOMAIN', 'wppage_duplicate-post');

// Version of the plugin
define('WPPAGE_DUPLICATE_POST_CURRENT_VERSION', '2.4.1' );

/**
 * Initialise the internationalisation domain
 */
load_plugin_textdomain(WPPAGE_DUPLICATE_POST_I18N_DOMAIN,
			'wp-content/plugins/wppage/plugins/wppage_duplicate-post/languages','wppage_duplicate-post/languages');

add_filter("plugin_action_links_".plugin_basename(__FILE__), "wppage_duplicate_post_plugin_actions", 10, 4);

function wppage_duplicate_post_plugin_actions( $actions, $plugin_file, $plugin_data, $context ) {
	array_unshift($actions, "<a href=\"".menu_page_url('wppage_duplicatepost', false)."\">".__("Settings")."</a>");
	return $actions;
}

require_once (dirname(__FILE__).'/wppage_duplicate-post-common.php');

if (is_admin()){
	require_once (dirname(__FILE__).'/wppage_duplicate-post-admin.php');
}
