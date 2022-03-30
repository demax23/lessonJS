
// 1 Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// const str = "Мороз и солнце день чудесный"

// const stringToarray = (str) => {
//    return str.split(" ");
// }

// console.log(stringToarray(str));

// 2 Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// const str  = "Мороз и солнце день чудесный"

// const deleteСharacters = (str, length) => {
//     return str.slice(0 , length)
// }

// console.log(deleteСharacters(str , 11));

// 3 Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.


// const str  = "Мороз и солнце день чудесный"

// const  insertDash = (str) => {
// return str.toUpperCase().replace(/\s/g, '-');

// }

// console.log(insertDash(str));

// 4 Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// const str  = "мороз и солнце день чудесный"

// const newString = (str) => {
    
//      return str.replace([str[0]],str[0].toUpperCase());

// // }


// console.log(newString(str));

// 5 Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
// const str  = "мороз и солнце день чудесный"
// const capitalize = (str) => {
//      return str 
//     .split(" ")
//     .map((element) => element[0].toUpperCase() + element.slice(1));

  
// }
//  console.log(capitalize(str));

// let fls = "фрилансер";
// let text = `Привет! Я ${fls}`;
// console.log(text);

// let text = 'фрилансер';
// let textSimbol = text[5];

// console.log(textSimbol);

// let text = 123 + "456";

// console.log(text);

// let text = 'фрилансер';

// console.log(text.toLocaleUpperCase());


// let text = 'фрилансер';

// console.log(text.slice(3,6));

// let text = 'фрилансер';

// console.log(text.includes('лан',4));



// 6 Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// const myString  = "мOроЗ и СолНце день чудесный"
// const changeRegister = (str) =>{

// let result = [];

// for (let i = 0; i < str.length; i ++ ){
// if (str[i] === str[i].toUpperCase()) {
//     result.push(str[i].toLowerCase());
//  } else {
//         result.push(str[i].toUpperCase());
//     }
// }
// return result.join("");

// }

// console.log(changeRegister(myString));

// 7Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// const str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";  
 
// const removeChar = (str) => {
//    let result = "";
//    result = str.replace(/[^\w\s]|_/g, "")
//           .replace(/\s+/g, " ");
//    return result;      
// }

// console.log(removeChar(str)); // "every hunter wishes to know"
