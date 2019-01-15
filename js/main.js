$(document).ready(function ($) {

    //------ Menu fixed -------//

    var nav = $(".bg_wight");

    var logoPc = $(".logo.pc");

    var logoMob = $(".logo.mob");
   $(window).on('scroll',function () {
       if ($(this).scrollTop() > 100) {
           nav.addClass("f-nav");
           logoPc.fadeOut(0);
           logoMob.fadeIn();
           $(".top_header ul li a").css({
               color:"#3c3939",
           });
           $(".top_header #nav-icon span").css('background', "#3c3939");
       } else {
           nav.removeClass("f-nav");
           logoPc.fadeIn();
           logoMob.fadeOut(0);
           $(".top_header ul li a").css({
               color: ""
           });

           $(".top_header #nav-icon span").css('background', "");
       }
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
        mainClass: 'my-mfp-zoom-in'
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
        if (!$(this).hasClass("yesEven")) {
            e.preventDefault();
        }

        $(this).siblings("ul").toggleClass('openMenuHide');
        console.log(!$(this).hasClass("yesEven"));
    });


    $(".top_menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top -100}, 1500);
    });




});