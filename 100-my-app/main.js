// global variables

let hoursForActivity = parseFloat(12);
const wholeDay = "You still have " + hoursForActivity + "hours left in your day";
let userInput = document.getElementById("inputTxt");
const validation = [];
let checkBoxed = [];
let unCheckBoxed = [];
let hoursRemaining;


// functions

function checked() {
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        //checkBoxed.push(item.checked)
        if (item.checked === true) {
            let taskTime = parseFloat(item.value);
            //console.log(taskTime);
            checkBoxed.push(taskTime);
            return;    
        }
        else {
            let freeTime = item.name;
            //console.log(freeTime);
            unCheckBoxed.push(freeTime);
            return;
        }
    })
    console.log(checkBoxed);
    console.log(unCheckBoxed);
};

function timeParse(hoursRemaining) {
    for (let i = 0; i < checkBoxed.length; i++) {
        console.log(typeof checkBoxed[i])
        //console.log(checkBoxed[i])
        let time = parseFloat(checkBoxed[i]);
        //console.log(time);
        hoursRemaining = parseFloat(hoursForActivity) - time;
        hoursRemaining;
    }
    console.log(hoursRemaining);    
    };

function updateDOM(userInput, hoursRemaining) {
    checked();
    let divOutput = document.querySelector('#output')
    let p = document.createElement('p')
    p.textContent = "Thanks user here is your greeting: " + ' "' + userInput + '"' + ". And your morning routine leaves you with:" + timeParse(hoursRemaining) + "hour(s). Please consider doing the following to fill in your day: " + unCheckBoxed;
    divOutput.appendChild(p);
    return;
};

function validate(userInput) {
    if (userInput == '' || userInput == null || userInput == undefined) {
        validation.push("[User did not input anything!]");
        updateDOM(validation, hoursRemaining)
    }
    else if (userInput.includes == [0-9]) {
        validation.push("nice try, but please a word or phrase");
        updateDOM(validation, hoursRemaining)
    }
    else {
        updateDOM(userInput, hoursRemaining)
    }
}

// submitting the form

document.getElementById('replay').addEventListener('click', (e) => {
    e.preventDefault();
    unCheckBoxed.length = 0;
    validation.length = 0;
    document.getElementById('output').innerHTML = '';
    //console.log(userInput.includes == [0 - 9]);
    console.log(userInput.value);
    validate(userInput.value);
    })
