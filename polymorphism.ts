// Polymorphism

/*
1. method / param overriding -> child overrides parent method
2. method overloading -> same methods (Javascript doesn't support this)
3. interfaces / abstract classes implements
*/

export class User {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class BaseUser extends User {
    protected role: string;

    public hasAllAccess(): boolean {
        return this.role === 'Admin';
    }
}

export class SuperAdmin extends BaseUser {
    role = 'Admin';
    password: string;

    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
    }

    // override
    public hasAllAccess(): boolean {
        return true;
    }
}