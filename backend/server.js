const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/products", (req, res) => {
const products = [
    {
        name: "Wireless Headphones",
        price: 1999,
        image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=1000&auto=format&fit=crop&q=60",
        detailsPage: "headphones.html"
    },
    {
        name: "Smart Watch",
        price: 2999,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1000&auto=format&fit=crop&q=60",
        detailsPage: "smartwatch.html"
    },
    {
        name: "Bluetooth Speaker",
        price: 1499,
        image: "https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?w=1000&auto=format&fit=crop&q=60",
        detailsPage: "bluetoothspeaker.html"
    },
    {
        name: "Wireless Mouse",
        price: 999,
        image: "https://images.unsplash.com/photo-1631749352438-7d576312185d?w=800&auto=format&fit=crop&q=60",
        detailsPage: "mouse.html"
    },
    {
        name: "Mechanical Keyboard",
        price: 2499,
        image: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?w=800&auto=format&fit=crop&q=60",
        detailsPage: "keyboard.html"
    },
    {
        name: "Gaming Monitor",
        price: 14999,
        image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=800&auto=format&fit=crop&q=60",
        detailsPage: "monitor.html"
    }
];

    res.json(products);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});