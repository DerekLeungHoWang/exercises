$(function(){

    $('tbody').append(
        `<tr class="row" id="row-3">
        <td> Peter </td>
        <td> 123456789 </td>
        <td> peter@gmail.com</td>
        </tr>`);


    $('#row-submit').append('<input type="reset" value="clear" id="clear-input" class="clear" /> ')
   
    $('#header').html('<h1> Sam\'s contact list application </h1>')

    $('.name').on('keydown', function(e){
        var input = e.target.value;
        console.log(input)
        if(input.length>50){
            $(this).css('border', 'solid 2px red');

        } else{
            $(this).css('border', 'solid 1px green')
        }
    });
});