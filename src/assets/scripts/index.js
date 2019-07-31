//=include ./libraries/jquery.3.3.1.js
//=include ../blocks/header/header.js

$(document).ready(function () {
    header('this is string to header.js')


    // sub-menu anim
        $('.nav-list__item').not('.sub-menu').on('mouseenter', function(){
            $(this).find('.sub-menu').addClass('sub-menu-active');
        });
        $('.sub-menu').on('mouseleave', function(){
            $(this).removeClass('sub-menu-active');
        });
})
