<?php

function smartresponder_shortcode($atts)
{
    global $post;
    $wpp_smartresponder_code_3 = get_post_meta($post->ID, '_wpp_smartresponder_code_3', true);
    if ($atts) {
        $wpp_smartresponder_title = $atts[headline];
        $wpp_smartresponder_bg_color_1 = get_post_meta($post->ID, '_wpp_smartresponder_bg_color_1', true);
        $wpp_smartresponder_border_color = get_post_meta($post->ID, '_wpp_smartresponder_border_color', true);
        $wpp_smartresponder_border_width = get_post_meta($post->ID, '_wpp_smartresponder_border_width', true);
        if(!$wpp_smartresponder_border_width) $wpp_smartresponder_border_width = '0';
        $wpp_smartresponder_border_style = get_post_meta($post->ID, '_wpp_smartresponder_border_style', true);
        $wpp_smartresponder_button_style = $atts[button_style];
        $wpp_smartresponder_button_text = $atts[button_text];
        $wpp_smartresponder_tid = $atts[tid];
        $wpp_smartresponder_uid = $atts[uid];
        $wpp_smartresponder_did = $atts[did];

        $wpp_smartresponder_show_name = '1';
        $wpp_smartresponder_show_email = '1';
        $wpp_smartresponder_show_tel = '0';

    } else {

        $wpp_smartresponder_form_version = get_post_meta($post->ID, '_wpp_smartresponder_form_version', true);
        if ($wpp_smartresponder_form_version == 'new') {
            $html = '<!-- smartresponder -->';
            $html .= $wpp_smartresponder_code_3;
            $html .= '<!-- //smartresponder -->';
            return $html;
        }

        $wpp_smartresponder_title = get_post_meta($post->ID, '_wpp_smartresponder_title', true);
        $wpp_smartresponder_bg_color_1 = get_post_meta($post->ID, '_wpp_smartresponder_bg_color_1', true);
        $wpp_smartresponder_bg_color_2 = get_post_meta($post->ID, '_wpp_smartresponder_bg_color_2', true);
        $wpp_smartresponder_border_color = get_post_meta($post->ID, '_wpp_smartresponder_border_color', true);
        $wpp_smartresponder_border_width = get_post_meta($post->ID, '_wpp_smartresponder_border_width', true);
        if(!$wpp_smartresponder_border_width) $wpp_smartresponder_border_width = '0';
        $wpp_smartresponder_border_style = get_post_meta($post->ID, '_wpp_smartresponder_border_style', true);
        $wpp_smartresponder_button_style = get_post_meta($post->ID, '_wpp_smartresponder_button_style', true);
        $wpp_smartresponder_button_text = get_post_meta($post->ID, '_wpp_smartresponder_button_text', true);
        $wpp_smartresponder_tid = get_post_meta($post->ID, '_wpp_smartresponder_tid', true);
        $wpp_smartresponder_uid = get_post_meta($post->ID, '_wpp_smartresponder_uid', true);
        $wpp_smartresponder_did = get_post_meta($post->ID, '_wpp_smartresponder_did', true);
        $wpp_smartresponder_show_name = get_post_meta($post->ID, '_wpp_smartresponder_show_name', true);
        $wpp_smartresponder_show_email = get_post_meta($post->ID, '_wpp_smartresponder_show_email', true);
        $wpp_smartresponder_show_tel = get_post_meta($post->ID, '_wpp_smartresponder_show_tel', true);

    }
    $html = "<style type='text/css'>
		.ps_smartresp_box{
		background-color: #$wpp_smartresponder_bg_color_1;
		background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#$wpp_smartresponder_bg_color_1), to(#$wpp_smartresponder_bg_color_2));
		background-image: -webkit-linear-gradient(top, #$wpp_smartresponder_bg_color_1, #$wpp_smartresponder_bg_color_2);
		background-image:    -moz-linear-gradient(top, #$wpp_smartresponder_bg_color_1, #$wpp_smartresponder_bg_color_2);
		background-image:     -ms-linear-gradient(top, #$wpp_smartresponder_bg_color_1, #$wpp_smartresponder_bg_color_2);
		background-image:      -o-linear-gradient(top, #$wpp_smartresponder_bg_color_1, #$wpp_smartresponder_bg_color_2);
		border-color:#$wpp_smartresponder_border_color;
		border-style:$wpp_smartresponder_border_style;
		border-width:" . $wpp_smartresponder_border_width . "px;
		}
		.ps_smartresp_box input.field{
		border: 1px solid #$wpp_smartresponder_border_color;
		}
		</style>";

    $html .= '<div id="ps_smartresp_box" class="ps_smartresp_box">
    <p class="ps_SM_headline">' . $wpp_smartresponder_title . '</p>';
    $html .= '<!-- SmartResponder.ru subscribe form code (begin) -->
    <script language="javascript" type="text/javascript">
    function SR_IsListSelected(el)
    {
    for (var i = 0; i < el.length; i ++)
    if (el[i].selected ||
    el[i].checked)
    return i;
    return -1;
    }
    function SR_trim(f)
    {
    return f.toString().replace(/^[ ]+/, "").replace(/[ ]+$/, "");
    }
    function SR_submit(f)
    {
    f["field_email"].value = SR_trim(f["field_email"].value);
    f["field_name_first"].value = SR_trim(f["field_name_first"].value);
    if ((SR_focus = f["field_email"]) && f["field_email"].value.replace(/^[ ]+/, "").replace(/[ ]+$/, "").length < 1 || (SR_focus = f["field_name_first"]) && f["field_name_first"].value.replace(/^[ ]+/, "").replace(/[ ]+$/, "").length < 1) { alert("Укажите значения всех обязательных для заполнения полей (помечены звездочкой)"); SR_focus.focus(); return false; }
    if (!f["field_email"].value.match(/^[A-Za-z0-9][A-Za-z0-9\._-]*[A-Za-z0-9_]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]+$/)) { alert("Некорректный синтаксис email-адреса!"); f["field_email"].focus(); return false; }
    return true;
    }
    </script>
    <form name="ps_SR_form" id="sr_form" target="_blank" action="http://smartresponder.ru/subscribe.html" method="post" onSubmit="return SR_submit(this)">
    <input type=hidden name=version value="1">
    <input type=hidden name=tid value="' . $wpp_smartresponder_tid . '">
    <input type=hidden name=uid value="' . $wpp_smartresponder_uid . '">
    <input type=hidden name=charset value="windows-1251">
    <input type=hidden name=lang value="ru">
    <input type=hidden name="did[]" value="' . $wpp_smartresponder_did . '">';
    if ($wpp_smartresponder_show_name) {
        $html .= '<input class="field" type="text" name="field_name_first" value="Введите ваше имя" onblur=\'if(this.value=="") this.value="Введите ваше имя"\'  onfocus=\'if(this.value=="Введите ваше имя") this.value=""\'>';
    }
    if ($wpp_smartresponder_show_email) {
        $html .= '<input class="field" type="text" name="field_email" value="Введите ваш e-mail" onblur=\'if(this.value=="") this.value="Введите ваш e-mail"\' onfocus=\'if(this.value=="Введите ваш e-mail") this.value=""\'>';
    }
    if ($wpp_smartresponder_show_tel) {
        $html .= '<input class="field" type="text" name="field_phones" value="Введите ваш телефон" onblur=\'if(this.value=="") this.value="Введите ваш телефон"\' onfocus=\'if(this.value=="Введите ваш телефон") this.value=""\'>';
    }

    $html .= '<input class="go ps_cbutton ps_button_' . $wpp_smartresponder_button_style . '" name="SR_submitButton" type=submit value="' . $wpp_smartresponder_button_text . '">
    </form>';

    $html .= '</div>';
    return $html;
}

//------------------------------

function getresponse_shortcode($atts)
{
    global $post;
    $html = '<!-- getresponse -->';
    $html .= get_post_meta($post->ID, '_wpp_getresponse', true);
    $html .= '<!-- //getresponse -->';
    return $html;
}

//--------------------------

function wpp_mailchimp_shortcode($atts)
{
    global $post;
    $html = '<!-- mailchimp -->';
    $html .= get_post_meta($post->ID, '_wpp_mailchimp_code', true);
    $html .= '<!-- //mailchimp -->';
    return $html;
}

//----------------------

function wpp_unisender_shortcode($atts)
{
    global $post;
    $html = '<!-- unisender -->';
    $html .= '<div class="unisender_form_wrap">';
    $html .= get_post_meta($post->ID, '_wpp_unisender_code', true);
    $html .= '</div>';
    $html .= '<!-- //unisender -->';
    return $html;
}

//-------------------

function wpp_justclick_shortcode($atts)
{
    global $post;
    $html = '<!-- justclick -->';
    $html .= '<div class="justclick_form_wrap">';
    $html .= get_post_meta($post->ID, '_wpp_justclick_code', true);
    $html .= '</div>';
    $html .= '<!-- //justclick -->';
    return $html;
}

//---------------------

function socialbuttons_shortcode($atts)
{
    global $post;
    $vk_like_id = rand(1, 1000000);

    $seo_title = get_post_meta($post->ID, '_wppage_seo_title', true);
    $seo_desc = get_post_meta($post->ID, '_wppage_seo_desc', true);
    $vk_thumb_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'vk_thumb');

    $buttons = $atts['buttons'];
    $buttons = explode(',', $buttons);
    $vkontakte_apiId = get_option('vkontakte_apiId');

    $google_script = "<script type='text/javascript'>
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })(); </script>";

    $buttons_content['gplus'] = (in_array('gplus', $buttons)) ? '<div class="ps_float_box wpp_googleplus"><g:plusone
        callback="google_share"
        size="tall"></g:plusone>' . $google_script . '</div>' : '';

    $facebook_script = "<script type='text/javascript'>
    window.fbAsyncInit = function () {
        FB.init({
            status:true, // check login status
            cookie:true, // enable cookies to allow the server to access the session
            xfbml:true  // parse XFBML
        });
        FB.Event.subscribe('edge.create', function(response) {
                   share_ok();
                }
        );

    };
    // Load the SDK Asynchronously
    (function (d) {
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = '//connect.facebook.net/ru_RU/all.js';
        ref.parentNode.insertBefore(js, ref);
    }(document));

</script>";

    $buttons_content['facebook'] = '<div class="ps_float_box wpp_facebook"><div id="fb-root"></div>' . $facebook_script . '<fb:like class="fb-like" data-send="false" data-layout="box_count" data-width="96" data-show-faces="false"
        data-action="like"></fb:like>
</div>';


    $buttons_content['twitter'] = '<div class="ps_float_box wpp_twitter"><a href="https://twitter.com/share?url=' . get_permalink() . '&amp;text=' . $seo_title . '" class="twitter-share-button" data-lang="ru" data-count="vertical">Твитнуть</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></div>';

    $vk_like_id++;

    $vk_like1 = (in_array('vk_like', $buttons)) ? '<div class="ps_float_box wpp_vk_like"><!-- LIKE VKONTAKTE -->
    <iframe name="fXDadddf" frameborder="0" src="http://vkontakte.ru/widget_like.php?app=' . $vkontakte_apiId . '&amp;page=0&amp;url=' . get_permalink() . '&amp;type=vertical&amp;verb=0&amp;title=' . $seo_title . '&amp;description=' . $seo_desc . '&amp;image=' . $vk_thumb_url[0] . '" width="41" height="52" scrolling="no" id="vkwidget3"></iframe>
    <!-- end of LIKE VKONTAKTE --></div>' : '';

    $buttons_content['vk_like'] = '<div class="ps_float_box wpp_vk_like"><div id="vk_like' . $vk_like_id . '"
        class="vk_like_box"></div>
        <script type="text/javascript">
        VK.Widgets.Like("vk_like' . $vk_like_id . '", {type: "vertical"});
        </script></div>';

    $buttons_content['vk_share'] = '<div class="ps_float_box wpp_vk_share">
    <!-- SHARE VKONTAKTE -->
    <script type="text/javascript">
    <!--
    document.write(VK.Share.button({
    url: "' . get_permalink() . '",
    title: "' . $seo_title . '",
    description: "' . $seo_desc . '",
    image: "' . $vk_thumb_url[0] . '",
    noparse: true
    }));
    -->
    </script>
    <!-- end of SHARE VKONTAKTE -->
    </div>';


    $buttons_content['mailru'] = '<div class="ps_float_box wpp_mailru"><a target="_blank"
        class="mrc__plugin_uber_like_button" href="http://connect.mail.ru/share?url=' . get_permalink() . '&amp;title=' . $seo_title . '&amp;description=' . $seo_desc . '&amp;imageurl=' . $vk_thumb_url[0] . '" data-mrc-config="{\'cm\' : \'3\', \'ck\' : \'3\', \'sz\' : \'20\', \'st\' : \'2\', \'tp\' : \'mm\', \'vt\' : \'1\'}">Нравится</a>
<script src="http://cdn.connect.mail.ru/js/loader.js" type="text/javascript" charset="UTF-8"></script></div>';

    $buttons_content['odnoklasniki'] = '<div class="ps_float_box wpp_odnoklasniki"><a target="_blank" class="mrc__plugin_uber_like_button" href="http://connect.mail.ru/share?title=' . $seo_title . '&description=' . $seo_desc . '&url=' . get_permalink() . '&amp;imageurl=' . $vk_thumb_url[0] . '" data-mrc-config="{\'cm\' : \'1\', \'ck\' : \'1\', \'sz\' : \'20\', \'st\' : \'2\', \'tp\' : \'ok\', \'vt\' : \'1\'}">Нравится</a>
<script src="http://cdn.connect.mail.ru/js/loader.js" type="text/javascript" charset="UTF-8"></script></div>';


    $buttons_content['linkedin'] = '<div class="ps_float_box wpp_linkedin"><script src="//platform.linkedin.com/in.js"
        type="text/javascript"></script>
<script type="IN/Share" data-counter="top" data-onsuccess="linkedin_share_click"></script></div>';

    $html = '<div class="ps_social_buttons">';
    foreach ($buttons as $button) {
        $html .= $buttons_content[$button];
    }
    $html .= '<div style="clear:both; float: none"></div></div>';
    return $html;


}

