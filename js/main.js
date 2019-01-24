$(document).ready(function ($) {

    //------ Menu fixed -------//

    var nav = $(".bg_wight");

    var logoPc = $(".logo.pc").parent("a");

    var logoMob = $(".logo.mob");
   $(window).on('scroll',function () {
       if ($(this).scrollTop() > 100) {
           nav.addClass("f-nav");
           logoPc.fadeOut(0);
           logoMob.fadeIn();
           $(".top_header ul li a, .block_menu_top .tel-lang button, .block_menu_top .tel-lang a,.block_menu_top .tel-lang #sherch ").css({
               color:"#3c3939",
               fill:"#3c3939"
           });

           $(".top_header #nav-icon span").css('background', "#3c3939");
       } else {
           nav.removeClass("f-nav");
           logoPc.fadeIn();
           logoMob.fadeOut(0);
           $(".top_header ul li a,.block_menu_top .tel-lang button, .block_menu_top .tel-lang a,.block_menu_top .tel-lang a,.block_menu_top .tel-lang #sherch ").css({
               color: "",
               fill:""
           });

           $(".top_header #nav-icon span").css('background', "");
       }
   });

   //----- Cherch form top-----//

    $(".block_menu_top .tel-lang svg").on("click",function () {
        $(".block_menu_top .tel-lang  .sherch_in_header").toggleClass('hover-on')
    });

    //------ End Menu fixed -------//

    //---- Mobail menu ---//
    $('.click-in').click(function () {

        $(".nav-icon1").toggleClass('open');
        $(".nav-icon-line1").toggleClass('openTo');
        //$('#wrapper').toggleClass('over');
        $("header .container_hide_menu").toggleClass('opener1');

    });

    $(window).resize(function () {
      /*  if(window.outerWidth >= 768){
            $("header .top_menu").removeClass('opener');
            $("#nav-icon").attr('class','');

        }*/

    });
    //---- End Mobail menu ---//

    //--- Form ---//

    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        callbacks: {
            beforeOpen: function() {
                jQuery('body').css('overflow', 'hidden');
            },
            beforeClose: function() {
                jQuery('body').css('overflow', 'auto');
            }
        }
    });

    //--- End From --//

    //--- From validation ---//

    $(".form").validate({
        success: "valid",
        rules: {
            name: {
                minlength: 3,
                required: true,
            },
            tel: {
                required: true,
                minlength: 5,
            },
            email: {
                required: true,
                minlength: 5,
                email: true
            },
        },
        messages: {
            name: "Ваше имя",
            tel: "Ваш телефон",
            email: "Введите Вашу почту"
        },
        submitHandler: function(form) {
            $.ajax({
                url: form.action,
                type: form.method,
                data: $(form).serialize(),
                success: function(response) {
                    $(form)[0].reset();
                    $(".mfp-close").trigger("click");
                    $('#answers').fadeIn(400).delay(2000).fadeOut(1000);

                }
            });
        }
    });

    $(".video_box video").on("click",function(){
        this.play();
    });


    $(".tel img").on("click",function () {
        console.log(this);
        $(".tel").toggleClass("openMenu");
    });

    $(".email img").on("click",function () {
        console.log(this);
        $(".email").toggleClass("openMenu");
    });



    $(".container_hide_menu>ul>li>a").on("click",function (e) {
       $(this).siblings("ul").toggleClass('openMenuHide');

    });




    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

});