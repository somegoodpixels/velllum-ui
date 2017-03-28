//
// Albums
// --------------------------------------------------

$('.album').each(function(){
	var images = $(this).find('.album-image > img');
	var size = $(this).hasClass('album-small') ? 100 : 200;
	images.each(function(){
		var item = $(this).closest('.album-image');
		var width = $(this).attr('width');
		var height = $(this).attr('height');
		var ratio = width / height;
		item.css('flex-grow',ratio);
		item.css('flex-basis',(ratio*size)+'px');
	});
	$(this).addClass('album-ready');
});