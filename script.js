// script.js

document.getElementById("showMoreBtn").addEventListener("click", function () {
  const extraContent = document.getElementById("extraContent");
  extraContent.style.display = extraContent.style.display === "none" ? "block" : "none";
});

// Basit dizi ve nesne örneği: İskoç yemekleri veri listesi
const foods = [
  { name: "Haggis", description: "Traditional dish made of sheep organs and spices." },
  { name: "Scotch Pie", description: "Double-crust meat pie." },
  { name: "Shortbread", description: "Sweet, crumbly biscuit made of butter, sugar and flour." },
  { name: "Scottish Salmon", description: "Fresh salmon from Scottish rivers." }
];

console.log("Traditional Scottish Foods:");
foods.forEach(food => console.log(`${food.name}: ${food.description}`));

// Form etkileşimi
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting us!");
  this.reset();
});
