const myConst = 42
const happiness = true
let myHappiness = happiness
let myName = prompt("Give your name please?", "Absolum"); 
let myAge = prompt("What is one's age?", "00");
function stringName() {
                var stringName = myName
                var namePattern = /^[A-Z][a-z]{0,50}$/;
                var nameResult = namePattern.test(stringName);
                if (nameResult === true) {
                    alert(`Thank You ${stringName}`);

                }
                else {
                    alert("I'm not quite sure that is your name.");
    }
}
        try{
            int number = Integer.parseInt(myAge);
            System.out.println(number); // output = 25
        }
        catch (NumberFormatException ex){
            ex.printStackTrace();
        }
function intAge(myAge)
    {
    var intAge = myAge
    var regPattern = /^[0-9]{0,2}$/;
    var intResult = regPattern.test(intAge);
    if (intResult === false) {
        alert("I'm sorry I need a number.");
        console.log("Needs a number")
    }
    else if (myage === 42) {
        alert("Pure Bliss");
    }
    else
        [
            alert(`${myAge}and${myHappiness}are not the same.`)
        ]
    return intAge
}
console.log(typeof myName)
console.log(typeof myAge)
console.log(typeof happiness)
console.log(typeof myConst)
console.log(stringName === myName)
console.log(myAge === myHappiness)