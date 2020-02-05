window.onload = function () {

    let colors = ['red', 'green', 'blue', 'yellow', 'brown', 'gold', 'aqua'];
    let overM = document.getElementById('color');
    let i = 0;

    overM.onmouseleave = () => {
        overM.style.backgroundColor = 'darkviolet';
    };

    overM.onmouseover = () => {
        if (i === 7) {
            i = 0;
        }
        overM.style.backgroundColor = colors[i];
        i++;

    };

    overM.onmousedown = () => {
        overM.style.backgroundColor = 'darkgreen';
    };

    overM.onmouseup = () => {
        overM.style.backgroundColor = 'yellow';
    };

};