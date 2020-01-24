function t3Condition() {
    let a= +prompt("Input number between 1 and 12, please");
   if (a>12||a<1) alert("Impossible");
   else if(a===1||a===2||a===12) alert("Winter");
   else if(a===3||a===4||a===5) alert("Spring");
   else if(a===6||a===7||a===8) alert("Summer");
   else  alert("Fall");



}