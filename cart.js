let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cart-items");

let totalPrice = 0;
if(cart.length === 0){
    cartItems.innerHTML = `
        <tr>
            <td colspan="3">Your cart is empty 😢</td>
        </tr>
    `;
}

cart.forEach((product, index) => {
    let row = document.createElement("tr");

    row.innerHTML = `
    <td>${product.name}</td>
    <td>₹${product.price}</td>
    <td>
        <button onclick="removeItem(${index})">
            Remove
        </button>
    </td>
`;

    cartItems.appendChild(row);

    totalPrice += product.price;
});

document.getElementById("total-items").innerText = cart.length;

document.getElementById("total-price").innerText = totalPrice;
function removeItem(index) {
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}