const categoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesRef.length}`);

for (const cat of categoriesRef) {
  console.log(`Category: ${cat.firstElementChild.textContent}
  Elements: ${cat.lastElementChild.children.length}`);
}
