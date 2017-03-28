//
// File Input Buttons
// --------------------------------------------------

$(document).on('change','input[type="file"]',function(){
	var btn = $(this).closest('.btn');
	var files = this.files;
	if ( btn.length ) {
		switch ( files.length ) {
			case 0: btn.removeAttr('data-value'); break;
			case 1: btn.attr('data-value',files[0].name); break;
			default: btn.attr('data-value',files.length+' files'); break;
		}
	}
});

//
// Set Focus on Ready
// --------------------------------------------------

var focus = $('.ready-focus').find('input, select, textarea').filter(':visible').filter(':first');
if ( focus ) { focus.focus(); }