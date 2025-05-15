<script lang="ts">
    import { fade } from "svelte/transition";

    let image_step = $state(0);
    const Images = [
        "/starfall_1.png",
        "/starfall_2.png",
        "/starfall_3.png",
        "/starfall_4.png",
        "/starfall_5.png",
        "/starfall_6.png",
    ];

    function slider_image() {
        if (image_step != 5) {
            image_step += 1;
        } else {
            image_step = 0;
        }
    }
</script>

<div
    class="project_click_slider"
    onclick={slider_image}
    role="button"
    aria-label="Next slide"
    tabindex="0"
    onkeydown={(e) => e.key === "Enter" && slider_image()}
>
    <div class="slide_wrapper">
        {#key image_step}
            <div class="slide">
                <img
                    in:fade={{ duration: 300 }}
                    out:fade={{ duration: 900 }}
                    src={Images[image_step]}
                    alt="Slide {image_step}"
                />
            </div>
        {/key}
    </div>
    <ul class="dots">
        <li class="dot_0">
            <img
                src="/dot_active_project.svg"
                alt="dot"
                style:opacity={image_step === 0 ? 1 : 0.5}
            />
        </li>
        <li class="dot_1">
            <img
                src="/dot_active_project.svg"
                alt="dot"
                style:opacity={image_step === 1 ? 1 : 0.5}
            />
        </li>
        <li class="dot_2">
            <img
                src="/dot_active_project.svg"
                alt="dot"
                style:opacity={image_step === 2 ? 1 : 0.5}
            />
        </li>
        <li class="dot_3">
            <img
                src="/dot_active_project.svg"
                alt="dot"
                style:opacity={image_step === 3 ? 1 : 0.5}
            />
        </li>
        <li class="dot_4">
            <img
                src="/dot_active_project.svg"
                alt="dot"
                style:opacity={image_step === 4 ? 1 : 0.5}
            />
        </li>
        <li class="dot_5">
            <img
                src="/dot_active_project.svg"
                alt="dot"
                style:opacity={image_step === 5 ? 1 : 0.5}
            />
        </li>
    </ul>
</div>

<style>
    li img {
        transition: opacity 0.3s ease-in-out;
    }
    .slide_wrapper {
        position: relative;
        height: 100%;
        width: 100%;
    }

    :global(.project_click_slider) {
        position: relative;
        width: 100%;
        margin-top: 100px;
        aspect-ratio: 1257 / 693; /* Современные браузеры */
        /*padding hack*/
        padding-bottom: calc(693 / 1257 * 100%); /* ~55.13% */
        cursor: pointer;
    }

    .slide {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .dots {
        position: absolute;

        display: flex;

        gap: 0 5px;
        padding: 0;
        margin-inline: auto;
        bottom: 5px;

        left: 0;
        right: 0;

        width: fit-content;
        z-index: 1;
    }

    .slide img {
        position: absolute;
        width: 100%;
        height: auto;
        border-radius: 50px;
        object-fit: cover;
        transition: opacity 0.3s ease-in-out;
    }
</style>
