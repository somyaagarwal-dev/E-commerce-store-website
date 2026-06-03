let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cart-items");

let totalPrice = 0;
let productCounts = {};
if(cart.length === 0){
    cartItems.innerHTML = `
        <tr>
            <td colspan="3">Your cart is empty 😢</td>
        </tr>
    `;
}
cart.forEach(product => {

    if(productCounts[product.name]) {
        productCounts[product.name].quantity++;
    }
    else {
        productCounts[product.name] = {
            price: product.price,
            quantity: 1
        };
    }

});
for(let productName in productCounts){

    let row = document.createElement("tr");

    let product = productCounts[productName];

row.innerHTML = `
    <td>${productName}</td>
    <td>${product.quantity}</td>
    <td>₹${product.price * product.quantity}</td>

    <td>
        <button onclick="decreaseQuantity('${productName}')">➖</button>

        <button onclick="increaseQuantity('${productName}')">➕</button>

        <button onclick="removeProduct('${productName}')">🗑</button>
    </td>
`;

    cartItems.appendChild(row);

    totalPrice += product.price * product.quantity;
}

document.getElementById("total-items").innerText = cart.length;

document.getElementById("total-price").innerText = totalPrice;
function removeItem(index) {
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}
function increaseQuantity(productName){

    let product = cart.find(item => item.name === productName);

    if(product){
        cart.push({
            name: product.name,
            price: product.price
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}
function decreaseQuantity(productName){

    let index = cart.findIndex(item => item.name === productName);

    if(index !== -1){
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}
function removeProduct(productName){

    cart = cart.filter(item => item.name !== productName);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}