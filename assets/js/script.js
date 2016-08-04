$(document).ready(function(){

	$.fn.exists = function(){return this.length > 0;}
	if($('.main-nav').exists()){
		$('.main-nav .menu').slicknav({
			label:		'',
			prependTo:	'nav.main-nav'
		});
	}

    if ($('.fancybox').exists()) {
		$('.fancybox').fancybox({
			openEffect	: 'elastic',
			closeEffect	: 'elastic',
			padding		: 10,
			helpers : {
				title : {
					type : 'inside'
				}
			}
		});
	}

    $(".item-holder").find("img").parent().addClass('image');


});
