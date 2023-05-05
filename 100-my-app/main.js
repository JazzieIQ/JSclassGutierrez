function updateDOM (input, checkBoxed) {
    let divOutput = document.querySelector('#output')
    let p = document.createElement('p')
    p.textContent = "Thanks user here is your greeting: " + "\n\n" + ' "' + input + '"' + ". And my morning routine is:" +checkBoxed;
    divOutput.appendChild(p);
    return;
};
const hoursForActivity = 12;
const wholeDay = "You still have " + hoursForActivity + "house left in your day";
let input = document.getElementById("inputTxt");
const validation = [];
let checkBoxed = [];
let clear = input.innerText = '';

const checked = document.querySelectorAll('[type="checkbox"]').forEach(item => {
    if (item.checked === true) {
        checkBoxed.push(item.value);
    } else {

    }
});
function validate(input) {
    if (input == '' || input == null || input == undefined) {
        validation.push("please enter something");
        updateDOM(validation)
    }
    else if (input.includes == [0-9]) {
        validation.push("nice try, but please a word or phrase");
        updateDOM(validation)
    }
    else {
        updateDOM(input.value)
    }
}

document.getElementById('replay').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(input.includes == [0 - 9]);
    checked;
    validate(input, checkBoxed);
    console.log(input.value)
    console.log(checkBoxed)
    clear;
    })
