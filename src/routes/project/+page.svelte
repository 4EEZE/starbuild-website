<script>
    //ДИЗАЙНЫ ПРОЕКТОВ https://www.desivis.ru/

    let count = $state(100);

    function increacment() {
      if (count != 203) {
        count += 1;
      }
      else {
        count += 0;
      };
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
          <button onclick={increacment}>ЗАБРОНИРОВАТЬ</button>
          <span class="book_stat"> {count} из 203 </span>
        </div>
      </div>
    </div>
</header>

<main style="display: flex; padding:0 58px">
  <div class="isometric_building">
    <img src="/Starfall_isometric_plan.webp" alt="isometric building">
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
    border-radius: 0 0 50px 50px;
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
    max-width: 410px;
    border-radius: 30px;
    border: 1px rgba(0, 81, 255, 1) solid;
    margin-top: 20px;
    transition: border 0.3s ease-in-out;
  }

  .book_button button {
    cursor: pointer;
    padding: 0;
    line-height: 1;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 240px;
    height: 76px;

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
    border: 1px white solid;
    transition: border 0.3s ease-in-out;
  }

  .book_stat {
    font-weight: 800;
    font-size: 24px;
    color: white;
    margin-left: 20px;
  }

  .isometric_building {
    width: 100%;
    margin: 0 auto;
  }

  .isometric_building img {
    width: 100%;
  }
</style>
