$('.nav-tabs a[data-toggle="tab"]').click(function(e) {
	var scroll = $(document).scrollTop();
	var tabs = $(this).closest('.nav-tabs');
	window.location.hash = this.hash;
	$("html, body").scrollTop( tabs.offset().top );
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	var target = this.href.split('#');
	var tab = $('.nav a').filter('[href="#'+target[1]+'"]');
	var tabs = tab.closest('.nav-tabs');
	$("html, body").scrollTop( tabs.offset().top );
	tab.tab('show');
});

$(document).on('click','[data-toggle="collapse"]',function(e) {
	e.preventDefault();
});

$(document).tooltip({
	selector: '[data-toggle="tooltip"]',
	placement: function(tip,element){
		return ( $(element).attr('data-placement') ) ? $(element).attr('data-placement') : 'right';
	},
	container: 'body'
});

$('[data-toggle=popover]').popover({container: 'body', html: true});

$(document).on('focus','.field .field-input',function(){
	var field = $(this).closest('.field');
	$('.field').not(this).removeClass('field-focus').find('.dropdown').removeClass('open');
	field.addClass('field-focus');
	if ( $(this).closest('.dropdown').length ) {
		var dropdown = $(this).closest('.dropdown');
		var timer = setTimeout(function(){ 
			dropdown.addClass('open');
		},10);
	}
});

$(document).on('blur','.field .field-input',function(){
	var focus = $('*:focus');
	var field = $(this).closest('.field');
	if ( !field.find(focus) ) {
		field.removeClass('field-focus');
		if ( $(this).closest('.dropdown').length ) {
			$(this).closest('.dropdown').removeClass('open');
		}
	}
});

$(document).on('click','.field .form-control-options',function(){
	return false;
});

$('a.form-control-options').keydown(function(e){
	var menu = $(this).closest('.dropdown').find('.dropdown-menu-options');
	var options = menu.find('input[type="checkbox"]');
	switch(e.which){
		case 38: // up
			e.preventDefault();
			options.get(options.length - 1).focus();
			break;
		case 40: // down
			e.preventDefault();
			options.get(0).focus();
			break;
	}
});

$('.dropdown-menu-options input[type="checkbox"]').keydown(function(e){
	var menu = $(this).closest('.dropdown-menu-options');
	var options = menu.find('input[type="checkbox"]');
	switch(e.which){
		case 38: // up
			e.preventDefault();
			options.get((options.index(this) - 1) % options.length).focus();
			break;
		case 40: // down
			e.preventDefault();
			options.get((options.index(this) + 1) % options.length).focus();
			break;
	}
});

$(document).on('focus','.dropdown-menu-options input[type="checkbox"]',function(){
	$(this).closest('.dropdown-menu-item').addClass('active');
});
$(document).on('blur','.dropdown-menu-options input[type="checkbox"]',function(){
	$(this).closest('.dropdown-menu-item').removeClass('active');
});


// ------------------------------------ CAROUSELS ------------------------------------

$('[data-carousel]').carousel();
