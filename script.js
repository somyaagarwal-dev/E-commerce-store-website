let count = 0;

function addToCart() {
    count++;
    alert("Count = " + count);

    document.getElementById("cart-count").innerText = count;
}
