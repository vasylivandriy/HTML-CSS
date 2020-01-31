let getUniqueArrItems = function (arr) {

    let res = [...new Set(arr)];
    console.log(res);
};

getUniqueArrItems([1, 2, 3, 4, 5, 6, 1, 2, 3]);