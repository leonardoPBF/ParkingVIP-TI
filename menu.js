jQuery('document').ready(function($){

    var menuBtn = $('.navbarMenu'),
    menu = $('.links');

    menuBtn.click(function(){

        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }

    });

});