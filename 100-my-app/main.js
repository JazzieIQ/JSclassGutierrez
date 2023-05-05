// global variables

const hoursForActivity = 12;
const wholeDay = "You still have " + hoursForActivity + "house left in your day";
let input = document.getElementById("inputTxt");
const validation = [];
let checkBoxed = [];
let clear = input.innerText = '';

// functions

const checked = document.querySelectorAll('[type="checkbox"]').forEach(item => {
    if (item.checked === true) {
        taskTime = parseInt(item.value);
        checkBoxed.push(item.value);
        for (let i = 0; i < checkBoxed.length; i++) {
            const time = checkBoxed[i];
            hoursForActivity -= time;
        }
    } else {
        wholeDay;
    }
});

function updateDOM (input, checked) {
    let divOutput = document.querySelector('#output')
    let p = document.createElement('p')
    checked;
    p.textContent = "Thanks user here is your greeting: " + "\n\n" + ' "' + input + '"' + ". And my morning routine leaves me:" + checked + " hours.";
    divOutput.appendChild(p);
    return;
};

function validate(input) {
    if (input == '' || input == null || input == undefined) {
        validation.push("please enter something");
        updateDOM(validation, checked)
    }
    else if (input.includes == [0-9]) {
        validation.push("nice try, but please a word or phrase");
        updateDOM(validation, checked)
    }
    else {
        updateDOM(input.value, checked)
    }
}

// submitting the form
document.getElementById('replay').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(input.includes == [0 - 9]);
    //checked;
    validate(input);
    console.log(input.value)
    console.log(checkBoxed)
    clear;
    })
