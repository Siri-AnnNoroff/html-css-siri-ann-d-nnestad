//creating buttons

function createSizeBtns(jacket) {
  const sizeContainer = document.createElement("div");

  jacket.sizes.forEach((size) => {
    const sizeBtn = document.createElement("button");
    sizeBtn.textContent = size;

    sizeContainer.appendChild(sizeBtn);
  });

  return sizeContainer;
}

function createAddToCart() {
  const addToCartContainer = document.createElement("div");
  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to cart";
  addToCartBtn.className = "cta";
  addToCartContainer.appendChild(addToCartBtn);

  return addToCartContainer;
}
