


// const myArray = [1, () => console.log("123"), "string"];

// console.log(myArray);
//  console.log(typeof myArray);
// //  console.log(Array.isArray(myArray));  проверка являются ли данные массивом


// // многомерные массивы
// const myArray = [
//     [1, 5],  // индекс 0 
//     [2, 6],  // индекс 1
//     [3, 6 , [7, 9]],  // индекс 2

// ];

// console.log(myArray[2][2][0]);


// const myArray = ["один", "два" , "три", "четыре", "пять"];

// myArray.push("шесть");  // добавляет элемент в конце массива
// myArray.unshift("ноль"); // добавляет элемент в начале массива
// myArray.shift(); // удаляет эдемент в начале  массива
// myArray.pop(); // удаляет элемент в конце массива

// myArray.reverse().push("ноль");

// console.log(myArray);


//FIND  метод

// const users = [
//     { id: 1, name: "Vasya" },
//     { id: 2, name: "Olga" },
//     { id: 3, name: "Igor" },
//     { id: 4, name: "Lena" },
//     { id: 5, name: "Petya" },
//   ];

//   const foundUser = users.find((user) => user.id === 1);


//   console.log(foundUser);

// FILTER

// const users = [
//         { id: 1, name: "Vasya", isAdmin: false },
//         { id: 2, name: "Olga", isAdmin: false },
//         { id: 3, name: "Igor", isAdmin: false },
//         { id: 4, name: "Lena", isAdmin: true },
//         { id: 5, name: "Petya", isAdmin: false },
//       ];


       
      // const nonAdminUsers = users.filter((user) => !user.Admin);


    //   let nonAdminUsers = [];

    //   for(let i = 0; i < users.length; i ++) {

    //     if (!users[i].isAdmin) nonAdminUsers.push(users[i]);
    //   }

     

      // const evenNumbersArr = numbers.filter((number) => number % 2 ===0);

      // console.log(evenNumbersArr);

      // ForEach

      // const users = [
      //           { id: 1, name: "Vasya", isAdmin: false },
      //           { id: 2, name: "Olga", isAdmin: false },
      //           { id: 3, name: "Igor", isAdmin: false },
      //           { id: 4, name: "Lena", isAdmin: true },
      //           { id: 5, name: "Petya", isAdmin: false },
      //         ];


    // const people = [
    //   { name: 'Владилен' , age: 25, budget: 40000},
    //   { name: 'Елена' , age: 17, budget: 3400},
    //   { name: 'Игорь' , age: 49, budget: 50000},
    //   { name: 'Михаил' , age: 15, budget: 1800},
    //   { name: 'Василиса' , age: 24, budget: 25000},
    //   { name: 'Виктория' , age: 38, budget: 2300},
    // ]

    // people.forEach(function(person, index, pArr) {
    //   // console.log(person)
    //   // console.log(index)
    //   console.log(pArr)
    // })

    // people.forEach(person => console.log(person))


    // Map
    // const newPeople = people.map(person => `${person.name} (${person.age})`)
    // const newPeople = people.map(person => person.age * 3)
    // console.log(newPeople);

    // Filter
// const adults =[]
// // for(let i= 0 ; i < people.length; i ++ ){
// // if(people[i].age >= 18) {
// //   adults.push(people[i])
// // } 

// }

// const adults = people.filter(person => person.age >= 18)


// console.log(adults);


// Reduce

// let amount = 0
// for(let i = 0 ; i < people.length; i ++ ) {
// amount += people[i].budget

// }
// const amount = people.reduce((total, person) => total + person.budget,0)

// console.log(amount)

// копирование

let myVar = 1;
let myVar2 = myVar;

