<?php get_header(); ?>
  <div id="content" itemscope="" itemtype="http://schema.org/Article">
    <div class="postwrap">
      <div align="center">
        <img src="http://isif-life.ru/wp-content/themes/isif-life/images/404_end.gif">
      </div>
      Здравствуйте! Если вы попали на эту страницу, значит перешли по ссылке, которая изменила свой url. Пожалуйста обратитесь в службу поддержки <a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a> и сообщите об этой проблеме.
      <p>Вам будет выслана новая ссылка, а старую мы поправим, чтобы другие люди не попадали на эту страницу ошибки! Спасибо!</p>
    </div>
  </div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
