let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartCount = document.getElementById("cart-count");

if (cartCount) {
    cartCount.innerText = cart.length;
}

function addToCart(productName, price) {
    let product = {
        name: productName,
        price: price
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

   if (cartCount) {
    cartCount.innerText = cart.length;
}
console.log(productName + " added to cart!");
}