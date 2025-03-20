<script lang="ts">
    import { fade } from "svelte/transition";
    import { onDestroy } from "svelte";

    let Counter = $state(1);
    const Images = [
        "./src/assets/innopolis_1.png",
        "./src/assets/innopolis_2.png",
        "./src/assets/innopolis_3.png",
        "./src/assets/innopolis_4.png",
    ];

    const intervalId = setInterval(() => {
        if (Counter === 4) {
            Counter = 1;
        } else {
            ++Counter;
        }
    }, 5300);

    onDestroy(() => clearInterval(intervalId));
</script>

<div id="banner">
    <div class="fade_black">
        <img src="/src/assets/black_fade.svg" alt="fade">
    </div>
    <div class="image-container">
        {#key Counter}
            <img in:fade={{ duration: 300 }}
                 out:fade={{ duration: 900 }}
                 src="/src/assets/innopolis_{Counter}.png"
                 alt="banner_IMG">
        {/key}
    </div>
    <div class="banner_info">
        <p>Главный застройщик</p>
        <div class="innopolis_href">
            <div class="introduction">
                <p><a href="https://www.innopolis.com/ru">INNOPOLIS</a></p>
                <img src="/src/assets/arrow.svg" alt="arrow">
            </div>
            <div class="action">
                <p>СКИДКА 4.2%</p>
                <img src="/src/assets/deco.svg" alt="deco">
            </div>
        </div>
    </div>
</div>

<style>
    .fade_black {
        z-index: 1;
        position: relative;
    }

    .fade_black img {
        height: 100%;
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
        background-image: url("/src/assets/innopolis_gradient.gif");
        background-clip: text;
        background-size: 110% auto;
        background-position: 10% 25%;
        color: transparent;
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
    .image-container {
        top: 0;
        right: 0;

        position: absolute;
        width: 100%;
        height: 100%;
    }

    .image-container img {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
    }
</style>