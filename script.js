let currentPokemon;
let maxPokedex = 29;
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
  "bgr-color-psychic",
  "bgr-color-flying",
  "bgr-color-steel",
  "bgr-color-dragon",
  "bgr-color-ice",
  "bgr-color-rock",
  "bgr-color-fighting",
  "bgr-color-ghost",
  "bgr-color-dark",
];
let barColors = [
  "#fb6c6c",
  "#48d0b0",
  "#76bdfe",
  "#6d4b97",
  "#f2c341",
  "#895229",
];
let bigCardStatus = false;
let myChart = null;
let currentIndex = 0;
let startPokemon = 1;

async function renderSmallCard() {
  content = document.getElementById("pokedex");

  for (let i = startPokemon; i < maxPokedex; i++) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + i;
    let response = await fetch(url);
    if (response.ok) {
      currentPokemon = await response.json();
      let pokemonImage =
        currentPokemon["sprites"]["other"]["official-artwork"]["front_default"];
      let pokemonType = currentPokemon["types"][0]["type"]["name"];
      let name2 = currentPokemon["name"];
      let name = capitalizeFirstLetter(name2);
      let pokemonContainer = document.createElement("div");
      createPokedexContainer(pokemonContainer, content, i, currentPokemon);
      addBgrColor(pokemonContainer, pokemonType, i);
      pokemonContainer.innerHTML = smallCardTemplate(name,pokemonImage,pokemonType,i);
    } else {
      console.error(
        `Failed to fetch data for Pokemon ${i}: ${response.statusText}`
      );
    }
  }
}

function createPokedexContainer(pokemonContainer, content, i, currentPokemon) {
  pokemonContainer.classList.add("pokedex-container");
  content.appendChild(pokemonContainer);
  pokemonContainer.id = i;
  pokemonBigCard.push(currentPokemon);
}

function loadMore() {
  startPokemon = maxPokedex; 
  maxPokedex += 30;
  renderSmallCard();
  currentIndex = startPokemon;
  if(startPokemon === 1025) {
    document.getElementById('loadBtn').classList.add('d-none');
  }
}

function openBigCard(i, event) {
  currentIndex = i;
  if (event) event.stopPropagation();
  document.getElementById("overlay").style.display = "block";
  i--;
  let pokemonImage =
    pokemonBigCard[i]["sprites"]["other"]["official-artwork"]["front_default"];
  let pokemonType = pokemonBigCard[i]["types"][0]["type"]["name"];
  let name = pokemonBigCard[i]["name"];
  let bigCard = document.getElementById("bigCard");
  addBgrColorBigCard(pokemonType, bigCard);
  renderBigCard(pokemonImage, name, pokemonType);
  renderChart(i);
  bigCardStatus = true;
}

function renderBigCard(pokemonImage, name, pokemonType) {
  document.getElementById("pokedexBigCard").classList.remove("d-none");
  document.getElementById("bigCardImage").src = pokemonImage;
  document.getElementById("pokemonNameBigCard").innerHTML = capitalizeFirstLetter(name);
  document.getElementById("pokemonTypeBigCard").innerHTML = `Type: ${pokemonType}`;
}

document.addEventListener("click", function (event) {
  let isClickInsideBigCard = document
    .getElementById("pokedexBigCard")
    .contains(event.target);

  if (!isClickInsideBigCard && bigCardStatus) {
    document.getElementById("pokedexBigCard").classList.add("d-none");
    bigCardStatus = false;
    document.getElementById("overlay").style.display = "none";
  }
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

document.getElementById("pokedexBigCard").addEventListener("click", function (event) {
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
  currentIndex--;
  if (currentIndex <= 0) {
    currentIndex = pokemonBigCard.length - 1;
  }
  openBigCard(currentIndex);
}

document.getElementById("searchPokemon").addEventListener("input", function (e) {
    const searchText = e.target.value.toLowerCase();
    const filteredPokemons = pokemonBigCard.filter(function (pokemon) {
      return pokemon.name.toLowerCase().includes(searchText);
    });
    renderFilteredPokemons(filteredPokemons);
  });

function renderFilteredPokemons(filteredPokemons) {
  let content = document.getElementById("pokedex");
  content.innerHTML = "";

  filteredPokemons.forEach((pokemon, index) => {
    let pokemonContainer2 = document.createElement("div");
    addBgrColor(pokemonContainer2, pokemon.types[0].type.name);
    pokemonContainer2.classList.add("pokedex-container");
    pokemonContainer2.innerHTML = smallCardTemplate(
      pokemon.name,
      pokemon.sprites.other["official-artwork"].front_default,
      pokemon.types[0].type.name,
      index + 1
    );
    content.appendChild(pokemonContainer2);
  });
}
