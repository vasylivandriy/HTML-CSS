function t1HW2() {
    let k = 1;
    let n = 4;

    while (k <= n) {

        let nk = n - k;
        let password = prompt('Please input your password');

        if (password === 'logos') {
            alert("Welcome");
            k = 5;
        } else {
            if (nk !== 0) alert("Password is wrong. You still have " + nk + " attemts");
            else alert("Password is wrong. You don't have attemts. Please, try again later");
        }

        k++;
    }
}