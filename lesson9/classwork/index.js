

// продвинутая работа с функциями

// let city = {
//     name: 'Boston',
//     number: 235000,
//     myFuncName: function (){
//         return this.name;
//     },
//     myFuncNumber: function (){
//         return this.number;
//     },
//     newFuncName: function (name){
// //         this.name = name;
// //     }
// // }

// const myCity = {
//     name: "Moscow",
//     population: 1000000,
//     showName: function () {
//         console.log(this.name);
//     },
//     showName: function () {
//         console.log(this.population);
//     },

//     chengeKeyvalue: function (key, newValue) {
//         switch (key) {
//             case "name":
//                 this.name = newValue;
//                 return;
//             case "population":
//                 this.population = newValue;
//                 return;
//             default:
//                 console.log("Ключ не найден");
//                 return;
//         }
//     }
// }

// myCity.chengeKeyvalue("name", "NN")
// console.log(myCity)




// Object.prototype.sayHi = function () {
//     console.log(`Hello, I am robot ${this.model}`);

// };
// const robot = {
//     model: "R2D2",
//     created: 2150,
//     move: function () {
//         console.log("R2D2 just moved");

//     },
// };
// const terminator = {
//     model: "T-800",
//     sayHi: function () {
//         console.log("I will be back");

//     },
// };

// Object.setPrototypeOf(terminator, robot);

// console.log(robot);
// console.log(terminator);

// terminator.move();
// robot.sayHi();





// Функции конструкторы

// function CreatPostCard(from, to) {
//     this.from = from;
//     this.to = to;
//     this.show = function () {
//         console.log(`от: ${this.from}, кому: ${this.to}`);
//     };
// }

// CreatPostCard.prototype.changeProps = function (newFrom, newTo) {
//     this.from = newFrom;
//     this.to = newTo;
// };
// const myPostCard = new CreatPostCard("me", "nn");
// myPostCard.show(myPostCard);
// myPostCard.changeProps("rr", "dd");
// myPostCard.show(myPostCard);

// console.log(myPostCard);



// Классы



// class People {
//     constructor(props) {
//         this.name = props.name;
//         this.surname = props.surname;
//     }
//         getFullName() {
//             console.log()
//         }

//     voice() {
//         console.log("I am animal");
//     }
// }

// const myAnimal = new Animal({
//     name: "Animal",
//     age: 5,
//     hasTail: true,
// });

// class Cat extends Animal {
//     constructor(props) {
//         super(props);
//         this.color = props.color;
//     }
//     voice() {
//         console.log("I am cat");
//     }
// }

// const myCat = new Cat({
//     name: "Cat",
//     age: 8,
//     hasTail: true,
//     color: "blue",
// });

// myCat.getName;
// myCat.setName = "Dog";

// console.log(myCat);

// class People {
//     constructor(props) {
//         this.name = props.name;
//         this.surname = props.surname;
//     }
//     getFullName() {
//         console.log('${this.name} ${this.surname}');
//     }
// }

// class Worker extends People {
//     constructor(props) {
//         super(props);
//         this.rate = props.rate;
//         this.day = props.day;
//     }
//     getSalary() {
//         console.log(this.rate * this.day);
//     }
// }

// const employee = new Worker({ name: "Maksim", surname: "Makurin", rate: 3000, day: 20 });

// console.log(employee);
// employee.getFullName();
// employee.getSalary();


// Пример работы с DOM деревом

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);
//     }

//     hide() {
//         this.$el.style.display = "none";
//     }

//     show() {
//         this.$el.style.display = "block";
//     }
// }

// class Box extends Component {
//     constructor(options) {
//         super(options.selector);

//         this.$el.style.width = this.$el.style.height = options.size + "px";
//         this.$el.style.background = options.color;
//     }
// }

// const box1 = new Box({
//     selector: "#box1",
//     size: 100,
//     color: "red",
// });

// const box2 = new Box({
//     selector: "#box2",
//     size: 80,
//     color: "blue",
// });

// class Circle extends Box {
//     constructor(options) {
//         super(options);

//         this.$el.style.borderRadius = "50%";
//     }
// }

// const myCircle = new Circle({
//     selector: "#circle",
//     size: 70,
//     color: "green",
// });


// function hello() {
//     console.log('Hello', this)
// }

// const person = {
//     name: 'Vladilen',
//     age: 25,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function (job, phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd()
//     }
// }

// const lena = {
//     name: 'Elena',
//     age: 23
// }

// // const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontebd', '83283')()
// // fnLenaInfoLog('Frontebd', '83283')
// // person.logInfo.call(lena, 'Frontebd', '83283')
// person.logInfo.apply(lena, ['Frontebd', '83283'])


// const array = [1, 2, 3, 4, 5]

// // function multBy(arr, n) {
// //     return arr.map(function (i) {
// //         return i * n
// //     })
// // }

// Array.prototype.multBy = function (n) {
//     return this.map(function (i) {
//         return i * n
//     })
// }

// console.log(array.multBy(2))


