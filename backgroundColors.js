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
  