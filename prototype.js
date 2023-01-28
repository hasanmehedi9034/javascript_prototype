// let person = {

// }


// person.name = 'Mehedi'
// person.age = 28

// person.printDetails = () => {
//     console.log(`${person.name} ${person.age}`)
// }

// person.printDetails();

// const personMethods = {
//     eat() {
//         console.log('Person is eating');
//     },
//     sleep (){
//         console.log('Person is sleeping');
//     },
//     play (){
//         console.log('Person is playing');
//     }
// }

function Person(name, age) {
    let person = Object.create(Person.prototype);

    person.name = name;
    person.age = age;

    return person;
}

Person.prototype = {
    eat() {
        console.log('Person is eating');
    },
    sleep (){
        console.log('Person is sleeping');
    },
    play (){
        console.log('Person is playing');
    }
}

const sakib = Person('Sakib', 32);
const tamim = Person('Tamin', 32);

sakib.play();

// function test() {

// }

// console.log(test.prototype);
