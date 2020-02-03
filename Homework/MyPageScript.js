window.onload = function () {

    let bodyColor = prompt('Input body color please', 'bisque');
    let bodyFontWeight = prompt('Input body font weight please', 'bold');
    let bodyFontStyle = prompt('Input body font style please', 'italic');
    let divHOneFontSize = prompt('Input font size of div h1  please', '2em');
    let hOneFontSize = prompt('Input font size of h1  please', '25px');
    let textLineHeight = prompt('Input text line weight please', '2rem');
    let textFontFamily = prompt('Input text font family please', 'Sans-Serif');
    let ulListStyleType = prompt('Input ul style list please', 'none');


    let body = document.body;
    body.style.backgroundColor = bodyColor;
    body.style.fontStyle = bodyFontStyle;
    body.style.fontSize = "20px";
    body.style.fontWeight = bodyFontWeight;
    body.style.fontFamily = "Arial";
    body.style.margin = "0";
    body.style.padding = "0";
    body.style.width = "100%";
    body.style.height = "100vh";

    let divHOne = document.getElementById('divHOne');
    divHOne.style.display = 'flex';
    divHOne.style.justifyContent = 'center';
    divHOne.style.alignItems = 'center';
    divHOne.style.fontSize = divHOneFontSize;

    let hOne = document.querySelector('h1');
    hOne.style.fontSize = hOneFontSize;

    let text = document.getElementsByClassName('text');
    text[0].style.backgroundColor = 'pink';
    text[0].style.lineHeight = textLineHeight;
    text[0].style.fontWeight = '1000';
    text[0].style.fontStyle = 'normal';
    text[0].style.fontFamily = textFontFamily;
    text[0].style.color = 'brown';

    let p = document.querySelector('p');
    p.style.backgroundColor = 'aqua';
    p.style.color = 'pink';

    let ul = document.getElementById('ul');
    ul.style.listStyleType = ulListStyleType;
    ul.style.listStyleImage = 'linear-gradient(#FF7A2F 0, #FF7A2F 50%, #FFB214 50%)';

    let color = ['red', 'green', 'blue', 'yellow', 'brown', 'orange'];

    let a = document.getElementsByTagName('a');

    for (let i = 0; i < a.length; i++) {
        a[i].style.color = color[i];
    }

    let div = document.createElement('div');
    div.style.backgroundColor = 'aqua';
    div.style.border = '2px dotted red';
    div.style.borderRadius = '15px';
    div.style.width = '100%';
    div.style.height = '40%';
    div.style.padding = '5px';

    document.body.append(div);

    let olInDiv = document.createElement('ol');
    let liInOlOne = document.createElement('li');
    let liInOlTwo = document.createElement('li');
    let liInOlThree = document.createElement('li');

    div.append(olInDiv);
    div.append(liInOlOne);
    div.append(liInOlTwo);
    div.append(liInOlThree);

    let aOne = document.createElement('a');
    let aTwo = document.createElement('a');
    let aThree = document.createElement('a');

    liInOlOne.append(aOne);
    liInOlTwo.append(aTwo);
    liInOlThree.append(aThree);

    aOne.text = prompt('Input first link please');

    aOne.style.color = 'red';
    aOne.href = 'http://google.com';

    aTwo.text = prompt('Input first link please');

    aTwo.style.color = 'grey';
    aTwo.href = 'http://google.com';

    aThree.text = prompt('Input first link please');

    aThree.style.color = 'green';
    aThree.href = 'http://google.com';










};





















