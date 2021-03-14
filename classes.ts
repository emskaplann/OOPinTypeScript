// Classes
const message1 = { title: undefined, message: undefined, id: undefined }
const message2 = { title: undefined, message: undefined, id: undefined }
const message3 = { title: undefined, message: undefined, id: undefined }

export class Message {
    title;
    message;
    id;
}

const message4 = new Message();
const message5 = new Message();

// Old class before ES6
function OldMessage(title, message, id) {
    this.title = title;
    this.message = message;
    this.id = id;
}

const oldMsgInstance = OldMessage("ex1", "msg1", 1);

export class MessageWithType {
    title: string;
    message: string;
    private _isSent: boolean;
    set isSent(value: boolean) {
        this._isSent = value;
    }
    get isSent(): boolean {
        return this._isSent;
    }
    deliveryDate: Date;

    constructor(title: string, message: string, isSent: boolean = false) {
        this.title = title;
        this.message = message;
        this.isSent = isSent;
    }

    get messageStatus(): string {
        const sentMessage = this.isSent ? 'Has been sent.' : 'Has not been sent.';
        return sentMessage;
    }



    previewMessage(): string {
        return this.message.slice(0, 10);
    }
}

const msgWithType = new MessageWithType("New Course!", "Check this out!", false);

msgWithType.previewMessage();
msgWithType.messageStatus;