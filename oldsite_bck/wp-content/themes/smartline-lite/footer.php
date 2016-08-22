	<?php do_action('smartline_before_footer'); ?>
	
	<footer id="footer" class="clearfix" role="contentinfo">
		
		<?php // Display Footer Navigation
		if ( has_nav_menu( 'footer' ) ) : ?>
		
		<nav id="footernav" class="clearfix" role="navigation">
			<?php wp_nav_menu(	array(
				'theme_location' => 'footer', 
				'container' => false, 
				'menu_id' => 'footernav-menu', 
				'fallback_cb' => '', 
				'depth' => 1)
			);
			?>
			<h5 id="footernav-icon"><?php _e('Menu', 'smartline-lite'); ?></h5>
		</nav>
		
		<?php endif; ?>
		
		<div id="footer-text">
			
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
					<?php bloginfo( 'name' ); ?>	
		
		</div>
		
	</footer>

</div><!-- end #wrapper -->

<?php wp_footer(); ?>
<noindex>
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter32812225 = new Ya.Metrika({
                    id:32812225,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/32812225" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
</noindex>
</body>
</html>