//-----------------------

function wppage_countdown_shortcode($atts)
{

    $c_id = $atts['id'];
    $type = $atts['type'];
    $color = $atts['color'];
    $size = $atts['size'];
    $date = $atts['date'];
    $time = $atts['time'];
    $days = $atts['days'];
    $hours = $atts['hours'];
    $minutes = $atts['minutes'];
    $skin = $atts['skin'];
    $redirect = $atts['redirect'];
    $renew = $atts['renew'];
    $image = $atts['image'];

    $first_visit = "wppage_first_visit_".get_the_ID()."_c_".$c_id;

    $current_time = current_time( 'timestamp', 0 );
    $hide = false;
    $gmt_offset = get_option('gmt_offset');

    $timer_cookie = '';

    // get end time
    $countdown_time = '';
    if($type == 'fixed'){

        $countdown_time = strtotime("$date $time:00");

        if($current_time >= $countdown_time){
            if(!empty($redirect)){
                wp_redirect($redirect);
                die();
            }

            if( empty($redirect) ){
                $hide = true;
            }
        }

    }elseif($type == 'interval'){
        //$c_time = strtotime("$atts[days] $atts[hours]:$atts[minutes]:00");

        $countdown_time = strtotime("+$days days $hours hours $minutes minutes", $current_time);

        if(!isset($_COOKIE[$first_visit]) || $_COOKIE[$first_visit] == '' ){
            //setcookie($first_visit, $countdown_time);
            $timer_cookie = '$.cookies.set("'.$first_visit.'","'.$countdown_time.'");';

        }else{

            if( $current_time >= $_COOKIE[$first_visit] ){

                // if redirect enabled
                if(!empty($redirect)){
                    echo "<script type='text/javascript'> window.location = '$redirect';</script>";
                    die();
                    //wp_redirect($redirect);
                    //die();
                }
                if(!empty($renew)){
                  // setcookie($first_visit, $countdown_time);
                   $timer_cookie = '$.cookies.set("'.$first_visit.'","'.$countdown_time.'");';
                }
                if(empty($renew) && empty($redirect)){
                    $hide = true;
                }

            }else{
                $countdown_time = $_COOKIE[$first_visit];
            }
        }

    }


    // check if redirection active
    if(!empty($redirect)){

        $c_redirect = ', expiryUrl: "'.$redirect.'"';
    }else{
        $c_redirect = ', onExpiry: function(){setTimeout(function(){location.reload();}, 2000)}';
    }

    // create timer image
    if(!empty($image)){
        $c_image = '<img class="c-image" src="http://static.wppage.ru/wppage/i/timer/'.$image.'.png">';
    }else{
        $c_image = '';
    }

    $skin_html = '<div id="countdown-'.$c_id.'" class="countdown"><div
        class="digits-wrap"><div
            class="digits-group"><span
                class="digit image-{d10}"></span><span
                class="digit image-{d1}"></span></div><span
                class="image-sep"></span><div
                class="digits-group"><span
                class="digit image-{h10}"></span><span
                class="digit image-{h1}"></span></div><span
                class="image-sep"></span><div
                class="digits-group"><span
                class="digit image-{m10}"></span><span
                class="digit image-{m1}"></span></div><span
                class="image-sep"></span><div
                class="digits-group"><span
                class="digit image-{s10}"></span><span
                class="digit image-{s1}"></span></div></div></div>';

    $html = '<div id="countdown-layout-wrap" class="countdown-wrap c-skin-'.$skin.' c-color-'.$color.' c-size-'.$size.'">'.$c_image;
    $html .= $skin_html;
    $html .= '<script type="text/javascript">
        var timeUntil_'.$c_id.' = new Date('.date("Y, m-1, d, H, i, s", $countdown_time).');
        jQuery(function($){
        '.$timer_cookie.'
        $("#countdown-'.$c_id.'").countdown({until: $.countdown.UTCDate('.$gmt_offset.' ,timeUntil_'.$c_id.'), compact: true, layout: $("#countdown-'.$c_id.'").html()'.$c_redirect.'}); });
        </script>';
    $html .= '</div>';

    if($hide) $html = '';

    return $html;
}

