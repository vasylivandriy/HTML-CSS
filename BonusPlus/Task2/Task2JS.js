window.onload = function () {

    const colors = ['red', 'green', 'blue', 'purple', 'aqua', 'brown', 'pink', "yellow"];


    let ul = document.createElement('ul');
    document.body.append(ul);


    for (let i = 0; i < colors.length; i++) {
        document.body.append(document.createElement('li'));
    }

    for (let i = 0; i < colors.length; i++) {
        document.getElementsByTagName('li')[i].append(colors[i]);
    }

    colors.forEach((value, index) => {
        alert(value);
        document.getElementsByTagName('li')[index].style.backgroundColor = value;
    });


};