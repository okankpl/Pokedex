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
  } else if (pokemonType === "psychic") {
    pokemonContainer.classList.add("bgr-color-psychic");
  } else if (pokemonType === "fighting") {
    pokemonContainer.classList.add("bgr-color-fighting");
  } else if (pokemonType === "rock") {
    pokemonContainer.classList.add("bgr-color-rock");
  } else if (pokemonType === "ice") {
    pokemonContainer.classList.add("bgr-color-ice");
  } else if (pokemonType === "dragon") {
    pokemonContainer.classList.add("bgr-color-dragon");
  } else if (pokemonType === "flying") {
    pokemonContainer.classList.add("bgr-color-flying");
  } else if (pokemonType === "steel") {
    pokemonContainer.classList.add("bgr-color-steel");
  } else if (pokemonType === "ghost") {
    pokemonContainer.classList.add("bgr-color-ghost");
  } else if (pokemonType === "dark") {
    pokemonContainer.classList.add("bgr-color-dark");
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
  } else if (pokemonType === "psychic") {
    bigCard.classList.add("bgr-color-psychic");
  } else if (pokemonType === "fighting") {
    bigCard.classList.add("bgr-color-fighting");
  } else if (pokemonType === "rock") {
    bigCard.classList.add("bgr-color-rock");
  } else if (pokemonType === "ice") {
    bigCard.classList.add("bgr-color-ice");
  } else if (pokemonType === "dragon") {
    bigCard.classList.add("bgr-color-dragon");
  } else if (pokemonType === "flying") {
    bigCard.classList.add("bgr-color-flying");
  } else if (pokemonType === "steel") {
    bigCard.classList.add("bgr-color-steel");
  } else if (pokemonType === "ghost") {
    bigCard.classList.add("bgr-color-ghost");
  } else if (pokemonType === "dark") {
    pokemonContainer.classList.add("bgr-color-dark");
  }
}
