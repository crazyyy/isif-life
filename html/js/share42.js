!function(t){t(function(){t("div.share42init").each(function(e){function a(e){var a;t.getJSON("http://graph.facebook.com/?callback=?&ids="+e,function(n){l+=Number(n[e].shares||0),l>0&&t(".share42-counter").html(l),(a>0||1==m)&&s.find('a[data-count="fb"]').after('<span class="share42-counter">'+a+"</span>")})}function n(a){var n;t.getScript("http://www.odnoklassniki.ru/dk?st.cmd=extLike&uid="+e+"&ref="+a),window.ODKL||(window.ODKL={}),window.ODKL.updateCount=function(e,a){l+=Number(a),l>0&&t(".share42-counter").html(l),(n>0||1==m)&&t("div.share42init").eq(e).find('a[data-count="odkl"]').after('<span class="share42-counter">'+n+"</span>")}}function r(e){var a;t.getJSON("http://urls.api.twitter.com/1/urls/count.json?callback=?&url="+e,function(e){l+=Number(e.count),l>0&&t(".share42-counter").html(l),(a>0||1==m)&&s.find('a[data-count="twi"]').after('<span class="share42-counter">'+a+"</span>")})}function o(a){var n;t.getScript("http://vk.com/share.php?act=count&index="+e+"&url="+a),window.VK||(window.VK={}),window.VK.Share={count:function(e,a){l+=Number(a),l>0&&t(".share42-counter").html(l),(n>0||1==m)&&t("div.share42init").eq(e).find('a[data-count="vk"]').after('<span class="share42-counter">'+n+"</span>")}}}function i(t){for(var e=document.getElementsByTagName("script"),a=new RegExp("^(.*/|)("+t+")([#?]|$)"),n=0,r=e.length;n<r;n++){var o=String(e[n].src).match(a);if(o)return o[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/)?o[1]:0==o[1].indexOf("/")?o[1]:(b=document.getElementsByTagName("base"),b[0]&&b[0].href?b[0].href+o[1]:document.location.pathname.match(/(.*[\/\\])/)[0]+o[1])}return null}var l=0,s=t(this),c=s.attr("data-url"),u=s.attr("data-title"),p=s.attr("data-image"),h=s.attr("data-description"),d=s.attr("data-path"),A=s.attr("data-icons-file"),m=s.attr("data-zero-counter");if(c||(c=location.href),A||(A="icons.png"),m||(m=0),a(c),n(c),r(c),o(c),d||(d=i("share42.js")),u||(u=document.title),!h){var g=t('meta[name="description"]').attr("content");h=void 0!==g?g:""}c=encodeURIComponent(c),u=encodeURIComponent(u),u=u.replace(/\'/g,"%27"),p=encodeURIComponent(p),h=encodeURIComponent(h),h=h.replace(/\'/g,"%27");var f="u="+c;"null"!=p&&""!=p&&(f="s=100&p[url]="+c+"&p[title]="+u+"&p[summary]="+h+"&p[images][0]="+p);var w="";"null"!=p&&""!=p&&(w="&image="+p);var k=new Array('"#" data-count="vk" onclick="window.open(\'http://vk.com/share.php?url='+c+"&title="+u+w+"&description="+h+"', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Поделиться В Контакте\"",'"#" data-count="gplus" onclick="window.open(\'https://plus.google.com/share?url='+c+"', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Поделиться в Google+\"",'"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/sharer.php?m2w&'+f+"', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Поделиться в Facebook\"",'"#" data-count="odkl" onclick="window.open(\'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl='+c+"&title="+u+"', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Добавить в Одноклассники\"",'"#" data-count="twi" onclick="window.open(\'https://twitter.com/intent/tweet?text='+u+"&url="+c+"', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Добавить в Twitter\"",'"https://www.evernote.com/clip.action?url='+c+"&title="+u+'" title="Добавить в Evernote"','"http://www.livejournal.com/update.bml?event='+c+"&subject="+u+'" title="Опубликовать в LiveJournal"','"http://feeds.feedburner.com/isifblog?format=xml" title="Подписаться на RSS сайта"','"http://feedburner.google.com/fb/a/mailverify?uri=isifblog" title="Подписаться на новые статьи на e-mail"'),E="";for(j=0;j<k.length;j++)E+='<span class="share42-item" style="display:inline-block;margin:0 8px 8px 0;height:48px;"><a rel="nofollow" style="display:inline-block;width:48px;height:48px;margin:0;padding:0;outline:none;background:url('+d+A+") -"+48*j+'px 0 no-repeat" href='+k[j]+' target="_blank"></a></span>';s.html('<span id="share42">'+E+'</span><style>.share42-counter{display:inline-block;vertical-align:top;margin-left:9px;position:relative;background:#FFF;color:#666;} .share42-counter:before{content:"";position:absolute;top:0;left:-8px;width:8px;height:100%;} .share42-counter{padding:0 8px 0 4px;font:14px/32px Arial,sans-serif;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAgCAYAAADkK90uAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALVJREFUeNrs200KQiEUQGENnNesfbjA1hAEb1OO3rQ3FfxbgGBkXqI1aHAOXMTp/aaqnXNd0azeY44x25i7tbbrPmIv86q1qhijKqXI9QzIInnvVQjhBsgitdbUvu/hxCrWyBgjxxWQxQIEEAIEEAIEEAIEEAIEEAKEAAGEAAGEAAGEAAGEACFAACFA/jZ5KDeKgCxSSkmOjaekk5PH1jnnH8hF8x1harL7p/p+R3hYa18fAQYA49lEn38pVB4AAAAASUVORK5CYII=) 100% 0;} .share42-counter:before{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAgCAYAAAAv8DnQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALRJREFUeNrck8EJAyEQRZ1gBR4ExXtSVLaAVJQC0s56TgOi4MEKlImzSWDdiEmu+2EQ/U+dcRAQkW1lrT3V4VLjzDvmEQDuxhgmhGAfAO0kU0q5TA4dYKKdb/UAwTkfAo12CNRnRq11S1CzKOZ5Ru89bjU08ZtJ+ilJqCewEEIXALqGTLqGKlBKNcDS19cinYSreVvmuqK/k9wnkHLOQ+CWUhoCV+ccizGyUsqzWYPvPz0EGADHGK9qjbXCqgAAAABJRU5ErkJggg==)}</style>')})})}(jQuery);
//# sourceMappingURL=maps/share42.js.map