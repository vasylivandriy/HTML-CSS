let prime = () => {

    let n = +prompt("Input number > 1, please ");

    if (n <= 1) {
        alert('You inputted a wrong number');

    } else if (n === 2 || n === 3 || Number.isInteger(n) && Math.sqrt(n) % 1 !== 0 && n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {

        alert('True. Is prime number');

    } else alert("False. Isn't prime number");

};