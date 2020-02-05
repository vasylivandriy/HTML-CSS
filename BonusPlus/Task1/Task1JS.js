window.onload = function () {

    let boxI = document.getElementsByClassName('box');

    for (let i = 1; i < 4; i++) {

        boxI[i - 1].style.backgroundColor = prompt(`Input code of a color for div${i}`);

    }


};