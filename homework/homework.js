'use strict'

function BinarioADecimal(num) {
 
  array1 = Array.from(String(num), Number);
  let natural = 0;
  let i = 0;
  let entero1 = 0;

    do { entero1 = array1.pop()*Math.pow(2,i);
      i=i+1;
      natural = natural + entero1;
      

  } while (array1.length>0);
return natural;
}

function DecimalABinario(num) {
  let i=0;
  let a = 0;
  array=[];

  do {
    array.unshift(num%2);
    num=Math.floor(num/2);
  }
  while (num!=0);
  let num1 = +array.join("")
  return num1;  

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}