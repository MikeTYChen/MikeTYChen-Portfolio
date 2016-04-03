$( document ).ready(function() {
    $( window ).scroll(fixed_nav);
    fixed_nav();
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

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});