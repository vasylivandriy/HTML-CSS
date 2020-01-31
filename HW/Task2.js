let addArrAfterPos = function (arr, arrToPaste, n) {

    let res = arr.splice(n, 0, ...arrToPaste);

    console.log(res);

};

addArrAfterPos([2, 3, 4, 5, 10, 11, 12, 13], [6, 7, 8, 9], 4);