<?php
/**
 * Media box
 */
if ($media == 'on'): ?>
    <h1 class="ps_page_title">
        <?php echo $coach_title = get_post_meta($post->ID, '_coach_title', true); ?>
    </h1>
    <div class="ps_media_wrap">
    <div class="ps_media_box">
    <div class="ps_media_content">
    <div class="ps_video">
        <?php
        if (get_post_meta(get_the_ID(), '_coach_use_image', true) == 'on') {
            the_post_thumbnail(array(579, 359), false);

        } else {
            $id = rand(0, 1000);
            $video_url = get_post_meta(get_the_ID(), '_coach_video_link', true);
            $autoplay = get_post_meta(get_the_ID(), '_coach_video_play', true);

            echo do_shortcode('[wpp_video video='.$video_url.' width=579 height=359 autoplay='.$autoplay.']');
        }
        ?>
    </div>
    <div class="wpp_media_subscription">
    <?php

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

    if ($wpp3_media_response_type == 'smartresponder') {
        if ($wpp_media_smartresponder_form_version == 'old') {
            $css = "<style type='text/css'>
                                .wpp_media_smartresp_box{
                                background-color: #$wpp_media_smartresponder_bg_color_1;
                                background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#$wpp_media_smartresponder_bg_color_1), to(#$wpp_media_smartresponder_bg_color_2));
                                background-image: -webkit-linear-gradient(top, #$wpp_media_smartresponder_bg_color_1, #$wpp_media_smartresponder_bg_color_2);
                                background-image:    -moz-linear-gradient(top, #$wpp_media_smartresponder_bg_color_1, #$wpp_media_smartresponder_bg_color_2);
                                background-image:     -ms-linear-gradient(top, #$wpp_media_smartresponder_bg_color_1, #$wpp_media_smartresponder_bg_color_2);
                                background-image:      -o-linear-gradient(top, #$wpp_media_smartresponder_bg_color_1, #$wpp_media_smartresponder_bg_color_2);
                                border-color:#$wpp_media_smartresponder_border_color;
                                border-style:$wpp_media_smartresponder_border_style;
                                border-width:" . $wpp_media_smartresponder_border_width . "px;
                                }
                                .wpp_media_smartresp_box input[type=text]{
                                border: 1px solid #$wpp_media_smartresponder_border_color;
                                }
                                </style>";
            echo $css;
            ?>

            <!-- -->
            <div class="wpp_media_smartresp_box">
                <script language="JavaScript" type="text/javascript">
                    function SR_IsListSelected(el) {
                        for (vari=0;i < el.length; i++)
                            if (el[i].selected ||
                                el[i].checked)
                                return i;
                        return -1;
                    }
                    function SR_trim(f) {
                        return f.toString().replace(/^[ ]+/, '').replace(/[ ]+$/, '');
                    }
                    function SR_submit(f) {
                        f["field_email"].value = SR_trim(f["field_email"].value);
                        f["field_name_first"].value = SR_trim(f["field_name_first"].value);
                        if ((SR_focus = f["field_email"]) && f["field_email"].value.replace(/^[ ]+/, '').replace(/[ ]+$/, '').length < 1 || (SR_focus = f["field_name_first"]) && f["field_name_first"].value.replace(/^[ ]+/, '').replace(/[ ]+$/, '').length < 1) {
                            alert("Укажите значения всех обязательных для заполнения полей (помечены звездочкой)");
                            SR_focus.focus();
                            return false;
                        }
                        if (!f["field_email"].value.match(/^[A-Za-z0-9][A-Za-z0-9\._-]*[A-Za-z0-9_]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]+$/)) {
                            alert("Некорректный синтаксис email-адреса!");
                            f["field_email"].focus();
                            return false;
                        }
                        return true;
                    }
                </script>
                <?php if ($wpp_media_smartresponder_title) echo '<div class="ps_SM_headline">' . $wpp_media_smartresponder_title . '</div>' ?>
                <form name="SR_form" target="_blank" action="http://smartresponder.ru/subscribe.html"
                      method="post"
                      onsubmit="return SR_submit(this)">
                    <input type="hidden" name="version" value="1">
                    <input type="hidden" name="tid" value="<?php echo $wpp_media_smartresponder_tid; ?>">
                    <input type="hidden" name="uid" value="<?php echo $wpp_media_smartresponder_uid; ?>">
                    <input type="hidden" name="lang" value="ru">
                    <input type="hidden" name="charset" value="windows-1251">
                    <input type="hidden" name="did[]" value="<?php echo $wpp_media_smartresponder_did; ?>">
                    <?php if ($wpp_media_smartresponder_show_name) { ?>
                        <input type="text" size="17" class="Contact0FirstName"
                               value="Ваше имя"
                               onblur="if(this.value=='') this.value='Ваше имя'"
                               onfocus="if(this.value=='Ваше имя') this.value=''"
                               name="field_name_first">
                    <?php } ?>
                    <?php if ($wpp_media_smartresponder_show_email) { ?>
                        <input type="text" size="17" class="Contact0Email"
                               value="Ваш E-mail"
                               onblur="if(this.value=='') this.value='Ваш E-mail'"
                               onfocus="if(this.value=='Ваш E-mail') this.value=''"
                               name="field_email">
                    <?php } ?>
                    <?php if ($wpp_media_smartresponder_show_tel) { ?>
                        <input class="field" type="text" name="field_phones" value="Введите ваш телефон"
                               onblur='if(this.value=="") this.value="Введите ваш телефон"'
                               onfocus='if(this.value=="Введите ваш телефон") this.value=""'>
                    <?php } ?>

                    <input type="submit"
                           class="ps_cbutton ps_button_<?php echo $wpp_media_smartresponder_button_style; ?>"
                           value="<?php echo $wpp_media_smartresponder_button_text; ?>" name="SR_submitButton">

                </form>
                <?php $coach_privacy_show = get_post_meta($post->ID, '_coach_privacy_show', true);
                if ($coach_privacy_show == 'on'):  ?>
                    <div class="ps_privacy">
                        <?php echo $coach_privacy_description = get_post_meta($post->ID, '_coach_privacy_description', true); ?>
                    </div>
                <?php endif; ?>
            </div>

            <!-- // smartresponder -->

        <?php
        } elseif ($wpp_media_smartresponder_form_version == 'new') {
            echo $wpp3_media_smartresponder_code;

        } else {
            echo $wpp3_media_smartresponder_code;
        }

    }elseif ($wpp3_media_response_type == 'getresponse') {
        echo $wpp3_media_getresponse_code;
    }elseif ($wpp3_media_response_type == 'mailchimp') {
        echo $wpp3_media_mailchimp_code;
    }elseif ($wpp3_media_response_type == 'justclick') {
        echo $wpp3_media_justclick_code;
    }elseif ($wpp3_media_response_type == 'unisender') {
        echo $wpp3_media_unisender_code;
    }elseif ($wpp_media_response_type == 'smartresponder') {
        ?>
        <!-- -->
        <script language="JavaScript" type="text/javascript">
            function SR_IsListSelected(el) {
                for (var i = 0; i < el.length; i++)
                    if (el[i].selected ||
                        el[i].checked)
                        return i;
                return -1;
            }
            function SR_trim(f) {
                return f.toString().replace(/^[ ]+/, '').replace(/[ ]+$/, '');
            }
            function SR_submit(f) {
                f["field_email"].value = SR_trim(f["field_email"].value);
                f["field_name_first"].value = SR_trim(f["field_name_first"].value);
                if ((SR_focus = f["field_email"]) && f["field_email"].value.replace(/^[ ]+/, '').replace(/[ ]+$/, '').length < 1 || (SR_focus = f["field_name_first"]) && f["field_name_first"].value.replace(/^[ ]+/, '').replace(/[ ]+$/, '').length < 1) {
                    alert("Укажите значения всех обязательных для заполнения полей (помечены звездочкой)");
                    SR_focus.focus();
                    return false;
                }
                if (!f["field_email"].value.match(/^[A-Za-z0-9][A-Za-z0-9\._-]*[A-Za-z0-9_]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]+$/)) {
                    alert("Некорректный синтаксис email-адреса!");
                    f["field_email"].focus();
                    return false;
                }
                return true;
            }
        </script>
        <form name="SR_form" target="_blank" action="http://smartresponder.ru/subscribe.html"
              method="post"
              onsubmit="return SR_submit(this)">
            <input type="hidden" name="version" value="1">
            <input type="hidden" name="tid" value="<?php echo $coach_responder_tid; ?>">
            <input type="hidden" name="uid" value="<?php echo $coach_responder_uid; ?>">
            <input type="hidden" name="lang" value="ru">
            <input type="hidden" name="charset" value="windows-1251">
            <input type="hidden" name="did[]" value="<?php echo $coach_responder_did; ?>">


            <input type="text" size="17" class="Contact0FirstName"
                   value="<?php echo $coach_newsletter_name_helper; ?>"
                   onblur="if(this.value=='') this.value='<?php echo $coach_newsletter_name_helper; ?>'"
                   onfocus="if(this.value=='<?php echo $coach_newsletter_name_helper; ?>') this.value=''"
                   name="field_name_first">
            <input type="text" size="17" class="Contact0Email"
                   value="<?php echo $coach_newsletter_email_helper; ?>"
                   onblur="if(this.value=='') this.value='<?php echo $coach_newsletter_email_helper; ?>'"
                   onfocus="if(this.value=='<?php echo $coach_newsletter_email_helper; ?>') this.value=''"
                   name="field_email">
            <input type="submit" class="ps_cbutton ps_button_<?php echo $responder_button_style; ?>"
                   value="<?php echo $responder_button_text; ?>" name="SR_submitButton">

        </form>

    <?php } elseif ($wpp_media_response_type == 'getresponse') { ?>
        <!-- getresponse -->
        <div id="WFItem<?php echo $wpp_getresponse_wid; ?>" class="wf-formTpl">
            <form accept-charset="utf-8" action="https://app.getresponse.com/add_contact_webform.html"
                  method="post">
                <div class="box">
                    <div id="WFIcenter" class="wf-body">
                        <ul class="wf-sortable" id="wf-sort-id">
                            <li class="wf-name" rel="undefined" style="display:  block !important; ">
                                <div class="wf-contbox">
                                    <div class="wf-inputpos">
                                        <input class="wf-input wf-valid__length1to255" type="text"
                                               name="name"
                                               value="<?php echo $coach_newsletter_name_helper; ?>"
                                               onblur="if(this.value=='') this.value='<?php echo $coach_newsletter_name_helper; ?>'"
                                               onfocus="if(this.value=='<?php echo $coach_newsletter_name_helper; ?>') this.value=''"/>
                                    </div>
                                    <em class="clearfix clearer"></em>
                                </div>
                            </li>
                            <li class="wf-email" rel="undefined" style="display:  block !important; ">
                                <div class="wf-contbox">
                                    <div class="wf-inputpos">
                                        <input class="wf-input wf-req wf-valid__email" type="text"
                                               name="email"
                                               value="<?php echo $coach_newsletter_email_helper; ?>"
                                               onblur="if(this.value=='') this.value='<?php echo $coach_newsletter_email_helper; ?>'"
                                               onfocus="if(this.value=='<?php echo $coach_newsletter_email_helper; ?>') this.value=''"/>
                                    </div>
                                    <em class="clearfix clearer"></em>
                                </div>
                            </li>
                            <li class="wf-submit" rel="undefined" style="display:  block !important; ">
                                <div class="wf-contbox">
                                    <div class="wf-inputpos">
                                        <input type="submit"
                                               class="wf-button ps_cbutton ps_button_<?php echo $responder_button_style; ?>"
                                               name="submit"
                                               value="<?php echo $responder_button_text; ?>"/>
                                    </div>
                                    <em class="clearfix clearer"></em>
                                </div>
                            </li>
                            <li class="wf-counter" rel="undefined" style="display: none !important; ">
                                <div class="wf-contbox">
                                    <div>
														<span style="padding-top: 4px; padding-right: 6px; padding-bottom: 8px; padding-left: 24px; background-image: url(https://app.getresponse.com/images/core/webforms/countertemplates.png); background-attachment: initial; background-origin: initial; background-clip: initial; background-color: initial; background-position: 0 0; background-repeat: no-repeat no-repeat; "
                                                              class="wf-counterbox">
															<span class="wf-counterboxbg"
                                                                  style="padding-top: 4px; padding-right: 12px; padding-bottom: 8px; padding-left: 5px; background-image: url(https://app.getresponse.com/images/core/webforms/countertemplates.png); background-attachment: initial; background-origin: initial; background-clip: initial; background-color: initial; background-position: 100% -36px; background-repeat: no-repeat no-repeat; ">
																<span class="wf-counterbox0"
                                                                      style="padding-top: 5px; padding-right: 0px; padding-bottom: 5px; padding-left: 0px; "></span>
																<span
                                                                    style="padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; "
                                                                    name="https://app.getresponse.com/display_subscribers_count.js?campaign_name=user321654&var=0"
                                                                    class="wf-counterbox1 wf-counterq">0</span>
																<span
                                                                    style="padding-top: 5px; padding-right: 0px; padding-bottom: 5px; padding-left: 0px; "
                                                                    class="wf-counterbox2">subscribers</span>
															</span>
														</span>
                                    </div>
                                </div>
                            </li>
                            <li class="wf-captcha" rel="undefined" style="display:  none !important; ">
                                <div class="wf-contbox wf-captcha-1" id="wf-captcha-1"
                                     wf-captchaword="Enter the words above:"
                                     wf-captchasound="Enter the numbers you hear:"
                                     wf-captchaerror="Incorrect please try again"></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <input type="hidden" name="webform_id" value="<?php echo $wpp_getresponse_wid; ?>"/>
            </form>
        </div>
        <script type="text/javascript"
                src="http://app.getresponse.com/view_webform.js?wid=<?php echo $wpp_getresponse_wid; ?>&mg_param1=1"></script>
        <!-- // getresponse -->
    <?php } ?>
    </div>

    </div>
    </div>
    </div>
<?php
endif;