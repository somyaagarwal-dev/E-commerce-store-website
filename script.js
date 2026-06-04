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
function searchProducts() {

    let input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let products =
        document.querySelectorAll(".products-card");

    let found = false;

    products.forEach(product => {

        let name =
            product.querySelector("h3")
            .innerText
            .toLowerCase();

        let description =
            product.querySelector("p")
            .innerText
            .toLowerCase();

        if(
            name.includes(input)
            ||
            description.includes(input)
        ){
            product.style.display = "block";
            found = true;
        }
        else{
            product.style.display = "none";
        }

    });

    document.getElementById("no-results")
        .style.display =
            found ? "none" : "block";
}
function startVoiceSearch() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Voice search is not supported in this browser.");
        return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.start();

    recognition.onresult = function(event) {

    let speech =
    event.results[0][0].transcript
    .replace(/[.,!?]/g, "")
    .trim();

        document.getElementById("searchInput").value =
            speech;

        searchProducts();
    };

    recognition.onerror = function(event) {
        console.log(event.error);
        alert("Voice search error: " + event.error);
    };
}