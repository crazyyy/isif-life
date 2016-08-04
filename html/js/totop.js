$(function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr("href"),"0"!=$(window).scrollTop()&&$(this).fadeIn("slow");var o=$(this);$(window).scroll(function(){"0"==$(window).scrollTop()?$(o).fadeOut("slow"):$(o).fadeIn("slow")}),$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}});
//# sourceMappingURL=maps/totop.js.map
