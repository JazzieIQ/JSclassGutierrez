
const myConst = 42
const happiness = true
let myHappiness = happiness
function myName() {
    var stringName = prompt("Give your name please?")
    return stringName;
}
$scope.userInput = function (stringName) {
    var regPattern = /^[A-Za-z]{2,}$/;
    var regResult = regPattern.test(stringName);
    if (regResult === false) {
        alert("I'm not quite sure that is your name.")
        return stringName
    }
    else {
        alert(`Thank You ${myName}`)
        return stringName;}

}
function myAge() {
    var stringName = prompt("Give your name please?")
    return stringName;
}
let stringName = myName 
console.log(typeof myName)
console.log(typeof myAge)
console.log(stringName === String)
if (true) {
    let myAge = function prompt(String { "What is one's age?"}) 
}
    let log1 = String(myAge + 'and' + myNAme + 'are not the same.')
    console.log(log1 + myAge === myName)

