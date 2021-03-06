(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FireShell

    /********************************/
    /********************************/
    /*mobile accordion script start*/
    /********************************/
    /********************************/

    var _item = $('.accordion-item');

    _item.click(function () {
        $('.below-fold-mobi #landing-accordion-mobi .accordion-item img').removeClass('rotate');

        $(this).find('img').addClass('rotate');

        $('.accordion-content').css('height', '0');
        $(this).next('.accordion-content').css('height', '100px');

        if ($(this).next('.accordion-content').height() > 0) {
          $(this).next('.accordion-content').css('height', '0px');
        }

        if ($(this).next('div').height() !== 0) {
          $(this).next('.accordion-content').css('height', '0px');
          $(this).find('img').removeClass('rotate');
        }
      }
    );

    /********************************/
    /********************************/
    /*mobile accordion script end*/
    /********************************/
    /********************************/


    /********************************/
    /********************************/
    /*mobile menu script start*/
    /********************************/
    /********************************/

    var item = $('.item');
    var screenHeight;

    if ($(window).width() < 600) {
      screenHeight = $(window).height() - 55 - 100;
    }

    if ($(window).width() > 600) {
      screenHeight = $(window).height() - 100 - 100;
    }


    console.log(screenHeight);

    /*open menu*/
    $('.open-mobi-menu').click(function () {

      if ($('.mobi-menu-open-container').height() > 0) {
        $('.mobi-menu-open-container').css('height', '0');
        $(' body ').removeClass('no-scroll');
        console.log('close');
      }
      if ($('.mobi-menu-open-container').height() < 1) {
        $('.mobi-menu-open-container').css('height', screenHeight + 'px');
        $(' body ').addClass('no-scroll');
        console.log('open');
      }

    });


    /*open sub nav if one exists*/
    $('.open-item').click(function () {
      /*console.log($(this).next('div').find($('.item')).length);*/

      /*if the next div is a subnav -- do stuff*/
      if ($(this).next().hasClass('sub-nav')) {

        /*open sub nav if its closed*/
        if ($(this).next('div').height() === 0) {
          console.log('sub nav is closed');

          /*find the amount of menu items there are in sub nav*/
          var items = ($(this).next('div').find(item).length),
          /*find the amount of sub sub nav items there are*/
            subSubNavItems = $('.sub-sub-nav').find(item).length,
          /*calculate height of sub sub nav items*/
            subSubNavHeight,
            height;
          /*minus sub sub nav height so that the height of the sub nav doesnt include the items of the sub sub nav*/

          console.log(subSubNavItems);

          if ($(window).width() > 600) {
            subSubNavHeight = subSubNavItems * 60;
            height = items * 60 - subSubNavHeight;
          }

          if ($(window).width() < 600) {
            subSubNavHeight = subSubNavItems * 45;
            height = items * 45 - subSubNavHeight;
          }


          $(this).next('div').css('height', height);
          $(this).css('background-color', '#919294');
          $(this).css('border-bottom', 'none');
        }
        /*close sub nav*/
        else {
          console.log('sub nav is open');
          $(this).next('div').css('height', '0');
          $(this).css('background-color', '#77797b');
          $(this).css('border-bottom', '1px #4b4c4e solid');

          /*reset sub sub navs heights to 0*/
          $('.sub-sub-nav').css('height', '0');

        }
      }

      /*populate open item with selected language*/
      $('.language').click(function () {

        var selectedLanguage = $(this).find('p').text(),
          currentLanguage = $('.current-language');

        currentLanguage.find('p').text(selectedLanguage);
        $(this).parent().css('height', '0');
        currentLanguage.css('background-color', '#77797b');
        currentLanguage.css('border-bottom', '1px #4b4c4e solid');

      });

    });

    /*sub sub nav click*/
    $('.sub-nav .item').click(function () {

      if ($(this).next().hasClass('sub-sub-nav')) {

        /*find the amount of menu items there are in sub sub nav*/
        var items = ($(this).next('div').find(item).length),
        /*calculate the height of the sub sub nav*/
          height,
        /*find the parent of sub sub nav*/
          parent = $(this).parent(),
          parentHeight = $(this).parent().height();

        if ($(window).width() > 600) {
          height = items * 60;
        }

        if ($(window).width() < 600) {
          height = items * 55;
        }


        /*if the sub sub nav is closed*/
        if ($(this).next('div').height() === 0) {

          /*apply height edits*/
          $(this).next('div').css('height', height);
          parent.css('height', parentHeight + height);

        }

        /*if sub sub nav is open*/
        else {
          console.log('sub sub nav exists and is open');
          /*reset sub sub navs heights to 0*/
          $('.sub-sub-nav').css('height', '0');

          parent.css('height', parentHeight - height);

        }
      }

    });

  });

  /********************************/
  /********************************/
  /*mobile menu script end*/
  /********************************/
  /********************************/


  /********************************/
  /********************************/
  /*popup script start*/
  /********************************/
  /********************************/


  /*language popup*/
  $('.language-select').click(function () {
    $('.landing-container').addClass('blur');
    $('.main-container').addClass('blur');
    $(' body ').addClass('no-scroll');
    $('.languages').fadeIn('fast');

  });


  /*login popup*/
  $('.login-select').click(function () {
    $('.landing-container').addClass('blur');
    $('.main-container').addClass('blur');
    $(' body ').addClass('no-scroll');
    $('.login').fadeIn('fast');

  });


  /*register popup*/
  $('.tap-now').click(function () {
    $('.landing-container').addClass('blur');
    $('.main-container').addClass('blur');
    $(' body ').addClass('no-scroll');
    $('.register').fadeIn('fast');

  });

  /*register popup*/
  $('.play-now').click(function () {
    $('.modal-container.moreInfo').css('display', 'none');
    $('.landing-container').addClass('blur');
    $('.main-container').addClass('blur');
    $(' body ').addClass('no-scroll');
    $('.register').fadeIn('fast');

  });


  /*MoreInfo popup*/
  $('.more-info').click(function () {
    $('.landing-container').addClass('blur');
    $('.main-container').addClass('blur');
    $(' body ').addClass('no-scroll');
    $('.moreInfo').fadeIn('fast');

  });


  /*language selecting*/
  $('.language-selection').click(function () {
    $('.main-container').addClass('blur');
    var selectedLanguage = $(this).find('p').text();
    $('.selection-container .language-select span').text(selectedLanguage);
    closeModal();
  });


  /*gameControl sign up click*/
  $('.gameSignUp').click(function () {
    $('.main-container').addClass('blur');
    $(' body ').addClass('no-scroll');
    $('.register').fadeIn('fast');
  });

  /*myAccount popup*/
  $('.myAccountBtn').click(function () {
    $('.landing-container').addClass('blur');
    $('.main-container').addClass('blur');
    $(' body ').addClass('no-scroll');
    $('.myAccount').fadeIn('fast');

  });


  /*for demo purposes ONLY*/

  /*gameControl play click*/
  /*this is just for mockup purposes*/
  $('.gamePlayNow').click(function () {
    $(location).attr('href', '../../games-overlay-wide.html');
  });

  $('.register .modal-content .reg1 .frame2 .inner .registerSubmitBox .registerSubmitBut').click(function () {
    $(this).parent().parent().parent().parent().fadeOut('fast');
    $('.reg2').fadeIn('fast');
    $('.modal-content').animate({
      scrollTop: 0
    }, 'slow');
  });

  $('.register .modal-content .reg2 .register2SubmitBox input').click(function () {
    $(this).parent().parent().fadeOut('fast');
    $('.reg3').fadeIn('fast');
    $('.modal-content').animate({
      scrollTop: 0
    }, 'slow');
  });

  $('.register .modal-content .reg3 .frame2 .inner .registerClaimBox .registerClaimBut').click(function () {
    $(location).attr('href', '../../desktop-home-mockup.html');
  });

  $('.regTxt').click(function () {
    $('.register').css('display', 'none');
    $('.landing-container').addClass('blur');
    $('.main-container').addClass('blur');
    $(' body ').addClass('no-scroll');
    $('.login').fadeIn('fast');
  });

  /*close modals*/


  /*close modal function*/
  function closeModal() {
    $('.landing-container').removeClass('blur');
    $(' body ').removeClass('no-scroll');
    $('.main-container').removeClass('blur');
    $('.modal-container').fadeOut('fast');
  }

  /*close button click*/
  $('.close-modal').click(function () {
    $('.landing-container').removeClass('blur');
    $('.main-container').removeClass('blur');
    $(' body ').removeClass('no-scroll');
    $(this).parent().parent().fadeOut('fast');
  });


  /*on mobile login popup... hide login and show register modal*/


  /********************************/
  /********************************/
  /*popup script end*/
  /********************************/
  /********************************/


  /********************************/
  /********************************/
  /*desktop header script start*/
  /********************************/
  /********************************/

  var body = $(' body ');

  if (body.hasClass('loggedout')) {
    console.log('show logged out content');
    $('header .outer .inner .nav-container .selection-container .login-select').css('display', 'table');
    $('header .outer .inner .nav-container .selection-container .logout-select').css('display', 'none');
    $('header .outer .inner .nav-container .hamburger').css('display', 'block');
    $('header .outer .inner .nav-container .buttons-container').css('display', 'none');
  }

  else if (body.hasClass('loggedin')) {
    console.log('show logged in content');
    $('header .outer .inner .nav-container .social-container').css('display', 'none');
    $('header .outer .inner .nav-container .selection-container .language-select').css('display', 'none');
    $('header .outer .inner .nav-container .selection-container .login-select').css('display', 'none');
    $('header .outer .inner .nav-container .selection-container .logout-select').css('display', 'table');
    $('header .outer .inner .nav-container .hamburger').css('display', 'none');
    $('header .outer .inner .nav-container .buttons-container').css('display', 'block');
  }

  $('.hamburger').click(function () {
    event.stopPropagation();
    $('header .outer .navigation-container .nav-items-outer').fadeToggle('fast');
    $('header .outer .navigation-container .nav-items-outer .sub-nav').css('display', 'none');
    $('header .outer .navigation-container .nav-items-outer .sub-nav .sub-sub-nav').css('display', 'none');
  });


  $('.nav-item').click(function () {

    event.stopPropagation();

    if ($(this).next('div').hasClass('sub-nav')) {

      $(this).next('div').fadeToggle('fast');

    }

  });

  $(document).click(function () {
    $('.nav-items-outer').css('display', 'none');
  });


  $('.nav-item').mouseenter(function () {
    event.stopPropagation();
    $('.sub-nav').stop(true, true).css('display', 'none');
    $('.sub-sub-nav').stop(true, true).css('display', 'none');
    $(this).next('div').stop(true, true).css('display', 'block');
  });


  $('.sub-nav .sub-nav-item').mouseenter(function () {
    event.stopPropagation();
    $(this).parent().stop(true, true).css('display', 'block');
    $('.sub-sub-nav').stop(true, true).css('display', 'none');

    if ($(this).next('div').hasClass('sub-sub-nav')) {
      event.stopPropagation();
      $(this).next('div').stop(true, true).fadeIn('fast');
    }
  });


  $('.sub-nav .sub-nav-item').mouseleave(function () {
    if ($(this).next('div').hasClass('sub-sub-nav')) {
      console.log('in');
      $(this).next('div').stop(true, true).css('display', 'block');
    }
  });


  $('.sub-nav .sub-nav-item .sub-sub-nav-item').mouseenter(function () {
    $(this).parent().stop(true, true).css('display', 'block');
  });



  if ($('.games-overlay').css('display', 'block') && $(window).height() < 824) {
    $('.games-overlay.modal-container .modal-content .close-modal-game').css({'right': '0', 'z-index': '100'});
  }


  /********************************/
  /********************************/
  /*desktop header script end*/
  /********************************/
  /********************************/


  /********************************/
  /********************************/
  /*games header script start*/
  /********************************/
  /********************************/
  var padding,
    subMenuHeight;

  $('.games-header-item').mouseenter(function () {

    if ($(window).width() > 1024) {
      padding = $('.games-header-item').index($(this)) * $('.games-header-item').width() - $('.games-header-item').width() / 5;
      subMenuHeight = '65px';
    }
    if ($(window).width() < 1024) {
      padding = $(window).width() / 100;
      subMenuHeight = '65px';
    }
    if ($(window).width() < 600) {
      subMenuHeight = '35px';
    }


    $(this).css('background-color', '#ffffff');

    $(this).find('.icon').addClass('hover');
    $(this).find('.title span').css('color', '#960f22');

    if ($(this).next('div').hasClass('games-header-sub-item')) {

      $(this).next('div').css('height', subMenuHeight);
      $(this).next('div').css('padding-left', padding);

    }

  });


  $('.games-header-item').mouseleave(function () {
    $(this).css('background-color', '#960f22');
    $(this).find('.icon').removeClass('hover');

    $(this).find('.title span').css('color', '#ffffff');


    if ($(this).next('div').hasClass('games-header-sub-item')) {
      $(this).next('div').css('height', '0');
    }

  });

  $('.games-header-sub-item').mouseenter(function () {
    $(this).css('height', subMenuHeight);
    $(this).prev('div').css('background-color', '#ffffff');
    $(this).prev('div').find('.icon').addClass('hover');
    $(this).prev('div').find('.title span').css('color', '#960f22');
  });

  $('.games-header-sub-item').mouseleave(function () {
    $(this).css('height', '0');
    $(this).prev('div').css('background-color', '#960f22');
    $(this).prev('div').find('.icon').removeClass('hover');
    $(this).prev('div').find('.title span').css('color', '#ffffff');
  });


  /*open search text*/
  $('.games-header-container .games-header-container-inner .search-container .search-icon').click(function () {

    $('.games-header-container .games-header-container-inner .search-container').toggleClass('open-search');


    $('.games-header-container .games-header-container-inner .search-container').toggleClass('open-search-z');


  });


  /********************************/
  /********************************/
  /*games header script end*/
  /********************************/
  /********************************/


  /********************************/
  /********************************/
  /*games control script start*/
  /********************************/
  /********************************/

  /*add a break to the text if there is a : */
  $('.gameItemTitle:contains(":")').html(function () {
    return $(this).html().replace(':', ':' + '<br />');
  });


  /*games overlay*/
  $('.games-overlay .modal-content .inner h1').click(function () {
    $(this).parent().toggleClass('games-overlay-open');
  });

  /********************************/
  /********************************/
  /*games control script end*/
  /********************************/
  /********************************/


  /********************************/
  /********************************/
  /*tournaments script start*/
  /********************************/
  /********************************/

  /*$(".tab-content").hide();*/
  $('.tab-link').click(function (e) {


    e.preventDefault();
    $('.tab-content').hide();
    $('ul.tabs li').removeClass('current');
    $(this).addClass('current');

    var tabRef = $(this).attr('data-tab');

    $('#' + tabRef).show();
  });


  /*/!*tournament table tabs *!/
   $('ul.tabs li').click(function(){
   var tab_id = $(this).attr('data-tab');

   $('ul.tabs li').removeClass('current');
   $('.tab-content').removeClass('current');

   $(this).addClass('current');
   $("#"+tab_id).addClass('current');
   });*/


  $('.show-tournament-dropdown').click(function () {
    $(this).toggleClass('red-highlight');
    $(this).next('.tournaments-container table tbody tr').toggleClass('show-tournament-details');
  });

  /********************************/
  /********************************/
  /*tournaments script end*/
  /********************************/
  /********************************/


})(jQuery, window, document);
