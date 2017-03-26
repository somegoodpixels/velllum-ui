$('[data-suggest]').each(function(){
	var data = $(this).data('suggest-data');
	var start = $(this).data('suggest-start');
	var map = $(this).data('suggest-map');
	var config = {};
	if ( data ) { config.data = eval('('+data+')'); }
	if ( map ) { config.map = function(item){return eval('('+map+')') }; }
	$(this).suggest(start,config);
});
