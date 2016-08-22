<!DOCTYPE html>
<!-- Страница разработана генератором целевых страниц wppage для wordpress (http://wppage.ru) -->


































<?php
global $post;

/**/
$media = get_post_meta($post->ID, '_coach_media', true);
$coach_media_only = get_post_meta($post->ID, '_coach_media_only', true);
if ($coach_media_only != 'on') {
    $coach_media_only = 'off';
}

// get responder options
$wpp_media_response_type = get_post_meta($post->ID, '_wpp_media_response_type', true);
$wpp_getresponse_wid = get_post_meta($post->ID, '_wpp_getresponse_wid', true);

//-------
$wpp3_media_response_type = get_post_meta($post->ID, '_wpp3_media_response_type', true);
$wpp3_media_smartresponder_code = get_post_meta($post->ID, '_wpp3_media_smartresponder_code', true);
$wpp3_media_mailchimp_code = get_post_meta($post->ID, '_wpp3_media_mailchimp_code', true);
$wpp3_media_getresponse_code = get_post_meta($post->ID, '_wpp3_media_getresponse_code', true);
$wpp3_media_justclick_code = get_post_meta($post->ID, '_wpp3_media_justclick_code', true);
$wpp3_media_unisender_code = get_post_meta($post->ID, '_wpp3_media_unisender_code', true);

//options
$ps_background_color = get_post_meta($post->ID, '_ps_background_color', true);
$ps_background_image = get_post_meta($post->ID, '_ps_background_image', true);
$ps_background_image_repeat = get_post_meta($post->ID, '_ps_background_image_repeat', true);
$ps_background_image_attachment = get_post_meta($post->ID, '_ps_background_image_attachment', true);

$responder_button_style = (get_post_meta($post->ID, '_responder_button_style', true)) ? get_post_meta($post->ID, '_responder_button_style', true) : '1';
$coach_newsletter_name_helper = get_post_meta($post->ID, '_coach_newsletter_name_helper', true);
$coach_newsletter_email_helper = get_post_meta($post->ID, '_coach_newsletter_email_helper', true);
$responder_button_text = get_post_meta($post->ID, '_responder_button_text', true);
$coach_newsletter_description = get_post_meta($post->ID, '_coach_newsletter_description', true);

$coach_responder_tid = get_post_meta($post->ID, '_coach_responder_tid', true);
$coach_responder_uid = get_post_meta($post->ID, '_coach_responder_uid', true);
$coach_responder_did = get_post_meta($post->ID, '_coach_responder_did', true);

//
$wppage_head_code = get_post_meta($post->ID, '_wppage_head_code', true);
$wppage_body_code = get_post_meta($post->ID, '_wppage_body_code', true);
$wppage_footer_code = get_post_meta($post->ID, '_wppage_footer_code', true);


// get seo options
$title = get_post_meta($post->ID, '_wppage_seo_title', true);
$keywords = get_post_meta($post->ID, '_wppage_seo_keywords', true);
$desc = get_post_meta($post->ID, '_wppage_seo_desc', true);

$ps_border_color = get_post_meta($post->ID, '_ps_border_color', true);
$ps_border_style = get_post_meta($post->ID, '_ps_border_style', true);
$ps_border_width = get_post_meta($post->ID, '_ps_border_width', true);
$ps_content_shadow_color = get_post_meta($post->ID, '_ps_content_shadow_color', true);
$ps_content_shadow_blur = get_post_meta($post->ID, '_ps_content_shadow_blur', true);
$ps_content_background_color = get_post_meta($post->ID, '_ps_content_background_color', true);
$ps_content_background_transparent = get_post_meta($post->ID, '_ps_content_background_transparent', true);
$ps_content_color = get_post_meta($post->ID, '_ps_content_color', true);
$ps_content_width = get_post_meta($post->ID, '_ps_content_width', true) ? get_post_meta($post->ID,
    '_ps_content_width', true) : '687';

$mediabox_background_color = get_post_meta($post->ID, '_mediabox_background_color', true);
$mediabox_color = get_post_meta($post->ID, '_mediabox_color', true);
$mediabox_border_color = get_post_meta($post->ID, '_mediabox_border_color', true);
$mediabox_border_style = get_post_meta($post->ID, '_mediabox_border_style', true);
$mediabox_border_width = get_post_meta($post->ID, '_mediabox_border_width', true);
$mediabox_shadow_color = get_post_meta($post->ID, '_mediabox_shadow_color', true);
$mediabox_shadow_blur = get_post_meta($post->ID, '_mediabox_shadow_blur', true);

$wpp_media_response_type = get_post_meta($post->ID, '_wpp_media_response_type', true);
$wpp_media_smartresponder_code = get_post_meta($post->ID, '_wpp_media_smartresponder_code', true);
$wpp_media_unisender_code = get_post_meta($post->ID, '_wpp_media_unisender_code', true);
$wpp_media_mailchimp_code = get_post_meta($post->ID, '_wpp_media_mailchimp_code', true);
$wpp_media_justclick_code = get_post_meta($post->ID, '_wpp_media_justclick_code', true);
$wpp_media_getresponse_code = get_post_meta($post->ID, '_wpp_media_getresponse_code', true);

/* smartresponder options */
$wpp_smartresponder_bg_color_1 = get_post_meta($post->ID, '_wpp_smartresponder_bg_color_1', true);
$wpp_smartresponder_bg_color_2 = get_post_meta($post->ID, '_wpp_smartresponder_bg_color_2', true);
$wpp_smartresponder_border_color = get_post_meta($post->ID, '_wpp_smartresponder_border_color', true);
$wpp_smartresponder_border_width = get_post_meta($post->ID, '_wpp_smartresponder_border_width', true);
$wpp_smartresponder_border_style = get_post_meta($post->ID, '_wpp_smartresponder_border_style', true);
$wpp_smartresponder_button_style = get_post_meta($post->ID, '_wpp_smartresponder_button_style', true);
$wpp_smartresponder_button_text = get_post_meta($post->ID, '_wpp_smartresponder_button_text', true);
$wpp_smartresponder_code = get_post_meta($post->ID, '_wpp_smartresponder_code', true);
$wpp_smartresponder_tid = get_post_meta($post->ID, '_wpp_smartresponder_tid', true);
$wpp_smartresponder_uid = get_post_meta($post->ID, '_wpp_smartresponder_uid', true);
$wpp_smartresponder_did = get_post_meta($post->ID, '_wpp_smartresponder_did', true);

$wpp_smartresponder_code_3 = get_post_meta($post->ID, '_wpp_smartresponder_code_3', true);
/* */

$wpp_media_smartresponder_form_version = get_post_meta($post->ID, '_wpp_media_smartresponder_form_version', true);

$wpp_media_smartresponder_title = get_post_meta($post->ID, '_wpp_media_smartresponder_title', true);
$wpp_media_smartresponder_bg_color_1 = get_post_meta($post->ID, '_wpp_media_smartresponder_bg_color_1', true);
$wpp_media_smartresponder_bg_color_2 = get_post_meta($post->ID, '_wpp_media_smartresponder_bg_color_2', true);
$wpp_media_smartresponder_border_color = get_post_meta($post->ID, '_wpp_media_smartresponder_border_color', true);
$wpp_media_smartresponder_border_width = get_post_meta($post->ID, '_wpp_media_smartresponder_border_width', true);
$wpp_media_smartresponder_border_style = get_post_meta($post->ID, '_wpp_media_smartresponder_border_style', true);
$wpp_media_smartresponder_button_style = get_post_meta($post->ID, '_wpp_media_smartresponder_button_style', true);
$wpp_media_smartresponder_button_text = get_post_meta($post->ID, '_wpp_media_smartresponder_button_text', true);
$wpp_media_smartresponder_code = get_post_meta($post->ID, '_wpp_media_smartresponder_code', true);
$wpp_media_smartresponder_tid = get_post_meta($post->ID, '_wpp_media_smartresponder_tid', true);
$wpp_media_smartresponder_uid = get_post_meta($post->ID, '_wpp_media_smartresponder_uid', true);
$wpp_media_smartresponder_did = get_post_meta($post->ID, '_wpp_media_smartresponder_did', true);
$wpp_media_smartresponder_show_name = get_post_meta($post->ID, '_wpp_media_smartresponder_show_name', true);
$wpp_media_smartresponder_show_email = get_post_meta($post->ID, '_wpp_media_smartresponder_show_email', true);
$wpp_media_smartresponder_show_tel = get_post_meta($post->ID, '_wpp_media_smartresponder_show_tel', true);

/**/

if ($ps_border_width) {
    $ps_width = $ps_content_width - $ps_border_width * 2;
    $bonus_box_margin_left = 122 + $ps_border_width;

} else {
    $ps_width = $ps_content_width;
    $bonus_box_margin_left = 122;
}
if (($ps_width + $ps_border_width + $mediabox_border_width) < 860) {
    $mediabox_margin_left = -40 - (860 - $ps_width) / 2 - $ps_border_width - $mediabox_border_width;

} else {
    $mediabox_margin_left = -40 - $ps_border_width - $mediabox_border_width;
}

if ($ps_background_image_attachment == 'on') {
    $ps_background_image_attachment_prop = 'fixed';
} else {
    $ps_background_image_attachment_prop = 'repeat';
}
?>
<html <?php language_attributes(); ?> xmlns:og="http://ogp.me/ns#" itemscope itemtype="http://schema.org/Article">
<head>
    <meta name="generator" content="wppage <?php echo WPPAGE_VERSION; ?> | http://wppage.ru"/>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width"/>
    <?php
    $wppage_favicon = get_option('wppage_favicon');
    if(!empty($wppage_favicon)){
        $ext = pathinfo($wppage_favicon, PATHINFO_EXTENSION);
        if($ext == 'ico') echo '<link rel="shortcut icon" href="'.$wppage_favicon.'" />';
        if($ext == 'png') echo ' <link rel="icon" type="image/png" href="'.$wppage_favicon.'" />';
     } ?>

    <meta name="keywords" content="<?php echo $keywords; ?>">
    <meta name="description" content="<?php echo $desc; ?>">
    <?php wppage_meta(); ?>
    <title><?php echo $title; ?></title>

    <script type="text/javascript" src="<?php echo includes_url('/js/jquery/jquery.js') ?>"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>
    <script type="text/javascript" src="http://vkontakte.ru/js/api/share.js?11" charset="windows-1251"></script>
    <script type="text/javascript" src="http://userapi.com/js/api/openapi.js?33"></script>
    <script type="text/javascript">
        VK.init({apiId: <?php echo (get_option('vkontakte_apiId')) ? get_option('vkontakte_apiId') : '0'; ?>, onlyWidgets: true});
    </script>
    <script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
    <?php wppage_head(); ?>
<?php

    if($ps_content_background_transparent == 'transparent'){
        $ps_bg_color = 'transparent';
    }else{
        $ps_bg_color = '#'.$ps_content_background_color;
    }
 $wppage_style = "
    body {
        background-color: #".$ps_background_color."!important;
        background-image: url(".$ps_background_image.");
        background-attachment: ".$ps_background_image_attachment_prop."!important;
        background-repeat: ".$ps_background_image_repeat."!important;

    }

    #ps_content {
        width:  ".$ps_width."px;
        border-style: ".$ps_border_style.";
        border-color: #".$ps_border_color.";
        border-width: ".$ps_border_width."px;
        background-color: ".$ps_bg_color.";
        color: #".$ps_content_color.";
        box-shadow: 0 0 ".$ps_content_shadow_blur."px #".$ps_content_shadow_color.";
        -webkit-box-shadow: 0 0 ".$ps_content_shadow_blur."px #".$ps_content_shadow_color.";
        -moz-box-shadow: 0 0 ".$ps_content_shadow_blur."px #".$ps_content_shadow_color.";
    }

    .ps_bonus_box_wide {
        width: ".($ps_width + ($ps_border_width * 2))."px;
        margin: 10px ".(-20 - $ps_border_width)."px;
    }

    .ps_bonus_box {
        margin: 10px 0px 10px -".$bonus_box_margin_left."px !important;
    }

    .bonus_table_box_t {
        margin: 0 ".(-20 - $ps_border_width)."px !important;
    }

    .ps_media_box {
        border-style: ".$mediabox_border_style.";
        border-color: #".$mediabox_border_color.";
        border-width: ".$mediabox_border_width."px;
        background-color: #".$mediabox_background_color.";
        color: #".$mediabox_color.";
        margin: 0 ".$mediabox_margin_left."px;
        box-shadow: 0 0 ".$mediabox_shadow_blur."px #".$mediabox_shadow_color.";
        -moz-box-shadow: 0 0 ".$mediabox_shadow_blur."px #".$mediabox_shadow_color.";
        -webkit-box-shadow: 0 0 ".$mediabox_shadow_blur."px #".$mediabox_shadow_color.";

    }";

    if($coach_media_only == 'on' && $media == 'on'){
        $wppage_style .= "
        #ps_content {
            border-color: transparent !important;
            background: transparent !important;
        } ";
    }
    echo "<style type='text/css'>".$wppage_style."</style>"; ?>
    <script type="text/javascript">
        jQuery(function ($) {
            //----------------------- activate external payment buttons
            $('input.ps_external_make_order').on('click', function () {
                window.open($(this).attr('alt'), $(this).attr('formtarget'));
            });

            //-----------
            $('.ps_media_wrap input.wf-button').on('change', function () {
                $('.ps_media_wrap input.wf-button').addClass('ps_cbutton').addClass('ps_button_<?php echo $responder_button_style; ?>');
            });

        });
    </script>
