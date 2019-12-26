$(document).ready(function () {

    !function ($) {
        "use strict";
        $(window).on('load',function () {
            var width = $(window).width();
            if (width <= 785) {
                $('.topbar-main').css('display','block');
            } else {
                $('.topbar-main').css('display','none');
            }
        }); 
    }

    })