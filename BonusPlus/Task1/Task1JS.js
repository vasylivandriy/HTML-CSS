window.onload = function () {

 let boxI =document.getElementsByClassName('box');


    for (let i = 0; i <3 ; i++) {

        boxI[i].style.backgroundColor = prompt(`Input code of a color for div${i}`);

    }




};