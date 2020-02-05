window.onload = function () {

    let colors = ['red', 'green', 'blue', 'yellow', 'brown', 'gold', 'aqua'];
    let overM = document.getElementById('color');
    let i = 0;

    document.getElementById('color').onmouseleave = () => {
        overM.style.backgroundColor = 'darkviolet';
    };

    document.getElementById('color').onmouseover = () => {
        if (i === 7) {
            i = 0;
        }
        overM.style.backgroundColor = colors[i];
        i++;

    };


};