//---------------------
function countdown_shortcode($atts)
{
    $c_id = rand(0,1000);

    $color = '1';
    $size = 'big';
    $date = $atts['date'];
    $hours = $atts['hours'];
    $minutes = $atts['minutes'];
    $skin = '1';
    $image = '';
    $c_redirect = '';

    $current_time = current_time( 'timestamp', 0 );
    $hide = false;
    $gmt_offset = get_option('gmt_offset');

    // get end time
    $c_time = strtotime("$date $hours:$minutes:00");

    if($current_time > $c_time){
            $hide = true;
    }
    // create timer image
    $c_image = '';

    $skin_html = '<div id="countdown-'.$c_id.'" class="countdown"><div
        class="digits-wrap"><div
            class="digits-group"><span
                class="digit image-{d10}"></span><span
                class="digit image-{d1}"></span></div><span
                class="image-sep"></span><div
                class="digits-group"><span
                class="digit image-{h10}"></span><span
                class="digit image-{h1}"></span></div><span
                class="image-sep"></span><div
                class="digits-group"><span
                class="digit image-{m10}"></span><span
                class="digit image-{m1}"></span></div><span
                class="image-sep"></span><div
                class="digits-group"><span
                class="digit image-{s10}"></span><span
                class="digit image-{s1}"></span></div></div></div>';

    $html = '<div id="countdown-layout-wrap" class="countdown-wrap c-skin-'.$skin.' c-color-'.$color.' c-size-'.$size.'">'.$c_image;
    $html .= $skin_html;
    $html .= '<script type="text/javascript">
        var timeUntil_'.$c_id.' = new Date('.date("Y, m-1, d, H, i, s", $c_time).');
        jQuery(function($){
        $("#countdown-'.$c_id.'").countdown({until: $.countdown.UTCDate('.$gmt_offset.' ,timeUntil_'.$c_id.'), compact: true, layout: $("#countdown-'.$c_id.'").html()'.$c_redirect.'}); });
        </script>';
    $html .= '</div>';

    if($hide) $html = '';

    return $html;
}
//--------------------

