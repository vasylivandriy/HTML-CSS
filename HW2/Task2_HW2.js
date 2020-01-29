let geometricProg = function () {

    let n = +prompt('Input amount of members of the geometric progression');
    let q = +prompt('Input denominator of the geometric progression');
    let bFirst = 1;
    let Sn = 0;

    Sn = bFirst * (1 - Math.pow(q, n)) / (1 - q);
   alert(Sn);
};