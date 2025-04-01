<script>
  import { onMount } from "svelte";

  const API_KEY = import.meta.env.VITE_MAPS_API_KEY;

  let map;
  let mapStyle = {};

  //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  //подключаем yandex maps api https://yandex.ru/maps-api/docs/js-api/common/quickstart.html
  async function fetchMapStyle() {
    const response = await fetch("/customization.json");
    if (response.ok) {
      mapStyle = await response.json();
    } else {
      console.error("Failed to load customization.json");
    }
  }

  onMount(async () => {
    await fetchMapStyle();

    //АХХААХХААХ должны быть иммено такие ОБРАТНЫЕ КОВЫЧКИ [ ` ] !!!!
    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${API_KEY}&lang=ru_RU`;
    script.onload = initMap;
    document.head.appendChild(script);
  });

  async function initMap() {
    // @ts-ignore
    await ymaps3.ready;

    
    const {
      YMap,
      YMapDefaultSchemeLayer,
      YMapDefaultFeaturesLayer,
      YMapMarker,
    // @ts-ignore
    } = ymaps3;

    map = new YMap(document.getElementById("map"), {
      location: {
        center: [48.743763, 55.745509],
        zoom: 15.4,
      },
    });

    map.addChild(
      new YMapDefaultSchemeLayer({
        customization: mapStyle,
      })
    );
    map.addChild(new YMapDefaultFeaturesLayer());

    const content = document.createElement("marker");
    const content1 = document.createElement("marker");
    const content2 = document.createElement("marker");

    const marker = new YMapMarker(
      {
        coordinates: [48.750215, 55.746834],
        draggable: false,
        offset: [-27.5, -27.5],
      },
      content
    );

    const marker1 = new YMapMarker(
      {
        coordinates: [48.744296, 55.75022],
        draggable: false,
        offset: [-27.5, -27.5],
      },
      content1
    );

    const marker2 = new YMapMarker(
      {
        coordinates: [48.738961, 55.741549],
        draggable: false,
        offset: [-27.5, -27.5],
      },
      content2
    );

    map.addChild(marker);
    map.addChild(marker1);
    map.addChild(marker2);

    content.innerHTML = '<img src="/marker.svg" alt="marker">';
    content1.innerHTML = '<img src="/marker.svg" alt="marker">';
    content2.innerHTML = '<img src="/marker.svg" alt="marker">';
  }
</script>

<div id="map"></div>
