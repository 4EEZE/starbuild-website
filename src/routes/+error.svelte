<script>
    import "../app.css";
    import { page } from "$app/state";
</script>

<svelte:head>
    <title>Starbuild | ERROR</title>
    <meta
        name="description"
        content="Всё исчезло... осталась только пустота..."
    />
    <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="content_wrapper">
    <main>
        <div class="error_massage">
            <p>
                user@starbuild:~$ cd /requested/page<br />
                bash: cd: /requested/page: No such file or directory<br />
                <br />
                user@starbuild:~$ {page.status} --help<br />
                ---------------------------------<br />
                {page.status} ERROR - {page.error?.message}<br />
                <br />
                > Try one of these:<br />
                * Return to home: `navigate --home`<br />
                * Check site map: `sitemap --view`<br />
                * Contact admin: `support --report`<br />
                <br />
                user@starbuild:~$ <span class="blinking">█</span>
            </p>
            <img src="/scroll_arrow.svg" alt="scroll" />
        </div>
        <div
            class="wallpaper_bonus"
            style="padding: 0 58px; padding-top: 100px;"
        >
            <h1 style="color: white;">Упс...</h1>
            <p style="color: white;">
                Ничего страшного, такое бывает. В подарок возьми наши авторские
                обои для своего ПК!
            </p>
            <p style="color: gray; margin-bottom: 100px;">
                (Файл .xfc и все исходники также включены в архив)
            </p>
            <img src="/wallpapers.png" alt="wallpapers" class="wallpaper" />
            <a
                href="https://github.com/4EEZE/starbuild-website/releases/tag/v0.0.0-wallpapers"
                target="_blank"
                class="download_button"
            >
                <svg
                    width="125"
                    height="105"
                    viewBox="0 0 125 105"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M41.6667 78.5417L62.5 99.375M62.5 99.375L83.3333 78.5417M62.5 99.375V52.5M108.75 84.2188C113.278 81.0346 116.674 76.4904 118.444 71.2456C120.215 66.0008 120.268 60.3282 118.596 55.0512C116.924 49.7741 113.614 45.1672 109.146 41.8988C104.678 38.6304 99.2856 36.8707 93.75 36.875H87.1875C85.621 30.7702 82.69 25.1003 78.6152 20.2921C74.5404 15.4839 69.4278 11.6628 63.6625 9.11644C57.8972 6.57005 51.6294 5.36474 45.3309 5.59125C39.0323 5.81776 32.8672 7.47018 27.2997 10.4241C21.7322 13.378 16.9074 17.5565 13.1885 22.645C9.46952 27.7334 6.95338 33.5992 5.82947 39.8008C4.70556 46.0024 5.00316 52.3781 6.69988 58.448C8.3966 64.518 11.4482 70.1239 15.625 74.8438"
                        stroke="currentColor"
                        stroke-width="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                СКАЧАТЬ
            </a>
        </div>
    </main>

    <footer>
        <div class="contact_info_and_disclaimer">
            <div class="achievements_and_contact_info_wrapper">
                <div class="contact_info">
                    <a
                        href="https://discord.com/"
                        target="_blank"
                        aria-label="disocrd_contact"
                    >
                        <img src="/dis_white.svg" alt="discord logo" />
                    </a>
                    <a
                        href="https://telegram.org"
                        target="_blank"
                        aria-label="telegram_contact"
                    >
                        <img src="/tg_white.svg" alt="telegram logo" />
                    </a>
                    <a
                        href="https://vk.com"
                        target="_blank"
                        aria-label="vk contact"
                    >
                        <img src="/vk_white.svg" alt="vk logo" />
                    </a>
                    <a
                        href="https://workspace.google.com/intl/ru/gmail/"
                        target="_blank"
                        aria-label="gmail contact"
                    >
                        <img src="/mail_white.svg" alt="gmail logo" />
                    </a>
                </div>
                <div class="achievements">
                    <div>
                        <span
                            ><img
                                src="/divider_white.svg"
                                alt="section divider"
                            /></span
                        >
                        С ВАМИ<br />10 ЛЕТ!
                    </div>
                    <div>
                        <span
                            ><img
                                src="/divider_white.svg"
                                alt="section divider"
                            /></span
                        >
                        >10 тыс.<br />КВАРТИР
                    </div>
                    <div>
                        <span
                            ><img
                                src="/divider_white.svg"
                                alt="section divider"
                            /></span
                        >
                        В 10<br />ГОРОДАХ
                    </div>
                </div>
            </div>
            <div class="disclaimer">
                <svg
                    width="auto"
                    height="100%"
                    viewBox="0 0 272 268"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M135.73 100.5V145.167M135.73 189.833H135.843M116.402 43.1034L20.6629 201C18.689 204.377 17.6446 208.206 17.6335 212.106C17.6225 216.005 18.6452 219.84 20.5999 223.228C22.5547 226.616 25.3733 229.439 28.7754 231.416C32.1775 233.394 36.0444 234.457 39.9915 234.5H231.469C235.416 234.457 239.283 233.394 242.685 231.416C246.087 229.439 248.906 226.616 250.86 223.228C252.815 219.84 253.838 216.005 253.827 212.106C253.816 208.206 252.771 204.377 250.797 201L155.059 43.1034C153.044 39.8216 150.206 37.1083 146.821 35.2252C143.435 33.3421 139.615 32.3528 135.73 32.3528C131.845 32.3528 128.025 33.3421 124.639 35.2252C121.254 37.1083 118.417 39.8216 116.402 43.1034Z"
                        stroke="white"
                        stroke-width="30"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <p>
                    Этот сайт является учебным проектом и создан исключительно в
                    образовательных целях. Упомянутая строительная компания не
                    существует, а все данные, включая контактную информацию,
                    проекты и отзывы, являются вымышленными. Любое сходство с
                    реальными компаниями или лицами случайно.
                </p>
            </div>
        </div>
    </footer>
