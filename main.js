document.addEventListener("DOMContentLoaded", function() {
  var cartItems = localStorage.getItem("cartItems");

  if (cartItems) {
    cartItems = JSON.parse(cartItems);

    var cartItemsContainer = document.getElementById("cart-items-container");

    cartItemsContainer.innerHTML = "";

    cartItems.forEach(function(product, index) {
      var cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");

      var image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;

      var name = document.createElement("h2");
      name.innerText = product.name;

      var description = document.createElement("p");
      description.innerText = product.description;

      var price = document.createElement("p");
      price.innerText = "Цена: " + product.price;

      var quantityLabel = document.createElement("label");
      quantityLabel.innerText = "Количество: ";

      var quantityInput = document.createElement("input");
      quantityInput.type = "number";
      quantityInput.value = product.quantity || 1;
      quantityInput.addEventListener("change", function() {
        cartItems[index].quantity = parseInt(quantityInput.value);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      });

      var removeButton = document.createElement("button");
      removeButton.innerText = "Удалить";
      removeButton.addEventListener("click", function() {
        cartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        cartItemsContainer.removeChild(cartItem);
      });

      cartItem.appendChild(image);
      cartItem.appendChild(name);
      cartItem.appendChild(description);
      cartItem.appendChild(price);
      cartItem.appendChild(quantityLabel);
      cartItem.appendChild(quantityInput);
      cartItem.appendChild(removeButton);

      cartItemsContainer.appendChild(cartItem);
    });
  }
});

function addToCart() {
// Товар 1
var name1 = "Обосанный Диван";
var description1 = "Сам Чупасусик обоссал этот диван во время долбёжки с неграми";
var price1 = 100;
var image1 = "divan.jpg";
var quantity1 = 1;

// Вызов функции addToCart() для товара 1
addToCart(name1, description1, price1, image1, quantity1);

// Товар 2
var name2 = "Афродизиак с екстрактом 7KINa";
var description2 = "Муж долбит меня по 48 часов в сутки
После покупки этого средства
Лишь одна капля и он дерёт меня до утра";
var price2 = 200;
var image2 = "640px-Urinbecher.jpg";
var quantity2 = 2;

// Вызов функции addToCart() для товара 2
addToCart(name2, description2, price2, image2, quantity2);

// Функция добавления товара в корзину
function addToCart(name, description, price, image, quantity) {
  var product = {
    name: name,
    description: description,
    price: price,
    image: image,
    quantity: quantity
  };

  var cartItems = localStorage.getItem("cartItems");

  if (cartItems) {
    cartItems = JSON.parse(cartItems);
  } else {
    cartItems = [];
  }

  // Проверяем, есть ли уже такой товар в корзине
  var existingProductIndex = cartItems.findIndex(function(item) {
    return item.name === name;
  });

  if (existingProductIndex !== -1) {
    // Обновляем количество товара
    cartItems[existingProductIndex].quantity += quantity;
  } else {
    // Добавляем новый товар в корзину
    cartItems.push(product);
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
