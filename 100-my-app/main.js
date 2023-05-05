// global variables

const hoursForActivity = 12;
const wholeDay = "You still have " + hoursForActivity + "hours left in your day";
let userInput = document.getElementById("inputTxt");
const validation = [];
let checkBoxed = [];
let unCheckBoxed = [];
let clear = document.getElementById("input").reset();

// functions

function checked() {
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        //checkBoxed.push(item.checked)
        if (item.checked === true) {
            let taskTime = parseFloat(item.value);
            console.log(taskTime);
            checkBoxed.push(taskTime);
            return;    
        }
        else {
            let freeTime = item.name;
            console.log(freeTime);
            unCheckBoxed.push(freeTime);
        }
    })
    for (let i = 0; i < checkBoxed.length; i++) {
        let time = checkBoxed[i];
        let hoursRemaining = hoursForActivity - time;
        hoursRemaining;
    }
    //console.log(checkBoxed)
        //console.log(hoursForActivity)
};

function updateDOM (userInput, checkBoxed) {
    let divOutput = document.querySelector('#output')
    let p = document.createElement('p')
    p.textContent = "Thanks user here is your greeting: " + ' "' + userInput + '"' + ". And your morning routine is:" + checkBoxed + "hour(s). Please consider doing the following to fill in your day: " + unCheckBoxed;
    divOutput.appendChild(p);
    return;
};

function validate(userInput) {
    if (userInput == '' || userInput == null || userInput == undefined) {
        validation.push("please enter something");
        updateDOM(validation, checkBoxed)
    }
    else if (userInput.includes == [0-9]) {
        validation.push("nice try, but please a word or phrase");
        updateDOM(validation, checkBoxed)
    }
    else {
        updateDOM(userInput, checkBoxed)
    }
}

// submitting the form

document.getElementById('replay').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(userInput.includes == [0 - 9]);
    checked();
    validate(userInput.value);
    console.log(userInput.value)
    clear;
    })
