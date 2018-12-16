<?php get_header(); ?>
  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

      <div class="postwrap">
        <!-- Begin posthead -->
        <h1 class="title" itemprop="headline"><?php the_title(); ?></h1>
        <div class="post_bar">
          <div class="post_author">Автор: <span class="blue"><?php the_author_posts_link(); ?></span></div>
          <div class="post_date">&nbsp;/ Дата: <span class="blue"><?php the_time('j F Y'); ?></span> в <span class="blue"><?php the_time('G:i'); ?></span></div>
        </div>
        <!-- End posthead -->

        <div class="entry" itemprop="articleBody">
          <div align="center">
            <?php the_post_thumbnail(); // Fullsize image for the single post ?>
          </div>
          <?php the_content(); ?>
        </div>
      </div>

      <div class="single_feed">
        <div class="feed_text">
          <span class="bold">Этот блог читают уже</span> более 6000 человек<br>
          <span class="bold">- читай и ТЫ!</span>
        </div>
        <form class="feed_form" method="post" action="https://smartresponder.ru/subscribe.html" target="_blank" name="SR_form_4_90">
          <input type="text" class="feed_mail" placeholder="Введите свой e-mail:" name="field_email">
          <input type="submit" class="feed_submit" name="subscribe" value="Да, хочу читать и Я">
        </form>
        <div class="feed_friends"></div>
      </div>

      <div id="comment_block">
        <div class="coments-block">
          <?php comments_template(); ?>
        </div><!-- /.coments-block -->
      </div>
  <?php endwhile; endif; ?>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
