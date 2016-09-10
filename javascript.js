/*PORTFOLIO JAVASCRIPT FILE */

/*CHANGE THE CSS CLASS OF THE NAVBAR WHEN USER SCROLLS PAST THE TOP "ABOUT" SECTION*/

/* gets the value of the height of the about section as variable so we can use it below to find out
when we've scrolled past it */
var mainbottom = $('#about').offset().top + $('#about').height();


$(window).on('scroll',function(){

    // we round here to reduce a little workload
    var stop = Math.round($(window).scrollTop());

    if (stop > mainbottom) {
    	$('.navbar').addClass('navbar-past-main');
        $('.navbar-right').addClass('past-main');
        $('.navbar-brand').addClass('brand-past-main');
    } else {
    	$('.navbar').removeClass('navbar-past-main');
        $('.navbar-right').removeClass('past-main');
        $('.navbar-brand').removeClass('brand-past-main');
    }

});



$("#button").click(function(){
      
      $("#ranQuote").html("JQuery works");
    });