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

    alert("Registration Successful!");

    return true;
}