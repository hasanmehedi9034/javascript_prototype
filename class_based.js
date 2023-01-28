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

    play() {
        console.log(`${this.name} can play Cricket`)
    }

    get getName() { // getter function
        return this.name;
    }

    set setName(name) { // setter function 
        this.name = name;
    }
}

const sakib = new Cricketer('Sakib', 35, 'All rounder', 'Bangladesh');
sakib.setName = 'Mehedi';

console.log(sakib)







