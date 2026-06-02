let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cart-count").innerText = cart.length;

function addToCart(productName) {
    cart.push(productName);

    localStorage.setItem("cart", JSON.stringify(cart));

    document.getElementById("cart-count").innerText = cart.length;

    alert(productName + " added to cart!");
}
