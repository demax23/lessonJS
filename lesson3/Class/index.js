// примитивные типы данный:
// number
// console.log(1 / 0);
// console.log(typeof NaN)

// Оператор typeof показывает тип данных, указанный после typeof

// String

// const myStrings = 'строка'

// const anotherString = `текст: текст`

// const templateString = `шаблонная строка ${anotherString}`

// console.log(templateString)

// Boolean
// имеет только два значение false или true !!!!
// const isAdmin = true;
// const isUser = false;

// Null
// const emptyVariable = null;

// undefined
// const userName ;
// console.log(userName);

// Немпримитивные тип данных
// Объект

// const user = {
//   name: 'Vasya',
//   LastName: 'Ivanov',
//   age: 23,
//   citizenship: 'Russia',

// }

// console.log(user.name);

// // оператор typeof

// // typeof null -всегда объект! ошибка JS

// console.log(typeof user);

// Преобразоваие типов данных
// Строковое преобразование

// const myVar = 123;

// const myVarToStrings = String(myVar);
// console.log(myVarToStrings);

// Численное преобразование

// const myVar = "123";

// const myVarToNumber = +myVar;

// console.log(typeof myVarToNumber);

// Логическое преобразование

// const myVar = 1;

// console.log(!!myVar);

// Математические операторы
// бинарный плюс

// const myNumber = 1;
// const newNumber = 2;
// const myString = "строка";

// console.log(myNumber + myString);

// Сравнение строк
// const string1 = "строка";
// const string2 = "солнце";

// console.log(string1 == string2);

// unicode

// console.log(null == "\n0\n");

// console.log('кот' > 'код')
// const a = 3;
// const b = 4;
// console.log(a + b);

// console.log('Hello world')

// const myName = 'Denis'

// console.log(myName)

// console.log('я запустил node js')
// const myVar1 = 5;
// const myVar2 =10;

// if (myVar > myVar2) {
//     console.log(`${myVar1} больше ${myVar2}`);
// } else if (myVar)
//     console.log("test");
// }

// let result = myVAr1 > myVar2 ? console.log(true) : console.log(false) //Тернарный оператор

// Конструкйия Switch

// const userRole = `admin`;

// switch(userRole) {
//     case `admin`:
//         "Текущий пользователь - admin";
//     break;
//     case "normal_user":
//       console.log("Текущий пользователь - normal_user");
//       break;

// }

//Логические операторы
//&& - логическое И - возвращает первое значени FALSE
// || - логическое ИЛИ - возвращает первое значение TRUE
// ! - логическое НЕ

// console.log(1 || 0);
// console.log(1 && 0);

// console.log((1 && 2) || (4 && 0));

// //что делает JS по шагово

// if (1 && 0) {
//     console.log(result);
// }
//1. Находит ключевое слово IF, понимает, что дальше условие
// 2. Внутри условие находит логическое



// console.log(null || 0 || "" || undefined);

// console.log("яблоко" && true && null && 1);

// console.log(!0 && !!1);

// console.log(!null || (!"апельсин" && true));

// const intervalOne = 5;
// const intervalTwo = 8;
// const intervalThree = 18;


// if (intervalOne > intervalTwo && intervalOne > intervalThree){
//  console.log(`${Самый большой отрезок}`);
//  } else if (intervalTwo > intervalOne)

//Практика
//Задача 1

// const intervalOne = 5123;
// const intervalTwo = 2;
// const intervalThree = 8;

// if (intervalOne > intervalTwo && intervalOne > intervalThree) {
//   console.log(`${intervalOne} - самый большой отерзок`);
// } else if (intervalTwo > intervalOne && intervalTwo > intervalThree) {
//   console.log(`${intervalTwo} - самый большой отерзок`);
// } else if (intervalThree > intervalOne && intervalThree > intervalTwo) {
//   console.log(`${intervalThree} - самый большой отерзок`);
// }

//2 
// const currentTmp = -30;

// if (currentTmp < -30){
//     console.log("Оставайтесь дома")
// } else if (currentTmp > -30 && currentTmp <= -10) {
//     console.log("сегодня холодно");
// } else if (currentTmp > -10 && currentTmp <= 5) {
//     console.log("Не холодно")
// } else if (currentTmp > 5 && currentTmp <= 15) {
//     console.log("Тепло");
// } else if (currentTmp > 15 && currentTmp <= 25) {
//     console.log("Очень тепло");
// } else if (currentTmp > 25 && currentTmp <35) {
//     console.log("Жарко");
// } else {
//     console.log("пекло");
// }

// циклы
// let myVar = o;
//  while (myVar >= 0 && myVar <= 10) {
//      console.log((myVar +=1));
//  }

 // FOR

//  let myVar = 10;

//  for (let i = 0; i <= myVar; i++) {
//   console.log(i);
//  }

//  if (counter === 7) {

//  }

 // 1 решить через while, do-while, for

 // 2 
//  let carsAmount = 60;
//  const minCarsAmount = 10;


//  // 1 . вывести заданную строку N раз

//  const interation = "Итерация";

//  //While

//  const limit = 5;
//  let counter = 0;

//  while (counter <= 5) {
//      console.log(`${iteration} - ${counter}`)
//      counter++
//  }

// let message = "ECMAScript";

// if (message == "ECMAScrip" ) {
//     console.log("Верно");
// } else {
//     console.log(`Не верно`);
// }

let value = -3 ;

if (value == 0) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}