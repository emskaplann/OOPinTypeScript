// Inheritance
// Base / Parent Class
export class Animal {
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

// Derived / Child Class(s)
export class Dog extends Animal {
    woof(): string {
        return 'WOOF! WOOF! WOOF!';
    }
}

const dog = new Dog(2, 4, 'Gator');
dog.name;
dog.woof();

export class Cat extends Animal {
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }

    meow(): string {
        return 'MEOW! HISS! HISS!';
    }
}

const cat = new Cat({ age: 1, legs: 4, name: 'Boncuk' });
cat.meow();


// Difference between `extends` and `implements`
// `extends` inherits the super class
// `implements` matches the shape of the super class