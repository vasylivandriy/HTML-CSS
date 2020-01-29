let myFunc = function () {

    let positive=0;
    let negative=0;

for (let i =0; i<arguments.length;i++){
if (arguments[i]>0) positive+=1;
else if (arguments[i]<0) negative+=1;

}
alert("Amount of positive = "+positive+", \nAmount of negative = "+negative+"");
};

