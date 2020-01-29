let deg = () => {

    let n = +prompt("Input number, please");
    if (n !== +null) {
        let k = +prompt("Input degree number, please");
        if (k != null) {
            if (n === 0) {
                alert("A positive degree of number = " + Math.pow(n, k) + ", \nA negative degree of number = " + Math.pow(n, -k) + ", \nA zero degree of number isn't specified ");
            } else {
                alert("A positive degree of number = " + Math.pow(n, k) + ", \nA negative degree of number = " + Math.pow(n, -k) + ", \nA zero degree of number = " + Math.pow(n, 0) + " ");
            }
        } else alert('ERROR!!! You must input two numbers. ');
    } else alert('ERROR!!! You must input two numbers. ');

};

