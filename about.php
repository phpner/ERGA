<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="Научно-производственное объединение «ЭРГА»" />

    <meta name="description" content="Научно-производственное объединение «ЭРГА»" />

    <meta property="og:type" content="website" />
    <link rel="shortcut icon" href="img/icon.png" type="image/x-icon" />
    <title>ЭРГА О КОМПАНИИ</title>
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<!--Form-->
<?php require_once "form.php"?>


<div class="pane-about">
    <img class="header_img" src="img/about/header.jpg" alt="Сепораторы">

    <div class="pane paneOne">
        <header class="header_page_seporator">
            <div class="bg_wight">
                <div class="top_header container mainPage">

                    <a href="/"><img class="logo pc" src="img/logo.png" alt="ЭРГА логотип"></a>

                    <a href="/"><img class="logo mob" src="img/logo_mob.png" alt="ЭРГА логотип"></a>
                    <?php require_once "menu_top.php"?>
                </div>
            </div>

        </header>
        <span class="tel">
            <img src="img/tel.png" alt="tel">
            <a href="tel:+79206116158">+7 (920) 611-61-58</a>
        </span>
        <span class="email">
            <img src="img/email.png" alt="email">
            <a href="emailto:info@erga.ru">info@erga.ru</a>
        </span>
    </div>

    <div class="crug">
        <div class="container wrap">
            <div class="boxIn">
                                <span class="in_grug">
                                    <b>iso</b>
                                    9001:2015
                                </span>
                <span>система качества</span>
            </div>

            <div class="boxIn">
                                <span class="in_grug">
                                    Более <br>
                                    <b>25000</b>
                                    <p>M<sup><small>2</small></sup></p>
                                </span>
                <span>площадь завода</span>
            </div>

            <div class="boxIn">
                            <span class="in_grug">
                                более<b class="fifty">50</b>
                            </span>
                <span>патенты</span>
            </div>
        </div>
    </div>

</div>

<section class="section_about_about">
    <div class="container wrap">
        <div class="item">
            <h2>О КОМПАНИИ</h2>
            <p>
                Научно-производственное объединение «ЭРГА» ведёт свою историю с 1991 года, когда Котуновым В.В. было создано специализированное предприятие по производству постоянных редкоземельных магнитов и магнитных систем специального назначения.
                За прошедшие годы предприятие выросло в полноценный завод с собственными производственными площадями и современным оборудованием, мощной научно-исследовательской и проектно-конструкторской базой и эффективной системой управления.
            </p>
        </div>

        <div class="item video">
            <div class="video_box">
                <video width="400" height="300" controls="controls" poster="img/video.png">
                    <source src="video/video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                    Тег video не поддерживается вашим браузером.
                </video>
            </div>
        </div>
    </div>

</section>

<section class="about_icons">

    <div class="container wrap">
        <div class="box">
            <img src="img/about/1.png" alt="ЭРГА с 1991года">
            <p>Опыт производства <br> более 27 лет!</p>
        </div>

        <div class="box">
            <img src="img/about/2.png" alt="ЭРГА Индивидуальный  подход на  всех этапах">
            <p>Индивидуальный <br>подход на <br>всех этапах</p>
        </div>

        <div class="box">
            <img src="img/about/3.png" alt="ЭРГА Конструкторскопроектное решение задач">
            <p>Конструкторско-<br>
                проектное<br>
                решение задач
            </p>
        </div>

        <div class="box">
            <img src="img/about/4.png" alt="ЭРГА Испытательная лаборатория ЛИМиТС ">
            <p>Испытательная<br>лаборатория<br>ЛИМиТС </p>
        </div>

        <div class="box">
            <img src="img/about/5.png" alt="ЭРГА Современное производство ">
            <p>Современное <br>производство</p>
        </div>

        <div class="box">
            <img src="img/about/6.png" alt="ЭРГА Сервис высокого уровня">
            <p>Сервис высокого <br> уровня</p>
        </div>

        <div class="box">
            <img src="img/about/7.png" alt="ЭРГА Ремонт оборудования зарубежных производителей">
            <p>
                Ремонт оборудования <br>зарубежных <br>производителей
            </p>
        </div>
    </div>
</section>

<?php require_once "footer.php"?>
</body>
</html>