$(() => {

    
    const reverse = () => {
        $('#imgDIAM').animate({
            width: '400px',
            height: '400px',
            opacity: 1
        }, 5000, 'linear')
    }

    const functionComplete = () => {
        console.log('Function Finished')
    }

     $('#textDIAM').toggle(9000, 'linear', functionComplete);

     setTimeout(() => {
        $('#textDIAM').toggle(9000, 'swing', functionComplete);
    }, 1000);

        $('#imgDIAM').animate({
            width: '800px',
            height: '800px',
            opacity: 0.7
        }, 5000, 'swing', reverse)

     $('#textEOAS').fadeOut(500, 'linear', functionComplete);
     $('#imgEOAS').fadeOut(500, 'linear', functionComplete);

    //  $('#textGIAB').fadeTo(900, 0.4, functionComplete);
    // await $('#imgGIAB').fadeTo(900, 0.4, functionComplete);

    //  $('#textGIAB').fadeToggle(functionComplete)
    //  $('#imgGIAB').fadeToggle(functionComplete)
    //  $('#textGIAB').fadeToggle(functionComplete)
    //  $('#imgGIAB').fadeToggle(functionComplete)

    //  $('#textEOAS').fadeIn(500, 'swing', functionComplete);
    //  $('#imgEOAS').fadeIn(500, 'swing', functionComplete);

    //  $('#textSOAD').slideUp(800, 'swing', functionComplete);
    //  $('#imgSOAD').slideDown(800, 'linear', functionComplete);

    //  $('#textSOAD').slideToggle();
    //  $('#imgSOAD').slideToggle();
    //  $('#imgSOAD').slideToggle();






})
