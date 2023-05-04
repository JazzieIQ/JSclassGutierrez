function updateDOM (input) {
    let divEl = document.querySelector('#output')
    let p = document.createElement('p')
    p.textContent = "Thanks user. Here is your greeting: " + input;
    divEl.appendChild(p);
    console.log(p);
    return;
};
let input = document.getElementById("inputTxt");
let clear = document.getElementById("inputTxt").innerHTML = '';
const validate = function validation() {
    if (input == null) {
        document.getElementById("output").innerHTML = "please enter something";
    }
    else if (input == Number) {
        document.getElementById("output").innerHTML = "nice try, but please a word or phrase";
    }
    else {
        updateDOM(input)
    }
}

document.getElementById('inputTxt').addEventListener('click', (e) => {
    //e.preventDefault();
    validate;
})
