<?php get_header(); ?>

  <h1 class="search-title inner-title">Результаты поиска "<?php echo sprintf( '', $wp_query->found_posts ); echo get_search_query(); ?>"</h1>
  <?php get_template_part('loop'); ?>
  <?php get_template_part('pagination'); ?>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
