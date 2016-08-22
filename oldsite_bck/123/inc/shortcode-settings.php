<?php
$package = wpp_package();
define('USER_PACKAGE', $package);

add_action('admin_footer', 'wppage_shortcode_settings_wrap');
function wppage_shortcode_settings_wrap(){
    echo '<div style="display: none" id="wppage-shortcode-settings-wrap"><div id="shortcode-settings-conent">&nbsp;</div></div>';
}

//=================


add_action( 'media_buttons', 'add_wppage_buttons', 999);

function add_wppage_buttons($editor){
    if (get_post_type() != 'page_selling') return;

    $package = wpp_package();
    $expired_class = ( $package == 'NULL' )? 'expired': '';
    $buttons = '';
    if($editor == 'content') {
        $buttons = '<a class="button wppage-mce-button mce-i-wppage-social '.$expired_class.'" button-id="social" button-editor="content" title="Социальные кнопки"></a>';
        $buttons .= '<a class="button wppage-mce-button mce-i-wppage-audio '.$expired_class.'" button-id="audio" button-editor="content" title="Аудио"></a>';
        $buttons .= '<a class="button wppage-mce-button mce-i-wppage-video '.$expired_class.'" button-id="video" button-editor="content" title="Видео"></a>';
        $buttons .= '<a class="button wppage-mce-button mce-i-wppage-docs '.$expired_class.'" button-id="docs" button-editor="content" title="Форма Google"></a>';
        $buttons .= '<a class="button wppage-mce-button mce-i-wppage-mail '.$expired_class.'" button-id="mail" button-editor="content" title="Подписки"></a>';
        $buttons .= '<a class="button wppage-mce-button mce-i-wppage-buy '.$expired_class.'" button-id="buy" button-editor="content" title="Продукты"></a>';
        $buttons .= '<a class="button wppage-mce-button mce-i-wppage-list '.$expired_class.'" button-id="list" button-editor="content" title="Списки"></a>';
        $buttons .= '<a class="button wppage-mce-button mce-i-wppage-ribbon '.$expired_class.'" button-id="ribbon" button-editor="content" title="Ленты"></a>';
        $buttons .= '<a class="button wppage-mce-button mce-i-wppage-arrow '.$expired_class.'" button-id="arrow" button-editor="content" title="Стрелки"></a>';
        $buttons .= '<a class="button wppage-mce-button mce-i-wppage-box '.$expired_class.'" button-id="box" button-editor="content" title="Боксы"></a>';
        $buttons .= '<a class="button wppage-mce-button mce-i-wppage-satisfaction '.$expired_class.'" button-id="satisfaction" button-editor="content" title="Гарантии"></a>';
        $buttons .= '<a class="button wppage-mce-button mce-i-wppage-review '.$expired_class.'" button-id="review" button-editor="content" title="Отзывы"></a>';
        $buttons .= '<a class="button wppage-mce-button mce-i-wppage-header '.$expired_class.'" button-id="header" button-editor="content" title="Заголовки"></a>';
        $buttons .= '<a class="button wppage-mce-button mce-i-wppage-timer '.$expired_class.'" button-id="timer" button-editor="content" title="Таймер"></a>';
        $buttons .= '<a class="button wppage-mce-button mce-i-wppage-divider '.$expired_class.'" button-id="divider" button-editor="content" title="Разделитель"></a>';
    }elseif($editor == 'trafficbomb_message'){
        $buttons = '';
    }
    echo $buttons;
}

//===================
add_action( 'wp_ajax_get_wppage_shortcode_settings', 'wppage_button_shortcode_settings' );
function wppage_button_shortcode_settings(){

    switch($_GET['button']){
        case 'social': wppage_mce_settings_social(); break;
        case 'audio': wppage_mce_settings_audio(); break;
        case 'video': wppage_mce_settings_video(); break;
        case 'docs': wppage_mce_settings_docs(); break;
        case 'mail': wppage_mce_settings_mail(); break;
        case 'list': wppage_mce_settings_list(); break;
        case 'buy': wppage_mce_settings_buy(); break;
        case 'ribbon': wppage_mce_settings_ribbon(); break;
        case 'arrow': wppage_mce_settings_arrow(); break;
        case 'box': wppage_mce_settings_box(); break;
        case 'satisfaction': wppage_mce_settings_satisfaction(); break;
        case 'review': wppage_mce_settings_review(); break;
        case 'header': wppage_mce_settings_header(); break;
        case 'timer': wppage_mce_settings_timer(); break;
        case 'divider': wppage_mce_settings_divider(); break;
    }
    die();
}


