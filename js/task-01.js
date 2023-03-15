const categoriesItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
