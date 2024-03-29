    $(".toggle-nav").click(function () {
        $('.nav-menu').css("left", "0px");
    });
    $(".mobile-back").click(function () {
        $('.nav-menu').css("left", "-410px");
    });

    $(".page-wrapper").attr("class", "page-wrapper "+localStorage.getItem("page-wrapper"));
    $(".page-body-wrapper").attr("class", "page-body-wrapper "+localStorage.getItem("page-body-wrapper"));

  // left sidebar and vertical menu
    if($('#pageWrapper').hasClass('compact-wrapper')){
          jQuery('.submenu-title').append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
          jQuery('.submenu-title').click(function () {
              jQuery('.submenu-title').removeClass('active');
              jQuery('.submenu-title').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
              jQuery('.submenu-content').slideUp('normal');
              if (jQuery(this).next().is(':hidden') == true) {
                  jQuery(this).addClass('active');
                  jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                  jQuery(this).next().slideDown('normal');
              } else {
                  jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
              }
          });
          jQuery('.submenu-content').hide();

          jQuery('.menu-title').append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
          jQuery('.menu-title').click(function () {
              jQuery('.menu-title').removeClass('active');
              jQuery('.menu-title').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
              jQuery('.menu-content').slideUp('normal');
              if (jQuery(this).next().is(':hidden') == true) {
                  jQuery(this).addClass('active');
                  jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                  jQuery(this).next().slideDown('normal');
              } else {
                  jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
              }
          });
          jQuery('.menu-content').hide();
    } else if ($('#pageWrapper').hasClass('horizontal-wrapper')) {
        var contentwidth = jQuery(window).width();
        if ((contentwidth) < '1200') {
            jQuery('.menu-title').append('<div class="according-menu">+</div>');
            jQuery('.menu-title').click(function () {
                jQuery('.menu-title').removeClass('active');
                jQuery('.menu-title').find('div').replaceWith('<div class="according-menu">+</div>');
                jQuery('.menu-content').slideUp('normal');
                if (jQuery(this).next().is(':hidden') == true) {
                    jQuery(this).addClass('active');
                    jQuery(this).find('div').replaceWith('<div class="according-menu">-</div>');
                    jQuery(this).next().slideDown('normal');
                } else {
                    jQuery(this).find('div').replaceWith('<div class="according-menu">+</div>');
                }
            });
            jQuery('.menu-content').hide();
        }

        var contentwidth = jQuery(window).width();
        if ((contentwidth) < '1200') {
            jQuery('.submenu-title').append('<div class="according-menu">+</div>');
            jQuery('.submenu-title').click(function () {
                jQuery('.submenu-title').removeClass('active');
                jQuery('.submenu-title').find('div').replaceWith('<div class="according-menu">+</div>');
                jQuery('.submenu-content').slideUp('normal');
                if (jQuery(this).next().is(':hidden') == true) {
                    jQuery(this).addClass('active');
                    jQuery(this).find('div').replaceWith('<div class="according-menu">-</div>');
                    jQuery(this).next().slideDown('normal');
                } else {
                    jQuery(this).find('div').replaceWith('<div class="according-menu">+</div>');
                }
            });
            jQuery('.submenu-content').hide();
        }
}

// toggle sidebar
$nav = $('.main-nav');
$toggle_nav_top = $('#sidebar-toggle');
$toggle_nav_top.click(function() {
  $this = $(this);
  $nav = $('.main-nav');
  $nav.toggleClass('close_icon');
});

$( window ).resize(function() {
  $nav = $('.main-nav');
  $toggle_nav_top = $('#sidebar-toggle');
  $toggle_nav_top.click(function() {
    $this = $(this);
    $nav = $('.main-nav');
    $nav.toggleClass('close_icon');
  });
});

$body_part_side = $('.body-part');
$body_part_side.click(function(){
  $toggle_nav_top.attr('checked', false);
  $nav.addClass('close_icon');
});

//    responsive sidebar
var $window = $(window);
var widthwindow = $window.width();
(function($) {
"use strict";
if(widthwindow+17 <= 991) {
    $toggle_nav_top.attr('checked', false);
    $nav.addClass("close_icon");
}
})(jQuery);
$( window ).resize(function() {
var widthwindaw = $window.width();
if(widthwindaw+17 <= 991){
    $toggle_nav_top.attr('checked', false);
    $nav.addClass("close_icon");
}else{
    $toggle_nav_top.attr('checked', true);
    $nav.removeClass("close_icon");
}
});

// page active
    $( ".main-navbar" ).find( "a" ).removeClass("active");
    $( ".main-navbar" ).find( "li" ).removeClass("active");

    var current = window.location.pathname
    $(".main-navbar ul>li a").filter(function() {

        var link = $(this).attr("href");
        if(link){
            if (current.indexOf(link) != -1) {
                $(this).parents().children('a').addClass('active');
                $(this).parents().parents().children('ul').css('display', 'block');
                $(this).addClass('active');
                $(this).parent().parent().parent().children('a').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                $(this).parent().parent().parent().parent().parent().children('a').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                return false;
            }
        }
    });
