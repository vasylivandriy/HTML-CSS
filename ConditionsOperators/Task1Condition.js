function t1Condition() {
    let countTrue = 0;
    let countFalse = 0;
    let level;

    let one = +prompt("1. Рік Помаранчевої ревоюції", "200");
    if (one === 2004) countTrue += 1;
    else countFalse += 1;

    let two = +prompt("2. Рік Революції гідности");
    if (two === 2014) countTrue += 1;
    else countFalse += 1;

    let three = prompt("3. Прізвище президента України");
    if (three.toLowerCase() === "Зеленський".toLowerCase()) countTrue += 1;
    else countFalse += 1;

    let four = prompt("4. Державна мова України");
    if (four.toLowerCase() === "українська") countTrue += 1;
    else countFalse += 1;

    let five = prompt("5. Президен, який втік з України до окупанта (прізвище) ");
    if (five.toLowerCase() === "Янукович".toLowerCase()) countTrue += 1;
    else countFalse += 1;

    let six = prompt("6. Окупант України");
    if (six.toLowerCase() === "Росія".toLowerCase() || six.toLowerCase() === "Московія".toLowerCase()) countTrue += 1;
    else countFalse += 1;

    let seven = prompt("7. Чоне....");
    if (seven.toLowerCase() === "море") countTrue += 1;
    else countFalse += 1;

    let eight = prompt("8. Прапор України - синьо-...");
    if (eight.toLowerCase() === "жовтий") countTrue += 1;
    else countFalse += 1;

    let nine = prompt("9.Ім'я та Прізвище Героя України, який під час Революції гідности у 2014 році цитував " +
        "поему Шеченка 'Кавказ', один з перших, хто загинув від куль снайперів.");
    if (nine.toLowerCase() === "Сергій Нігоян".toLowerCase()) countTrue += 1;
    else countFalse += 1;

    let ten = +prompt("10. Рік оголошення незалежности України");
    if (ten === 1991) countTrue += 1;
    else countFalse += 1;

    if (countTrue < 4) level = 'низький';
    if (countTrue > 4 && countFalse < 7) level = 'середній';
    if (countTrue >= 7) level = 'високий';


    alert('Кількість правильних відповідей = ' + countTrue + ', \nКількість неправильних відповідей = ' + countFalse +
        ', \nВаш рівень знань ' + level + ' ');


}