//=include ./libraries/jquery.3.3.1.js
//=include ../blocks/header/header.js

$(document).ready(function () {
    header('this is string to header.js')


    // sub-menu anim
        $('.nav-list__item').not('.sub-menu').on('mouseenter', function(){
            $(this).find('.sub-menu').css({
                transform : 'translateY(36px) translateX(-50%)',
                opacity : '1',
                display : 'flex',
                'z-index' : '10'
            })
        })
        $('.sub-menu').on('mouseleave', function(){
            $(this).css({
                transform : 'translateY(55px) translateX(-50%)',
                opacity : '0'
            })
            setTimeout(function(){
                $('.sub-menu').css({
                    display : 'none',
                    'z-index' : '10'
                });
            }, 300)
        })
})
