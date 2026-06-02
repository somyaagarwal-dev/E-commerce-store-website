let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cart-items");

cart.forEach(product => {
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${product}</td>
    `;

    cartItems.appendChild(row);
});

document.getElementById("total-items").innerText = cart.length;