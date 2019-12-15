
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 900
    });


    $(window).scroll(function(){
        if($(document).scrollTop() > 50){
            $('#navbar').addClass('scrolled')
            $('#navbar').removeClass('navbar')

        } else if  ($(document).scrollTop() < 50 ) {
            $('#navbar').removeClass('scrolled')
            $('#navbar').addClass('navbar')

        }
    })



    /*


    $(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
      if ($(document).scrollTop() >= 50) { // check if user scrolled more than 50 from top of the browser window
        $('.navbar').toggleClass('scrolled',$(this).scrollTop() > $('.nav').height());
        $('#navbar').removeClass('navbar');
        $('#navbar').addClass('navbar-scrolled');
        $('#navbar-brand').removeClass('navbar-brand');
        $('#navbar-brand').addClass('navbar-brand-scrolled');
        $('.navitem').css('color', 'black');
        $('.navbar-toggler').css('border-color', 'black');
        $('.navbaricon').css('color', 'black');
        $('#btn-outline1').removeClass('btn-outline1');
        $('#btn-outline1').addClass('btn-outline1-scrolled');
  
      } else if ($(document).scrollTop() < 50 ) { //if the scrollbar is less than 50 px from the top it goes back to transparency 
        $('#navbar').removeClass('navbar-scrolled');
        $('#navbar').addClass('navbar');
        $('#navbar-brand').removeClass('navbar-brand-scrolled');
        $('#navbar-brand').addClass('navbar-brand');
        $('.navitem').css('color', 'white');
        $('.navbar-toggler').css('border-color', 'white');
        $('.navbaricon').css('color', 'white');
        $('#btn-outline1').removeClass('btn-outline1-scrolled');
        $('#btn-outline1').addClass('btn-outline1');
        // $('.nav-link').addClass('whiteNav');
      }
    });
  }); 
  
  */