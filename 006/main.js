const myConst = 42
const happiness = true
let myHappiness = happiness
function myName() {
    var stringName = prompt("Give your name please?")
    return stringName;
}
function stringName (myName) {
    var regPattern = /^[A-Za-z]{2,}$/;
    var regResult = regPattern.test(myName);
    if (regResult === false) {
        alert("I'm not quite sure that is your name.")
        return stringName;
    }
    else {
        alert(`Thank You ${myName}`)
        return myName;}
}
let stringName = myName 
console.log(typeof myName)
function myAge() {
    var intAge = prompt("What is one's age?")
    return intAge;
}
myAge.userInput = function (intAge)
    {
    var regPattern = /^[0-9]{2,}$/;
    var intResult = regPattern.test(intAge);
    if (intResult === false) {
        alert("I'm sorry I need a number.")
        return intAge
    }
    else {
        let log1 = String(myAge + 'and' + myHappiness + 'are not the same.')
        console.log(log1)
        console.log(typeof myAge)
        console.log(myAge === myHappiness)
        return intAge;
    }    
}
console.log(stringName === String)