//=include ./libraries/jquery.3.3.1.js
//=include ../blocks/header/header.js

$(document).ready(function () {
    header('this is string to header.js')

    blocksAnimAtScroll();
    popup();
    anchorAnim();
    subMenuAnim();
    burgerClicks();
    subMenuClicks();
    catClicks();           
})

function blocksAnimAtScroll (){
    $(window).scroll(function(){
        var target = $('.cases');
        var targetPos = target.offset().top;
        var winHeight = $(window).height();
        var scrollToElem = targetPos - winHeight;
        var winScrollTop = $(this).scrollTop();
        console.log(winScrollTop);
        if(winScrollTop > scrollToElem){
            //сработает когда пользователь доскроллит к элементу с классом .elem
            console.log('rabotaet');
        }
    });
}

function popup(){
    $('.popup-event').on('click', function(){
        $('.popup').toggleClass('popup-active');
        $('html').css('overflow','hidden');
    })
    $('.popup-content__close-btn').on('click', function(){
        event.preventDefault();
        $('.popup').toggleClass('popup-active');
        $('html').css('overflow','auto');
    })
}

function anchorAnim(){
    $('.nav-list-item__link, .footer-upbutton__link').on('click', function(){
        event.preventDefault();
        var target = $(this).attr('href');
        console.log(target);
        if($(window).width() > 1200){
            if($(this).attr('href') === '#'){
                event.preventDefault();
            } else {
                $('html, body').animate({
                    scrollTop: $('.' + target).offset().top
                }, 300);
            }
        } else {
            if($('.header-bottom').hasClass('header-bottom__active')){
                if($(this).attr('href') === '#'){
                    event.preventDefault();
                } else {
                    $('.header-bottom').removeClass('header-bottom__active');
                    $('.burger-btn').addClass('burger-btn__active');
                    $('html').css({'overflow': 'auto'})
                }
            }
            $('html, body').animate({
                scrollTop: $('.' + target).offset().top - $('header').height()
            }, 300);
        }
    })
}

function subMenuAnim(){
    // sub-menu anim
        $('.nav-list__item').not('.sub-menu').on('mouseenter', function(){
            $(this).find('.sub-menu').addClass('sub-menu-active');
        });
        $('.sub-menu').on('mouseleave', function(){
            $(this).removeClass('sub-menu-active');
        });
}

function burgerClicks(){
    // mobile-menu
        // burger click
        $('.burger-btn__link').on('click', function(){
            event.preventDefault();
            if($('.burger-btn').hasClass('burger-btn__active')){
                $('.burger-btn').removeClass('burger-btn__active');
                $('.header-bottom').addClass('header-bottom__active');
                $('html').css({'overflow': 'hidden'})
            }
        })
        // back-btn click
        $('.burger-back-btn__link').on('click', function(){
            event.preventDefault();
            if($('.header-bottom').hasClass('header-bottom__active')){
                $('.header-bottom').removeClass('header-bottom__active');
                $('.burger-btn').addClass('burger-btn__active');
                $('html').css({'overflow': 'auto'})
            }
        })
}
function subMenuClicks(){
    $('.nav-list__item').on('click', function(){
        if($(this).children('.sub-menu')){
            $('.sub-menu', this).toggleClass('sub-menu__active');
        }
    })
}
function catClicks(){
    $('.influence-content').css({'display':'none'});
    $('.cat-link').on('click', function(){
        event.preventDefault();
        $('.cat-link').removeClass('service-variables__item-active');
        $('.cat-link').removeClass('service-variables__item-non-active');
        $('.cat-link').removeClass('categories-link__active');
        if($(this).data('target') === 'digital'){
            $('.service-variables__item[data-target=digital').addClass('service-variables__item-active');
            $('.categories-link[data-target=digital').addClass('categories-link__active');
            $('.service-variables__item[data-target=influence').addClass('service-variables__item-non-active');
            $('.influence-content').css({'display':'none'});
            $('.digital-content').css({'display':'block'});
            var target = $('.digital-content').eq(0);
            if($(window).width() > 1200){
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 300);
            } else {
                $('html, body').animate({
                    scrollTop: $(target).offset().top - $('header').height()
                }, 300);
            }
        }
        if($(this).data('target') === 'influence'){
            $('.service-variables__item[data-target=influence').addClass('service-variables__item-active');
            $('.categories-link[data-target=influence').addClass('categories-link__active');
            $('.service-variables__item[data-target=digital').addClass('service-variables__item-non-active');
            $('.influence-content').css({'display':'block'});
            $('.digital-content').css({'display' : 'none'});
            var target = $('.influence-content').eq(0);
            if($(window).width() > 1200){
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 300);
            } else {
                $('html, body').animate({
                    scrollTop: $(target).offset().top - $('header').height()
                }, 300);
            }
        }
    })
}