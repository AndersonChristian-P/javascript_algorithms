// const table = document.getElementsByTagName('table');
// const table2 = document.getElementsByTagName('table');
// const table3 = document.getElementsByTagName('table')[1].rows[1].childElementCount;

// let count = 0;

// for (i = 0; i < table.length; i++) {

//   // for (j = 0; j < rows.length; j++)
//   count += document.getElementsByTagName('table')[i].rows[i].childElementCount;
// }







// // const table = document.querySelector('table')

// // const tableRow = table.querySelectorAll('td')

// console.log(table)
// console.log(table2)
// console.log(table3)
// console.log(count)

// // console.log(tableRow)





const tables = document.getElementsByTagName('table');

if (tables.length === 0) {
  console.log(0);

} else {

  const lengths = Array.from(tables).map(table => table.querySelectorAll('td').length);

  const max = Math.max(...lengths);

  console.log(max);
}
x


console.log(tables)
console.log(tables.length)
// console.log(lengths)
// console.log(max)