<!-- wppage head code -->
<?php echo $wppage_head_code; ?>
<!-- / wppage head code -->
</head>
<?php $protected_body_class = post_password_required()? 'protected': ''; ?>
<body <?php body_class($protected_body_class); echo ' ' . $wppage_body_code; ?>>
<?php if(post_password_required()){ // Show this content if page is protected ?>
        <div class="wppage-protected">
            <?php echo get_the_password_form(); ?>
        </div>
<?php }else{ // ?>
<?php if (is_user_logged_in()) { ?>
    <div class="wppage-nav-bar-wrap">
        <div class="wppage-nav-bar">
            <a class="link pull-left" href="<?php echo admin_url(); ?>" title="<?php bloginfo('name'); ?>">Панель управления</a>
            <?php edit_post_link(); ?>
        </div>
    </div>
<?php } ?>
<div id="ps_page">
    <?php // Show header image
    $wppage_head_image = get_post_meta(get_the_ID(), '_wppage_head_image', true);
    if(!empty($wppage_head_image)) { ?>
        <img class="aligncenter" src="<?php echo $wppage_head_image; ?>" alt="">
    <?php } ?>
    <div id="ps_content">
    <?php if (have_posts()): while (have_posts()): the_post();
        include_once('media-box.php');
        if ($coach_media_only != 'on' && $media == 'on' || $media != 'on') { ?>
        <div class="ps_content">
            <?php
            remove_all_actions('the_content');
            remove_all_filters('the_content');
            add_filter('the_content', 'wpautop');
            add_filter('the_content', 'do_shortcode');
            the_content();
            ?>
            <div class="ps_clear"></div>
            <?php include_once('comments.php'); ?>

        </div>
    <?php } endwhile; endif; ?>
    </div>
    <?php // Show footer content
    $wppage_footer_content = get_post_meta(get_the_ID(), '_wppage_footer_content', true); ;

    if(!empty($wppage_footer_content)){ ?>
        <div class="wppage-footer-wrap" style="width: <?php echo $ps_content_width; ?>px">
            <?php
                $wppage_footer_content = apply_filters('the_content', $wppage_footer_content);
                $wppage_footer_content = do_shortcode($wppage_footer_content);
                echo $wppage_footer_content;
            ?>
        </div>
    <?php } ?>

</div>
<div style="display:none">
    <div id="order_popup" class="ps_order_content">
        <?php wp_reset_query(); ?>
        <?php if (have_posts()) : while (have_posts()) : the_post();
            $product_title = get_post_meta(get_the_ID(), '_product_title', true);
            $shop_id = get_post_meta(get_the_ID(), '_interkassa_shop_id', true);
            $price = get_post_meta(get_the_ID(), '_product_price', true);
            $currency = get_post_meta(get_the_ID(), '_product_currency', true);
            $desc = get_post_meta(get_the_ID(), '_product_desc', true);
            $payment_id = time() . (number_format(microtime(), 3) * 1000);

            $interkassa_fields_id = get_post_meta($post->ID, '_interkassa_fields_id', true);
            $interkassa_fields_id = explode(',', $interkassa_fields_id);
            $interkassa_fields = array(
                array('Ф.И.О', 'Ваше имя'),
                array('Страна', 'Ваша страна'),
                array('Город', 'Ваш город'),
                array('Адрес', 'Ваш адрес'),
                array('Индекс', 'Ваш индекс'),
                array('Телефон', 'Ваш телефон'),
                array('E-mail', 'Ваш e-mail')
            );


            ?>
            <div class="p_content">
                <h2 class="p_title"><?php echo $product_title; ?></h2>

                <div class="p_thumb"><?php the_post_thumbnail(array(150, 150), false); ?></div>
                <div class="p_info" style="text-align: center;">
                    <div>Цена: <span class="price"><?php echo $price; ?></span><span
                            class="currency"> <?php echo $currency; ?></span></div>
                    <div>Описание: <?php echo $desc; ?></div>
                </div>


                <form id="ik_form" name="payment" method="post" action="https://sci.interkassa.com/" enctype="utf-8"
                      target="_blank">
                    <input type="hidden" name="ik_co_id" value="<?php echo $shop_id; ?>"/>
                    <input type="hidden" name="ik_pm_no" value="<?php echo $payment_id; ?>"/>
                    <input type="hidden" name="ik_am" value="<?php echo $price; ?>"/>
                    <input type="hidden" name="ik_desc" value="<?php echo $product_title; ?>"/>
                    <?php if (!empty($interkassa_fields_id)) { ?>
                        <span>Заполните форму</span><br/>
                        <?php foreach ($interkassa_fields_id as $i) { ?>
                            <?php if (empty($i)) $i = 0; ?>
                            <label><?php echo $interkassa_fields[$i][0]; ?></label><input type="text"
                                                                                          name="ik_x_ik_x_baggage_<?php echo $i; ?>"
                                                                                          placeholder="<?php echo $interkassa_fields[$i][1]; ?>"
                                                                                          value=""/><br/>
                        <?php
                        }
                    }
                    ?>
                    <input type="submit" id="ik_submit" value="Оплатить">
                </form>
            </div>
        <?php endwhile; endif;
        wp_reset_query(); ?>
    </div>
</div>
<?php } // end if(post_password_required()) ?>
<?php wppage_footer(); ?>
<!-- wppage footer code -->
<?php echo $wppage_footer_code; ?>
<!-- / wppage footer code -->
<?php echo get_option('coach_analytics'); ?>
<!--
<?php echo get_num_queries(); ?> queries. <?php timer_stop(1); ?> seconds.
 -->

</body>
</html>