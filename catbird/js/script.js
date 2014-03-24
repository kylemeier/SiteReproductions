	menu        = $('#navbar-toggle');

	$('#navicon').click(function(){
		menu.slideToggle(300);
	});

$(window).resize(function(){
    var w = $(window).width();  
    if(w > 1000 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});