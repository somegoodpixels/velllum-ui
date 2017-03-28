$.ajaxSetup({ cache: true });

// ------------------------------------ ASYNC LOADERS ------------------------------------

function loadHelper(path,el,before,style){
	function loadJS(){ if ( !el || $(el).length ) { $.getScript(window.velllum.directory+'/ui/js/helpers/'+path); } }
	if ( before ) { $.getScript(window.velllum.directory+before).done(function(){ loadJS(); }) } else { loadJS(); }
	if ( style ) { var head  = document.getElementsByTagName('head')[0]; var link  = document.createElement('link'); link.rel  = 'stylesheet'; link.type = 'text/css'; link.href = window.velllum.directory+style; link.media = 'all'; head.insertBefore( link, head.firstChild ); }
}

// ------------------------------------ COOKIES ------------------------------------

function set_cookie(name,value,days) { var d = new Date(); d.setTime(d.getTime() + ((days?days:60)*24*60*60*1000)); var expires = "expires="+ d.toUTCString(); document.cookie = name + "=" + value + ";" + expires + ";path=/"; }
function get_cookie(cname) { var name = cname + "="; var ca = document.cookie.split(';'); for(var i = 0; i <ca.length; i++) { var c = ca[i]; while (c.charAt(0)==' ') { c = c.substring(1); } if (c.indexOf(name) == 0) { return c.substring(name.length,c.length); } } return ""; }
function get_params() { if ( window.location.href.indexOf('?') == -1 ) { return []; } var vars = [], hash; var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'); for(var i = 0; i < hashes.length; i++) { hash = hashes[i].split('='); vars[hash[0]] = hash[1]; } return vars; }
function get_param(name) { var params = get_params(); return ( params[name] ) ? params[name] : false; }

// ------------------------------------ CLASSES ------------------------------------

// adds modernizer classes to wrapper element
$('div.ti').addClass($('html').attr('class')).removeClass('wf-loading wf-inactive');

// adds specialty classes to body
$(document).on('ready',function(){ $('html').addClass('ready'); });
$(window).on('load',function(){ $('html').addClass('loaded'); });
if ( 'ontouchstart' in window ) { $('html').addClass('touch'); }
function is_touch(){ return ( 'ontouchstart' in window ); }

// ------------------------------------ TABS ------------------------------------

var hash = window.location.hash, tab = $('.nav-tabs a[href="'+hash+'"]'), pane = $(hash);
if ( hash && tab.length && pane.length ) {
	tab.closest('li').addClass('active').siblings('li').removeClass('active');
	pane.addClass('active in').siblings('.tab-pane').removeClass('active in');
	$("html, body").scrollTop( tab.closest('.nav-tabs').offset().top );
}

// ------------------------------------ SHOWHIDE ------------------------------------

// alternate collapse toggle
$(document).on('click','[data-toggle="slide"]',function(){ var targets = $($(this).attr('data-target')); targets.each(function(){ if ( $(this).is(':visible') ) { $(this).hide(); } else { $(this).removeClass('hidden').removeAttr('hidden').show(); } }); return false; });

// ------------------------------------ ANCHORS ------------------------------------

// scroll to page section
$(document).on('click','a[href^="#"]:not("[data-toggle]")',function(e){ var target = $($(this).attr('href')); if (target.length === 0) { return; } e.preventDefault(); var timer = setTimeout(function(){ $('html,body').animate({scrollTop:(target.offset().top)},750,'swing'); },1); });

// ------------------------------------ SCROLLING ------------------------------------

var prevscroll = 0;
function scroll_classes(){
	var nextscroll = $(document).scrollTop();
	if ( nextscroll > prevscroll ) { $('html').addClass('page-scrolling page-scrolling-down').removeClass('page-scrolling-up'); }
	if ( nextscroll < prevscroll ) { $('html').addClass('page-scrolling page-scrolling-up').removeClass('page-scrolling-down'); }
	if ( nextscroll == 0 ) { $('html').removeClass('page-scrolling page-scrolling-up page-scrolling-down'); }
	prevscroll = nextscroll;
}

$(window).scroll(function(){ scroll_classes(); });
$(window).resize(function(){ scroll_classes(); });
$(document).ready(function(){ scroll_classes(); });

// ------------------------------------ FOCUS SET ------------------------------------

$(document).on('click','[data-focus]',function(){ var el = $(this); var timer = setTimeout(function(){ $(el.attr('data-focus')).find('input:visible:first').focus(); },1); });

// ------------------------------------ SCROLL INTO VIEW ------------------------------------

function updateScrollFocus(){
	var wintop = $(document).scrollTop(), winheight = $(window).height(), winmiddle = wintop + winheight/2, winbottom = wintop + winheight;
	$('[data-scrollfocus]').each(function(){
		var top = $(this).offset().top, bottom = top + $(this).outerHeight(), middle = ( top + bottom ) / 2;
		if ( middle < winbottom && bottom > wintop ) {
			$(this).addClass('scrollfocus'); $(this).removeClass('not-scrollfocus');
		} else {
			$(this).addClass('not-scrollfocus'); $(this).removeClass('scrollfocus');
		}
	})
}
$(window).scroll(function(){ updateScrollFocus(); });
$(document).ready(function(){ updateScrollFocus(); });

// ------------------------------------ BACKGROUNDS ------------------------------------

// background images
$(document).ready(function(){ $('[data-bg]').each(function(){ var el = $(this), bg = $(this).data('bg'); if ( bg ) { var timer = setTimeout(function(){ el.css('background-image','url('+bg+')'); },1); } }); });

// ------------------------------------ VIDEO WRAPPER ------------------------------------

// video iframes
$(document).ready(function(){ $('iframe[src*=vimeo], iframe[src*=youtube]').each(function(){ if ( !$(this).closest('.video') ) { $(this).wrap('<div class="video" />'); } }); });

// ------------------------------------ HELPERS ------------------------------------

loadHelper('jqueryui.js','[data-toggle="autocomplete"], [data-toggle="datepicker"]','/ui/jqueryui/jquery-ui-1.12.1/jquery-ui.min.js','/ui/jqueryui/jquery-ui-1.12.1/jquery-ui.structure.min.css');
loadHelper('bootstrap.js',false,'/ui/bootstrap/js/bootstrap.min.js');
loadHelper('suggest.js','[data-suggest]','/ui/suggest/js/bootstrap-suggest.js','/ui/suggest/css/bootstrap-suggest.css');
loadHelper('validator.js','[data-toggle="validator"]','/ui/bootstrap-validator/dist/validator.min.js');
loadHelper('forms.js');
loadHelper('tokenfield.js',false,'/ui/tokenfield/dist/bootstrap-tokenfield.min.js');
loadHelper('album.js','.album');
