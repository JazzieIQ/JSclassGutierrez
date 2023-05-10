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
class student extends person {
    constructor(firstname, lastname, age, classList) {
        super(firstname, lastname, age);
        this.classList = classList;
    }
    greeting() {
        console.log(`Hello, my name is ${this.firstname} and I am ${this.age} years old and am taking the following classes: ${this.classList}`);
    }

}

const MacMac = new student("Mac Mac", "Gutierrez", "32", ["CIT-93", "CIT-63", "CIT-28"]);
MacMac.greeting();
const Stacia = new person("Stacia", "Gutierrez", "29");
Stacia.greeting();