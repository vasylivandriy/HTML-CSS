function t1HW3() {

    let number1 = +prompt("Input number1 ");
    let number2 = +prompt("Input number2 ");

    if (number1 === number2) alert("Числа рівні");
    else {
        let a = number1;
        number1 = number2;
        number2 = a;

        if (number1 % 2 === 0) {
            number1 += 1;
            for (number1; number1 <= number2; number1 += 2) {
                alert(number1);
            }
        } else {
            for (number1; number1 <= number2; number1 += 2) {
                alert(number1);
            }
        }
    }
}