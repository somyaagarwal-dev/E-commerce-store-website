let cart = JSON.parse(localStorage.getItem("cart")) || [];

let totalPrice = 0;

cart.forEach(product => {
    totalPrice += product.price;
});

document.getElementById("checkout-total").innerText = totalPrice;

document
.getElementById("checkout-form")
.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Order placed successfully!");

    localStorage.removeItem("cart");

    window.location.href = "index.html";

});