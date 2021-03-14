class User {
    firstName: string;
    lastName: string;
    email: string;

    get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    doesEmailMatch(email: string): boolean {
        return this.email == email;
    }
}