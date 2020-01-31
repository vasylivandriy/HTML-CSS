let getFilteredArr = function (arr, n) {

    let res = arr.filter((value) => value > 3);
    console.log(res);
};

getFilteredArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);