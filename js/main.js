$(document).ready(function ($) {

    //------ Menu fixed -------//
    var nav = $(".bg_wight");

   $(window).on('scroll',function () {
       if ($(this).scrollTop() > 100) {
           nav.addClass("f-nav");
       } else {
           nav.removeClass("f-nav");
       }
   });

    $(window).on('scroll',function () {
        if ($(this).scrollTop() > 100) {
           $(".top_header .logo").css('top',"14px");
           $(".top_header ul li a").css({
               color:"#3c3939",
           });
           $(".top_header #nav-icon span").css('background', "#3c3939");
        } else {
            $(".top_header .logo").css('top',"");
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
    console.log(this);
    this.play();
})
});