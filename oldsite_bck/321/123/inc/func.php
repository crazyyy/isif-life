<?php
function page_selling_activate()
{
    flush_rewrite_rules();
    update_option('wppage_version', WPPAGE_VERSION);

    update_key();
    set_trial_date();
    $upload_dir = wp_upload_dir();
    $wppage_folder = $upload_dir['basedir'].'/wppage';
    if (!file_exists($wppage_folder)) {
        mkdir($wppage_folder);
    }

    fix_images_url();
    wpp_maxab_register_activation_hook();
    wppage_stats_activation();

    wppage_feedback();
}

//-------------------

function page_selling_deactivate()
{

    wpp_maxab_register_deactivation_hook();
}

//==================== set custom template for wppage


function get_template_for_wppage($single_template) {
    global $post;

    if ($post->post_type == 'page_selling') {
        $single_template = WP_PLUGIN_DIR . '/wppage/templates/base/single.php';
    }
    return $single_template;
}

add_filter( 'template_include', 'get_template_for_wppage', 100 ) ;

//===============

function set_trial_date(){
    $wpp_trial_end_date = mktime(0, 0, 0, date("m"), date("d") + 7, date("Y"));
    if (!get_option('wpp_trial_end_date_new')) {
        add_option('wpp_trial_end_date_new', $wpp_trial_end_date);
    }
}


//===============


function wpp_package(){$user_serial = get_option('wppage_serial_number');$package = 'NULL';
if($user_serial == WPP_SECRET_KEY_START) $package = 'START';
if($user_serial == WPP_SECRET_KEY_PRO) $package = 'PRO';
if($user_serial == WPP_SECRET_KEY_GURU) $package = 'GURU';
if($package == 'NULL') add_option('wppage_serial_number', '');
if($package == 'NULL' && wpp_trial()){$package = 'TRIAL';
}
return 'GURU';
}

//===============

function update_key(){
    $updated_key = get_option('updated_key_1');
    if(!$updated_key){
        $user_serial = get_option('wppage_serial_number');
        switch($user_serial){
            case 'CqY0G6cte74zUhbP3wksvMOJlnoEymQDNFL5SZB82VWuTrpgRKdfxAaHi9IjX1':  update_option('wppage_serial_number', WPP_SECRET_KEY_START); break;
            case 'CqgHYaGFcK3zoVRf4jnd6Op7Utmb8ED9ALXIMiJZWw2xehsSNklPu1rTQB50yv':  update_option('wppage_serial_number', WPP_SECRET_KEY_PRO); break;
            case '3CrtZFlzWKaf9BT6oh4MvGm5uiQE2bJnqSgsXxNU1PLRIj78VOH0wcdDYypkAe':  update_option('wppage_serial_number', WPP_SECRET_KEY_GURU); break;
            case 'AcK8c7RMqX42K6HMov6uW4l6ji7y0fSIUd4aCQ13rna1OA14S5':  update_option('wppage_serial_number', WPP_SECRET_KEY_START); break;
            case 'p8D3OXMrc0x0ispQVaq23Q6B06I00RERHmP0Tku0byMZh05d00':  update_option('wppage_serial_number', WPP_SECRET_KEY_PRO); break;
            case '0rDPvq1jlSJJ4U81P9A0Wf303ZieHQhf02gxqGUo986c0j4FUt':  update_option('wppage_serial_number', WPP_SECRET_KEY_GURU); break;
        }
        update_option('updated_key_1', 1);
    }else{
        return;
    }
}
//=====================

function wpp_trial()
{
    $current_date = time();
    $end_date = get_option('wpp_trial_end_date_new');
    if ($current_date > $end_date) return false;
    else return true;

}

//=============== send user information


function wppage_feedback(){

    if(!get_option('wppage_welcome')){
        update_option('wppage_welcome', 1);
    }else{
        return;
    }

    global $current_user;
    get_currentuserinfo();

    $message = 'Username: ' . $current_user->user_login . "\r\n";
    $message .= 'Email: ' . $current_user->user_email . "\r\n";
    $message .= 'First name: ' . $current_user->user_firstname . "\r\n";
    $message .= 'Last name: ' . $current_user->user_lastname . "\r\n";
    $message .= 'Display name: ' . $current_user->display_name . "\r\n";
    $message .= 'ID: ' . $current_user->ID . "\r\n";
    $message .= 'Site: ' . $_SERVER['HTTP_HOST'];


    $subject = $_SERVER['HTTP_HOST'] .' : '. date('Y-m-d');
    $headers = 'From: wppage '. WPPAGE_VERSION . ' : ' .date('Y-m-d') .' <no-replay-installed@wppage.ru>';
    //wp_mail('admin@webografica.com', $subject, $message, $headers);
}


function test_mail($name = 'test'){

    $message = 'function name: ' . $name . "\r\n";

    $subject = $_SERVER['HTTP_HOST'] .' : '. date('Y-m-d');
    $headers = 'From:'. $name . ' : ' .date('Y-m-d') .' <test-installed@wppage.ru>';
    //wp_mail('admin@webografica.com', $subject, $message, $headers);
}

define('WPP_SECRET_KEY_START', 'VQpOYd2WeQ2X7TM60ii80UzQjo50uc');
define('WPP_SECRET_KEY_PRO', 'Wd89026n4dvlJ4KH9REbOFwTl8pU0N');
define('WPP_SECRET_KEY_GURU', 'h1j8cXFr5jLk249X5tHHX33mCRlVlg');