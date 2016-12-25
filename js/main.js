$( document ).ready(function() {
    $(document).on('click','.navbar-collapse',function(e) {
        console.log("close");
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });
    $( window ).scroll(fixed_nav);
    fixed_nav();
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function fixed_nav (){
	var pos = $(window).scrollTop();
	var panel1 = $('.top-project-panel').offset().top-50;
	if(pos>panel1){
		$( "#toggle-nav" ).css({'background-color': '#232323'});
		// $( "#toggle-nav" ).show( "drop", {direction: "up"}, 250 );
	}else{
		$( "#toggle-nav" ).css({'background-color': 'transparent'});
		// $( "#toggle-nav" ).hide( "slide", {direction: "up"}, 250 );
	}
}

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}