  </div>
  <!-- End content -->

  <aside id="sidebar">

    <!-- Google search begin -->
    <form action="<?php bloginfo('url'); ?>/" id="cse-search-box" target="_blank">
      <input type="text" placeholder="Поиск по блогу" class="search_field" name="q">
      <input type="submit" class="search_submit" name="sa" value="Найти">
    </form>
    <!-- Google search end -->

    <!-- Feedburner begin -->
    <div class="feedburner">
      <form class="burner_form" method="post" action="https://smartresponder.ru/subscribe.html" target="_blank" name="SR_form_4_90">
        <p>Введите свой e-mail:</p>
        <input type="hidden" name="uid" value="56842">
        <input type="hidden" name="tid" value="0">
        <input type="hidden" name="lang" value="ru">
        <input type="hidden" name="did[]" value="769071">
        <input type="text" class="burner_mail" name="field_email">
        <input type="submit" class="burner_submit" name="subscribe" value="Хочу получать статьи!">
      </form>
      <div class="burner_rss">
        <span class="burner_icon" title="Подписка по RSS" cursor:pointer; "=" " onclick="GoTo(&#39;_feeds.feedburner.com/isifblog&#39;) "><img src="<?php echo get_template_directory_uri(); ?>/img/burner_rss.jpg "></span>
             RSS-Подписка<br>
             <span class="grey_count ">6178 читателей</span>
        </div>
        <div class="burner_twit ">
             <a class="burner_icon " target="_blank " href="https://plus.google.com/101653817144528410966 " rel="author " title="Следуй за мной в Google+ "><img src="<?php echo get_template_directory_uri(); ?>/img/google-plus.png " alt=" "></a>
             Google+<br>
             <span class="grey_count ">Я в 2175 кругах</span>
        </div>
        <div class="feedburner_info ">
             Адреса электронной почты не разглашаются и не предоставляются третьим лицам для коммерческого или некоммерческого использования.
        </div>
   </div>
   <!-- Feedburner end -->

  <?php if ( is_active_sidebar('widgetarea1') ) : ?>
    <?php dynamic_sidebar( 'widgetarea1' ); ?>
  <?php else : ?>

    <!-- If you want display static widget content - write code here
    RU: Здесь код вывода того, что необходимо для статического контента виджетов -->

  <?php endif; ?>
    <!-- Tabber begin -->
    <div class="box ">
       <ul class="category ">
         <li><span class="cat_1 "></span><a href="http://isif-life.ru/category/blogovedenie ">Блоговедение</a></li>
         <li><span class="cat_2 "></span><a href="http://isif-life.ru/category/raskrutka-i-seo ">Раскрутка и SEO</a></li>
         <li><span class="cat_3 "></span><a href="http://isif-life.ru/category/dlya-sajta ">Сайтостроение</a></li>
         <li><span class="cat_4 "></span><a href="http://isif-life.ru/category/vidy-zarabotka ">Виды заработка</a></li>
         <li><span class="cat_5 "></span><a href="http://isif-life.ru/category/poleznye-programmy ">Полезный софт</a></li>
         <li><span class="cat_1 "></span><a href="http://isif-life.ru/category/voprosotvet ">Вопрос/Ответ</a></li>
       </ul>
       <ul class="category ">
         <li><span class="cat_7 "></span><a href="http://isif-life.ru/category/eksperimenty ">Эксперименты</a></li>
         <li><span class="cat_8 "></span><a href="http://isif-life.ru/category/puteshestviya ">Путешествия</a></li>
         <li><span class="cat_9 "></span><a href="http://isif-life.ru/category/intervyu ">Интервью с...</a></li>
         <li><span class="cat_10 "></span><a href="http://isif-life.ru/category/news ">Новости блога</a></li>
         <li><span class="cat_6 "></span><a href="http://isif-life.ru/category/samoobrazovanie ">Саморазвитие</a></li>
         <li><span class="cat_7 "></span><a href="http://isif-life.ru/category/web ">Для новичка</a></li>
       </ul>
    </div>
    <!-- Tabber end -->

    <!-- Future bar begin -->

    <div class="text_picture ">
        <a href="http://isif-life.ru/blogovedenie/kak-zashhitit-blog-na-wordpress-ot-vzloma.html " title="Защита WP "><div class="picture ">
           <div class="picture_img1 "></div>
           <div class="picture_text ">Защита WP</div>
        </div></a>

        <a href="http://isif-life.ru/blogovedenie/kak-uskorit-wordpress-blog-sekrety-uskoreniya.html " title="Ускорение WP "><div class="picture ">
           <div class="picture_img2 "></div>
           <div class="picture_text ">Ускорение WP</div>
        </div></a>
        <div class="clear "></div>

        <a href="http://isif-life.ru/raskrutka-i-seo/vnutrennyaya-optimizaciya-wordpress-nastrojka-bloga.html " title="Оптимизация "><div class="picture ">
           <div class="picture_img3 "></div>
           <div class="picture_text ">Оптимизация</div>
        </div></a>

        <a href="http://isif-life.ru/raskrutka-i-seo/seo-prodvigenie-stati-optimizaciya-kak-pisat-stati.html " title="SEO статей "><div class="picture ">
           <div class="picture_img4 "></div>
           <div class="picture_text ">SEO статей</div>
        </div></a>
        <div class="clear "></div>

        <a href="http://isif-life.ru/raskrutka-i-seo/kak-uvelichit-poseshaemost-bloga.html " title="+500 на блог "><div class="picture ">
           <div class="picture_img5 "></div>
           <div class="picture_text ">+500 на блог</div>
        </div></a>

        <a href="http://isif-life.ru/raskrutka-i-seo/kak-stat-blogom-tysyachnikom.html " title="+1000 на блог "><div class="picture ">
           <div class="picture_img6 "></div>
           <div class="picture_text ">+1000 на блог</div>
        </div></a>
        <div class="clear "></div>

        <a href="http://isif-life.ru/raskrutka-i-seo/kak-povysit-posehaemost-bloga-do-1000-v-sutki.html " title="+1000 (часть 2) "><div class="picture last ">
           <div class="picture_img7 "></div>
           <div class="picture_text ">+1000 (часть 2)</div>
        </div></a>

        <a href="http://isif-life.ru/raskrutka-i-seo/povedencheskie-faktory-kak-yluchshit-seo-effect.html " title="+2000 на блог "><div class="picture last ">
           <div class="picture_img8 "></div>
           <div class="picture_text ">+2000 на блог</div>
        </div></a>
        <div class="clear "></div>
    </div>
    <!-- Future bar end -->

  </aside>
