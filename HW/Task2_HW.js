let age = ()=>{

   let a = prompt('Please input age');
   if (parseInt(a)>=18 ) alert('Access is allowed');
   else if (parseInt(a)<18 && parseInt(a)>=0) alert('Parents allowed');
   else if (a.toLowerCase()==='так') alert('Access is allowed');
   else if (a.toLowerCase()==='ні') alert('Permission denied');

};

