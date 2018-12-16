<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <link href="http://www.google-analytics.com/" rel="dns-prefetch"><!-- dns prefetch -->

  <!-- icons -->
  <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon">

  <!--[if lt IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
    <script>
      document.createElement('header');
      document.createElement('nav');
      document.createElement('section');
      document.createElement('article');
      document.createElement('aside');
      document.createElement('footer');
    </script>
  <![endif]-->
  <!-- css + javascript -->
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <div id="wrapper">
    <header>

      <?php if ( is_front_page() && is_home() ){ ?>
        <hgroup>
          <h1 class="blog_name">
            <a href="<?php echo home_url(); ?>" title="<?php bloginfo('name'); ?>"><?php bloginfo('name'); ?></a>
          </h1>
          <h2 class="blog_descr"><?php bloginfo('description'); ?></h2>
        </hgroup>
      <?php } else { ?>
        <hgroup>
          <div class="head_name">
            <a href="<?php echo home_url(); ?>" title="<?php bloginfo('name'); ?>"><?php bloginfo('name'); ?></a>
          </div>
          <div class="blog_descr">Профессиональное <br>обучение блоггингу</div>
        </hgroup>
      <?php } ?>
    </header>

    <!-- adaptive -->
    <header id="header">
      <div class="holder">

        <?php if ( is_front_page() && is_home() ){ ?>
          <h1 class="logo"><a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a></h1>
        <?php } else { ?>
          <strong class="logo"><a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a></strong>
        <?php } ?>
        <span class="slogan"><?php bloginfo('description'); ?></span>
        <div class="search-form">
          <!-- Google search begin -->
          <form action="#" id="cse-search-box" target="_blank">
            <fieldset>
              <input type="text" placeholder="Поиск" class="form-control" name="q" style="border: 1px solid rgb(126, 157, 185); padding: 2px; background: url(&quot;https://www.google.com/cse/static/ru/google_custom_search_watermark.gif&quot;) left center no-repeat rgb(255, 255, 255);">
              <input type="submit" class="btn-search" name="sa" value="Найти">
            </fieldset>
          </form>
          <!-- Google search end -->
        </div>
        <!-- search-form -->
      </div>
    </header>


    <nav class="main-nav">
      <div class="menu-verxnee-container">
        <div class="menu-verxnee-mobilnoe-menyu-container">
          <?php wpeSideNav(); ?>
        </div>
      </div>
    </nav>
    <!-- adaptive -->

    <nav>
      <a class="ribbon" href="#" title="Интересное"></a>
      <div id="access">
        <div class="menu-verxnee-container">
          <?php wpeHeadNav(); ?>
        </div>
      </div>
    </nav>

    <div class="line_link_left"><?php
      $fields = get_field('header_ad', 22);
      $field_count = count($fields);
      $array_number = $field_count - 1;
      $random_number = rand(0, $array_number);
      $field_link = $fields[$random_number]['link'];
      $field_title = $fields[$random_number]['title'];
    ?></div>

    <?php if( $fields ): ?>
      <div id="line_link_ads">
        <div class="lb_link_block">
          <div id="lb_link">
            <span class="lb_link">
              <a class="lb-hidden" href="<?php echo $field_link; ?>"><?php echo $field_title; ?></a>
            </span>
          </div>
          <div id="lb_link_add">
            <span class="lb_link">
              <a class="lb-hidden-add" href="<?php the_field('header_right_link', 22); ?>"><?php the_field('header_right_title', 22); ?></a>
            </span>
          </div>
        </div>
      </div>

    <?php else: ?>
      <div id="line_link_ads">
        <div class="lb_link_block">
        <div id="lb_link"> </div>
        <div id="lb_link_add"> </div>
        </div>
      </div>
    <?php endif; ?>

    <div id="container">
      <div id="content" itemscope="" itemtype="http://schema.org/WPHeader">
