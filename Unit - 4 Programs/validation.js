// Email Validation
let email = "arun@gmail.com";

let emailPattern =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

console.log(
    "Email:",
    emailPattern.test(email)
);


// Phone Validation
let phone = "9876543210";

let phonePattern = /^[6-9][0-9]{9}$/;

console.log(
    "Phone:",
    phonePattern.test(phone)
);


// Password Validation
let password = "Arun1234";

let passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;

console.log(
    "Password:",
    passwordPattern.test(password)
);
