function validateRegister() {


let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(name === "") {
    alert("Name is required");
    return false;
}

if(email === "") {
    alert("Email is required");
    return false;
}

if(password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
}

fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: name,
        email: email,
        password: password
    })
})
.then(response => response.json())
.then(data => {
    alert(data.message);
});

return false;


}
