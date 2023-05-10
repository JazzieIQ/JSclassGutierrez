// global variables

const keyPhrasing = {
    hoursForActivity: parseFloat(12),
    userInput: document.getElementById("inputTxt"),
    ERR: document.getElementById('err'),
    validation : [],
    checkBoxed : [],
    unCheckBoxed: [] 
}

// functions

function checked() {
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        //keyPhrasing.checkBoxed.push(item.checked)
        if (item.checked === true) {
            let taskTime = parseFloat(item.value);
            //console.log(taskTime);
            keyPhrasing.checkBoxed.push(taskTime);
            return;    
        }
        else {
            let freeTime = item.name;
            //console.log(freeTime);
            keyPhrasing.unCheckBoxed.push(freeTime);
            return;
        }
    })
    console.log(keyPhrasing.checkBoxed);
    console.log(keyPhrasing.unCheckBoxed);
};


function timeParse(hoursForActivity) {
    let i = 0;
    while (i < keyPhrasing.checkBoxed.length) {
        console.log(typeof keyPhrasing.checkBoxed[i])
        //console.log(keyPhrasing.checkBoxed[i])
        let time = parseFloat(keyPhrasing.checkBoxed[i]);
        //console.log(time);
        keyPhrasing.hoursForActivity = keyPhrasing.hoursForActivity - time;
        console.log(keyPhrasing.hoursForActivity);
        i++;
        //keyPhrasing.hoursForActivity;
    }
    return keyPhrasing.hoursForActivity;
    };


function updateDOM(userInput) {
    checked();
    //timeParse(keyPhrasing.hoursForActivity);
    //keyPhrasing.hoursForActivity;
    let divOutput = document.querySelector('#output')
    let p = document.createElement('p')
    p.textContent = "Thanks user here is your greeting: " + ' "' + keyPhrasing.userInput.value + '"' + ". And your morning routine leaves you with:" + timeParse(keyPhrasing.hoursForActivity) + "hour(s). Please consider doing the following to fill in your day: " + keyPhrasing.unCheckBoxed;
    divOutput.appendChild(p);
    keyPhrasing.hoursForActivity = parseFloat(12);
    return;
};

function validate(userInput) {
    const inputMsg = [];
    if (keyPhrasing.userInput.includes == [0-9] && document.querySelectorAll('[type="checkbox"]').checked == false) {
        inputMsg.push("I'm not too sure that's your best greeting.")
        inputMsg.push("You didn't check anything!")
        document.getElementById('alert').innerHTML = inputMsg;
        keyPhrasing.validation.push("[Good try, but please a word or phrase and see if I have a box you can check next time]");
        updateDOM(keyPhrasing.validation, keyPhrasing.hoursForActivity)
    }
    else if (keyPhrasing.userInput.value == '' || keyPhrasing.userInput == null || keyPhrasing.userInput.value == undefined && document.querySelectorAll('[type="checkbox"]').checked == false) {
        inputMsg.push('Please make entries before you submit. Thanks!')
        document.getElementById('alert').innerHTML = inputMsg;
        keyPhrasing.validation.push("[User did not input anything!]");
        updateDOM(keyPhrasing.validation, keyPhrasing.hoursForActivity)
    }
    else if (keyPhrasing.userInput.includes == [0-9]) {
        inputMsg.push("I'm not too sure that's your best greeting.")
        document.getElementById('alert').innerHTML = inputMsg;
        keyPhrasing.validation.push("[Good try, but please a word or phrase next time]");
        updateDOM(keyPhrasing.validation, keyPhrasing.hoursForActivity)
    }
    else if (keyPhrasing.userInput.value == '' || keyPhrasing.userInput.value == null || keyPhrasing.userInput.value == undefined) {
        inputMsg.push('Please make an entry before you submit. Thanks!')
        document.getElementById('alert').innerHTML = inputMsg;
        keyPhrasing.validation.push("[User did not input anything!]");
        updateDOM(keyPhrasing.validation, keyPhrasing.hoursForActivity)
    }

    else if (document.querySelectorAll('[type="checkbox"]').checked == false) {
        inputMsg.push("You didn't check anything!")
        document.getElementById('alert').innerHTML = inputMsg;
        keyPhrasing.validation.push("[User did not check anything!]");
        updateDOM(keyPhrasing.validation, keyPhrasing.hoursForActivity)
    }    
    else {
        document.getElementById('alert').innerHTML = inputMsg;
        inputMsg.push ('Thanks for your input!')
        updateDOM(keyPhrasing.userInput)
    }
}
// submitting the form

document.getElementById('replay').addEventListener('click', (e) => {
    e.preventDefault();
    keyPhrasing.checkBoxed.length = 0;
    keyPhrasing.unCheckBoxed.length = 0;
    keyPhrasing.validation.length = 0;
    console.log(keyPhrasing.checkBoxed);
    document.getElementById('output').innerHTML = '';
    console.log(keyPhrasing.hoursForActivity);
    console.log(keyPhrasing.userInput.value);
    validate(keyPhrasing.userInput.value);
})

//unused code
/*

//const wholeDay = "You still have " + keyPhrasing.hoursForActivity + "hours left in your day";

function timeParse(keyPhrasing.hoursForActivity) {
    //const keyPhrasing.checkBoxedLength = keyPhrasing.checkBoxed.length;
    const keyPhrasing.checkBoxedSum = keyPhrasing.checkBoxed.reduce(function (total, keyPhrasing.hoursForActivity) {
        return {
            keyPhrasing.hoursForActivity: keyPhrasing.hoursForActivity - total.keyPhrasing.checkBoxed,
            }
    })
}

*/