function wpp_youtube_shortcode($atts)
{
    if ($atts[src]) {
        parse_str(parse_url($atts[src], PHP_URL_QUERY), $array);

        $autoplay = ($atts['autoplay'] == 'on') ? '&autoplay=1' : '';
        $src = $array[v] ? $array[v] : $array['amp;v'];
        $width = $atts[width] ? $atts[width] : 640;
        $height = $atts[height] ? $atts[height] : 360;

        return '<iframe id="ytplayer" class="no_border" type="text/html" width="' . $width . '" height="' . $height . '" src="http://www.youtube.com/embed/' . $src . '?wmode=opaque&rel=0' . $autoplay . '" frameborder="0"></iframe>';
    } else {
        return '<p>Неправильная ссылка на видео</p>';
    }
}

//--------------------

function wpp_vimeo_shortcode($options)
{
    if ($options[src]) {
        sscanf(parse_url($options[src], PHP_URL_PATH), '/%d', $id);
        $width = $options[width] ? $options[width] : 640;
        $height = $options[height] ? $options[height] : 360;
        $autoplay = ($options[autoplay] == on) ? '?autoplay=true' : '';

        return '<iframe class="no_border" src="http://player.vimeo.com/video/' . $id . $autoplay . '" width="' . $width . '" height="' . $height . '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
    } else {
        return '<p>Неправыльная ссылка на видео</p>';
    }
}

