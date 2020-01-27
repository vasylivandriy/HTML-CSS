function task2Condition() {

    let name = prompt("Input your name, please");


    if (name == null) alert("Entry cenceled");

    else if (name.replace(/[+*?$^(.)'"/[0123456789]]/g,"").length === 0  ) {
        alert("I don't know you");

    } else {

        let password = prompt("Input your password please");

        if (password == null) alert("Entry cenceled");
        else if (password === "ЛОГОС") alert("Welcome");
        else alert("Password is incorrect");
    }
}