
let currentPokemon;

async function loadPokemon() {
    let url ='https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log(currentPokemon);
    renderPokemonInfo();
}

function renderPokemonInfo() {
   let name = document.getElementById('pokemonName');
   name.innerHTML = currentPokemon['name'];
   document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
}