const myConst = 42
const happiness = true
let myHappiness = happiness
let myName = prompt('Give your name please?', 'Absolum'); 
function stringName(myName)
    {
    if (myName.match(/^[A-Za-z]+$/)) {
        alert(`Thank You ${myName}`)
    }
    else {
            alert("I'm not quite sure that is your name.");
        myName = prompt('Give your name please?', 'Absolum');
        stringName(myName)
        }

}
stringName(myName)
console.log("Their name is " + myName)
let myAge = prompt("What is one's age?", "00");
function intAge(myAge)
{
    parseInt(myAge)
    return myAge;
}
intAge(myAge)
console.log("Their age is " + myAge)
function testAge(intAge)
{
    if (!(myAge.match(/^[0-9]+$/)))
    {
        alert("I'm sorry I need a number.");
        console.log("Still need a number")
        myage = prompt("What is one's age?", "00");
        intAge(myAge)
        testAge(intAge)
    }
    else if (myAge === myConst ) {
        alert("Pure Bliss");
    }
    else
        [
            alert("I feel it is " + happiness + " that you are happy"),
        ]

return intAge;
}
function testhappiness(happiness)
{
    let myHappiness = happiness
    if (myAge == myConst) (
        myHappiness = true
    )
    else if (myAge === myConst) {
        myHappiness = true
    }
    else (!(myAge == myConst))
    {
        myHappiness = false
        console.log("I don't think I know if they are happy.")
        return myHappiness;
    }
}
testAge(myAge)
testhappiness (happiness)
console.log(typeof myName)
console.log(typeof myAge)
console.log(typeof happiness)
console.log(typeof myConst)
console.log(happiness)
console.log(myHappiness === happiness);