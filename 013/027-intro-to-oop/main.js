class person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    setFullName(newFullName) {
        this._fullname = newFullName;
    }
    greeting() {
        console.log(`Hello, my name is ${this.FullName} and I am ${this.age} years old.`);
    }
}
class student extends person {
    constructor(firstname, lastname, age, classList) {
        super(firstname, lastname, age);
        this.classList = classList;
    }
    getClassList() {
        return this.classList;
    }
    setClassList(newClassList) {
        this.classList = newClassList;
    }
    greeting() {
        console.log(`Hello, my name is ${this.firstname} and I am ${this.age} years old and am taking the following classes: ${this.classList}`);
    }
    
}
// Mac Mac

const MacMac = new student("Mac Mac", "Gutierrez", "32", ["CIT-93", "CIT-63", "CIT-28"]);
MacMac.greeting();
console.log(MacMac.getFullName());
MacMac.setClassList(["CIT-93", "CIT-63", "CIT-28", "CIT-95", "MUS-10B", "POLCI-5", "POLCI-13"]);
console.log(MacMac.getClassList());

//Other Students

const Jazmine = new person("Jazmine", "Gutierrez", "30");
const Stacia = new student("Stacia", "Gutierrez", "29", ["Eng1A", "Eng1B", "Eng1C"]);
Stacia.greeting();
Stacia.setClassList(["Eng1A", "Eng1B", "Eng1C", "MUS-10B"]);
console.log(Stacia.getFullName() + ':\n' + Stacia.getClassList());
