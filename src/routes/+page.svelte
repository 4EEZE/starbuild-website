<script>
    //Долженн быть импортирован хотя бы в один компонент
    import "../app.css";

    import Slider from "../components/We_have_slider.svelte";
    import Map from "../components/Map.svelte";
</script>

<svelte:head>
    <title>Starbuild</title>
</svelte:head>

<header>
    <div class="hero" id="hero">
        <div class="container">
            <div class="logo">
                <img src="/test_logo.svg" alt="Starbuild" />
            </div>
        </div>
    </div>
    <div class="scroll_indicator">
        <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                x1="2.272"
                y1="14.3224"
                x2="14.9999"
                y2="27.0503"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
            />
            <line
                x1="15"
                y1="27.0503"
                x2="27.7279"
                y2="14.3224"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
            />
        </svg>
    </div>
</header>

<main>
    <div class="container">
        <section class="we_have">
            <div class="section__h1">
                <h1>У нас</h1>
            </div>
            <!--ЗДЕСЬ СКРИПТ ↓↓↓-->
            <Slider />
        </section>
    </div>
    <div class="container">
        <section class="projects">
            <div class="section__h1">
                <h1>Локации проектов</h1>
            </div>
            <div class="projects_content">
                <Map />
                <div class="project_list">
                    <!--ЗДЕСЬ ПРОЕКТЫ-->
                    <div class="project">
                        <img src="/starfall.png" alt="starfall" />
                        <div class="project_info">
                            <h2>Starfall</h2>
                            <p>ул. Спортивная</p>
                            <h3>от 2,5 млн ₽</h3>
                            <a href="/starfall">ПОДРОБНЕЕ</a>
                        </div>
                    </div>
                    <div class="project">
                        <img src="/celestial.png" alt="starfall" />
                        <div class="project_info">
                            <h2>Celestial</h2>
                            <p>ул. Спортивная</p>
                            <h3>от 3,0 млн ₽</h3>
                            <a href="/celestial">ПОДРОБНЕЕ</a>
                        </div>
                    </div>
                    <div class="project">
                        <img src="/stardrop.png" alt="starfall" />
                        <div class="project_info">
                            <h2>Stardrop</h2>
                            <p>ул. Центральная</p>
                            <h3>от 2,7 млн ₽</h3>
                            <a href="/stardrop">ПОДРОБНЕЕ</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="promote">
            <div id="banner">
                <div class="fade_black">
                    <img src="/black_fade.svg" alt="fade" />
                </div>
                <div class="video-container">
                    <video autoplay muted loop>
                        <source src="/innopolislife.mp4" />
                    </video>
                </div>
                <div class="banner_info">
                    <p>Главный застройщик</p>
                    <div class="innopolis_href">
                        <div class="introduction">
                            <p>
                                <a
                                    href="https://www.innopolis.com/ru"
                                    target="_blank">INNOPOLIS</a
                                >
                            </p>
                            <img src="/arrow.svg" alt="arrow" />
                        </div>
                        <div class="action">
                            <p>СКИДКА 4.2%</p>
                            <img src="/deco.svg" alt="deco" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="competition">
            <h1>Есть крутые идеи?</h1>
            <div class="competition_banner">
                <div class="competition_info">
                    <div class="label">
                        <p>
                            Конкурс дизайн проектов
                            <span>
                                <a href="https://discord.com/" target="_blank"
                                    ><img src="/dis.svg" alt="discord" /></a
                                >
                                <a href="https://telegram.org/" target="_blank"
                                    ><img src="/tg.svg" alt="telegram" /></a
                                >
                                <a href="https://vk.com" target="_blank"
                                    ><img src="/vk.svg" alt="VKontakte" /></a
                                >
                            </span>
                        </p>
                    </div>
                </div>
                <object
                    data="/label.svg"
                    type="image/svg+xml"
                    aria-label="100000_text_gif_fill"
                ></object>
            </div>
        </section>
    </div>
</main>

