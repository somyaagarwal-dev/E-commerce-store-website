let cart = JSON.parse(localStorage.getItem("cart")) || [];

let totalPrice = 0;

cart.forEach(product => {
    totalPrice += product.price;
});

document.getElementById("checkout-total").innerText = totalPrice;

document.getElementById("checkout-form")
.addEventListener("submit", function(event){


event.preventDefault();

let name = document.getElementById("name").value.trim();
let address = document.getElementById("address").value.trim();

fetch("http://localhost:3000/checkout", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: name,
        address: address,
        totalAmount: totalPrice
    })
})
.then(response => response.json())
.then(data => {

    alert(data.message);

    localStorage.removeItem("cart");

    window.location.href = "index.html";

});


});

document.getElementById("checkout-form").addEventListener("submit", function(event){

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();

    if(name === ""){
        alert("Please enter your name");
        event.preventDefault();
        return;
    }

    if(email === ""){
        alert("Please enter your email");
        event.preventDefault();
        return;
    }

    if(phone.length !== 10){
        alert("Phone number must be 10 digits");
        event.preventDefault();
        return;
    }

    if(address === ""){
        alert("Please enter your address");
        event.preventDefault();
        return;
    }

    alert("Order placed successfully! 🎉");

});