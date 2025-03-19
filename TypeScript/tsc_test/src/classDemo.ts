export default class Invoice {

    constructor(
        readonly name: string,
        private email: string,
        public status: boolean
    ) {}

    format() {
        console.log(
            `Name is ${this.name}, email is ${this.email}, status is ${this.status}`
        );
    }
}

