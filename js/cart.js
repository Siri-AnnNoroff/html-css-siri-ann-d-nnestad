"use strict";

//main cart logic

let cart = [];

function addToCart(product) {
  cart.push(product);
  saveCart();
  console.log(product, "added");
}

function saveCart() {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
  console.log("works");
}

function loadCart() {
  const savedCart = localStorage.getItem("shoppingCart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

loadCart();

//overlay cart
