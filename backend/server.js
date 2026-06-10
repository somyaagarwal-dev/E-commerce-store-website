const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "somya123",
database: "shopease"
});

db.connect((err) => {
if (err) {
console.log("Database connection failed");
console.log(err);
} else {
console.log("Connected to MySQL");
}
});

const users = [];
app.use(cors());
app.use(express.json());

app.get("/products", (req, res) => {

db.query(
    "SELECT * FROM products",
    (err, result) => {

        if (err) {
            return res.json({
                message: "Database Error"
            });
        }

        res.json(result);

    }
);


});

app.post("/register", (req, res) => {

console.log(req.body);

const { name, email, password } = req.body;

db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {

        if (err) {
            return res.json({
                message: "Database Error"
            });
        }

        if (result.length > 0) {
            return res.json({
                message: "User already registered!"
            });
        }

        db.query(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, password],
            (err) => {

                if (err) {
                    console.log(err);
                    return res.json({
                        message: "Registration Failed"
                    });
                }

                res.json({
                    message: "Registration Successful!"
                });

            }
        );
    }
);

});
app.post("/checkout", (req, res) => {


const { name, address, totalAmount } = req.body;

db.query(
    "INSERT INTO orders (customer_name, address, total_amount) VALUES (?, ?, ?)",
    [name, address, totalAmount],
    (err) => {

        if (err) {
            console.log(err);
            return res.json({
                message: "Order Failed"
            });
        }

        res.json({
            message: "Order Placed Successfully!"
        });

    }
);


});


app.post("/login", (req, res) => {


const { email, password } = req.body;

db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {

        if (err) {
            return res.json({
                message: "Database Error"
            });
        }

        if (result.length > 0) {
            res.json({
                message: "Login Successful!"
            });
        } else {
            res.json({
                message: "Invalid Email or Password"
            });
        }

    }
);


});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});