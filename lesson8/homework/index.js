

// 1 
// const timer = (start, end) => {
//     let current = start;
//     console.log(current);
//     if (current > end) {
//         setTimeout(() => timer(current, end), 1000);
//         start--;
//     } else {
//         console.log(`Таймер звершит работу на ${current} секунде `);
//     }
// };
// timer(35, 30);

// 2

// function f() {
//     console.log(this);
// }

// let user = {
//     g: f.bind({ user: `Vasya` }),
// };

// user.g();

// 4
// function sayHi() {
//     alert(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//     name: "Вася"
// });

// console.log(bound.test);

// 5
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk, user.loginFail);


