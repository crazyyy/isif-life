    </div><!-- End container -->
  <a id="toTop " title="Наверх " style="display: none; "></a>
</div><!-- End wrapper -->
<div id="bottom ">
  <footer id="footer ">
    <div class="copyright ">
        <p>© 1985-2015 <a href="http://isif-life.ru/ "><?php bloginfo('name'); ?></a><br>
        Блог Александра Борисова</p>
        <p>Товарищи! Я уже более 5 лет вкладываю душу в этот блог и у меня к вам обычная человеческая просьба - не воруйте контент! Спасибо большое!</p>
    </div>

        <!-- adaptive -->
        <form class="burner_form mobile_burner " method="post " action="https://smartresponder.ru/subscribe.html " target="_blank " name="SR_form_4_90 ">
          <fieldset>
            <input type="submit " class="btn-warning " name="subscribe " value="Получать статьи! ">
            <input type="text " class="form-control " name="field_email " value="Введите свой e-mail: ">
          </fieldset>
        </form>
        <!-- adaptive -->

        <div id="footer_menu">
          <div class="menu-verxnee-container">
            <?php wpeFootNav(); ?>
          </div>
        </div>
        </footer>
    </div>

    <?php wp_footer(); ?>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.min.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/wp-embed.min.js"></script>

    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>

    <!-- Begin toparrow script -->
    <script type="text/javascript">
      function GoTo(link) {
        window.open(link.replace("_", "http://"));
      }
    </script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/totop.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/q2w3-fixed-widget.min.js"></script>

    <script type="text/javascript">
      $(function() {
        $("#toTop").scrollToTop();
      });
    </script>
    <!-- End toparrow script -->

    <!-- adaptive -->
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.slicknav.js" defer=""></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/script.js" defer=""></script>

    <!-- adaptive -->

    <!-- Fixed Widget -->
    <script type="text/javascript">
      jQuery(document).ready(function() {
        var q2w3_sidebar_1_options = {
          "margin_top": 10,
          "margin_bottom": 700,
          "screen_max_width": 0,
          "width_inherit": false,
          "widgets": ['fixed-widget']
        };
        q2w3_sidebar(q2w3_sidebar_1_options);
        setInterval(function() {
          q2w3_sidebar(q2w3_sidebar_1_options);
        }, 1500);
      });
    </script>
    <!-- end Fixed WIdget -->

    <script>
      $(".closed").toggleClass("show");
      $(".title").click(function() {
        $(this).parent().toggleClass("show").children("div.contents").slideToggle("medium");
        if ($(this).parent().hasClass("show")) {
          $(this).children(".title_h3").css("background", "#bbbbbb");
        } else {
          $(this).children(".title_h3").css("background", "#dddddd");
        }
      });
    </script>



</body>
</html>
