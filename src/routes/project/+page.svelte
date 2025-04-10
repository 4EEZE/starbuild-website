<script lang="ts">
    //ДИЗАЙНЫ ПРОЕКТОВ https://www.desivis.ru/
    import { Confetti } from "svelte-confetti";
    import { tick } from "svelte";
    import { blur } from "svelte/transition";

    import { Canvas } from '@threlte/core';
    import Scene from "../../components/Scene.svelte";

    let active = $state(false);
    let active_options = $state(0);

    async function confetti() {
      active = false;
      await tick();
      active = true;
    }

    let count = $state(100);

    function increacment() {
      if (count != 203) {
        count += 1;
      }
      else {
        count += 0;
      };
    }

    function handleCLick() {
      confetti();
      increacment();
    }


    function ui_steps(buttonName: string) {
      if (buttonName === "options_button") {
        active_options += 1;
      }
    }
</script>

<svelte:head>
  <title>Starbuild | Project</title>
  <meta name="description" content="Starfall - один из самых популярных и качественных проектов компании Starbuild.">
</svelte:head>

<header>
    <div class="hero">
      <div class="hero_info">
        <h1>Starfall</h1>
        <p>Местоположение: г. Иннополис, ул. Спортивная</p>
        <p>Площадь: 35 m²</p>
        <p>Год: 2023</p>
        <p>Бюджет: ~125 000 /m²</p>
        <br>
        <p>
          Для тех, кто планирует жить один, знает толк в дизайне и любит
          нейтральные цвета. Даже вашему котику понравиться!
        </p>
        <div class="book_button">
          <button onclick={handleCLick}>ЗАБРОНИРОВАТЬ</button>
          <!--https://mitcheljager.github.io/svelte-confetti/-->
          <div class="confetti">
            {#if active}
            <Confetti fallDistance=50px amount={200} delay={[0, 500]} colorArray={["#256AFF", "#FFFFFF", "#0051FF", "url(/star1.png)"]} x={[-1, 1]} y={[-1, 1]}/>
            <Confetti fallDistance=100px amount={100} delay={[0, 250]} colorArray={["url(/star1.png)", "url(/star2.png)", "url(/star3.png)"]} x={[-1.5, 1.5]} y={[-1.5, 1.5]}/>
            {/if}
          </div>
          <span class="book_stat"> {count} из 203 </span>
        </div>
      </div>
      <div class="scroll_arrow">
        <img src="/scroll_arrow.svg" alt="scroll">
      </div>
    </div>
</header>

<main style="padding:0 58px">
  <div class="building_schemes">
    <img src="/starfall_isometric_plan.webp" alt="isometric building">
    <img src="/apartment_plan_starfall.webp" alt="apartment scheme">
  </div>
  <div class="design_aspects">
    <div class="design_aspects_card">
      <div class="image_wrapper">
        <img src="/starfall_2.png" alt="starfall room">
      </div>
      <div class="options">
        {#if active_options === 0}
        <button class="options_button" aria-label="add option button" onclick={() => ui_steps('options_button')} 
          in:blur={{ duration: 300, amount:10}} 
          out:blur={{ duration:300, amount:10}}
          >
          <img src="/plus.svg" alt="add option">
          <h4>ДОБАВИТЬ ОПЦИЮ</h4>
        </button>
        {:else if active_options === 1}
        <div class="options_cards"
        in:blur={{ duration: 600, amount:10}} 
        out:blur={{ duration:300, amount:10}}
        >
          <div class="options_card">
            <Canvas>
              <Scene />
            </Canvas>
          </div>
          <div class="options_card">
            <Canvas>
              <Scene />
            </Canvas>
          </div>
          <div class="options_card">
            <Canvas>
              <Scene />
            </Canvas>
          </div>
          <div class="options_card">
            <Canvas>
              <Scene />
            </Canvas>
          </div>
        </div>
        {/if}
      </div>
    </div>
  </div>
</main>


<style>
  .hero {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* max-width: 1440px;
    max-height: 807px; */

    background-image: url("/dark_starfall.png"), url("/starfall_deco.svg");

    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
    background-size: cover, cover;
    background-blend-mode: overlay;
    /*border-radius: 0 0 50px 50px;*/
    height: 100vh;
    overflow: hidden;
  }

  .hero_info {
    max-width: 665px;
    max-height: 424px;
  }

  .hero_info p, h1 {
    color: white;
    margin: 0;
  }

  .book_button {
    box-sizing: border-box  ;
    max-width: 410px;
    border-radius:30px;
    height: auto;
    padding: 0;
    position: relative;

    outline: 1px rgba(0, 81, 255, 1) solid;
    margin-top: 20px;
    transition: outline 0.3s ease-in-out;
  }

  .book_button button {
    cursor: pointer;
    padding: 0;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 239px;
    height: 75px;

    border: none;
    border-radius: 30px;
    background-color: rgb(0, 81, 255);
    color: white;

    transition:
      color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
  }

  .book_button button:hover {
    color: rgb(0, 81, 255);
    background-color: white;

    transition: all 0.3s ease-in-out;
  }

  .book_button:has(button:hover) {
    outline: 1px white solid;
    transition: outline 0.3s ease-in-out;
  }

  .book_stat {
    font-weight: 800;
    font-size: 24px;
    color: white;
    margin-left: 20px;
  }

  .scroll_arrow {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-10px) ;}
    60% {transform: translateY(-5px);}
  }

  .building_schemes {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 100px;
    width: 100%;
    margin: 0 auto;
  }

  .building_schemes img {
    width: 100%;
  }

  .building_schemes img:nth-child(2) {  
    padding-top: 100px;
    width: 50%;
  }

  .design_aspects {
    margin-top: 100px;
  }

  .design_aspects_card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }

  .image_wrapper {
    width: 100%;
  }

  .image_wrapper img {
    border-radius: 50px;
    
    width: 100%;
    height: 100%;
  }

  .options {
    aspect-ratio: 428 / 482;
    width: 49%;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    position: relative;
  }

  .options_button {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
  }

  .options_button img {
    max-height: 116px;
    max-width: 116px;
  }

  .options_button h4 {
    font-size: 36px;
    color: rgba(206, 206, 206, 1);
    margin-top: 25px;
    text-align: center;
  }

  .options_cards {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding: 10px;
    height: 100%;
    width: 100%;
  }

  .options_card {
    border-radius: 40px;
    height: 100%;
    
    background-color: rgba(206, 206, 206, 1);
    min-width: 0px;
    min-height: 0px;
  }

  /*
  .canvas_container {
    
    position: absolute;
    height: 100%;
    width: 100%;
  }
    */

  /*
  .design_aspects {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    background-color: white;
    
  }

  .design_aspects_card {
    padding: 10px 10px 0;
    width: 100%;
    height: 320px;
    background-color: rgba(245, 245, 245, 1);
    border-radius: 40px;
  }
  */

  .confetti {
    position: absolute;
    left: 27%;
    bottom: 50%;
  }


</style>
