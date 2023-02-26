const myConst = 42
const happiness = true
let myHappiness = happiness
let myName = prompt('Give your name please?', 'Absolum') 
let myAge = prompt("What is one's age?", "00");
function stringName() {
                var stringName = /^[A-Za-z]+$/;
                if (myName.valueOf===stringName) {
                    alert(`Thank You ${stringName}`);
                }
                else {
                    alert("I'm not quite sure that is your name.");
    }
    console.log(stringName)
    return stringName
}
function testAge(myAge)
{
    var intAge = String.fromCharCode(myAge.which)
   // var intResult = intAge.test(intAge);
    if (!(/^[0-9]+$/.test(myAge))) {
        alert("I'm sorry I need a number.");
        console.log("Still need a number")
    }
    else if (intAge === myConst ) {
        alert("Pure Bliss");
    }
    else
        [
            alert(`${myAge}and${myHappiness}are not the same.`)
        ]
    System.out.println(myAge);
    return intAge
}

console.log(typeof myName)
console.log(typeof myAge)
console.log(typeof happiness)
console.log(typeof myConst)
console.log(stringName === myName)
console.log(myAge == myHappiness);