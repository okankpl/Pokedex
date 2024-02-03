let currentPokemon;
let maxPokedex = 10;
let pokemonArray;
let pokemonStats = [];
let stats = ["hp", "attack", "defense", "sp-attack", "sp-defense", "speed"];
let pokemonBigCard = [];
const colorClasses = [
  "bgr-color-green",
  "bgr-color-red",
  "bgr-color-blue",
  "bgr-color-bug",
  "bgr-color-normal",
  "bgr-color-poison",
  "bgr-color-electric",
  "bgr-color-ground",
  "bgr-color-fairy",
];

let barColors = [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
];

let bigCardStatus = false;
let myChart = null;
let currentIndex = 0;

async function renderSmallCard() {
  content = document.getElementById("pokedex");
  content.innerHTML = "";

  for (let i = 1; i < maxPokedex; i++) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + i;
    let response = await fetch(url);
    if (response.ok) {
      currentPokemon = await response.json();
      let pokemonImage =
        currentPokemon["sprites"]["other"]["official-artwork"]["front_default"];
      let pokemonType = currentPokemon["types"][0]["type"]["name"];
      let name = currentPokemon["name"];
      let pokemonContainer = document.createElement("div");
      pokemonBigCard.push(currentPokemon);
      addBgrColor(pokemonContainer, pokemonType);
      pokemonContainer.classList.add("pokedex-container");
      pokemonContainer.innerHTML = smallCardTemplate(name,pokemonImage,pokemonType,i);
      content.appendChild(pokemonContainer);
      pokemonContainer.id = i;
      
    } else {
      console.error(
        `Failed to fetch data for Pokemon ${i}: ${response.statusText}`
      );
    }
  }
}

function loadMore() {
  pokemonBigCard = [];
  maxPokedex = 39;
  renderSmallCard();
  document.getElementById("loadBtn").classList.add("d-none");
}

function openBigCard(i, event) {
    currentIndex = i;
  if (event) event.stopPropagation();
  document.getElementById("overlay").style.display = "block";
  i--;
  let pokemonImage =pokemonBigCard[i]["sprites"]["other"]["official-artwork"]["front_default"];
  let pokemonType = pokemonBigCard[i]["types"][0]["type"]["name"];
  let name = pokemonBigCard[i]["name"];
  let bigCard = document.getElementById("bigCard");
  addBgrColorBigCard(pokemonType, bigCard);
  document.getElementById("pokedexBigCard").classList.remove("d-none");
  document.getElementById("bigCardImage").src = pokemonImage;
  document.getElementById("pokemonNameBigCard").innerHTML = name;
  document.getElementById("pokemonTypeBigCard").innerHTML = `Type: ${pokemonType}`;
  renderChart(i);
  bigCardStatus = true;
}

document.addEventListener("click", function (event) {
  var isClickInsideBigCard = document
    .getElementById("pokedexBigCard")
    .contains(event.target);

  if (!isClickInsideBigCard && bigCardStatus) {
    document.getElementById("pokedexBigCard").classList.add("d-none");
    bigCardStatus = false;
    document.getElementById("overlay").style.display = "none";
  }
});

document.getElementById("pokedexBigCard").addEventListener
("click", function (event) {
    event.stopPropagation();
  });

  function nextCard() {
    currentIndex++;
    if (currentIndex >= pokemonBigCard.length + 1) {
        currentIndex = 1;
    }
    openBigCard(currentIndex);
}

function prevCard() {
    currentIndex --;
    if (currentIndex <= 0) {
        currentIndex = pokemonBigCard.length - 1;
    }
    openBigCard(currentIndex);
}

