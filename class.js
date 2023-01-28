class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log('Person is eating');
    }

    sleep (){
        console.log('Person is sleeping');
    }

    play (){
        console.log('Person is playing');
    }
}


const sakib1 = new Person('Sakib', 32);
const tamim2 = new Person('Tamin', 32);

sakib1.play();
