//
// Albums
// --------------------------------------------------

$('.album').each(function(){
	var images = $(this).find('.album-image > img');
	var size = $(this).hasClass('album-small') ? 20 : 30;
	images.each(function(){
		var item = $(this).closest('.album-image');
		var width = $(this).attr('width');
		var height = $(this).attr('height');
		var grow = width / height;
		var shrink = 1;
		var basis = (grow*size)+'vmin'
		item.css('flex',grow +' '+ shrink +' '+ basis);
	});
	$(this).addClass('album-ready');
});