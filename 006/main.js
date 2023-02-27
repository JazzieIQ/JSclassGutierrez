const myConst = 42
const happiness = true
let myHappiness = happiness
let myName = prompt('Give your name please?', 'Absolum') 
function testName(myName)
    {
        if (myName.match(/^[A-Za-z]+$/)) 
        {
            alert(`Thank You ${myName}`)
        }
        else {
            alert("I'm not quite sure that is your name.");
            myName
        }

}
console.log("Their name is " + myName)
testName(myName)
let myAge = prompt("What is one's age?", "00");
console.log("Their age is" + myAge)
function testAge(myAge)
{
    //let intAge = 
    // String.fromCharCode(myAge)
   // var intResult = intAge.test(intAge);
    if (myAge.match(/^[0-9]+$/)) {
        alert("I'm sorry I need a number.");
        console.log("Still need a number")
        return myAge
    }
    else if (intAge === myConst ) {
        alert("Pure Bliss");
    }
    else
        [
            alert(`${myAge}and${myHappiness}are not the same.`),
            myHappiness = false
        ]
    System.out.println(myAge)
    return intAge;
}

testAge(myAge)
console.log(typeof myName)
console.log(typeof myAge)
console.log(typeof happiness)
console.log(typeof myConst)
console.log(testName=== myName)
console.log(myAge == myHappiness);