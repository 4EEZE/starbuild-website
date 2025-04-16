<script lang="ts">
    //ДИЗАЙНЫ ПРОЕКТОВ https://www.desivis.ru/
    import { Confetti } from "svelte-confetti";
    import { tick } from "svelte";
    import { blur } from "svelte/transition";

    import { Canvas } from '@threlte/core';
    import Scene from "../../components/Scene.svelte";
    import ProjectClickSlider from "../../components/Project_click_slider.svelte";

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
            {#if active && count != 203}
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
              <Scene model = {"/server_model/scene.gltf"}/>
            </Canvas>
            <div class="options_card_buttons">
              <button class="option_card_add_button" aria-label="add option"><img src="/plus_white.svg" alt="add"></button>
              <button class="option_card_info_button" aria-label="info button"><img src="/info.svg" alt="info"></button>
            </div>
          </div>
          <div class="options_card">
            <Canvas>
              <Scene model = {"/yandex_station_model/scene.gltf"}/>
            </Canvas>
            <div class="options_card_buttons">
              <button class="option_card_add_button" aria-label="add option"><img src="/plus_white.svg" alt="add"></button>
              <button class="option_card_info_button" aria-label="info button"><img src="/info.svg" alt="info"></button>
            </div>
          </div>
          <div class="options_card">
            <Canvas>
              <Scene model = {"/vacuum_robot_model.gltf"}/>
            </Canvas>
            <div class="options_card_buttons">
              <button class="option_card_add_button" aria-label="add option"><img src="/plus_white.svg" alt="add"></button>
              <button class="option_card_info_button" aria-label="info button"><img src="/info.svg" alt="info"></button>
            </div>
          </div>
          <div class="options_card">
            <Canvas>
              <Scene model = {"/buff_steve_model/scene.gltf"}/>
            </Canvas>
            <div class="options_card_buttons">
              <button class="option_card_add_button" aria-label="add option"><img src="/plus_white.svg" alt="add"></button>
              <button class="option_card_info_button" aria-label="info button"><img src="/info.svg" alt="info"></button>
            </div>
          </div>
        </div>
        {/if}
      </div>
    </div>
  </div>
  <ProjectClickSlider />
</main>

<footer style="padding: 200px 58px 100px;">
  <h4>Остались вопросы?</h4>
  <div class="info_contacts">
    <div class="contact_links">
      <a href="https://discord.com/" target="_blank"
        ><img src="/dis_blue.svg" alt="discord" /></a
      >
      <a href="https://telegram.org/" target="_blank"
        ><img src="/tg_blue.svg" alt="telegram" /></a
      >
      <a href="https://vk.com" target="_blank"
        ><img src="/vk_blue.svg" alt="VKontakte" /></a
      >
      <a href="https://mail.yandex.ru/" target="_blank"
        ><img src="/mail.svg" alt="Email" /></a
      >
    </div>
    <div class="additional_info">
      <span class="info">
        <img src="/divider.svg" alt="divider" />
        <p>С ВАМИ 10 ЛЕТ!</p>
        <img src="/divider.svg" alt="divider" />
        <p>10 тыс. КВАРТИР</p>
        <img src="/divider.svg" alt="divider" />
        <p>В 10 ГОРОДАХ</p>
      </span>
    </div>
  </div>
  <div class="disclaimer">
    <img src="/warning.svg" alt="warning sign">
    <p>
      Этот сайт является учебным проектом и создан исключительно в  образовательных целях. 
      Упомянутая строительная компания не существует, а все данные, включая контактную информацию, проекты и отзывы, являются  вымышленными. 
      Любое сходство с реальными компаниями или лицами случайно.
    </p>
  </div>
</footer>


<style> 
  .contact_links img {
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .disclaimer {
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    display: flex;
  }

  .disclaimer img {
    margin: 30px;
  }

  .disclaimer p {
    font-weight: 800;
    font-style: normal;
    font-size: 36px;
    line-height: normal;
    color: black;
    text-align: left;
    align-self: center;
    padding: 10px 10px 10px 0px;
    hyphens: auto;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
  }

  .info_contacts {
    margin-top: 40px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .additional_info .info{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .info p {
    font-weight: 800;
    font-style: normal;
    font-size: 36px;
    line-height: normal;
    color: black;

    margin: 0;
  }

  .info img {
    padding: 0px 20px;
  }


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
    position: relative;
    border-radius: 40px;
    height: 100%;
    
    
    background-color: rgba(245, 245, 245, 1);
    min-width: 0px;
    min-height: 0px;
  }

  .option_card_add_button {
    position: absolute;
    width: calc(100% - 20px);
    height: fit-content;
    bottom: 0;
    border-radius: 30px;
    margin: 10px;
    box-sizing: border-box;
    z-index: 1;
    background-color: rgba(0, 81, 255, 1);
    border: none;
    cursor: pointer;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    padding: 0;
  }

  .option_card_add_button img{
    margin: 10px;
  }

  .options_card:hover .option_card_add_button {
    visibility: visible;
    opacity: 1;
  }

  .options_card_buttons:hover .option_card_add_button {
    width: calc(100% - 86px);
  }

  .option_card_add_button:hover + .option_card_info_button,
  .option_card_info_button:hover {
    visibility: visible;
    opacity: 1;
    background-color: white;
  }

  .option_card_add_button:hover + .option_card_info_button img {
    visibility: visible;
    opacity: 1;
  }

  .option_card_info_button:hover {
    visibility: visible;
    opacity: 1;
  }

  .option_card_info_button {
    height: 92px;
    width: calc(100% - 20px);
    text-align: right;
    left: 0;
    bottom: 0;
    margin: 10px;
    position: absolute;
    padding: 10px;
    border-radius: 30px;
    border: none;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    outline: 1px solid rgba(0, 81, 255, 1);
  }

  .options_card_buttons:hover .option_card_info_button img,
  .option_card_info_button:hover img {
    visibility: visible;
    opacity: 1;
  }

  .options_card_buttons {
    display: flex;
    width: 100%;
    height: fit-content;
    position: absolute;
    bottom: 0;
  }

  .option_card_info_button img {
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease-in-out;
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
    pointer-events: none;
  }

  .options_card :global {
    canvas {
      border-radius: 40px;
      cursor: grab;
    }
  }

</style>
