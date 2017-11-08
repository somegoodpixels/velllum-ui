function momentum(parallax){

	parallax.data('parallax-scroll-counter',0);

	function logParallax(el){
		el.data('parallax-top-old',el.data('parallax-top')).data('parallax-time-old',el.data('parallax-time'));
		el.data('parallax-top',el.scrollTop()).data('parallax-time',(new Date().getTime()));
		el.stop();
	}

	function slingParallax(el){
		var top_diff = Number(el.data('parallax-top')) - Number(el.data('parallax-top-old'));
		var time_diff = Number(el.data('parallax-time')) - Number(el.data('parallax-time-old'));
		if ( time_diff && top_diff ) {
			var diff = top_diff/time_diff;
			var top = el.scrollTop();
			var counter = Number(el.data('parallax-scroll-counter'))+1;
			console.log(el.data('parallax-scroll-counter'))
			el.data('parallax-scroll-counter',counter);
			el.addClass('parallax-scrolling');
			el.animate({scrollTop:(top + diff*350)},2500,'easeOutQuint',function(){
				el.removeClass('parallax-scrolling');
				el.stop();
			});
		}
	}

	logParallax(parallax);
	
	parallax.on('touchstart touchmove',function(){
		logParallax($(this));
	});
	parallax.on('touchend',function(){
		slingParallax($(this));
	});
	parallax.on('touchstart',function(){
		if ( $(this).hasClass('parallax-scrolling') ) {
			logParallax($(this));
			logParallax($(this));
			$(this).removeClass('parallax-scrolling');
		}
	});
}



$(document).ready(function(){
	if ( is_touch() && $('.parallax-content').length ) {
		$('.parallax-content').each(function(){
			momentum($(this));
		})
	}
});