</div>

<style>
    @keyframes blink {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }

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

    .download_button {
        width: fit-content;
        padding: 20px;
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 10px;
        margin-top: 40px;
        border-radius: 50px;
        font-weight: 800;
        font-size: 3rem;
        background-color: rgba(0, 81, 255, 1);
        border: none;
        color: white;
        cursor: pointer;

        transition:
            color 0.3s ease-in-out,
            background-color 0.3s ease-in-out;
    }

    .download_button svg {
        transition: all 0.3s ease-in-out;
    }

    .download_button:hover {
        color: rgb(0, 81, 255);
        background-color: white;

        transition: all 0.3s ease-in-out;
    }

    .download_button:hover svg {
        stroke: "#0051FF";

        transition: all 0.3s ease-in-out;
    }

    .wallpaper {
        height: 100%;
        width: 100%;
        border-radius: 50px;
        transition: all 0.3s ease-in-out;
        outline: 3px white solid;
    }

    .wallpaper_bonus p {
        font-weight: 400;
        font-size: 36px;
    }

    .blinking {
        animation: blink 1s step-end infinite;
    }

    .content_wrapper {
        position: fixed; /* Перекрывает всю область просмотра */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: black;
        overflow: auto;
        z-index: 10;
    }

    .error_massage {
        position: relative;
        display: flex;
        margin: 0 58px;
        align-self: center;
        justify-content: center;
        height: 100vh;
    }

    .error_massage p {
        font-family: "IBM Plex Mono", monospace;
        font-weight: 400;
        font-style: normal;
        font-size: 40px;
        text-align: left;
        color: white;
        align-content: center;
    }

    .error_massage img {
        position: absolute;
        bottom: 30px;
        left: 0;
        right: 0;
        margin-inline: auto;
        width: fit-content;
        animation: bounce 2s infinite;
    }

    footer {
        margin-top: 200px;
        padding: 0 58px;

        color: white;
        font-weight: 800;
        padding-bottom: 100px;
    }

    .contact_info {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    .achievements_and_contact_info_wrapper {
        display: flex;
        justify-content: center;
        padding-top: 40px;
        margin-bottom: 100px;
    }

    .achievements {
        font-weight: 800;
        font-size: 36px;
        display: flex;
        margin-left: auto;
    }

    .achievements div {
        display: flex;
        align-items: center;
    }

    .achievements span {
        margin-left: 40px;
        margin-right: 20px;
    }

    .disclaimer {
        display: flex;
        flex-direction: row;
        outline: white solid 3px;
        border-radius: 50px;
        justify-content: center;
        align-items: center;
    }

    .disclaimer svg {
        height: 100%;
        margin: 30px;
    }

    .disclaimer p {
        margin-left: auto;
        font-size: 36px;
        margin: 15px;
        hyphens: auto;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
    }
</style>
