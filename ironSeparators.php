<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="Фрилансер - Александр" />

    <meta name="description" content="Подвесные железоотделители серии СМПА, -M, -ТМ, -TS" />

    <meta property="og:type" content="website" />
    <link rel="shortcut icon" href="img/icon.png" type="image/x-icon" />
    <title>ЭРГА Подвесные железоотделители серии СМПА, -M, -ТМ, -TS</title>
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<header class="podves">
    <div class="bg_wight">
        <div class="top_header container ">

            <img class="logo pc" src="img/logo.png" alt="">

            <img class="logo mob" src="img/logo_mob.png" alt="">
            <?php require_once "menu_top.php"?>
        </div>
    </div>
</header>

<section class="pod_section_one">
    <div class="container">
        <div class="wrap">
        <div class="block_in_text">
            <h2>
                Подвесные железоотделители <br>
                серии СМПА, -M, -ТМ, -TS
            </h2>
            <b>
                МОЩНЫЕ САМОРАЗГРУЖАЮЩИЕСЯ ПОДВЕСНЫЕ <br>
                ЖЕЛЕЗООТДЕЛИТЕЛИ ОБЕСПЕЧИВАЮТ КАЧЕСТВЕН- <br>
                НОЕ ИЗВЛЕЧЕНИЕ КРУПНЫХ ВКЛЮЧЕНИЙ.
            </b>
            <p>
                Обладают мощной магнитной системой на <br>
                основе постоянных магнитов.
            </p>
            <p>
                Обеспечивают максимальное извлечение метал-<br>
                лических
                включений крупностью до 50 кг из <br>
                потока материала с расстояния до 600
            </p>
            <p>
                Гарантируют эффективную работу на взрыво- <br>
                пожароопасных, химически опасных производ- <br>ствах и объектах.
            </p>
            <span>
                * Крупность включений и глубина зоны извлечения могут <br>
                изменяться  в зависимости от свойств извлекаемого материала
            </span>
        </div>
            <div class="block_in_img">
                <a class="image-popup-no-margins" href="img/page_pod/cmpa-tc.png"><img class="res" src="img/page_pod/cmpa-tc.png" alt=""></a>
                <div class="box_img">
                    <a class="image-popup-no-margins" href="img/page_pod/cmpa-tc-shem-1.png"><img src="img/page_pod/cmpa-tc-shem-1.png" alt=""></a>
                    <a class="image-popup-no-margins" href="img/page_pod/cmpa-tc-shem-2.png"> <img src="img/page_pod/cmpa-tc-shem-2.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</section>
<?php require_once "footer.php"?>

<script>
    $(document).ready(function() {
        $('.zoom-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function(item) {
                    return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }

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
</script>
</body>
</html>