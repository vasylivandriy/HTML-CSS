function task8HW1() {

    let num = +prompt("Input please number");
    let deg = +prompt("Input please degree of number");

    let res = 1;
    let degN;
    let numN;

    if (deg < 0) {
        numN = 1 / num;
     degN = deg + 2 * (-deg);
    }

    if (deg === 0) {
        alert("" + num + "^" + deg + " = 1;");
    } else {
        for (let i = degN; i > 0; i--) {
            res *= numN;
        }
    alert("" + num + "^" + deg + " = "+res+";");
    }


}