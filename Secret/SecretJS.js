window.onload = function () {
    const text = 'I have a secret!!!';
    const textOver = 'Do you know it?';
    const textClick = "And, i am not going to tell you!!!";

    let sec = document.getElementById('secret');
    sec.append(text);

    sec.onmouseover = () => {
        sec.style.backgroundColor = 'yellow';
        sec.style.color = 'black';
        sec.style.border = '8px ridge green';
        sec.innerHTML = '';
        sec.append(textOver);
    };

    sec.onmouseleave = () => {
        sec.style.backgroundColor = 'darkviolet';
        sec.style.color = 'black';
        sec.style.border = '8px ridge orange';
        sec.innerHTML = '';
        sec.append(text);
    };

    sec.onmousedown = () => {
        sec.style.backgroundColor = 'black';
        sec.style.color = 'white';
        sec.style.border = '8px ridge yellow';
        sec.innerText = '';
        sec.append(textClick);
    };

    sec.onmouseup = sec.onmouseover;


};