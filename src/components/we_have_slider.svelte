<script lang="ts">
  import { fade } from "svelte/transition";
  import { onDestroy } from "svelte";

  let Counter = $state(0);
  const Images = [
    "./src/assets/noise.svg",
    "./src/assets/home.svg",
    "./src/assets/internet.svg",
    "./src/assets/space.svg",
    "./src/assets/power.svg",
    "./src/assets/gym.svg",
  ];

  const intervalId = setInterval(() => {
    if (Counter === 5) {
      Counter = 0;
    } else {
      ++Counter;
    }

  }, 5300);

  onDestroy(() => clearInterval(intervalId));
</script>

<div class="we_have_slider">
  {#key Counter}
    <div class="slide">
      <img
        in:fade={{ duration: 300 }}
        out:fade={{ duration: 900 }}
        src={Images[Counter]}
        alt="Slide {Counter}"
      />
    </div>
  {/key}
  <ul class="dots">
    <li class="dot_0">
      <img
        src="/src/assets/dot_active.svg"
        alt="dot"
        style:opacity={Counter === 0 ? 1 : 0.5}
      />
    </li>
    <li class="dot_1">
      <img
        src="/src/assets/dot_active.svg"
        alt="dot"
        style:opacity={Counter === 1 ? 1 : 0.5}
      />
    </li>
    <li class="dot_2">
      <img
        src="/src/assets/dot_active.svg"
        alt="dot"
        style:opacity={Counter === 2 ? 1 : 0.5}
      />
    </li>
    <li class="dot_3">
      <img
        src="/src/assets/dot_active.svg"
        alt="dot"
        style:opacity={Counter === 3 ? 1 : 0.5}
      />
    </li>
    <li class="dot_4">
      <img
        src="/src/assets/dot_active.svg"
        alt="dot"
        style:opacity={Counter === 4 ? 1 : 0.5}
      />
    </li>
    <li class="dot_5">
      <img
        src="/src/assets/dot_active.svg"
        alt="dot"
        style:opacity={Counter === 5 ? 1 : 0.5}
      />
    </li>
  </ul>
</div>

<style>
  li img {
    transition: opacity 0.3s ease-in-out;
  }

  :global(.we_have_slider) {
    position: relative;
    width: 100%;
    height: 700px;
  }

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
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
    width: 100%;
    border-radius: 50px;
    max-width: 1440px;
    object-fit: cover;
    transition: opacity 0.3s ease-in-out;
  }
</style>
