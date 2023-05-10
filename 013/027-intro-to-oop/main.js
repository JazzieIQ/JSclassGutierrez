class person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    greeting() {
        console.log(`Hello, my name is ${this.firstname} and I am ${this.age} years old.`);
    }
}
const MacMac = new person("Mac Mac", "Gutierrez", "32");
MacMac.greeting();
const Stacia = new person("Stacia", "Gutierrez", "29");
Stacia.greeting();