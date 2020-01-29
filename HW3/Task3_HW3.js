let max = function () {


    if (arguments.length < 2) alert("ERROR. Amount of arguments must be more than 1");
    else {
        let numMax = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            if (arguments[i] > numMax) numMax = arguments[i];
        }

        alert('Min number is '+numMax+'');
    }
};
