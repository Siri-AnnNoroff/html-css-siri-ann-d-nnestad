"use strict";

// constants
const API_URL = "https://v2.api.noroff.dev/rainy-days";

const jacketsGrid = document.getElementById("jackets-grid");

//functions

async function fetchJackets() {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    const jackets = result.data;

    displayJackets(jackets);
  } catch (error) {
    console.error("failed to fetch", error);
  }
}

function displayJackets(jackets) {
  jacketsGrid.innerHTML = "";

  jackets.forEach((jacket) => {
    const card = document.createElement("div");
    card.className = "product-container";

    const img = document.createElement("img");
    img.src = jacket.image.url;
    img.alt = jacket.image.alt;

    const title = document.createElement("h2");
    title.textContent = jacket.title;

    const price = document.createElement("h3");
    price.textContent = jacket.price;

    const sizeBtns = createSizeBtns(jacket);

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(sizeBtns);

    jacketsGrid.appendChild(card);
  });
}

fetchJackets();
