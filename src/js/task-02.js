const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientsListRef = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  ingridientsListRef.append(item);
}
