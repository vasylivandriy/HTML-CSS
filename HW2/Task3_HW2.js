let numbers = function () {

    let min = +prompt('Input min number of the range');
    let max = +prompt('Input max number of the range');

    for (let i = min; i <= max; i++) {
        if (i === 2 || i === 3 || i > 1 && Math.sqrt(i) % 1 !== 0 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
            console.log(i);
        }
    }

};