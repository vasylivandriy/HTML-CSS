let getUniqueArrItems = function (arr) {

    let res = [...new Set(arr)];
    console.log("Array Set", res);

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr.length; j++) {

            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count === 1) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr);

};

getUniqueArrItems([1, 2, 3, 4, 5, 6, 1, 2, 3]);