//--------------------

function wpp_video_shortcode($options)
{
    $id = rand(0, 10000);
    $video_url = $options['video'];
    $autoplay = $options['autoplay'];
    $video_width = $options['width'];
    $video_height = $options['height'];
    $skin = $options['style'];
    $size = $options['size'];

    //if(empty($video_url)) return '<p class="center">Ошибка! Видео-файл не задан.</p>';

    if(!empty($skin)){ //
        $video_border = 'yes';
    }else{
        $video_border = 'no';
    }

    if($autoplay == 'on'){
        $autoplay = 'autoplay="autoplay"';
    }else{
        $autoplay = '';
    }

    $video_data = parse_url($video_url);


    if($video_data['host'] == 'www.youtube.com' || $video_data['host'] == 'youtube.com'){
        $source = '<source type="video/youtube" src="'.$video_url.'" />';
    }elseif($video_data['host'] == 'www.vimeo.com' || $video_data['host'] == 'vimeo.com'){
        $source = '<source type="video/vimeo" src="'.$video_url.'" />';
    }
    else{
        $source = '<source type="video/mp4" src="'.$video_url.'" />';
    }

    $js = "
    <script type='text/javascript'>
    jQuery(function($){
    $('#video-".$id."').mediaelementplayer({
			startVolume: 1,
			enableAutosize: true,
			loop: false,
			features: ['playpause','progress','current','duration','tracks','volume','fullscreen'],
			success: function (mediaElement, domObject) {
			        mediaElement.setVideoSize(".$video_width.",".$video_height.");
                // Starting timer
			}
		}
	);
	 });
	</script>";

    $video_embed = '
    <video id="video-'.$id.'" width="'.$video_width.'" height="'.$video_height.'" controls="false" preload="auto" '.$autoplay.'>
        <!-- MP4 for Safari, IE9, iPhone, iPad, Android, and Windows Phone 7 -->
        '. $source .'
        <object width="'.$video_width.'" height="'.$video_height.'" type="application/x-shockwave-flash" data="'.plugins_url("/wppage/js/mediaelement/lib/flashmediaelement.swf").'">
            <param name="movie" value="'.plugins_url("/wppage/js/mediaelement/lib/flashmediaelement.swf").'" />
            <param name="flashvars" value="controls=false&file='.$video_url.'" />
            <!-- Image as a last resort -->
        </object>
    </video>';
   // $video_embed = '<video width="'.$video_width.'" height="'.$video_height.'" controls="none" preload="auto" '.$autoplay.' src="'.$video_url.'"></video>';

    $html = '';
    $video = '';

    if( $video_border == 'yes'){
        $video .= '<div class="video_wrap video_'. $skin . '_'. $size . '"><div class="v_box size-' . $size . '">';
        $video .= $video_embed;
        $video .= '</div></div>';
    }else{
        $video .= $video_embed;
    }

    $html .= '<div class="hider-wrap">' . $video . $js . $css . '<div class="clearfix"></div><div id="ajax-'.$id.'" class="ajax-hider-content"></div></div>';
    return $html;


   /* if ($video_url['host'] == 'www.vimeo.com' || $video_url['host'] == 'vimeo.com') { // if it's vimeo

        sscanf(parse_url($video_link, PHP_URL_PATH), '/%d', $vimeo_video_id);
        $autoplay = ($autoplay == 'on') ? '?autoplay=true' : '';
        $video = '<iframe class="no_border" style="margin:0 auto; padding:0;" src="http://player.vimeo.com/video/' . $vimeo_video_id . $autoplay . '" width="' . $width . '" height="' . $height . '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

        $html  = '<div class="video_wrap video_'. $style . '_'. $size . '"><div class="v_box">';
        $html .= $video;
        $html .= '</div></div>';
        return $html;

    } elseif($video_url['host'] == 'www.youtube.com' || $video_url['host'] == 'youtube.com') { // if youtube or hosted on this site

        parse_str( parse_url( $video_link, PHP_URL_QUERY ), $my_array_of_vars );
        $youtube_id = ($my_array_of_vars['v'])? $my_array_of_vars['v']: $my_array_of_vars['amp;v'];

        if($style){

            $video = 'http://www.youtube.com/watch?v='. $youtube_id;
            $html  = '<div class="video_wrap video_'. $style . '_'. $size . '"><div class="v_box">';
           // $html .= '<iframe width="'.$width.'" height="'.$height.'" src="http://www.youtube.com/embed/'. $youtube_id.'" frameborder="0" allowfullscreen></iframe>';
            $html .= do_shortcode('[wpp_uppod video=' . $video . ' width=' . $width . ' height=' . $height . ' autoplay=' . $autoplay . ']');
            $html .= '</div></div>';
            return $html;
        }else{
            $video = 'http://www.youtube.com/watch?v='. $youtube_id;
            $html  = '<div class="video_wrap video_margin_center"><div class="v_box">';
            $html .= do_shortcode('[wpp_uppod video=' . $video . ' width=' . $width . ' height=' . $height . ' autoplay=' . $autoplay . ']');
            $html .= '</div></div>';
            return $html;
        }

    }else{
        if($style){
            $video = $video_link;
            $html  = '<div class="video_wrap video_'. $style . '_'. $size . '"><div class="v_box">';
            $html .= do_shortcode('[wpp_uppod video=' . $video . ' width=' . $width . ' height=' . $height . ' autoplay=' . $autoplay . ']');
            $html .= '</div></div>';
            return $html;
        }else{
            $video = $video_link;
            $html  = '<div class="video_wrap video_margin_center"><div class="v_box">';
            $html .= do_shortcode('[wpp_uppod video=' . $video . ' width=' . $width . ' height=' . $height . ' autoplay=' . $autoplay . ']');
            $html .= '</div></div>';
            return $html;
        }
    }*/
}

