let text1 = prompt("Enter text1");
let text2 = prompt("Enter text2");
let text3 = prompt("Enter text3");
alert(text1 + " " + text2 + " " + text3);
let userNumber = prompt("Enter a five-digit number:");
if (userNumber.length === 5 && !isNaN(userNumber)) {
    let number = parseInt(userNumber);
    let digit5 = number % 10;
    let digit4 = Math.floor(number / 10) % 10;
    let digit3 = Math.floor(number / 100) % 10;
    let digit2 = Math.floor(number / 1000) % 10;
    let digit1 = Math.floor(number / 10000);
    alert('Result: ' + digit1 + ' ' + digit2 + ' ' + digit3 + ' ' + digit4 + ' ' + digit5);
} else {
    alert("Please enter a valid five-digit number");
}
