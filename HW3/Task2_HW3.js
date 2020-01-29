let min = function () {


    if (arguments.length < 2) alert("ERROR. Amount of arguments must be more than 1");
    else {
        let numMin = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            if (arguments[i] < numMin) numMin = arguments[i];
        }

        alert('Min number is '+numMin+'');
    }
};
