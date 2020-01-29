let max = function () {
    let maxNum = arguments[0];
    if (arguments.length === 3 || arguments.length === 4) {
        for (let i = 1; i < arguments.length; i++) {
            if (arguments[i] > maxNum) maxNum = arguments[i];
        }
        alert('Maximum number is ' + maxNum + '');
    } else alert('You inputted a wrong amount of arguments');

};

