let getPosOfArr = (arr, n) => {

    let res = arr.indexOf(n) >= 0 ? arr.indexOf(n) : "This element doesn't exist";
    console.log(res);

};

getPosOfArr([3, 92, 2, 8, 4, 1], 5);