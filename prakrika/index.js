

// Создайте константу weight, запишите в нее вашу массу в килограммах.
// Создайте константу c, запишите в нее значение скорости света в вакууме в метрах в секунду: 300000000.
// Вычислите значение энергии вашего тела с помощью знаменитой формулы E=mc2, где m — это ваша масса (weight), а c — это скорость света. Запишите значение в константу energy.

// const weight = 75;
// const c = 3000000000;
// const energy = weight * c * c;
// console.log(energy);

// const weight = 75
// const c = 300000000
// const energy = function (weight, c) {
//     return weight * c * c
// }

// console.log(energy(75, 300000000));

// const squareOfSum = (a, b) => Math.pow((a + b), 2);

// console.log(squareOfSum(3, 4));
// const isEven = num => num % 2 === 0;

// // функция увеличивает полученное число num на 10
// const increaseNum = num => num + 10;

// const num = 6;

// const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;

// console.log(result);

// Реализуйте функцию finalGrade(), которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов.

// Функция принимает два аргумента:

// exam — оценка за экзамен, число от 0 до 100;
// projects — количество проектов, число от 0 и выше.
// Функция возвращает: число (итоговую оценку).

// Есть четыре возможных итоговых оценки:

// 100, если оценка за экзамен выше 90 или есть больше 10 проектов
// 90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
// 75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
// 0 в любом другом случае

// const finalGrade = (exam, project) => {
//     if (exam > 90 || project > 10) {
//         return 100;
//     } else if (exam > 75 && project >= 5) {
//         return 90;
//     } else if (exam > 50 && project >= 2) {
//         return 75;
//     } else {
//         return 0;
//     }
// };

// console.log(finalGrade(100, 12));  // 100
// console.log(finalGrade(99, 0));    // 100
// console.log(finalGrade(10, 15));   // 100

// console.log(finalGrade(85, 5));    // 90

// console.log(finalGrade(55, 3));    // 75

// console.log(finalGrade(55, 0));    // 0
// console.log(finalGrade(20, 2)); 

// const a = 4;
// const b = 7;
// const reference = () => {
//     // BEGIN (write your solution here)
//     let reference = a + b;
//     return calcSum;
//     // END
// };

// console.log(calcSum);

// const squre = (num) => {
//     return num * num;
// }
// console.log(squre(34))

// const product = (n) => {
//     if (n === 5) {
//         return n;
//     }

//     return n * product(n + 1);
// };

// /*
//  * вычисление: 2 * 3 * 4 * 5 * 6 * 7 * ...
//  * RangeError: Maximum call stack size exceeded
//  */
// product(2);

// const sequenceSum = (begin, end) => {
//     if (begin === 2) {
//         return 2;
//     }
//     else {
//         return end * sequenceSum(end - 1);
//     }
// }

// console.log(sequenceSum(1, 5));

// const sequenceSum = (begin, end) => {

//     if (begin == 0 && end == 0) {
//         return 0;
//     } else if (begin == end) {
//         return begin;
//     } else if (begin > end) {
//         return NaN;
//     }
//     return begin + sequenceSum(begin + 1, end);
// };

// console.log('Сумма чисел: ', sequenceSum(1, 5)); // 15

// const sequenceSum = (begin, end) => {
//     if (begin > end) {
//         return NaN;
//     }
//     else if (begin === end) {
//         return begin;
//     }

//     else {
//         return end + sequenceSum(begin, end - 1);
//     }

// };
// const result = sequenceSum(1, 5);
// console.log(result);