// Завдання 1: Категорії
const categories = document.querySelectorAll("#categories .item");
console.log(`У списку ${categories.length} категорії.`);
categories.forEach(category => {
    const title = category.querySelector("h2").textContent;
    const itemsCount = category.querySelectorAll("ul li").length;
    console.log(`Категорія: ${title}\nКількість елементів: ${itemsCount}`);
});

// Завдання 2: Додавання інгредієнтів у список
const ingredients = ['Картопля', 'Гриби', 'Часник', 'Помідори', 'Зелень', 'Приправи'];
const ingredientsList = document.getElementById("ingredients");
ingredientsList.innerHTML = ingredients.map(ingredient => `<li>${ingredient}</li>`).join("");

// Завдання 3: Галерея зображень
const images = [
    { url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg', alt: 'Біло-чорний кіт' },
    { url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg', alt: 'Кої риби' },
    { url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg', alt: 'Коні' }
];
const gallery = document.getElementById("gallery");
gallery.innerHTML = images.map(img => `<li><img src="${img.url}" alt="${img.alt}"></li>`).join("");

//innerHTML - дозволяє редагувати HTML

// Завдання 4: Лічильник
let counterValue = 0;
const valueSpan = document.getElementById("value");
document.getElementById("increment").addEventListener("click", () => {
    counterValue++;
    valueSpan.textContent = counterValue;
});
document.getElementById("decrement").addEventListener("click", () => {
    counterValue--;
    valueSpan.textContent = counterValue;
});