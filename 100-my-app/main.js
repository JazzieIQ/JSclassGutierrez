// global variables
//const wholeDay = "You still have " + hoursForActivity + "hours left in your day";
const hoursForActivity = parseFloat(12);
let userInput = document.getElementById("inputTxt");
const ERR = document.getElementById('err');
const validation = [];
let checkBoxed = [];
let unCheckBoxed = [];


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
/*
function timeParse(hoursForActivity) {
    //const checkBoxedLength = checkBoxed.length;
    const checkBoxedSum = checkBoxed.reduce(function (total, hoursForActivity) {
        return {
            hoursForActivity: hoursForActivity - total.checkBoxed,
            }
    })
}
*/

function timeParse(hoursForActivity) {
    let i = 0;
    while (i < checkBoxed.length) {
        console.log(typeof checkBoxed[i])
        //console.log(checkBoxed[i])
        let time = parseFloat(checkBoxed[i]);
        //console.log(time);
        hoursForActivity = parseFloat(hoursForActivity) - time;
        console.log(hoursForActivity);
        i++;
        hoursForActivity;
    }
    return hoursForActivity;
    };


function updateDOM(userInput) {
    checked();
    let divOutput = document.querySelector('#output')
    let p = document.createElement('p')
    p.textContent = "Thanks user here is your greeting: " + ' "' + userInput + '"' + ". And your morning routine leaves you with:" + timeParse.checkBoxedSum.hoursForActivity + "hour(s). Please consider doing the following to fill in your day: " + unCheckBoxed;
    divOutput.appendChild(p);
    return;
};

function validate(userInput) {
    const inputMsg = [];
    if (userInput.includes == [0-9] && document.querySelectorAll('[type="checkbox"]').checked == false) {
        inputMsg.push("I'm not too sure that's your best greeting.")
        inputMsg.push("You didn't check anything!")
        document.getElementById('alert').innerHTML = inputMsg;
        validation.push("[Good try, but please a word or phrase and see if I have a box you can check next time]");
        updateDOM(validation, hoursForActivity)
    }
    else if (userInput == '' || userInput == null || userInput == undefined && document.querySelectorAll('[type="checkbox"]').checked == false) {
        inputMsg.push('Please make entries before you submit. Thanks!')
        document.getElementById('alert').innerHTML = inputMsg;
        validation.push("[User did not input anything!]");
        updateDOM(validation, hoursForActivity)
    }
    else if (userInput.includes == [0-9]) {
        inputMsg.push("I'm not too sure that's your best greeting.")
        document.getElementById('alert').innerHTML = inputMsg;
        validation.push("[Good try, but please a word or phrase next time]");
        updateDOM(validation, hoursForActivity)
    }
    else if (userInput == '' || userInput == null || userInput == undefined) {
        inputMsg.push('Please make an entry before you submit. Thanks!')
        document.getElementById('alert').innerHTML = inputMsg;
        validation.push("[User did not input anything!]");
        updateDOM(validation, hoursForActivity)
    }

    else if (document.querySelectorAll('[type="checkbox"]').checked == false) {
        inputMsg.push("You didn't check anything!")
        document.getElementById('alert').innerHTML = inputMsg;
        validation.push("[User did not check anything!]");
        updateDOM(validation, hoursForActivity)
    }    
    else {
        document.getElementById('alert').innerHTML = inputMsg;
        inputMsg.push ('Thanks for your input!')
        updateDOM(userInput)
    }
}
// submitting the form

document.getElementById('replay').addEventListener('click', (e) => {
    e.preventDefault();
    unCheckBoxed.length = 0;
    validation.length = 0;
    document.getElementById('output').innerHTML = '';
    console.log(hoursForActivity);
    console.log(userInput.value);
    validate(userInput.value);
})
