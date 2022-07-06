
// Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и целые отрицательные числа, в качестве результата возвращать сумму четных положительных элементов переданного массива.


// const numbers = [2 , -5, 6, 8, -9]

// const filterNumbers = numbers.filter((i) => i % 2 ===0)

// console.log(filterNumbers)

// //   console.log(filterNumbers)
// // // let arr = [2 , -5, 6, 8, -7];
// // // 	let filterArr = arr.filter((e) => e % 2 === 0); 



// const array = [1, 2, 3, 1, 1, '1', '2', '1', true, false, true, null, undefined, null, null, undefined];

// const makeUniq = (arr) => {
//   return arr.filter((el, id) => arr.indexOf(el) === id);
// }

// console.log(array);

const numbers = [2 , -5, 6, 8, -9]
 const filterNumbers = numbers.filter((i) => i % 2 ===0)
const sumNumbers = numbers.reduce((accum, current) => accum + current); 

	console.log(sumNumbers); // 10

