const myConst = 42
const happiness = true
let myName = prompt('Give your name please?', 'Absolum'); 
stringName = (myName) =>
{
    if (typeof myName !== typeof myConst)
    {
        
        alert(`Thank You ${[myName]}`)
    }
    else
    {
        alert("I'm not quite sure that is your name.");
        myName = prompt('Give your name please?', 'Absolum');
        stringName(myName)
    }
}
stringName(myName)
console.log("Their name is " + myName)
let myAge = prompt("What is one's age?", "00");
function determineIntAge(myAge)
{
        return parseInt(myAge)
}
let intAge = determineIntAge(myAge)
console.log("Their age is " + [intAge])
function testAge(intAge)
{
    if (!(typeof intAge == typeof myConst))
    {
        alert("I'm sorry I need a number.")
        console.log("Still need a number")
        myage = prompt("What is one's age?", "00")
        determineIntAge(myAge)
        testAge(intAge)
    }
    else if (intAge = null)
    {
        alert("I'm sorry I need a number.");
        console.log("Still need a number")
        myage = prompt("What is one's age?", "00");
        determineIntAge(myAge)
        testAge(intAge)
    }
    else if (intAge === myConst) {
        alert("Pure Bliss. I feel it is very " + happiness + " that you are happy");
    }

    else
        [
            alert("I feel it is " + happiness + " that you are happy"),
        ]
return intAge;
}
testAge(intAge)
//happiness is a constant that we will use to measure how joyous the user feels through their age input.
//Clever users will know "42" is the best answer regardless of their true age.
//Clever programmers will log what they really know.
let myHappiness = happiness
function testHappiness(myHappiness) {
    if (intAge == myConst) (
        // myHappiness = happiness remains
        myHappiness = true
    )
    else if (intAge === myConst) {
        // myHappiness = happiness remains
        myHappiness = true
        console.log("ROFL! They made a funny.")
    }
    else if (!(intAge == myConst)) {
        // now myHappiness must be false
        let myHappiness = false
        console.log("I don't think I know if they are happy.")
        return myHappiness;
    }
    else (!(intAge === myConst))
    {
        // now myHappiness must be false
        let myHappiness = false
        console.log("I don't think they are happy.")
        return myHappiness;
    }
}
testHappiness(myHappiness)
console.log(happiness)
console.log(myHappiness === happiness)
console.log(typeof myName)
console.log(typeof intAge)
console.log(typeof happiness)
console.log(typeof myConst)