function t2HW3() {
    let one = 1;
    let two = 1;
    let number = +prompt("Input amount of Fibonacci numbers ");


    if (number === 1) {
        alert("Amount of Fibonacci numbers = " + number + " \n" + one + " ");
    } else if (number === 2) {
        alert("Amount of Fibonacci numbers = " + number + " \n" + one + " " + two + " ");
    } else {
        console.log(one);
        console.log(two);

        for (let i = 3; i <= number; i++) {
            let c = one + two;
            one = two;
            two = c;
            console.log(two);
        }

    }
}