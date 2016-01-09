$( document ).ready(function() {
    $( window ).scroll(fixed_nav);
    fixed_nav();
});

function fixed_nav (){
	var pos = $(window).scrollTop();
	var panel1 = $('.panel-2').offset().top;
	var boolPos;
	if(pos>panel1){
		$( "#toggle-nav" ).show( "drop", {direction: "up"}, 250 );
	}else{
		$( "#toggle-nav" ).hide( "slide", {direction: "up"}, 250 );
	}
}