function wppage_mce_settings_social(){ ?>
    <div id="wppage-social-form">
        <div class="popup_submit_wrap">
            <?php if(USER_PACKAGE != 'NULL'){ ?>
                <span class="wpp_helper_box"><a
                        onclick='open_win("http://www.youtube.com/watch?v=KHg6xc4vIqs&list=PLI8Gq0WzVWvJ60avoe8rMyfoV5qZr3Atm&index=1")'>Видео урок</a></span><input
                    type="button" id="wppage-social-submit" class="button-primary wppage-shortcode-sumbit" value="Вставить социальные кнопки"
                    name="social"/>
            <?php }else{ ?>
                <p class="wpp_message"><strong>Тестовый период wppage закончился. <a target="_blank" href="http://wppage.ru/buy" >Подробнее о полной версии <span style="font-size:18px">&#8658;</span></a></strong> </p>
            <?php } ?>
        </div>
        <div class="ps_socialbuttons_form coach_box">
            <ul id="wpp_sortable_social" class="wpp_sortable block">
                <li><label class="sbutton wppage_checkbox wppage_checked"><span class="wpp_facebook_thumb"></span><input
                            type="checkbox" name="facebook" value="facebook" checked="checked"/></label></li>
                <li><label class="sbutton wppage_checkbox wppage_checked"><span class="wpp_vk_like_thumb"></span><input
                            type="checkbox" name="vk_like" value="vk_like" checked="checked"/></label></li>
                <li><label class="sbutton wppage_checkbox wppage_checked"><span class="wpp_vk_share_thumb"></span><input
                            type="checkbox" name="vk_share" value="vk_share" checked="checked"/></label></li>
                <li><label class="sbutton wppage_checkbox wppage_checked"><span class="wpp_twitter_thumb"></span><input
                            type="checkbox" name="twitter" value="twitter" checked="checked"/></label></li>
                <li><label class="sbutton wppage_checkbox wppage_checked"><span class="wpp_gplus_thumb"></span><input
                            type="checkbox" name="gplus" value="gplus" checked="checked"/></label></li>
                <li><label class="sbutton wppage_checkbox wppage_checked"><span class="wpp_linkedin_thumb"></span><input
                            type="checkbox" name="linkedin" value="linkedin" checked="checked"/></label></li>
                <li><label class="sbutton wppage_checkbox wppage_checked"><span class="wpp_mailru_thumb"></span><input
                            type="checkbox" name="mailru" value="mailru" checked="checked"/></label></li>
                <li><label class="sbutton wppage_checkbox wppage_checked"><span
                            class="wpp_odnoklasniki_thumb"></span><input type="checkbox" name="odnoklasniki"
                                                                         value="odnoklasniki"
                                                                         checked="checked"/></label></li>
            </ul>
            <br><br>
        </div>
    </div>
<?php }
function wppage_mce_settings_audio(){ ?>
    <div id="wppage-audio-form">
        <div class="popup_submit_wrap">
            <?php if(USER_PACKAGE != 'NULL'){ ?>
                <span class="wpp_helper_box"><a
                        onclick="open_win('http://www.youtube.com/watch?v=dzCvAj4T17g&list=PLI8Gq0WzVWvJ60avoe8rMyfoV5qZr3Atm&index=2')">Видео урок</a></span><input
                    type="button" id="wppage-audio-submit" class="button-primary wppage-shortcode-sumbit" value="Вставить" name="audio"/>
            <?php }else{ ?>
                <p class="wpp_message"><strong>Тестовый период wppage закончился. <a target="_blank" href="http://wppage.ru/buy" >Подробнее о полной версии <span style="font-size:18px">&#8658;</span></a></strong> </p>
            <?php } ?>

        </div>

        <div class="wpp_audio_form coach_box">
            <label for="audio-link">Ссылка</label><br>
            <input type="text" id="audio-link" name="link" class="width_100p" value=""/><br><br>
            <ul class="audio_setting">
                <li><label class="wppage_checkbox wppage_checked"><input type="radio" class="audio_color"
                                                                         name="audio_color" value="black"
                                                                         checked="checked"/><span
                            class="black_player"></span></label></li>
                <li><label class="wppage_checkbox"><input type="radio" class="audio_color" name="audio_color"
                                                          value="white"/><span class="white_player"></span></label>
                </li>
            </ul>
            <br>
            <label class="wppage_checkbox"><input type="checkbox" id="autoplay" name="autoplay" value="on"/>&nbsp;Автовоспроизведение</label><br><br><br>
        </div>
        <div class="clearfix"></div>

    </div>
<?php }
function wppage_mce_settings_video(){ ?>
    <div id="wppage-video-form">
        <div class="popup_submit_wrap">
            <?php if(USER_PACKAGE != 'NULL'){ ?>
                <span class="wpp_helper_box"><a
                        onclick="open_win('http://www.youtube.com/watch?v=HybuTJ7oqrQ&list=PLI8Gq0WzVWvJ60avoe8rMyfoV5qZr3Atm&index=3')">Видео урок</a></span><input
                    type="button" id="wppage-video-submit" class="button-primary wppage-shortcode-sumbit" value="Вставить видео" name="video"/>
            <?php }else{ ?>
                <p class="wpp_message"><strong>Тестовый период wppage закончился. <a target="_blank" href="http://wppage.ru/buy" >Подробнее о полной версии <span style="font-size:18px">&#8658;</span></a></strong> </p>
            <?php } ?>
        </div>
        <div class="wpp_video_form coach_box">
            <label for="video-link">Ссылка<br>
                <input type="text" id="video-link" name="videolink" class="width_100p" value=""/></label><br><br>
            <label for="video-width"><input type="text" id="video-width" name="width" value="640"
                                            class="width_100"/> Ширина</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label for="video-height"><input type="text" id="video-height" name="height" value="360"
                                             class="width_100"/> Высота</label><br><br>
            <label class="wppage_checkbox"><input type="checkbox" id="autoplay" name="autoplay" value="on"/>&nbsp;Автовоспроизведение</label><br><br>

            <div>
                <label class="wppage_checkbox wppage_checked"><input type="radio" name="video_border" value="no"
                                                                     checked="checked">Без рамки</label>
                <label class="wppage_checkbox"><input type="radio" name="video_border" value="yes">В рамке</label>
            </div>
            <br>

            <div class="video_border_sizes">
                <label class="wppage_radio_v video_border_480"><input type="radio" name="video_border_size"
                                                                      value="480x270"></label>
                <label class="wppage_radio_v video_border_560"><input type="radio" name="video_border_size"
                                                                      value="560x315"></label>
                <label class="wppage_radio_v video_border_640"><input type="radio" name="video_border_size"
                                                                      value="640x360"></label>
                <label class="wppage_radio_v video_border_720"><input type="radio" name="video_border_size"
                                                                      value="720x405"></label>
            </div>
            <br>

            <div class="video_styles">
                <label class="wppage_radio_v video_style video_style_1"><input type="radio"
                                                                               name="video_border_style"
                                                                               value="1"></label>
                <label class="wppage_radio_v video_style video_style_2"><input type="radio"
                                                                               name="video_border_style"
                                                                               value="2"></label>
                <label class="wppage_radio_v video_style video_style_3"><input type="radio"
                                                                               name="video_border_style"
                                                                               value="3"></label>
                <label class="wppage_radio_v video_style video_style_4"><input type="radio"
                                                                               name="video_border_style"
                                                                               value="4"></label>
                <label class="wppage_radio_v video_style video_style_5"><input type="radio"
                                                                               name="video_border_style"
                                                                               value="5"></label>
                <label class="wppage_radio_v video_style video_style_6"><input type="radio"
                                                                               name="video_border_style"
                                                                               value="6"></label>
                <label class="wppage_radio_v video_style video_style_7"><input type="radio"
                                                                               name="video_border_style"
                                                                               value="7"></label>
                <label class="wppage_radio_v video_style video_style_8"><input type="radio"
                                                                               name="video_border_style"
                                                                               value="8"></label>
                <label class="wppage_radio_v video_style video_style_9"><input type="radio"
                                                                               name="video_border_style"
                                                                               value="9"></label>
                <label class="wppage_radio_v video_style video_style_10"><input type="radio"
                                                                                name="video_border_style"
                                                                                value="10"></label>
            </div>
        </div>
    </div>
<?php }
function wppage_mce_settings_buy(){ ?>
    <div id="wppage-buy-form">
        <div class="popup_submit_wrap">
            <?php if(USER_PACKAGE != 'NULL'){ ?>
                <input type="button" id="wppage-buy-submit" class="button-primary"
                       value="Вставить кнопку заказа" name="buy"/>
            <?php }else{ ?>
                <p class="wpp_message"><strong>Тестовый период wppage закончился. <a target="_blank" href="http://wppage.ru/buy" >Подробнее о полной версии <span style="font-size:18px">&#8658;</span></a></strong> </p>
            <?php } ?>
        </div>
        <div class="ps_product_form coach_box">
            <ul class="wpp_buy_button_type">
                <li><label class="wppage_checkbox wppage_checked"><input type="radio" name="type" class="type"
                                                                         value="external" checked="checked"/>Своя ссылка</label>
                </li>
                <li><label class="wppage_checkbox"><input type="radio" name="type" class="type" value="interkasa"/>Интеркасса</label>
                </li>
            </ul>
            <div class="wppage-product-link-options-box">
                <label>Ссылка<br>
                    <input type="text" name="external_url" id="external_url" value="" class="width_100p"/></label>
                <ul class="wppage-product-link-options">
                    <li><label class="wppage_checkbox wppage_checked"><input type="radio" name="link-type"
                                                                             class="link-type" value="_self"
                                                                             checked="checked">Открывать в текущей вкладке</label>
                    </li>
                    <li><label class="wppage_checkbox"><input type="radio" name="link-type" class="link-type"
                                                              value="_blank">Открывать на новой вкладке</label></li>
                </ul>
            </div>
            <ul class="wpp_buttons_sizes">
                <li><label class="wppage_checkbox  wppage_checked"><input type="radio" name="wpp_button_size"
                                                                          value="big" checked="checked">Большая</label>
                </li>
                <li><label class="wppage_checkbox"><input type="radio" name="wpp_button_size"
                                                          value="medium">Средняя</label></li>
                <li><label class="wppage_checkbox"><input type="radio" name="wpp_button_size"
                                                          value="small">Маленькая</label></li>
            </ul>
            <div class="buttons_style">
                <label class="p_cbutton ps_p_button_1 wppage_checked"><input type="radio" name="button_style" value="1"
                                                                             checked="checked"/></label>
                <label class="p_cbutton ps_p_button_2"><input type="radio" name="button_style" value="2"/></label>
                <label class="p_cbutton ps_p_button_3"><input type="radio" name="button_style" value="3"/></label>
                <label class="p_cbutton ps_p_button_4"><input type="radio" name="button_style" value="4"/></label>
                <label class="p_cbutton ps_p_button_5"><input type="radio" name="button_style" value="5"/></label>
                <label class="p_cbutton ps_p_button_6"><input type="radio" name="button_style" value="6"/></label>
                <label class="p_cbutton ps_p_button_7"><input type="radio" name="button_style" value="7"/></label>
                <label class="p_cbutton ps_p_button_8"><input type="radio" name="button_style" value="8"/></label>
                <label class="p_cbutton ps_p_button_9"><input type="radio" name="button_style" value="9"/></label>
                <label class="p_cbutton ps_p_button_10"><input type="radio" name="button_style" value="10"/></label>
                <label class="p_cbutton ps_p_button_11"><input type="radio" name="button_style" value="11"/></label>
                <label class="p_cbutton ps_p_button_12"><input type="radio" name="button_style" value="12"/></label>
                <label class="p_cbutton ps_p_button_13"><input type="radio" name="button_style" value="13"/></label>
                <label class="p_cbutton ps_p_button_14"><input type="radio" name="button_style" value="14"/></label>
                <label class="p_cbutton ps_p_button_15"><input type="radio" name="button_style" value="15"/></label>
                <label class="p_cbutton ps_p_button_16"><input type="radio" name="button_style" value="16"/></label>
                <label class="p_cbutton ps_p_button_17"><input type="radio" name="button_style" value="17"/></label>
                <label class="p_cbutton ps_p_button_18"><input type="radio" name="button_style" value="18"/></label>
                <label class="p_cbutton ps_p_button_19"><input type="radio" name="button_style" value="19"/></label>
                <label class="p_cbutton ps_p_button_20"><input type="radio" name="button_style" value="20"/></label>
                <label class="p_cbutton ps_p_button_21"><input type="radio" name="button_style" value="21"/></label>
                <label class="p_cbutton ps_p_button_22"><input type="radio" name="button_style" value="22"/></label>
                <label class="p_cbutton ps_p_button_23"><input type="radio" name="button_style" value="23"/></label>
                <label class="p_cbutton ps_p_button_24"><input type="radio" name="button_style" value="24"/></label>
                <label class="p_cbutton ps_p_button_25"><input type="radio" name="button_style" value="25"/></label>
                <label class="p_cbutton ps_p_button_26"><input type="radio" name="button_style" value="26"/></label>
                <label class="p_cbutton ps_p_button_27"><input type="radio" name="button_style" value="27"/></label>
                <label class="p_cbutton ps_p_button_28"><input type="radio" name="button_style" value="28"/></label>
                <label class="p_cbutton ps_p_button_29"><input type="radio" name="button_style" value="29"/></label>
                <label class="p_cbutton ps_p_button_30"><input type="radio" name="button_style" value="30"/></label>
                <label class="p_cbutton ps_p_button_31"><input type="radio" name="button_style" value="31"/></label>
                <label class="p_cbutton ps_p_button_32"><input type="radio" name="button_style" value="32"/></label>
                <label class="p_cbutton ps_p_button_33"><input type="radio" name="button_style" value="33"/></label>
                <label class="p_cbutton ps_p_button_34"><input type="radio" name="button_style" value="34"/></label>
                <label class="p_cbutton ps_p_button_35"><input type="radio" name="button_style" value="35"/></label>
                <label class="p_cbutton ps_p_button_36"><input type="radio" name="button_style" value="36"/></label>
                <label class="p_cbutton ps_p_button_37"><input type="radio" name="button_style" value="37"/></label>
                <label class="p_cbutton ps_p_button_38"><input type="radio" name="button_style" value="38"/></label>
                <label class="p_cbutton ps_p_button_39"><input type="radio" name="button_style" value="39"/></label>
                <label class="p_cbutton ps_p_button_40"><input type="radio" name="button_style" value="40"/></label>
                <label class="p_cbutton ps_p_button_41"><input type="radio" name="button_style" value="41"/></label>
                <label class="p_cbutton ps_p_button_42"><input type="radio" name="button_style" value="42"/></label>
                <label class="p_cbutton ps_p_button_43"><input type="radio" name="button_style" value="43"/></label>
                <label class="p_cbutton ps_p_button_44"><input type="radio" name="button_style" value="44"/></label>
                <label class="p_cbutton ps_p_button_45"><input type="radio" name="button_style" value="45"/></label>
                <label class="p_cbutton ps_p_button_46"><input type="radio" name="button_style" value="46"/></label>
                <label class="p_cbutton ps_p_button_47"><input type="radio" name="button_style" value="47"/></label>
                <label class="p_cbutton ps_p_button_48"><input type="radio" name="button_style" value="48"/></label>
                <label class="p_cbutton ps_p_button_49"><input type="radio" name="button_style" value="49"/></label>
                <label class="p_cbutton ps_p_button_50"><input type="radio" name="button_style" value="50"/></label>
                <label class="p_cbutton ps_p_button_51"><input type="radio" name="button_style" value="51"/></label>
                <label class="p_cbutton ps_p_button_52"><input type="radio" name="button_style" value="52"/></label>
                <label class="p_cbutton ps_p_button_53"><input type="radio" name="button_style" value="53"/></label>
                <label class="p_cbutton ps_p_button_54"><input type="radio" name="button_style" value="54"/></label>
                <label class="p_cbutton ps_p_button_55"><input type="radio" name="button_style" value="55"/></label>
                <label class="p_cbutton ps_p_button_56"><input type="radio" name="button_style" value="56"/></label>
                <label class="p_cbutton ps_p_button_57"><input type="radio" name="button_style" value="57"/></label>
                <label class="p_cbutton ps_p_button_58"><input type="radio" name="button_style" value="58"/></label>
                <label class="p_cbutton ps_p_button_59"><input type="radio" name="button_style" value="59"/></label>
                <label class="p_cbutton ps_p_button_60"><input type="radio" name="button_style" value="60"/></label>
                <label class="p_cbutton ps_p_button_61"><input type="radio" name="button_style" value="61"/></label>
                <label class="p_cbutton ps_p_button_62"><input type="radio" name="button_style" value="62"/></label>
                <label class="p_cbutton ps_p_button_63"><input type="radio" name="button_style" value="63"/></label>
                <label class="p_cbutton ps_p_button_64"><input type="radio" name="button_style" value="64"/></label>
                <label class="p_cbutton ps_p_button_65"><input type="radio" name="button_style" value="65"/></label>
                <label class="p_cbutton ps_p_button_66"><input type="radio" name="button_style" value="66"/></label>
                <label class="p_cbutton ps_p_button_67"><input type="radio" name="button_style" value="67"/></label>
                <label class="p_cbutton ps_p_button_68"><input type="radio" name="button_style" value="68"/></label>
                <label class="p_cbutton ps_p_button_69"><input type="radio" name="button_style" value="69"/></label>
                <label class="p_cbutton ps_p_button_70"><input type="radio" name="button_style" value="70"/></label>
                <label class="p_cbutton ps_p_button_71"><input type="radio" name="button_style" value="71"/></label>
                <label class="p_cbutton ps_p_button_72"><input type="radio" name="button_style" value="72"/></label>
                <label class="p_cbutton ps_p_button_73"><input type="radio" name="button_style" value="73"/></label>
                <label class="p_cbutton ps_p_button_74"><input type="radio" name="button_style" value="74"/></label>
                <label class="p_cbutton ps_p_button_75"><input type="radio" name="button_style" value="75"/></label>
                <label class="p_cbutton ps_p_button_76"><input type="radio" name="button_style" value="76"/></label>
                <label class="p_cbutton ps_p_button_77"><input type="radio" name="button_style" value="77"/></label>
            </div>
        </div>
    </div>
<?php }
function wppage_mce_settings_docs(){ ?>
    <div id="wppage-docs-form">
        <div class="popup_submit_wrap">
            <?php if(USER_PACKAGE != 'NULL'){ ?>
                <span class="wpp_helper_box"><a
                        onclick="open_win('http://www.youtube.com/watch?v=-XCJhRmLz2A&list=PLI8Gq0WzVWvJ60avoe8rMyfoV5qZr3Atm&index=4')">Видео урок</a></span><input
                    type="button" id="wppage-docs-submit" class="button-primary" value="Вставить форму" name="submit"/>
            <?php }else{ ?>
                <p class="wpp_message"><strong>Тестовый период wppage закончился. <a target="_blank" href="http://wppage.ru/buy" >Подробнее о полной версии <span style="font-size:18px">&#8658;</span></a></strong> </p>
            <?php } ?>
        </div>

        <div class="coach_form coach_box">
            <label for="googleform-key">URL Адрес<br>
                <input type="text" id="googleform-key" name="key" class="width_100p" value=""/></label><br><br>
            <label for="googleform-height"><input type="text" id="googleform-height" name="height" value="500"
                                                  style="width:100px"/> Высота </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label for="googleform-width"><input type="text" id="googleform-width" name="width" value="600"
                                                 style="width:100px"/> Ширина </label><br><br>
        </div>
        <div style="display:none" id="temp-form-code"></div>
    </div>
<?php }
function wppage_mce_settings_mail(){ ?>
    <div id="wppage-main-form">
        <div class="popup_submit_wrap">
            <?php if(USER_PACKAGE != 'NULL'){ ?>
                <span class="wpp_helper_box"><a
                        onclick="open_win('http://www.youtube.com/watch?v=546KJehwzzw&list=PLI8Gq0WzVWvJ60avoe8rMyfoV5qZr3Atm&index=5')">Видео урок</a></span><input
                    type="button" id="wppage-mail-submit" class="button-primary" value="Вставить" name="submit"/>
            <?php }else{ ?>
                <p class="wpp_message"><strong>Тестовый период wppage закончился. <a target="_blank" href="http://wppage.ru/buy" >Подробнее о полной версии <span style="font-size:18px">&#8658;</span></a></strong> </p>
            <?php } ?>
        </div>
        <div class="ps_subscription_form coach_box">
            <ul>
                <li>
                    <label class="wpp_subsc_thumb subsc_getresponse">
                        <input type="radio" name="wpp_subscription" value="getresponse"/>
                    </label>
                </li>
                <li>
                    <label class="wpp_subsc_thumb subsc_mailchimp">
                        <input type="radio" name="wpp_subscription" value="mailchimp"/>
                    </label>
                </li>
                <li>
                    <label class="wpp_subsc_thumb subsc_justclick">
                        <input type="radio" name="wpp_subscription" value="justclick"/>
                    </label>
                </li>
                <li>
                    <label class="wpp_subsc_thumb subsc_unisender">
                        <input type="radio" name="wpp_subscription" value="unisender"/>
                    </label>
                </li>
                <li>
                    <label class="wpp_subsc_thumb subsc_smartresponder">
                        <input type="radio" name="wpp_subscription" value="smartresponder"/>
                    </label>
                </li>
            </ul>
        </div>
    </div>
<?php }
function wppage_mce_settings_list(){ ?>
    <div id="wppage-list-form" class="">
        <div class="popup_submit_wrap">
            <?php if(USER_PACKAGE != 'NULL'){ ?>
                <span class="wpp_helper_box"><a
                        onclick="open_win('http://www.youtube.com/watch?v=vEPf5_ltmnQ&list=PLI8Gq0WzVWvJ60avoe8rMyfoV5qZr3Atm&index=7')">Видео урок</a></span><input
                    type="button" id="wppage-list-submit" class="button-primary bullets_submit" value="Вставить" name="submit"/>
            <?php }else{ ?>
                <p class="wpp_message"><strong>Тестовый период wppage закончился. <a target="_blank" href="http://wppage.ru/buy" >Подробнее о полной версии <span style="font-size:18px">&#8658;</span></a></strong> </p>
            <?php } ?>

        </div>
        <div class="ps_bullets_form coach_box">
            <div>
                <span>Маленькие (16px)</span>
                <br>
                <label class="ps_bullet ps_bullet_1 wppage_checked"><input type="radio" name="bullet_style" value="1" checked="checked"/></label>
                <label class="ps_bullet ps_bullet_2"><input type="radio" name="bullet_style" value="2"/></label>
                <label class="ps_bullet ps_bullet_3"><input type="radio" name="bullet_style" value="3"/></label>
                <label class="ps_bullet ps_bullet_4"><input type="radio" name="bullet_style" value="4"/></label>
                <label class="ps_bullet ps_bullet_5"><input type="radio" name="bullet_style" value="5"/></label>
                <label class="ps_bullet ps_bullet_6"><input type="radio" name="bullet_style" value="6"/></label>
                <label class="ps_bullet ps_bullet_7"><input type="radio" name="bullet_style" value="7"/></label>
                <label class="ps_bullet ps_bullet_8"><input type="radio" name="bullet_style" value="8"/></label>
                <label class="ps_bullet ps_bullet_9"><input type="radio" name="bullet_style" value="9"/></label>
                <label class="ps_bullet ps_bullet_10"><input type="radio" name="bullet_style" value="10"/></label>
                <label class="ps_bullet ps_bullet_11"><input type="radio" name="bullet_style" value="11"/></label>
                <label class="ps_bullet ps_bullet_12"><input type="radio" name="bullet_style" value="12"/></label>
                <label class="ps_bullet ps_bullet_13"><input type="radio" name="bullet_style" value="13"/></label>
                <label class="ps_bullet ps_bullet_14"><input type="radio" name="bullet_style" value="14"/></label>
                <label class="ps_bullet ps_bullet_15"><input type="radio" name="bullet_style" value="15"/></label>
                <label class="ps_bullet ps_bullet_16"><input type="radio" name="bullet_style" value="16"/></label>
                <label class="ps_bullet ps_bullet_17"><input type="radio" name="bullet_style" value="17"/></label>
                <label class="ps_bullet ps_bullet_18"><input type="radio" name="bullet_style" value="18"/></label>
                <label class="ps_bullet ps_bullet_23"><input type="radio" name="bullet_style" value="23"/></label>
                <label class="ps_bullet ps_bullet_25"><input type="radio" name="bullet_style" value="25"/></label>
                <label class="ps_bullet ps_bullet_26"><input type="radio" name="bullet_style" value="26"/></label>
                <label class="ps_bullet ps_bullet_27"><input type="radio" name="bullet_style" value="27"/></label>
                <label class="ps_bullet ps_bullet_28"><input type="radio" name="bullet_style" value="28"/></label>
                <label class="ps_bullet ps_bullet_29"><input type="radio" name="bullet_style" value="29"/></label>
                <label class="ps_bullet ps_bullet_30"><input type="radio" name="bullet_style" value="30"/></label>
                <label class="ps_bullet ps_bullet_31"><input type="radio" name="bullet_style" value="31"/></label>
                <label class="ps_bullet ps_bullet_32"><input type="radio" name="bullet_style" value="32"/></label>
                <label class="ps_bullet ps_bullet_33"><input type="radio" name="bullet_style" value="33"/></label>
                <br><br>
                <span>Средние (24px)</span>
                <br>
                <label class="ps_bullet ps_bullet_24_1"><input type="radio" name="bullet_style"
                                                               value="24_1 middle_bullets"/></label>
                <label class="ps_bullet ps_bullet_24_2"><input type="radio" name="bullet_style"
                                                               value="24_2 middle_bullets"/></label>
                <label class="ps_bullet ps_bullet_24_3"><input type="radio" name="bullet_style"
                                                               value="24_3 middle_bullets"/></label>
                <label class="ps_bullet ps_bullet_24_4"><input type="radio" name="bullet_style"
                                                               value="24_4 middle_bullets"/></label>
                <label class="ps_bullet ps_bullet_24_5"><input type="radio" name="bullet_style"
                                                               value="24_5 middle_bullets"/></label>
                <label class="ps_bullet ps_bullet_24_6"><input type="radio" name="bullet_style"
                                                               value="24_6 middle_bullets"/></label>
                <label class="ps_bullet ps_bullet_24_7"><input type="radio" name="bullet_style"
                                                               value="24_7 middle_bullets"/></label>
                <label class="ps_bullet ps_bullet_24_8"><input type="radio" name="bullet_style"
                                                               value="24_8 middle_bullets"/></label>
                <label class="ps_bullet ps_bullet_24_9"><input type="radio" name="bullet_style"
                                                               value="24_9 middle_bullets"/></label>
                <label class="ps_bullet ps_bullet_24_10"><input type="radio" name="bullet_style"
                                                                value="24_10 middle_bullets"/></label>
                <label class="ps_bullet ps_bullet_24_11"><input type="radio" name="bullet_style"
                                                                value="24_11 middle_bullets"/></label>
                <label class="ps_bullet ps_bullet_24_12"><input type="radio" name="bullet_style"
                                                                value="24_12 middle_bullets"/></label>
                <label class="ps_bullet ps_bullet_24_13"><input type="radio" name="bullet_style"
                                                                value="24_13 middle_bullets"/></label>
                <label class="ps_bullet ps_bullet_24_14"><input type="radio" name="bullet_style"
                                                                value="24_14 middle_bullets"/></label>
                <label class="ps_bullet ps_bullet_24_15"><input type="radio" name="bullet_style"
                                                                value="24_15 middle_bullets"/></label>
                <label class="ps_bullet ps_bullet_24_16"><input type="radio" name="bullet_style"
                                                                value="24_16 middle_bullets"/></label>
                <br><br>
                <span>Большие (32px)</span>
                <br>
                <label class="ps_bullet ps_bullet_big_1 big_bullet"><input type="radio" name="bullet_style"
                                                                           value="big_1 big_bullets"/></label>
                <label class="ps_bullet ps_bullet_big_2 big_bullet"><input type="radio" name="bullet_style"
                                                                           value="big_2 big_bullets"/></label>
                <label class="ps_bullet ps_bullet_big_3 big_bullet"><input type="radio" name="bullet_style"
                                                                           value="big_3 big_bullets"/></label>
                <label class="ps_bullet ps_bullet_big_4 big_bullet"><input type="radio" name="bullet_style"
                                                                           value="big_4 big_bullets"/></label>
                <label class="ps_bullet ps_bullet_big_5 big_bullet"><input type="radio" name="bullet_style"
                                                                           value="big_5 big_bullets"/></label>
                <label class="ps_bullet ps_bullet_big_6 big_bullet"><input type="radio" name="bullet_style"
                                                                           value="big_6 big_bullets"/></label>
                <label class="ps_bullet ps_bullet_big_7 big_bullet"><input type="radio" name="bullet_style"
                                                                           value="big_7 big_bullets"/></label>
                <label class="ps_bullet ps_bullet_big_8 big_bullet"><input type="radio" name="bullet_style"
                                                                           value="big_8 big_bullets"/></label>
                <label class="ps_bullet ps_bullet_big_9 big_bullet"><input type="radio" name="bullet_style"
                                                                           value="big_9 big_bullets"/></label>
                <label class="ps_bullet ps_bullet_big_10 big_bullet"><input type="radio" name="bullet_style"
                                                                            value="big_10 big_bullets"/></label>
                <label class="ps_bullet ps_bullet_big_11 big_bullet"><input type="radio" name="bullet_style"
                                                                            value="big_11 big_bullets"/></label>
                <label class="ps_bullet ps_bullet_big_12 big_bullet"><input type="radio" name="bullet_style"
                                                                            value="big_12 big_bullets"/></label>
                <label class="ps_bullet ps_bullet_big_13 big_bullet"><input type="radio" name="bullet_style"
                                                                            value="big_13 big_bullets"/></label>
                <label class="ps_bullet ps_bullet_big_14 big_bullet"><input type="radio" name="bullet_style"
                                                                            value="big_14 big_bullets"/></label>
                <label class="ps_bullet ps_bullet_big_15 big_bullet"><input type="radio" name="bullet_style"
                                                                            value="big_15 big_bullets"/></label>
                <label class="ps_bullet ps_bullet_big_16 big_bullet"><input type="radio" name="bullet_style"
                                                                            value="big_16 big_bullets"/></label>
                <a class="nice-button" href="http://service.grafikator.ru/signup"
                   target="_blank">Новый сервис Grafikator.ru сделает ваши страницы еще красивее!</a>
            </div>
        </div>
    </div>
<?php }
function wppage_mce_settings_ribbon(){ ?>
    <div id="wppage-ribbon-form">
        <div class="popup_submit_wrap">
            <?php if(USER_PACKAGE != 'NULL'){ ?>
                <span class="wpp_helper_box"><a
                        onclick="open_win('http://www.youtube.com/watch?v=_eEixBWq_6U&list=PLI8Gq0WzVWvJ60avoe8rMyfoV5qZr3Atm&index=8')">Видео урок</a></span><input
                    type="button" id="wppage-ribbon-submit" class="button-primary bonus_submit" value="Вставить" name="submit"/>
            <?php }else{ ?>
                <p class="wpp_message"><strong>Тестовый период wppage закончился. <a target="_blank" href="http://wppage.ru/buy" >Подробнее о полной версии <span style="font-size:18px">&#8658;</span></a></strong> </p>
            <?php } ?>

        </div>
        <div class="ps_bonus_form coach_box"><br>

            <div>
                <label class="ps_bonus ps_bonus_1 wppage_checked"><input type="radio" name="bonus_style" checked="checked" value="1"/></label>
                <label class="ps_bonus ps_bonus_2"><input type="radio" name="bonus_style" value="2"/></label>
                <label class="ps_bonus ps_bonus_3"><input type="radio" name="bonus_style" value="3"/></label>
                <label class="ps_bonus ps_bonus_4"><input type="radio" name="bonus_style" value="4"/></label>
                <label class="ps_bonus ps_bonus_5"><input type="radio" name="bonus_style" value="5"/></label>
                <label class="ps_bonus ps_bonus_6"><input type="radio" name="bonus_style" value="6"/></label>
                <label class="ps_bonus ps_bonus_7"><input type="radio" name="bonus_style" value="7"/></label>
                <label class="ps_bonus ps_bonus_8"><input type="radio" name="bonus_style" value="8"/></label>
                <label class="ps_bonus ps_bonus_9"><input type="radio" name="bonus_style" value="9"/></label>
                <label class="ps_bonus ps_bonus_10"><input type="radio" name="bonus_style" value="10"/></label>
                <label class="ps_bonus ps_bonus_11"><input type="radio" name="bonus_style" value="11"/></label>
                <label class="ps_bonus ps_bonus_12"><input type="radio" name="bonus_style" value="12"/></label>
                <label class="ps_bonus ps_bonus_13"><input type="radio" name="bonus_style" value="13"/></label>
                <label class="ps_bonus ps_bonus_14"><input type="radio" name="bonus_style" value="14"/></label>
                <label class="ps_bonus ps_bonus_15"><input type="radio" name="bonus_style" value="15"/></label>
                <label class="ps_bonus ps_bonus_16"><input type="radio" name="bonus_style" value="16"/></label>
                <label class="ps_bonus ps_bonus_17"><input type="radio" name="bonus_style" value="17"/></label>
                <label class="ps_bonus ps_bonus_18"><input type="radio" name="bonus_style" value="18"/></label>
                <label class="ps_bonus ps_bonus_19"><input type="radio" name="bonus_style" value="19"/></label>
                <label class="ps_bonus ps_bonus_20"><input type="radio" name="bonus_style" value="20"/></label>
                <label class="ps_bonus ps_bonus_21"><input type="radio" name="bonus_style" value="21"/></label>
                <label class="ps_bonus ps_bonus_22"><input type="radio" name="bonus_style" value="22"/></label>
                <label class="ps_bonus ps_bonus_23"><input type="radio" name="bonus_style" value="23"/></label>
            </div>
            <div class="clearfix"></div>
            <a class="nice-button" href="http://service.grafikator.ru/signup"
               target="_blank">Новый сервис Grafikator.ru сделает ваши страницы еще красивее!</a>
        </div>
    </div>
<?php }
function wppage_mce_settings_arrow(){ ?>
    <div id="wppage-arrow-form">
        <div class="popup_submit_wrap">
            <?php if (USER_PACKAGE != 'NULL') { ?>
                <span class="wpp_helper_box"><a
                        onclick="open_win('http://www.youtube.com/watch?v=Umic0RCOK1A&list=PLI8Gq0WzVWvJ60avoe8rMyfoV5qZr3Atm&index=9')">Видео урок</a></span>
                <input
                    type="button" id="wppage-arrow-submit" class="button-primary arrows_submit" value="Вставить"
                    name="submit"/>
            <?php } else { ?>
                <p class="wpp_message"><strong>Тестовый период wppage закончился. <a target="_blank"
                                                                                     href="http://wppage.ru/buy">Подробнее о полной версии
                            <span style="font-size:18px">&#8658;</span></a></strong></p>
            <?php } ?>

        </div>
        <div class="ps_arrows_form coach_box"><br>

            <div>
                <label class="ps_arrows ps_arrows_1"><input type="radio" name="arrow" value="1"/></label>
                <label class="ps_arrows ps_arrows_2"><input type="radio" name="arrow" value="2"/></label>
                <label class="ps_arrows ps_arrows_3"><input type="radio" name="arrow" value="3"/></label>
                <label class="ps_arrows ps_arrows_4"><input type="radio" name="arrow" value="4"/></label>
                <label class="ps_arrows ps_arrows_5"><input type="radio" name="arrow" value="5"/></label>
                <label class="ps_arrows ps_arrows_6"><input type="radio" name="arrow" value="6"/></label>
                <label class="ps_arrows ps_arrows_7"><input type="radio" name="arrow" value="7"/></label>
                <label class="ps_arrows ps_arrows_8"><input type="radio" name="arrow" value="8"/></label>
                <label class="ps_arrows ps_arrows_9"><input type="radio" name="arrow" value="9"/></label>
                <label class="ps_arrows ps_arrows_10"><input type="radio" name="arrow" value="10"/></label>
                <label class="ps_arrows ps_arrows_11"><input type="radio" name="arrow" value="11"/></label>
                <label class="ps_arrows ps_arrows_12"><input type="radio" name="arrow" value="12"/></label>
                <label class="ps_arrows ps_arrows_13"><input type="radio" name="arrow" value="13"/></label>
                <label class="ps_arrows ps_arrows_14"><input type="radio" name="arrow" value="14"/></label>
                <label class="ps_arrows ps_arrows_15"><input type="radio" name="arrow" value="15"/></label>
                <label class="ps_arrows ps_arrows_16"><input type="radio" name="arrow" value="16"/></label>
                <label class="ps_arrows ps_arrows_17"><input type="radio" name="arrow" value="17"/></label>
                <label class="ps_arrows ps_arrows_18"><input type="radio" name="arrow" value="18"/></label>
                <label class="ps_arrows ps_arrows_19"><input type="radio" name="arrow" value="19"/></label>
                <label class="ps_arrows ps_arrows_20"><input type="radio" name="arrow" value="20"/></label>
                <label class="ps_arrows ps_arrows_21"><input type="radio" name="arrow" value="21"/></label>
                <label class="ps_arrows ps_arrows_22"><input type="radio" name="arrow" value="22"/></label>
                <label class="ps_arrows ps_arrows_23"><input type="radio" name="arrow" value="23"/></label>
                <label class="ps_arrows ps_arrows_24"><input type="radio" name="arrow" value="24"/></label>
                <label class="ps_arrows ps_arrows_25"><input type="radio" name="arrow" value="25"/></label>
                <label class="ps_arrows ps_arrows_26"><input type="radio" name="arrow" value="26"/></label>
                <label class="ps_arrows ps_arrows_27"><input type="radio" name="arrow" value="27"/></label>
                <label class="ps_arrows ps_arrows_28"><input type="radio" name="arrow" value="28"/></label>
                <label class="ps_arrows ps_arrows_29"><input type="radio" name="arrow" value="29"/></label>
                <label class="ps_arrows ps_arrows_30"><input type="radio" name="arrow" value="30"/></label>
                <label class="ps_arrows ps_arrows_31"><input type="radio" name="arrow" class="gif"
                                                             value="31"/></label>
                <label class="ps_arrows ps_arrows_32"><input type="radio" name="arrow" class="gif"
                                                             value="32"/></label>
                <label class="ps_arrows ps_arrows_33"><input type="radio" name="arrow" class="gif"
                                                             value="33"/></label>
                <label class="ps_arrows ps_arrows_34"><input type="radio" name="arrow" value="34"/></label>
                <label class="ps_arrows ps_arrows_35"><input type="radio" name="arrow" value="35"/></label>
                <label class="ps_arrows ps_arrows_36"><input type="radio" name="arrow" value="36"/></label>
                <label class="ps_arrows ps_arrows_37"><input type="radio" name="arrow" value="37"/></label>
                <label class="ps_arrows ps_arrows_38"><input type="radio" name="arrow" value="38"/></label>
                <label class="ps_arrows ps_arrows_39"><input type="radio" name="arrow" value="39"/></label>
                <label class="ps_arrows ps_arrows_40"><input type="radio" name="arrow" value="40"/></label>
                <label class="ps_arrows ps_arrows_41"><input type="radio" name="arrow" value="41"/></label>
                <label class="ps_arrows ps_arrows_42"><input type="radio" name="arrow" value="42"/></label>
                <label class="ps_arrows ps_arrows_43"><input type="radio" name="arrow" value="43"/></label>
                <label class="ps_arrows ps_arrows_44"><input type="radio" name="arrow" value="44"/></label>
                <label class="ps_arrows ps_arrows_45"><input type="radio" name="arrow" value="45"/></label>
                <label class="ps_arrows ps_arrows_46"><input type="radio" name="arrow" value="46"/></label>
                <label class="ps_arrows ps_arrows_47"><input type="radio" name="arrow" value="47"/></label>
                <label class="ps_arrows ps_arrows_48"><input type="radio" name="arrow" value="48"/></label>
                <label class="ps_arrows ps_arrows_49"><input type="radio" name="arrow" value="49"/></label>
                <label class="ps_arrows ps_arrows_50"><input type="radio" name="arrow" value="50"/></label>
                <label class="ps_arrows ps_arrows_51"><input type="radio" name="arrow" value="51"/></label>
                <label class="ps_arrows ps_arrows_52"><input type="radio" name="arrow" value="52"/></label>
                <label class="ps_arrows ps_arrows_53"><input type="radio" name="arrow" value="53"/></label>
                <label class="ps_arrows ps_arrows_54"><input type="radio" name="arrow" value="54"/></label>
                <label class="ps_arrows ps_arrows_55"><input type="radio" name="arrow" value="55"/></label>
                <label class="ps_arrows ps_arrows_56"><input type="radio" name="arrow" value="56"/></label>
                <label class="ps_arrows ps_arrows_57"><input type="radio" name="arrow" value="57"/></label>
                <label class="ps_arrows ps_arrows_58"><input type="radio" name="arrow" value="58"/></label>
                <label class="ps_arrows ps_arrows_59"><input type="radio" name="arrow" value="59"/></label>
                <label class="ps_arrows ps_arrows_60"><input type="radio" name="arrow" value="60"/></label>
                <label class="ps_arrows ps_arrows_61"><input type="radio" name="arrow" value="61"/></label>
                <label class="ps_arrows ps_arrows_62"><input type="radio" name="arrow" value="62"/></label>
                <label class="ps_arrows ps_arrows_63"><input type="radio" name="arrow" value="63"/></label>
                <label class="ps_arrows ps_arrows_64"><input type="radio" name="arrow" value="64"/></label>
                <label class="ps_arrows ps_arrows_65"><input type="radio" name="arrow" value="65"/></label>
            </div>
            <div class="clearfix"></div>
            <a class="nice-button" href="http://service.grafikator.ru/signup"
               target="_blank">Новый сервис Grafikator.ru сделает ваши страницы еще красивее!</a>
        </div>

    </div>
<?php }
function wppage_mce_settings_box(){ ?>
    <div id="wppage-box-form" class="">
        <div class="popup_submit_wrap">
            <?php if(USER_PACKAGE != 'NULL'){ ?>
                <span class="wpp_helper_box"><a
                        onclick="open_win('http://www.youtube.com/watch?v=Y_7snOfYato&list=PLI8Gq0WzVWvJ60avoe8rMyfoV5qZr3Atm&index=10')">Видео урок</a></span><input
                    type="button" id="wppage-box-submit" class="button-primary textbox_submit" value="Вставить" name="submit"/>
            <?php }else{ ?>
                <p class="wpp_message"><strong>Тестовый период wppage закончился. <a target="_blank" href="http://wppage.ru/buy" >Подробнее о полной версии <span style="font-size:18px">&#8658;</span></a></strong> </p>
            <?php } ?>

        </div>
        <div class="ps_text_box_form coach_box"><br>

            <div>
                <label class="ps_text_box wppage_checkbox ps_text_box_1"><input type="radio" name="text_box_style"
                                                                                value="1"/></label>
                <label class="ps_text_box wppage_checkbox ps_text_box_1_1"><input type="radio" name="text_box_style"
                                                                                  value="1_1"/></label>
                <label class="ps_text_box wppage_checkbox ps_text_box_2"><input type="radio" name="text_box_style"
                                                                                value="2"/></label>
                <label class="ps_text_box wppage_checkbox ps_text_box_2_1"><input type="radio" name="text_box_style"
                                                                                  value="2_1"/></label>
                <label class="ps_text_box wppage_checkbox ps_text_box_3"><input type="radio" name="text_box_style"
                                                                                value="3"/></label>
                <label class="ps_text_box wppage_checkbox ps_text_box_3_1"><input type="radio" name="text_box_style"
                                                                                  value="3_1"/></label>
                <label class="ps_text_box wppage_checkbox ps_text_box_4"><input type="radio" name="text_box_style"
                                                                                value="4"/></label>
                <label class="ps_text_box wppage_checkbox ps_text_box_4_1"><input type="radio" name="text_box_style"
                                                                                  value="4_1"/></label>
                <label class="ps_text_box wppage_checkbox ps_text_box_5"><input type="radio" name="text_box_style"
                                                                                value="5"/></label>
                <label class="ps_text_box wppage_checkbox ps_text_box_5_1"><input type="radio" name="text_box_style"
                                                                                  value="5_1"/></label>
                <label class="ps_text_box wppage_checkbox ps_text_box_6"><input type="radio" name="text_box_style"
                                                                                value="6"/></label>
            </div>
            <div class="clearfix"></div>
            <a class="nice-button" href="http://service.grafikator.ru/signup"
               target="_blank">Новый сервис Grafikator.ru сделает ваши страницы еще красивее!</a>
        </div>
    </div>
<?php }
function wppage_mce_settings_satisfaction(){ ?>
    <div id="wppage-satisfaction-form">
        <div class="popup_submit_wrap"><span class="wpp_helper_box"><a onclick="open_win('http://www.youtube.com/watch?v=r2m4_ifhKSY&list=PLI8Gq0WzVWvJ60avoe8rMyfoV5qZr3Atm&index=11\')">Видео урок</a></span><input type="button" id="wppage-satisfaction-submit" class="button-primary" value="Вставить" name="submit" /></div>
        <div class="ps_satisfaction_form coach_box">
            <div>
                <label class="ps_satisfaction ps_satisfaction_1 wppage_checked"><input type="radio" name="satisfaction" value="1" checked="checked" /></label>
                <label class="ps_satisfaction ps_satisfaction_2"><input type="radio" name="satisfaction" value="2" /></label>
                <label class="ps_satisfaction ps_satisfaction_3"><input type="radio" name="satisfaction" value="3" /></label>
                <label class="ps_satisfaction ps_satisfaction_4"><input type="radio" name="satisfaction" value="4" /></label>
                <label class="ps_satisfaction ps_satisfaction_5"><input type="radio" name="satisfaction" value="5" /></label>
                <label class="ps_satisfaction ps_satisfaction_6"><input type="radio" name="satisfaction" value="6" /></label>
                <label class="ps_satisfaction ps_satisfaction_7"><input type="radio" name="satisfaction" value="7" /></label>
                <label class="ps_satisfaction ps_satisfaction_8"><input type="radio" name="satisfaction" value="8" /></label>
                <label class="ps_satisfaction ps_satisfaction_9"><input type="radio" name="satisfaction" value="9" /></label>
                <label class="ps_satisfaction ps_satisfaction_10"><input type="radio" name="satisfaction" value="10" /></label>
                <label class="ps_satisfaction ps_satisfaction_11"><input type="radio" name="satisfaction" value="11" /></label>
                <label class="ps_satisfaction ps_satisfaction_12"><input type="radio" name="satisfaction" value="12" /></label>
                <label class="ps_satisfaction ps_satisfaction_13"><input type="radio" name="satisfaction" value="13" /></label>
                <label class="ps_satisfaction ps_satisfaction_14"><input type="radio" name="satisfaction" value="14" /></label>
                <label class="ps_satisfaction ps_satisfaction_15"><input type="radio" name="satisfaction" value="15" /></label>
                <label class="ps_satisfaction ps_satisfaction_16"><input type="radio" name="satisfaction" value="16" /></label>
                <label class="ps_satisfaction ps_satisfaction_17"><input type="radio" name="satisfaction" value="17" /></label>
                <label class="ps_satisfaction ps_satisfaction_18"><input type="radio" name="satisfaction" value="18" /></label>
                <label class="ps_satisfaction ps_satisfaction_19"><input type="radio" name="satisfaction" value="19" /></label>
                <label class="ps_satisfaction ps_satisfaction_20"><input type="radio" name="satisfaction" value="20" /></label>
                <label class="ps_satisfaction ps_satisfaction_21"><input type="radio" name="satisfaction" value="21" /></label>
                <label class="ps_satisfaction ps_satisfaction_22"><input type="radio" name="satisfaction" value="22" /></label>
                <label class="ps_satisfaction ps_satisfaction_23"><input type="radio" name="satisfaction" value="23" /></label>
                <label class="ps_satisfaction ps_satisfaction_24"><input type="radio" name="satisfaction" value="24" /></label>
                <label class="ps_satisfaction ps_satisfaction_25"><input type="radio" name="satisfaction" value="25" /></label>
                <label class="ps_satisfaction ps_satisfaction_26"><input type="radio" name="satisfaction" value="26" /></label>
                <label class="ps_satisfaction ps_satisfaction_27"><input type="radio" name="satisfaction" value="27" /></label>
                <label class="ps_satisfaction ps_satisfaction_28"><input type="radio" name="satisfaction" value="28" /></label>
                <label class="ps_satisfaction ps_satisfaction_29"><input type="radio" name="satisfaction" value="29" /></label>
                <label class="ps_satisfaction ps_satisfaction_30"><input type="radio" name="satisfaction" value="30" /></label>
                <label class="ps_satisfaction ps_satisfaction_31"><input type="radio" name="satisfaction" value="31" /></label>
                <label class="ps_satisfaction ps_satisfaction_32"><input type="radio" name="satisfaction" value="32" /></label>
                <label class="ps_satisfaction ps_satisfaction_33"><input type="radio" name="satisfaction" value="33" /></label>
                <label class="ps_satisfaction ps_satisfaction_34"><input type="radio" name="satisfaction" value="34" /></label>
                <label class="ps_satisfaction ps_satisfaction_35"><input type="radio" name="satisfaction" value="35" /></label>
                <a class="nice-button" href="http://service.grafikator.ru/signup" target="_blank">Новый сервис Grafikator.ru сделает ваши страницы еще красивее!</a>
            </div>
        </div>
    </div>

<?php }
function wppage_mce_settings_review(){ ?>
    <div id="wppage-review-form">
        <div class="popup_submit_wrap">
            <?php if(USER_PACKAGE != 'NULL'){ ?>
                <span class="wpp_helper_box"><a
                        onclick="open_win('http://www.youtube.com/watch?v=YNJDDMk2cwA&list=PLI8Gq0WzVWvJ60avoe8rMyfoV5qZr3Atm&index=12')">Видео урок</a></span><input
                    type="button" id="wppage-review-submit" class="button-primary" value="Вставить" name="submit"/>
            <?php }else{ ?>
                <p class="wpp_message"><strong>Тестовый период wppage закончился. <a target="_blank" href="http://wppage.ru/buy" >Подробнее о полной версии <span style="font-size:18px">&#8658;</span></a></strong> </p>
            <?php } ?>
        </div>
        <div class="ps_review_form coach_box">
            <div>
                <label class="ps_review_box wppage_checkbox ps_review_1"><input type="radio" name="review_style"
                                                                                value="1"/></label>
                <label class="ps_review_box wppage_checkbox ps_review_2"><input type="radio" name="review_style"
                                                                                value="2"/></label>
                <label class="ps_review_box wppage_checkbox ps_review_3"><input type="radio" name="review_style"
                                                                                value="3"/></label>
                <label class="ps_review_box wppage_checkbox ps_review_4"><input type="radio" name="review_style"
                                                                                value="4"/></label>
                <label class="ps_review_box wppage_checkbox ps_review_5"><input type="radio" name="review_style"
                                                                                value="5"/></label>
                <label class="ps_review_box wppage_checkbox ps_review_6"><input type="radio" name="review_style"
                                                                                value="6"/></label>
                <label class="ps_review_box wppage_checkbox ps_review_7"><input type="radio" name="review_style"
                                                                                value="7"/></label>
                <label class="ps_review_box wppage_checkbox ps_review_8"><input type="radio" name="review_style"
                                                                                value="8"/></label>
                <label class="ps_review_box wppage_checkbox ps_review_9"><input type="radio" name="review_style"
                                                                                value="9"/></label>
                <label class="ps_review_box wppage_checkbox ps_review_10"><input type="radio" name="review_style"
                                                                                 value="10"/></label>
                <a class="nice-button" href="http://service.grafikator.ru/signup"
                   target="_blank">Новый сервис Grafikator.ru сделает ваши страницы еще красивее!</a>
            </div>
        </div>
    </div>
<?php }
function wppage_mce_settings_header(){ ?>
    <div id="wppage-header-form">
        <div class="popup_submit_wrap">
            <?php if(USER_PACKAGE != 'NULL'){ ?>
                <span class="wpp_helper_box"><a
                        onclick="open_win('http://www.youtube.com/watch?v=zIzUMUOJzug&list=PLI8Gq0WzVWvJ60avoe8rMyfoV5qZr3Atm&index=13')">Видео урок</a></span><input
                    type="button" id="wppage-header-submit" class="button-primary" value="Вставить" name="submit"/>
            <?php }else{ ?>
                <p class="wpp_message"><strong>Тестовый период wppage закончился. <a target="_blank" href="http://wppage.ru/buy" >Подробнее о полной версии <span style="font-size:18px">&#8658;</span></a></strong> </p>
            <?php } ?>

        </div>

        <div class="wpp_header_form coach_box">
            <div>
                <label class="wpp_header wpp_header_1 wppage_checked"><input type="radio" name="header" value="1" checked="checked"/></label>
                <label class="wpp_header wpp_header_2"><input type="radio" name="header" value="2"/></label>
                <label class="wpp_header wpp_header_3"><input type="radio" name="header" value="3"/></label>
                <label class="wpp_header wpp_header_4"><input type="radio" name="header" value="4"/></label>
                <label class="wpp_header wpp_header_5"><input type="radio" name="header" value="5"/></label>
                <label class="wpp_header wpp_header_6"><input type="radio" name="header" value="6"/></label>
                <label class="wpp_header wpp_header_7"><input type="radio" name="header" value="7"/></label>
                <label class="wpp_header wpp_header_8"><input type="radio" name="header" value="8"/></label>
                <label class="wpp_header wpp_header_9"><input type="radio" name="header" value="9"/></label>
                <label class="wpp_header wpp_header_10"><input type="radio" name="header" value="10"/></label>
                <label class="wpp_header wpp_header_11"><input type="radio" name="header" value="11"/></label>
                <label class="wpp_header wpp_header_12"><input type="radio" name="header" value="12"/></label>
                <label class="wpp_header wpp_header_13"><input type="radio" name="header" value="13"/></label>
                <label class="wpp_header wpp_header_14"><input type="radio" name="header" value="14"/></label>
                <label class="wpp_header wpp_header_15"><input type="radio" name="header" value="15"/></label>
                <label class="wpp_header wpp_header_16"><input type="radio" name="header" value="16"/></label>
                <label class="wpp_header wpp_header_17"><input type="radio" name="header" value="17"/></label>
                <label class="wpp_header wpp_header_18"><input type="radio" name="header" value="18"/></label>
                <label class="wpp_header wpp_header_19"><input type="radio" name="header" value="19"/></label>
                <label class="wpp_header wpp_header_20"><input type="radio" name="header" value="20"/></label>
                <label class="wpp_header wpp_header_21"><input type="radio" name="header" value="21"/></label>
                <label class="wpp_header wpp_header_22"><input type="radio" name="header" value="22"/></label>
                <label class="wpp_header wpp_header_23"><input type="radio" name="header" value="23"/></label>
                <label class="wpp_header wpp_header_24"><input type="radio" name="header" value="24"/></label>
                <a class="nice-button" href="http://service.grafikator.ru/signup"
                   target="_blank">Новый сервис Grafikator.ru сделает ваши страницы еще красивее!</a>
            </div>
        </div>
    </div>
<?php }
function wppage_mce_settings_timer(){ ?>
    <div id="wppage-timer-form">

        <div class="popup_submit_wrap">
            <?php if(USER_PACKAGE != 'NULL'){ ?>
                <span class="wpp_helper_box"><a
                        onclick="open_win('http://www.youtube.com/watch?v=u0eBt5cj7m0&list=PLI8Gq0WzVWvJ60avoe8rMyfoV5qZr3Atm&index=14')">Видео урок</a></span><input
                    type="button" id="wppage-timer-submit" class="button-primary" value="Вставить таймер" name="submit"
                    />
            <?php }else{ ?>
                <p class="wpp_message"><strong>Тестовый период wppage закончился. <a target="_blank" href="http://wppage.ru/buy" >Подробнее о полной версии <span style="font-size:18px">&#8658;</span></a></strong> </p>
            <?php } ?>
        </div>
        <div class="countdown-settings coach_form coach_box countdown_box">
            <div class="wppage_inner_tabs c-type-tabs">
                <div class="c-tabs wppage_innter_tab_nav">
                    <label class="wppage_checkbox wppage_checked"><input type="radio" name="c-type" value="fixed"
                                                                         checked="checked"
                                                                         tab="count-down-tabs-1">Фиксированая дата</label>
                    <label class="wppage_checkbox"><input type="radio" name="c-type" value="interval"
                                                          tab="count-down-tabs-2">Отсчет от первого захода</label>
                </div>
                <div id="count-down-tabs-1" class="inner_tab_content tab">
                    <div class="">
                        <label><input type="text" name="c-date" id="c-date" value="" size="10"/> Дата</label> &nbsp;&nbsp;&nbsp;&nbsp;
                        <label><input type="text" id="c-time" name="c-time" value="" size="5"/> Время </label>
                    </div>
                    <br>

                    <div class="wppage-row">
                        <p>По истечению времени:</p>

                        <p><label class="wppage_checkbox wppage_checked"><input type="radio" value="hide"
                                                                                name="c-redirect-fixed"
                                                                                checked="checked">Не отображать</label>
                        </p>

                        <p><label class="wppage_checkbox"><input type="radio" value="redirect"
                                                                 name="c-redirect-fixed">Переадресация на страницу</label>
                            <input type="text" name="c-redirect-fixed-url" placeholder="http://wppage.ru" value=""
                                   size="30"></p><br>
                    </div>
                </div>
                <div id="count-down-tabs-2" class="inner_tab_content tab">
                    <div class="c-date-time-wrap">
                        <label><input type="text" id="c-days" name="c-days" value="" size="4"/> Дней</label> &nbsp;&nbsp;&nbsp;&nbsp;
                        <label><input type="text" id="c-hours" name="c-hours" value=""
                                      size="2"/> Часов</label> &nbsp;&nbsp;&nbsp;&nbsp;
                        <label><input type="text" id="c-minutes" name="c-minutes" value="" size="2"/> Минут</label>
                    </div>
                    <br>

                    <div class="wppage-row">
                        <p>По истечению времени:</p>

                        <p><label class="wppage_checkbox wppage_checked"><input type="radio" value="hide"
                                                                                name="c-redirect-interval"
                                                                                checked="checked">Не отображать</label>
                        </p>

                        <p><label class="wppage_checkbox"><input type="radio" value="renew"
                                                                 name="c-redirect-interval">Включить таймер заново</label>
                        </p>

                        <p><label class="wppage_checkbox"><input type="radio" value="redirect"
                                                                 name="c-redirect-interval">Переадресация на страницу</label> &nbsp;&nbsp;
                            <input type="text" name="c-redirect-interval-url" placeholder="http://wppage.ru"
                                   value=""
                                   size="30"></p><br>
                    </div>
                </div>
            </div>
            <br>

            <div class="c-tabs wppage_inner_tabs">
                <ul class="wppage_innter_tab_nav">
                    <li><a href="#c-design-tabs-1">Дизайн</a></li>
                    <li><a href="#c-design-tabs-2">Изображение</a></li>
                </ul>
                <div id="c-design-tabs-1" class="inner_tab_content">
                    <div class="">
                        <label class="wppage_checkbox wppage_checked"><input type="radio" name="c-size" value="big"
                                                                             checked="checked">Большой</label> &nbsp;&nbsp;
                        <label class="wppage_checkbox"><input type="radio" name="c-size"
                                                              value="medium">Средний</label> &nbsp;&nbsp;
                        <label class="wppage_checkbox"><input type="radio" name="c-size"
                                                              value="small">Маленький</label>
                    </div>
                    <div class="c-colors">
                        <label class="c-color ps_timer_image color-1 wpp_radio wppage_checked"><input type="radio"
                                                                                                      name="c-color"
                                                                                                      value="1"
                                                                                                      checked="checked"></label>
                        <label class="c-color ps_timer_image color-2 wpp_radio"><input type="radio" name="c-color"
                                                                                       value="2"></label>
                        <label class="c-color ps_timer_image color-3 wpp_radio"><input type="radio" name="c-color"
                                                                                       value="3"></label>
                        <label class="c-color ps_timer_image color-4 wpp_radio"><input type="radio" name="c-color"
                                                                                       value="4"></label>
                        <label class="c-color ps_timer_image color-5 wpp_radio"><input type="radio" name="c-color"
                                                                                       value="5"></label>
                        <label class="c-color ps_timer_image color-6 wpp_radio"><input type="radio" name="c-color"
                                                                                       value="6"></label>
                        <label class="c-color ps_timer_image color-7 wpp_radio"><input type="radio" name="c-color"
                                                                                       value="7"></label>
                        <label class="c-color ps_timer_image color-8 wpp_radio"><input type="radio" name="c-color"
                                                                                       value="8"></label>
                    </div>
                    <div class="c-design color-1" current-color="color-1">
                        <label class="ps_timer_image c-design-1 wppage_checked"><input type="radio" name="c-design"
                                                                                       value="1"
                                                                                       checked="checked"></label>
                        <label class="ps_timer_image c-design-2"><input type="radio" name="c-design"
                                                                        value="2"></label>
                        <label class="ps_timer_image c-design-3"><input type="radio" name="c-design"
                                                                        value="3"></label>
                        <label class="ps_timer_image c-design-4"><input type="radio" name="c-design"
                                                                        value="4"></label>
                        <label class="ps_timer_image c-design-5"><input type="radio" name="c-design"
                                                                        value="5"></label>
                        <label class="ps_timer_image c-design-6"><input type="radio" name="c-design"
                                                                        value="6"></label>
                        <label class="ps_timer_image c-design-7"><input type="radio" name="c-design"
                                                                        value="7"></label>
                        <label class="ps_timer_image c-design-8"><input type="radio" name="c-design"
                                                                        value="8"></label>
                    </div>
                </div>
                <div id="c-design-tabs-2" class="inner_tab_content">
                    <p><label class="wppage_checkbox"><input type="checkbox" name="c-use-image"
                                                             value="">Использовать изображение</label></p>

                    <div class="c-design">
                        <label class="ps_timer_image timer_image_1 wppage_checked"><input type="radio"
                                                                                          name="c-image"
                                                                                          value="1"
                                                                                          checked="checked"></label>
                        <label class="ps_timer_image timer_image_2"><input type="radio" name="c-image"
                                                                           value="2"></label>
                        <label class="ps_timer_image timer_image_3"><input type="radio" name="c-image"
                                                                           value="3"></label>
                        <label class="ps_timer_image timer_image_4"><input type="radio" name="c-image"
                                                                           value="4"></label>
                        <label class="ps_timer_image timer_image_5"><input type="radio" name="c-image"
                                                                           value="5"></label>
                        <label class="ps_timer_image timer_image_6"><input type="radio" name="c-image"
                                                                           value="6"></label>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            jQuery(function($){
                $.datepicker.setDefaults(jQuery.datepicker.regional['ru']);
                $("#c-date").datepicker({ dateFormat: "yy-mm-dd" });
                $('#c-time').timepicker({
                    showMinutes: true,
                    showPeriod: false,
                    showPeriodLabels: false,
                    hourText: 'Часы',
                    minuteText: 'Минуты'
                });
                $('#c-days').timepicker({

                    hours: {
                        starts: 0,
                        ends: 30
                    },
                    rows: 5,
                    showMinutes: false,
                    showPeriod: false,
                    showPeriodLabels: false,
                    hourText: 'Дней'
                });
                $('#c-hours').timepicker({
                    showMinutes: false,
                    showPeriod: false,
                    showPeriodLabels: false,
                    hourText: 'Часов'
                });
                $('#c-minutes').timepicker({
                    showMinutes: true,
                    showHours: false,
                    showPeriod: false,
                    showPeriodLabels: false,
                    minuteText: 'Минут'
                });


                $('input[name=c-type]').live('change', function () {
                    jQuery('.c-type-tabs .tab').css('display', 'none');
                    jQuery('#' + jQuery(this).attr('tab')).css('display', 'block');
                });

                $('input[name=c-color]').live('change', function () {
                    jQuery('.c-design').removeClass(jQuery('.c-design').attr('current-color')).addClass('color-' + jQuery(this).val());
                    jQuery('.c-design').attr('current-color', 'color-' + jQuery(this).val());
                });

                $('.c-tabs').tabs();
            });
        </script>

    </div>
<?php }
function wppage_mce_settings_divider(){ ?>
    <div id="wppage-divider-form">
        <div class="popup_submit_wrap">
            <?php if(USER_PACKAGE != 'NULL'){ ?>
                <span class="wpp_helper_box"><a
                        onclick="open_win('http://www.youtube.com/watch?v=sYEuensDTNY&list=PLI8Gq0WzVWvJ60avoe8rMyfoV5qZr3Atm&index=15')">Видео урок</a></span><input
                    type="button" id="wppage-divider-submit" class="button-primary" value="Вставить" name="submit"/>
            <?php }else{ ?>
                <p class="wpp_message"><strong>Тестовый период wppage закончился. <a target="_blank" href="http://wppage.ru/buy" >Подробнее о полной версии <span style="font-size:18px">&#8658;</span></a></strong> </p>
            <?php } ?>
        </div>

        <div class="ps_divider_form coach_box"><br>

            <div class="divide_width_slider_box">
                <input type="text" name="ps_divide_width" id="ps_divide_width" value="65"/> - <input type="text"
                                                                                                     name="ps_divide_width_2"
                                                                                                     id="ps_divide_width_2"><br><br>

                <div id="ps_divide_slider"></div>
                <br>
                <table class="table_preview">
                    <tr>
                        <td class="wpp_divide_first" style="width: 65%">текст<br>&nbsp;<br>&nbsp;<br>&nbsp;</td>
                        <td class="wpp_divide_second" style="width: 35%">текст<br>&nbsp;<br>&nbsp;</td>
                    </tr>
                </table>
                <script type="text/javascript">
                    jQuery(function ($) {
                        $("#ps_divide_slider").slider({
                            value: 65,
                            min: 5,
                            max: 95,
                            step: 5,
                            slide: function (event, ui) {
                                $("#ps_divide_width").val(ui.value);
                                $("#ps_divide_width_2").val(100 - ui.value);
                                $(".wpp_divide_first").css({"width": ui.value + "%"});
                                $(".wpp_divide_second").css({"width": 100 - ui.value + "%"});
                            },
                            create: function (event, ui) {
                                $("#ps_divide_width").val(65);
                                $("#ps_divide_width_2").val(35);
                                $(".wpp_divide_first").css({"width": ui.value + "%"});
                                $(".wpp_divide_second").css({"width": 100 - ui.value + "%"});
                            }
                        });

                        $("#ps_divide_width").bind('change', function () {
                            $("#ps_divide_width_2").val(100 - $(this).val());
                        });
                        $("#ps_divide_width_2").bind('change', function () {
                            $("#ps_divide_width").val(100 - $(this).val());
                        });

                    });
                </script>
            </div>
        </div>
    </div>
<?php }
