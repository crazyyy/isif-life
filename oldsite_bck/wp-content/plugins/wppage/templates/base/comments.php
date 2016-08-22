<?php
/**
 * Comments for wppage
 */

$wppage_comments_style = get_post_meta($post->ID, '_wppage_comments_style', true); // keep this line


if ($wppage_comments_style == 'tabs') {

    // if we have new comments options
    $use_comments_tabs = get_post_meta($post->ID, '_use_comments_tabs', true);

    if ($use_comments_tabs != '') {
        $use_comments = get_post_meta($post->ID, '_use_comments_tabs', true);
        $use_comments_order = explode(',', get_post_meta($post->ID, '_use_comments_tabs_order', true));
        $use_comments_array = explode(',', $use_comments);
    } else { // if here no new comments options, than we have to check old options
        $use_comments = get_post_meta($post->ID, '_use_comments', true);
        $use_comments_order = explode(',', get_post_meta($post->ID, '_use_comments_order', true));
        $use_comments_array = explode(',', $use_comments);
    }

    if (!empty($use_comments_array) && $use_comments_array[0] != '' ):

        ?>
        <div class="ps_comments_wrap">
            <script type="text/javascript">
                jQuery(function ($) {
                    $("#wpp_comments_tab").tabs({
                        select: function (myevent, ui) {
                            $.scrollTo($('#wpp_comments_tab'), 300, {offset: 0, margin: true});
                        }
                    });
                    //---------------------------------------------------
                    var nav_top = $('#wppage_comments_tabs_nav').offset();
                    var top = $(window).scrollTop();
                    $(window).scroll(function () {
                        top = $(window).scrollTop();
                        if (nav_top.top < top) {
                            $('#wppage_comments_tabs_nav').addClass('fixed');
                            $('#wpp_comments_tab').css({'padding-top': '53px'});
                        } else {
                            if ($('#wppage_comments_tabs_nav').hasClass('fixed')) {
                                $('#wppage_comments_tabs_nav').removeClass('fixed').addClass('normal');
                                $('#wpp_comments_tab').css({'padding-top': '0px'});
                            }
                        }
                    });


                });
            </script>
            <style type="text/css">
                .fixed {
                    position: fixed;
                    top: 0;

                }
                #wppage_comments_tabs_nav {
                    display: block;
                    width: <?php echo $ps_content_width-20; ?>px;
                    background: # <?php echo  $ps_content_background_color; ?>;
                    z-index: 99;
                    padding: 10px 0;
                }

            </style>
            <div id="wpp_comments_tab">
                <ul id="wppage_comments_tabs_nav">
                    <?php foreach ($use_comments_order as $comment_item) :
                        ?>
                        <?php if ($comment_item == 'facebook' && in_array($comment_item, $use_comments_array)) { ?>
                        <li><a href="#tab-<?php echo $comment_item; ?>"
                               class="fb_comments_ico s_icon">Комментарии Facebook</a></li>
                    <?php } ?>
                        <?php if ($comment_item == 'vk' && in_array($comment_item, $use_comments_array)) { ?>
                        <li><a href="#tab-<?php echo $comment_item; ?>"
                               class="vk_comments_ico s_icon">Комментарии Вконтакте</a></li>
                    <?php } ?>
                        <?php if ($comment_item == 'wordpress' && in_array($comment_item, $use_comments_array)) { ?>
                        <li><a href="#tab-<?php echo $comment_item; ?>"
                               class="wp_comments_ico s_icon">Комментарии wordpress</a></li>
                    <?php } ?>
                    <?php endforeach; ?>
                </ul>
                <?php foreach ($use_comments_order as $comment_item) :
                    ?>
                    <?php if ($comment_item == 'facebook' && in_array($comment_item, $use_comments_array)) { ?>
                    <div id="tab-<?php echo $comment_item; ?>">
                        <div id="fb-root"></div>
                        <script src="http://connect.facebook.net/ru_RU/all.js#xfbml=1"></script>
                        <fb:comments href="<?php the_permalink(); ?>" num_posts="98" width="<?php echo
                            $ps_content_width - 20;
                        ?>"></fb:comments>
                    </div>
                <?php } ?>
                    <?php if ($comment_item == 'vk' && in_array($comment_item, $use_comments_array)) { ?>
                    <div id="tab-<?php echo $comment_item; ?>">
                        <div id="vk_comments"></div>
                        <script type="text/javascript">
                            VK.Widgets.Comments("vk_comments", {limit: 10, width: "<?php echo $ps_content_width - 20;
                            ?>", attach: "*"});
                        </script>
                    </div>
                <?php } ?>
                    <?php if ($comment_item == 'wordpress' && in_array($comment_item, $use_comments_array)) { ?>
                    <div id="tab-<?php echo $comment_item; ?>">
                        <?php if (comments_open() || have_comments()): ?>
                            <div id="comments">
                                <?php global $post;
                                $comments = get_comments('post_id=' . $post->ID); ?>

                                <h2 id="comments-title"><?php
                                    printf(_n('Один комментарий к &ldquo;%2$s&rdquo;', '%1$s комментариев к &ldquo;%2$s&rdquo;', get_comments_number()),
                                        number_format_i18n(get_comments_number()), '<span>' . get_the_title() . '</span>');
                                    ?></h2>

                                <ol class="commentlist clearfix">
                                    <?php wp_list_comments('', $comments); ?>
                                </ol>

                                <?php if (get_comment_pages_count() > 1 && get_option('page_comments')) : // Are there comments to navigate through? ?>
                                    <div class="navigation">
                                        <div class="nav-previous"><?php previous_comments_link(); ?></div>
                                        <div class="nav-next"><?php next_comments_link(); ?></div>
                                        <div class="clear"></div>
                                    </div><!-- .navigation -->
                                <?php endif; // check for comment navigation ?>


                                <?php if (comments_open()): ?>
                                    <div id="respond" class="noI">
                                        <?php wppage_comment_form(); ?>
                                    </div>
                                <?php endif; ?>

                            </div>
                        <?php endif; ?>
                    </div>
                <?php } ?>
                <?php endforeach; ?>

            </div>
        </div>
    <?php
    endif;

} elseif ($wppage_comments_style == 'stack') {
    // if we have new comments options
    $use_comments_stack = get_post_meta($post->ID, '_use_comments_stack', true);
    if ($use_comments_stack != '') {
        $use_comments = get_post_meta($post->ID, '_use_comments_stack', true);
        $use_comments_order = explode(',', get_post_meta($post->ID, '_use_comments_stack_order', true));
        $use_comments_array = explode(',', $use_comments);
    } else { // if here no new comments options, than we have to check old options
        $use_comments = get_post_meta($post->ID, '_use_comments', true);
        $use_comments_order = explode(',', get_post_meta($post->ID, '_use_comments_order', true));
        $use_comments_array = explode(',', $use_comments);
    }
    if (!empty($use_comments_array) && $use_comments_array[0] != ''):?>
        <div class="ps_comments_wrap">
            <?php
            foreach ($use_comments_order as $comment_item) :
                if ($comment_item == 'facebook' && in_array($comment_item, $use_comments_array)) {
                    ?>
                    <div id="tab-<?php echo $comment_item; ?>">
                        <div id="fb-root"></div>
                        <script src="http://connect.facebook.net/ru_RU/all.js#xfbml=1"></script>
                        <fb:comments href="<?php the_permalink(); ?>" num_posts="98" width="<?php echo
                            $ps_content_width - 20;
                        ?>"></fb:comments>
                    </div>
                    <br>
                <?php } ?>
                <?php if ($comment_item == 'vk' && in_array($comment_item, $use_comments_array)) { ?>
                <div id="tab-<?php echo $comment_item; ?>">
                    <div id="vk_comments"></div>
                    <script type="text/javascript">
                        VK.Widgets.Comments("vk_comments", {limit: 10, width: "<?php echo $ps_content_width - 20;
                                ?>", attach: "*"});
                    </script>
                </div>
                <br>
            <?php } ?>
                <?php if ($comment_item == 'wordpress' && in_array($comment_item, $use_comments_array)) { ?>
                <div id="tab-<?php echo $comment_item; ?>">
                    <?php if (comments_open() || have_comments()): ?>
                        <div id="comments">
                            <?php global $post;
                            $comments = get_comments('post_id=' . $post->ID); ?>

                            <h2 id="comments-title"><?php
                                printf(_n('Один комментарий к &ldquo;%2$s&rdquo;', '%1$s комментариев к &ldquo;%2$s&rdquo;', get_comments_number()),
                                    number_format_i18n(get_comments_number()), '<span>' . get_the_title() . '</span>');
                                ?></h2>

                            <ol class="commentlist clearfix">
                                <?php wp_list_comments('', $comments); ?>
                            </ol>

                            <?php if (get_comment_pages_count() > 1 && get_option('page_comments')) : // Are there comments to navigate through? ?>
                                <div class="navigation">
                                    <div class="nav-previous"><?php previous_comments_link(); ?></div>
                                    <div class="nav-next"><?php next_comments_link(); ?></div>
                                    <div class="clear"></div>
                                </div><!-- .navigation -->
                            <?php endif; // check for comment navigation ?>


                            <?php if (comments_open()): ?>
                                <div id="respond" class="noI">
                                    <?php wppage_comment_form(); ?>
                                </div>
                            <?php endif; ?>

                        </div>
                    <?php endif; ?>
                </div>
            <?php
            }  endforeach; ?>
        </div>
    <?php endif;
} elseif ($wppage_comments_style == 'columns' && $use_comments_array[0] != '') {
    // if we have new comments options
    $use_comments_columns = get_post_meta($post->ID, '_use_comments_columns', true);
    if ($use_comments_columns != '') {
        $use_comments = get_post_meta($post->ID, '_use_comments_columns', true);
        $use_comments_order = explode(',', get_post_meta($post->ID, '_use_comments_columns_order', true));
        $use_comments_array = explode(',', $use_comments);
    } else { // if here no new comments options, than we have to check old options
        $use_comments = get_post_meta($post->ID, '_use_comments', true);
        $use_comments_order = explode(',', get_post_meta($post->ID, '_use_comments_order', true));
        $use_comments_array = explode(',', $use_comments);
    }
    if (!empty($use_comments_array)): ?>
        <div class="ps_comments_wrap">
            <?php foreach ($use_comments_order as $comment_item) :
                if ($comment_item == 'facebook' && in_array($comment_item, $use_comments_array)) {
                    ?>
                    <div id="tab-<?php echo $comment_item; ?>" class="two_columns"
                         style="width: <?php echo $ps_content_width / 2 - 24; ?>px">
                        <div id="fb-root"></div>
                        <script src="http://connect.facebook.net/ru_RU/all.js#xfbml=1"></script>
                        <fb:comments href="<?php the_permalink(); ?>" num_posts="99" width="<?php echo $ps_content_width / 2 - 24; ?>"></fb:comments>
                    </div>
                <?php } ?>
                <?php if ($comment_item == 'vk' && in_array($comment_item, $use_comments_array)) { ?>
                <div id="tab-<?php echo $comment_item; ?>" class="two_columns"
                     style="width: <?php echo $ps_content_width / 2 - 24; ?>px">
                    <div id="vk_comments"></div>
                    <script type="text/javascript">
                        VK.Widgets.Comments("vk_comments", {limit: 10, width: "<?php echo $ps_content_width/2 - 24; ?>", attach: "*"});
                    </script>
                </div>

            <?php } ?>
                <?php if ($comment_item == 'wordpress' && in_array($comment_item, $use_comments_array)) { ?>
                <div id="tab-<?php echo $comment_item; ?>" class="two_columns"
                     style="width: <?php echo $ps_content_width / 2 - 24; ?>px">
                    <?php if (comments_open() || have_comments()): ?>
                        <div id="comments">
                            <?php global $post;
                            // $comments = get_comments('post_id='.$post->ID);
                            $comments = get_comments(array('order' => 'ASC', 'post_id' => get_the_ID()));
                            ?>

                            <h2 id="comments-title"><?php
                                printf(_n('Один комментарий к &ldquo;%2$s&rdquo;', '%1$s комментариев к &ldquo;%2$s&rdquo;', get_comments_number()),
                                    number_format_i18n(get_comments_number()), '<span>' . get_the_title() . '</span>');
                                ?></h2>

                            <ol class="commentlist clearfix">
                                <?php wp_list_comments('', $comments); ?>
                            </ol>

                            <?php if (get_comment_pages_count() > 1 && get_option('page_comments')) : // Are there comments to navigate through? ?>
                                <div class="navigation">
                                    <div class="nav-previous"><?php previous_comments_link(); ?></div>
                                    <div class="nav-next"><?php next_comments_link(); ?></div>
                                    <div class="clear"></div>
                                </div><!-- .navigation -->
                            <?php endif; // check for comment navigation ?>


                            <?php if (comments_open()): ?>
                                <div id="respond" class="noI">
                                    <?php wppage_comment_form(); ?>
                                </div>
                            <?php endif; ?>

                        </div>
                    <?php endif; ?>
                </div>
            <?php
            }  endforeach; ?>
        </div>
    <?php endif;
}