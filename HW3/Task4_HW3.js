let luckyTicket =  function(a1,a2,a3,a4,a5,a6,a7,a8) {
    let resLeft = 0;
    let resRight = 0;

    if (arguments.length === 8) {
        // let i = 1;
        // while (i <= arguments.length) {
        //
        //     if (arguments[i] >=0 && Number.isInteger(arguments[i])) {
        //         i++;
        //     }
        // }
//Перевірити чи додатнє і ціле?

        for (let i = 0; i < 4; i++) {
            resLeft = resLeft + arguments[i];
            resRight = resRight + arguments[i + 4];
        }

        if (resLeft === resRight) alert('YOU WON');
        else alert("You didn't win. \nСума чисел лівої частини = "+resLeft+" \nСума чисел правої частини = "+resRight+"");

    } else alert('You inputted wrong amount of numbers');

};

