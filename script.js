let currentPokemon;
let maxPokedex = 23;
let pokemonArray;
let pokemonStats = [];
let stats = ["hp", "attack", "defense", "sp-attack", "sp-defense", "speed"];
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
      addBgrColor(pokemonContainer, pokemonType);
      pokemonContainer.classList.add("pokedex-container");
      pokemonContainer.innerHTML = smallCardTemplate(
        name,
        pokemonImage,
        pokemonType,
        i
      );
      content.appendChild(pokemonContainer);
      pokemonContainer.id = i;
    } else {
      console.error(
        `Failed to fetch data for Pokemon ${i}: ${response.statusText}`
      );
    }
  }
}

function smallCardTemplate(name, pokemonImage, pokemonType, i) {
  return /*HTML*/ `
  <div onclick="openBigCard${i}()">
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
function loadMore() {
  maxPokedex = 39;
  renderSmallCard();
  document.getElementById("loadBtn").classList.add("d-none");
}

function openBigCard(i) {}

async function renderBigCard() {
  let url = "https://pokeapi.co/api/v2/pokemon/charmeleon";
  let response = await fetch(url);
  currentPokemon = await response.json();
  let pokemonImage =
    currentPokemon["sprites"]["other"]["official-artwork"]["front_default"];
  let pokemonType = currentPokemon["types"][0]["type"]["name"];
  let name = currentPokemon["name"];
  let pokemonContainer = document.createElement("div");
  document.getElementById("bigCardImage").src = pokemonImage;
  console.log(currentPokemon);
  renderChart();
}

function renderChart() {
  for (let j = 0; j < 6; j++) {
    let actualstat = currentPokemon["stats"][j]["base_stat"];
    pokemonStats.push(actualstat);
  }

  const chart = document.getElementById("chart");
  Chart.defaults.font.weight = "bold";
  new Chart(chart, {
    type: "bar",
    data: {
      labels: stats,
      datasets: [
        {
          label: "",
          data: pokemonStats,
          borderWidth: 1,
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
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
        }
      },
      scales: {
        y: {
          beginAtZero: true,
        },
        x: {
          beginAtZero: true,
        },
      },
    },
  });
}
