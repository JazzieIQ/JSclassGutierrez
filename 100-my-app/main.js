function updateDOM (input) {
    let divOutput = document.querySelector('#output')
    let p = document.createElement('p')
    p.textContent = "Thanks user. Here is your greeting: " + '"' + input.value + '"';
    divOutput.appendChild(p);
    return;
};
let input = document.getElementById("inputTxt");
const validation = [];
let clear = input.innerText= '';
function validate(input) {
    if (input == '' || input == null || input == undefined) {
        validation.push("please enter something");
        updateDOM(validation)
    }
    else if (input.value == input.value.toString([0-9])) {
        validation.push("nice try, but please a word or phrase");
        updateDOM(validation)
    }
    else {
        updateDOM(input)
    }
}

document.getElementById('replay').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(input.value)
    console.log((input.value != (/^[A-Za-z]+$/)))
    validate(input);
    console.log()
    clear;
    })