<style>
    @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }

    .scroll_indicator {
        position: absolute;
        bottom: 30px;
        left: 0;
        right: 0;
        margin-inline: auto;
        width: fit-content;
        animation: bounce 2s infinite;
    }

    .hero {
        position: relative;
        display: flex;
        background-image: url("/Grid.svg");
        background-repeat: repeat-x;
        background-size: 90vw;
        background-position: center;
        overflow: hidden;

        animation: slideBackground 60s linear infinite;
    }

    .logo img {
        width: 100%;
        height: auto;
    }

    .logo {
        display: flex;
        justify-content: center;
        height: 100vh;
    }

    .we_have {
        width: 100%;
        max-width: 1400px;
    }

    .projects {
        margin-top: 80px;
        margin-bottom: 40px;
    }

    .projects_content {
        display: flex;

        flex-direction: row;
    }

    .project_list {
        height: 659px;
        width: 540px;

        margin-left: 20px;

        border-radius: 50px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

        overflow-y: scroll;
        scrollbar-width: none;
    }

    .project {
        display: flex;
        flex-direction: row;

        width: 522px;
        height: 285px;

        border-radius: 40px;
        background-color: rgb(245, 245, 245);

        margin: 9px;

        overflow: hidden;

        transition: background-color 0.3s ease-in-out;
    }

    .project_info {
        margin-left: 20px;
        margin-top: 42px;
        margin-right: 27px;
        margin-bottom: 14px;

        display: flex;
        flex-direction: column;

        max-width: 277px;
        max-height: 285px;
    }

    .project_info p {
        font-weight: 500;
        font-style: normal;
        font-size: 16px;
        line-height: 1;
        margin: 0;

        color: rgb(140, 140, 140);
    }

    .project_info h3 {
        margin: 0 auto;
        margin-top: 27px;

        text-align: center;
        color: rgb(140, 140, 140);
    }

    .project_info a {
        display: flex;
        cursor: pointer;
        padding: 0;
        margin-top: 40px;
        align-items: center;
        justify-content: center;

        font-weight: 800;
        font-style: normal;
        font-size: 24px;
        line-height: 1;

        width: 245px;
        height: 76px;

        border: none;
        border-radius: 30px;
        background-color: rgb(0, 81, 255);
        color: white;

        transition:
            color 0.3s ease-in-out,
            background-color 0.3s ease-in-out;
    }

    .project_info a:hover {
        color: rgb(0, 81, 255);
        background-color: white;

        transition: all 0.3s ease-in-out;
    }

    /*:has() МОЖЕТ НЕ РАБОТАТЬ В СТАРЫХ БРУЗЕРАХ*/
    .project:has(.project_info a:hover) {
        background-color: rgb(238, 238, 238);
        transition: background-color 0.3s ease-in-out;
    }

    .project img {
        display: flex;
        flex-direction: row;
        height: 285px;
        max-width: 245px;

        border-radius: 0 30px 30px 0;

        object-fit: cover;
    }

    .promote {
        margin-bottom: 150px;
        position: relative;
    }

    .fade_black {
        z-index: 1;
        position: relative;
    }

    .fade_black img {
        height: 100%;
        max-height: 1324px;
    }

    #banner {
        background-color: black;
        background-size: auto 120%;
        background-position: right bottom;
        background-repeat: no-repeat;
        height: 457px;
        border-radius: 50px;
        overflow: hidden;
        position: relative;
    }

    .banner_info {
        margin-top: 62px;
        margin-left: 50px;
        top: 0px;
        position: absolute;
        z-index: 2;
    }

    .banner_info p {
        max-width: 420px;
        font-weight: 800;
        font-style: normal;
        font-size: 64px;
        line-height: auto;
        color: white;
        margin: 0;
    }

    .innopolis_href {
        display: flex;
        flex-direction: column;
        max-width: 420px;
        margin-top: 40px;
    }

    .introduction:hover img {
        animation: rotateBounce 0.4s ease-in-out forwards;
    }

    .introduction:not(:hover) img {
        animation: rotateBounceBack 0.4s ease-in-out forwards;
    }

    .innopolis_href img {
        margin-left: 15px;
        transition: transform 0.3s cubic-bezier(0.68, -1, 0.32, 2);
        transform-origin: center;
        width: 22px;
    }

    .innopolis_href p {
        background-image: url("/innopolis_gradient.gif");
        background-clip: text;
        background-size: 110% auto;
        background-position: 10% 25%;
        color: transparent;
        cursor: pointer;
    }

    .introduction {
        display: flex;
        flex-direction: row;
    }

    .action {
        position: relative;
        max-width: 180px;
    }

    .action p {
        font-size: 24px;
        height: auto;
        background-size: 200% auto;
        background-position: 10% 10%;
    }

    .action img {
        position: absolute;
        margin: 0;
        width: 220px;
        top: -15px;
        left: -19px;
    }

    /* Анимация для поворота и покачивания */
    @keyframes rotateBounce {
        0% {
            transform: rotate(0);
        }
        40% {
            transform: rotate(50deg);
        }
        60% {
            transform: rotate(40deg);
        }
        80% {
            transform: rotate(47deg);
        }
        100% {
            transform: rotate(45deg);
        }
    }

    /* Анимация для возврата в исходное положение */
    @keyframes rotateBounceBack {
        0% {
            transform: rotate(45deg);
        }
        40% {
            transform: rotate(-5deg);
        }
        60% {
            transform: rotate(2deg);
        }
        80% {
            transform: rotate(-3deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    /* Новые стили для контейнера и изображений */
    .video-container {
        top: 0;
        right: 0;

        position: absolute;
        width: 100%;
        height: 100%;
    }

    .video-container video {
        position: absolute;
        top: 0;
        right: 0;
        height: 110%;
    }

    .competition_banner {
        position: relative;

        background-color: black;
        border-radius: 50px;
        height: 529px;

        background-image: url("/promote_background.svg");
        background-position: top right;
        background-repeat: no-repeat;
    }

    .competition_info {
        display: flex;
        flex-direction: row;
        height: 100%;
    }

    .label {
        display: flex;

        font-weight: 900;
        font-style: normal;
        font-size: 64px;
        line-height: normal;
        margin-left: 55px;
        color: white;

        align-items: center;

        max-width: 540px;
    }

    .label span {
        vertical-align: -13px;
        margin-left: 5px;
    }

    .competition_banner object {
        top: 52px;
        position: absolute;
        right: 28px;
    }

    @keyframes slideBackground {
        from {
            background-position: -100vw;
        }
        to {
            background-position: 100vw;
        }
    }
</style>
