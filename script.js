
let currentPokemon;
let maxPokedex = 13;
let pokemonArray;

async function renderSmallCard() {
    content = document.getElementById('pokedex');
    content.innerHTML = ''; // Clear the content first

    for (let i = 1; i < maxPokedex; i++) {
        let url = 'https://pokeapi.co/api/v2/pokemon/' + i;
        let response = await fetch(url);

        if (response.ok) {
            currentPokemon = await response.json();
            let pokemonImage = currentPokemon['sprites']['other']['official-artwork']['front_default'];
            let pokemonType = currentPokemon['types'][0]['type']['name'];
            let name = currentPokemon['name'];

            // Create a new container for each Pokemon and add a class based on pokemonType
            let pokemonContainer = document.createElement('div');
            pokemonContainer.classList.add('pokedex-container');

            // Add a specific class based on pokemonType (for example, 'bgr-color-green' for 'grass' type)
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

            pokemonContainer.innerHTML = `
                <div>
                    <img id="pokemonImage" src="${pokemonImage}" alt="">
                </div>
                <div class="info-container-small-card">
                    <h2 id="pokemonName">${name}</h2>
                    <h6 id="type">Type: ${pokemonType}</h6>
                </div>
            `;

            content.appendChild(pokemonContainer);
        } else {
            console.error(`Failed to fetch data for Pokemon ${i}: ${response.statusText}`);
        }
    }
}
