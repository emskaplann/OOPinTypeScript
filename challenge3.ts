export class User {
    public readonly id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    protected dob: Date;

    public get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public doesEmailMatch(email: string): boolean {
        return this.email === email;
    }

    constructor(id: number, firstName: string, lastName: string, email: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}

class Admin extends User {
    constructor(id: number, firstName: string, lastName: string, email: string) {
        super(id, firstName, lastName, email);
    }

    private getYear(): string {
        return this.dob.getFullYear().toString();
    }
}