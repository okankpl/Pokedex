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
     </div>`;
  }
  