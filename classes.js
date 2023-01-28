function Person(name, age) { // parent class
    this.name = name;
    this.age = age;
}

function Cricketer(name, age, type, country) { // sub-class
    Person.call(this);

    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

Person.prototype = {
    eat: function () {
        console.log(`${this.name} is eating of the ${this.country}`);
    }
}

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.consturctor = Cricketer;

const sakib = new Cricketer('Sakib', 35, 'All Rounder', 'Bangladesh');
sakib.eat();











