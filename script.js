
let currentPokemon;
let maxPokedex = 39;
let pokemonArray;

async function renderSmallCard() {
    content = document.getElementById('pokedex');
    content.innerHTML = ''; 

    for (let i = 1; i < maxPokedex; i++) {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + i;
        let response = await fetch(url);
        if (response.ok) {
            currentPokemon = await response.json();
            let pokemonImage = currentPokemon['sprites']['other']['official-artwork']['front_default'];
            let pokemonType = currentPokemon['types'][0]['type']['name'];
            let name = currentPokemon['name'];
            let pokemonContainer = document.createElement('div');
            pokemonContainer.classList.add('pokedex-container');
            addBgrColor(pokemonContainer , pokemonType);
            pokemonContainer.innerHTML = smallCardTemplate(name,pokemonImage,pokemonType,i);
            content.appendChild(pokemonContainer);
        } else {
            console.error(`Failed to fetch data for Pokemon ${i}: ${response.statusText}`);
        }
    }
}

function smallCardTemplate(name, pokemonImage, pokemonType, i) {
    return /*HTML*/ `<div>
    <img id="pokemonImage" src="${pokemonImage}" alt="">
</div>
<div class="info-container-small-card">
    <h2 id="pokemonName">#${i} ${name}</h2>
    <h6 id="type">Type: ${pokemonType}</h6>
</div>
`;
}

function addBgrColor(pokemonContainer, pokemonType) {

    if (pokemonType === 'grass') {
        pokemonContainer.classList.add('bgr-color-green');
    }
    else if(pokemonType=== 'fire')
    {
        pokemonContainer.classList.add('bgr-color-red');
    }
    else if(pokemonType=== 'water')
    {
        pokemonContainer.classList.add('bgr-color-blue');
    }
    else if(pokemonType==='bug') {
        pokemonContainer.classList.add('bgr-color-bug');
    }
    else if(pokemonType==='normal') {
        pokemonContainer.classList.add('bgr-color-normal');
    }
    else if(pokemonType==='poison') {
        pokemonContainer.classList.add('bgr-color-poison');
    }
    else if(pokemonType==='electric') {
        pokemonContainer.classList.add('bgr-color-electric');
    }
    else if(pokemonType === 'ground') {
        pokemonContainer.classList.add('bgr-color-ground');
    }
    else if(pokemonType === 'fairy') {
        pokemonContainer.classList.add('bgr-color-fairy');
    }
}