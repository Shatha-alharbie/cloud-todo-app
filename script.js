let orderType = "";
let cart = [];

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

function chooseOrderType(type) {
  orderType = type;

  document.getElementById("selectedTypeText").textContent =
    "Order type: " + type;

  showPage("menu");
}

function addToCart(name, price, image) {
  cart.push({
    name: name,
    price: price,
    image: image
  });

  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (cart.length === 0) {
    cartItems.textContent = "Your basket is empty.";
    cartTotal.textContent = "Total: 0 SAR";
    return;
  }

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(function(item) {
    total += item.price;

    const row = document.createElement("div");
    row.className = "cart-item";

    row.innerHTML =
      "<span>" + item.name + "</span><span>" + item.price + " SAR</span>";

    cartItems.appendChild(row);
  });

  cartTotal.textContent = "Total: " + total + " SAR";
}

function showReceipt() {
  if (cart.length === 0) {
    alert("Please add at least one item to the basket.");
    return;
  }

  const receiptItems = document.getElementById("receiptItems");
  const receiptTotal = document.getElementById("receiptTotal");
  const receiptImages = document.getElementById("receiptImages");
  const receiptType = document.getElementById("receiptType");

  receiptItems.innerHTML = "";
  receiptImages.innerHTML = "";

  let total = 0;

  cart.forEach(function(item) {
    total += item.price;

    const row = document.createElement("div");
    row.className = "receipt-row";

    row.innerHTML =
      "<span>" + item.name + "</span><span>" + item.price + " SAR</span>";

    receiptItems.appendChild(row);

    const img = document.createElement("img");
    img.src = item.image;

    receiptImages.appendChild(img);
  });

  receiptType.textContent =
    "Order Type: " + (orderType || "Not selected");

  receiptTotal.textContent = total + " SAR";

  showPage("receipt");
}

function clearOrder() {
  orderType = "";
  cart = [];

  updateCart();

  showPage("home");
}