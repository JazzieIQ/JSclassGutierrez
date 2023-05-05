// global variables

const hoursForActivity = 12;
const wholeDay = "You still have " + hoursForActivity + "hours left in your day";
let userInput = document.getElementById("inputTxt");
const validation = [];
let checkBoxed = [];
let clear = document.getElementById("input").reset();

// functions

function checked() {
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        console.log(item.checked)
        /*
            if (item.checked === true) {
                let taskTime = parseInt(item.value);
                checkBoxed.push(taskTime);
                for (let i = 0; i < checkBoxed.length; i++) {
                    let time = checkBoxed[i];
                    let hoursRemaining = hoursForActivity - time;
                    hoursRemaining
                }
            } else {
                checkBoxed.push(wholeDay);
            }
        */
        })
        //console.log(hoursForActivity)
};

function updateDOM (userInput, checked) {
    let divOutput = document.querySelector('#output')
    let p = document.createElement('p')
    p.textContent = "Thanks user here is your greeting: " + ' "' + userInput + '"' + ". And my morning routine leaves you:" + checked + " hours.";
    divOutput.appendChild(p);
    return;
};

function validate(userInput) {
    if (userInput == '' || userInput == null || userInput == undefined) {
        validation.push("please enter something");
        updateDOM(validation, checked)
    }
    else if (userInput.includes == [0-9]) {
        validation.push("nice try, but please a word or phrase");
        updateDOM(validation, checked)
    }
    else {
        updateDOM(userInput, checked)
    }
}

// submitting the form
document.getElementById('replay').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(userInput.includes == [0 - 9]);
    validate(userInput.value);
    //console.log(checked.value);
    console.log(userInput.value)
    console.log(checkBoxed)
    clear;
    })