document.getElementById('searchPokemon').addEventListener('input', function (e) {
    const searchText = e.target.value.toLowerCase();
    const filteredPokemons = pokemonBigCard.filter(function (pokemon) {
      return pokemon.name.toLowerCase().includes(searchText);
    });
    // Angenommen, Sie haben eine Funktion, die ähnlich wie `renderSmallCard` funktioniert, aber ein Array von Pokémon akzeptiert
    renderFilteredPokemons(filteredPokemons);
  });

  function renderFilteredPokemons(filteredPokemons) {
    let content = document.getElementById("pokedex");
    content.innerHTML = ""; // Löscht den bestehenden Inhalt zu Beginn
  
    filteredPokemons.forEach((pokemon, index) => {
      let pokemonContainer = document.createElement("div");
      addBgrColor(pokemonContainer, pokemon.types[0].type.name);
      pokemonContainer.classList.add("pokedex-container");
      pokemonContainer.innerHTML = smallCardTemplate(pokemon.name, pokemon.sprites.other["official-artwork"].front_default, pokemon.types[0].type.name, index + 1); // Index + 1, wenn Ihre ID bei 1 beginnt
      content.appendChild(pokemonContainer);
    });
  }


function renderChart(i) {
  pokemonStats = [];
  for (let j = 0; j < 6; j++) {
    let actualstat = pokemonBigCard[i]["stats"][j]["base_stat"];
    pokemonStats.push(actualstat);
  }

  const chart = document.getElementById("chart");
  Chart.defaults.font.weight = "bold";

  if (myChart) {
    myChart.destroy(); // lösche das vorhandene Diagramm
  }
  myChart = new Chart(chart, {
    type: "bar",
    data: {
      labels: stats,
      datasets: [
        {
          label: "",
          data: pokemonStats,
          borderWidth: 1,
          backgroundColor: barColors,
          categoryPercentage: 1, // Anteil der Kategoriebreite, die die Balken einnehmen
          barPercentage: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      indexAxis: "y",
      plugins: {
        legend: {
          display: false, // Versteckt die Legende vollständig
        },
        title: {
          display: false, // Versteckt den Titel, falls einer vorhanden ist
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: "black",
            font: {
              size: 13,
            },
          },
        },
        x: {
          beginAtZero: true,
          ticks: {
            color: "black",
          },
        },
      },
    },
  });
}

function addBgrColor(pokemonContainer, pokemonType) {
  if (pokemonType === "grass") {
    pokemonContainer.classList.add("bgr-color-green");
  } else if (pokemonType === "fire") {
    pokemonContainer.classList.add("bgr-color-red");
  } else if (pokemonType === "water") {
    pokemonContainer.classList.add("bgr-color-blue");
  } else if (pokemonType === "bug") {
    pokemonContainer.classList.add("bgr-color-bug");
  } else if (pokemonType === "normal") {
    pokemonContainer.classList.add("bgr-color-normal");
  } else if (pokemonType === "poison") {
    pokemonContainer.classList.add("bgr-color-poison");
  } else if (pokemonType === "electric") {
    pokemonContainer.classList.add("bgr-color-electric");
  } else if (pokemonType === "ground") {
    pokemonContainer.classList.add("bgr-color-ground");
  } else if (pokemonType === "fairy") {
    pokemonContainer.classList.add("bgr-color-fairy");
  }
}

function addBgrColorBigCard(pokemonType, bigCard) {
  bigCard.classList.remove(...colorClasses);
  if (pokemonType === "grass") {
    bigCard.classList.add("bgr-color-green");
  } else if (pokemonType === "fire") {
    bigCard.classList.add("bgr-color-red");
  } else if (pokemonType === "water") {
    bigCard.classList.add("bgr-color-blue");
  } else if (pokemonType === "bug") {
    bigCard.classList.add("bgr-color-bug");
  } else if (pokemonType === "normal") {
    bigCard.classList.add("bgr-color-normal");
  } else if (pokemonType === "poison") {
    bigCard.classList.add("bgr-color-poison");
  } else if (pokemonType === "electric") {
    bigCard.classList.add("bgr-color-electric");
  } else if (pokemonType === "ground") {
    bigCard.classList.add("bgr-color-ground");
  } else if (pokemonType === "fairy") {
    bigCard.classList.add("bgr-color-fairy");
  }
}

function smallCardTemplate(name, pokemonImage, pokemonType, i) {
  return /*HTML*/ `
    <div onclick="openBigCard(${i}, event)" class="width-height">
      <div>
      <img id="pokemonImage" src="${pokemonImage}" alt="">
  </div>
  <div class="info-container-small-card">
      <h2 id="pokemonName">#${i} ${name}</h2>
      <h6 id="type">Type: ${pokemonType}</h6>
  </div>
   </div>
  
  `;
}
