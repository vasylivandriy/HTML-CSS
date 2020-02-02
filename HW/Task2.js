let addArrAfterPos = function (arr, arrToPaste, n) {

    arr.splice(n, 0, ...arrToPaste);

    console.log(arr);

};

addArrAfterPos([2, 3, 4, 5, 10, 11, 12, 13], [6, 7, 8, 9], 4);