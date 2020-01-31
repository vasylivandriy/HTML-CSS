let sum = function (arr) {

    let res = arr.reduce((previousValue, currentValue) => (previousValue + currentValue));
    console.log(res);
};

sum([2, 3, 5, 10, 8, 4]);