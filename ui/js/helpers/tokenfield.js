//
// Tokenfield
// --------------------------------------------------

$('[data-tokenfield]').tokenfield({});

$('[data-tokenfield]').each(function(){
	var source = $(this).data('tokenfield-source');
	console.log(source);
	$(this).tokenfield({
		autocomplete: {
			source: eval('('+source+')'),
			delay: 100
		},
		showAutocompleteOnFocus: true
	});
});