//--------------------

function wppage_google_shortcode($options)
{
    if ($options[key]) {
        return '<iframe src="http://spreadsheets.google.com/embeddedform?formkey=' . $options[key] . '" width="' . $options[width] . '" height="' . $options[height] . '" frameborder="0" marginheight="0" marginwidth="0">Загружается...</iframe>';
    } elseif($options[url]) {

        parse_str( parse_url( $options[url], PHP_URL_QUERY ), $google_form_vars );
       if(!$google_form_vars[formkey]){
           return '<iframe src="'.$options[url].'?embedded=true" width="' . $options[width] . '" height="' . $options[height] . '" frameborder="0" marginheight="0" marginwidth="0">Загружается...</iframe>';
       }elseif($google_form_vars[formkey]){
           return '<iframe src="http://spreadsheets.google.com/embeddedform?formkey=' . $google_form_vars[formkey] . '" width="' . $options[width] . '" height="' . $options[height] . '" frameborder="0" marginheight="0" marginwidth="0">Загружается...</iframe>';
       }


    }else{
        return "Ошибка при обработке формы";
    }

}

//-------------------

function product_shortcode($atts)
{
    global $post;
    $product_id = $post->ID;
    $html = '<div class="order_button_wrap"><form action="/pidtverdzhennya-platezhu.html"><input type="hidden" name="product_id" value="' . $product_id . '" /><span><input type="submit" class="order_button" value="' . $atts['title'] . '"/></span></form></div>';
    return $html;
}