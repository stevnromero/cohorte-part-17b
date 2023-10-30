'use strict';
function BinarioADecimal(num) {
   if (binario.constructor != String) {
       return null;
   }

   binario = binario.replace(/[^01]/gi, '');

   return Number.parseInt(binario, 2);
}

console.log(convertirBinarioADecimal('1001'));  // 9
console.log(convertirBinarioADecimal('1111'));  // 15
console.log(convertirBinarioADecimal('10000'));  // 16
console.log(convertirBinarioADecimal('11111'));  // 31

console.log();

console.log(convertirBinarioADecimal(1001));    // null


function DecimalABinario(num) {
   // tu codigo aca
 
   let array = [];
 
   while (num > 0) {
 
     let resto = num % 2;
     num = (Math.floor(num / 2));
     array.push(resto);
 
 
 
   }
 
   return array.reverse().join("");
 
 }
 
 console.log(DecimalABinario(56));




module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
