class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Cricketer extends Person {
    constructor(name, age, type, country) {
        super(name, age);

        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }

    eat() {
        super.eat();
        console.log('Hello  Mehedi');
    }

    play() {
        console.log(`${this.name} can play Cricket`)
    }

    get getName() { // getter function
        return this.name;
    }

    set setName(name) { // setter function 
        this.name = name;
    }

    static isEqualAge(a, b) {
        return a.age === b.age
    }
}

const sakib = new Cricketer('Sakib', 35, 'All rounder', 'Bangladesh');
const tamim = new Cricketer('Tamim', 35, 'Batsman', 'Bangladesh');

sakib.eat();







