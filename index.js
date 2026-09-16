function calculate(event){
    var num1 = parseFloat(document.getElementById("numberA").value);
    var num2 = parseFloat(document.getElementById("numberB").value);
    var operation = event.target.value;
    var result;

    switch(operation) {
        case "Add":
            result = num1 + num2;
            break;
        case "Subtract":
            result = num1 - num2;
            break;
        case "Multiply":
            result = num1 * num2;
            break;
        case "Divide":
            result = num1 / num2;
            break;
        case "Modulus":
            result = num1 % num2;
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById("result").innerText = "Result: " + result;
}