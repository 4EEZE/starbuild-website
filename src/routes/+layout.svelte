<script lang="ts">
    import { LoopPingPong } from "three";

    let { children } = $props();
</script>

{@render children()}

<footer style="padding-top: 100px;">
    <div class="contact_info_and_disclaimer">
        <div class="achievements_and_contact_info_wrapper">
            <div class="contact_info">
                <a
                    href="https://discord.com/"
                    target="_blank"
                    aria-label="disocrd_contact"
                >
                    <img src="/dis_blue.svg" alt="discord logo" />
                </a>
                <a
                    href="https://telegram.org"
                    target="_blank"
                    aria-label="telegram_contact"
                >
                    <img src="/tg_blue.svg" alt="telegram logo" />
                </a>
                <a
                    href="https://vk.com"
                    target="_blank"
                    aria-label="vk contact"
                >
                    <img src="/vk_blue.svg" alt="vk logo" />
                </a>
                <a
                    href="https://workspace.google.com/intl/ru/gmail/"
                    target="_blank"
                    aria-label="gmail contact"
                >
                    <img src="/mail.svg" alt="gmail logo" />
                </a>
            </div>
            <div class="achievements">
                <div>
                    <span><img src="/divider.svg" alt="section divider" /></span
                    >
                    С ВАМИ<br />10 ЛЕТ!
                </div>
                <div>
                    <span><img src="/divider.svg" alt="section divider" /></span
                    >
                    >10 тыс.<br />КВАРТИР
                </div>
                <div>
                    <span><img src="/divider.svg" alt="section divider" /></span
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
                    stroke="#0051FF"
                    stroke-width="30"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <p>
                Этот сайт является учебным проектом и создан исключительно в
                образовательных целях. Упомянутая строительная компания не
                существует, а все данные, включая контактную информацию, проекты
                и отзывы, являются вымышленными. Любое сходство с реальными
                компаниями или лицами случайно.
            </p>
        </div>
    </div>
</footer>

<style>
    .contact_info_and_disclaimer {
        color: black;
        font-weight: 800;
        padding-bottom: 100px;

        display: flex;
        margin: 0 auto;
        max-width: 1440px;
        padding-left: 58px;
        padding-right: 58px;
        flex-direction: column;
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
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
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
