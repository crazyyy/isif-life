<?php if (have_posts()): while (have_posts()) : the_post(); ?>
  <div id="post-<?php the_ID(); ?>" <?php post_class('postwrap'); ?>>
    <!-- Begin posthead -->
    <h2 class="title"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2>
    <div class="post_bar">
      <div class="post_author">Автор: <span class="blue"><?php the_author_posts_link(); ?></span></div>
      <div class="post_date">&nbsp;/ Дата: <span class="blue"><?php the_time('j F Y'); ?></span> в <span class="blue"><?php the_time('G:i'); ?></span></div>
    </div>
    <!-- End posthead -->

    <div class="feature-img">
      <?php if ( has_post_thumbnail()) :
        the_post_thumbnail('medium');
      else: ?>
        <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
      <?php endif; ?>
    </div>
    <?php wpeExcerpt('wpeExcerpt40'); ?>
    <p> <a href="<?php the_permalink(); ?>" class="more-link">Читать запись полностью »</a></p>
  </div>

  <!-- Begin postinfo -->
  <div class="post_info">
    <div class="post_comments"><a href="<?php the_permalink(); ?>#comments">Оставить комментарий</a></div>
    <div class="post_comments_count">Комментарии: <span class="com_count"><?php comments_popup_link( '0', __( '1', 'wpeasy' ), __( '% ', 'wpeasy' )); ?></span></div>
    <div class="post_cat">Рубрика: <span class="cat_name"><?php the_category(', '); // Separated by commas ?></span></div>
  </div><!-- End postinfo -->

<?php endwhile; endif; ?>
