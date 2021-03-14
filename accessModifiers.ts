// Encapsulation
// Private, Protected, Public

export class Animal {
    protected age: number;
    private _legs: number;
    public name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this._legs = legs;
        this.name = name;
    }
}

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

// Static Methods, Class Methods
export class Message {
    title: string;
    message: string;
    isSent: boolean;
}

export class Messages {
    private static _messages: Message[];

    constructor(message: Message) {
        Messages._messages = [message, ...Messages._messages];
    }

    static get allMessages(): Message[] {
        return Messages._messages;
    }
}

Messages.allMessages

// Readonly
export class MessageV2 {
    public readonly id: string;
    title: string;
    message: string;
    isSent: boolean;

    constructor(id: string) {
        this.id = id;
    }
}
