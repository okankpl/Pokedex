
let currentPokemon;
let maxPokedex = 12;
let pokemonArray;

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
   document.getElementById('type').innerHTML += currentPokemon['types']['0']['type']['name'];
}

async function renderSmallCard() {
    content = document.getElementById('pokedex');
    content = '';

    for (let i = 0; i < maxPokedex; i++) {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + i;
        let response = await fetch(url);
        currentPokemon = await response.json();
        pokemonArray.push(currentPokemon);
        let pokemonImage = currentPokemon['sprites']['other']['official-artwork']['front_default'];
        let pokemonType = currentPokemon['types']['0']['type']['name'];

    }
}