	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	
		<h2 class="post-title entry-title"><?php the_title(); ?></h2>
		
		<div class="postmeta"><?php smartline_display_postmeta(); ?></div>

		<div class="entry clearfix">
			<?php smartline_display_thumbnail_single(); ?>
			<?php the_content(); ?>
			<!-- <?php trackback_rdf(); ?> -->
			<div class="page-links"><?php wp_link_pages(); ?></div>			
		</div>
		
		

	</article>