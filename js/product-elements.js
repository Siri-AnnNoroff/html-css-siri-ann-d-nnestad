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
