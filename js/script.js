'use strict';
function twoArray () {
   const rows = Number(prompt('Введіть кількість рядків'));
   const columns = Number(prompt('Введіть кількість стовпців'));

   if (!Number(rows) || !Number(columns) || rows <= 0 || columns <= 0) {
      alert('Введено некоректні дані.');
      return;
   }

   const array = [];

   for (let i = 0; i < rows; i++) {
      const row = [];

      for (let j = 0; j < columns; j++) {
         const value = prompt(`Введіть значення для елемента [${i}][${j}]:`);
         row.push(value);  
      }

      array.push(row);
   }

   return array;
}

const resultArray = twoArray();

console.log(resultArray);





