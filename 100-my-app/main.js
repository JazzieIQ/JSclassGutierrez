// global variables

const keyPhrasing = {
    hoursForActivity: parseFloat(12),
    userInput: document.getElementById("inputTxt"),
    ERR: document.getElementById('err'),
    validation : [],
    checkBoxed : [],
    unCheckBoxed: [],
    inputMsg : []
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


function updateDOM() {
    checked();
    let divOutput = document.querySelector('#output')
    let p = document.createElement('p')
    p.textContent = "Thanks user here is your greeting: " + ' "' + keyPhrasing.validation + '"' + ". And your morning routine leaves you with:" + timeParse(keyPhrasing.hoursForActivity) + "hour(s). Please consider doing the following to fill in your day: " + keyPhrasing.unCheckBoxed;
    divOutput.appendChild(p);
    keyPhrasing.hoursForActivity = parseFloat(12);
    return;
};

function validate() {
    if (keyPhrasing.userInput.includes == [0 - 9] && document.querySelectorAll('[type="checkbox"]').checked == false) {
        keyPhrasing.inputMsg.push("I'm not too sure that's your best greeting.")
        keyPhrasing.inputMsg.push("You didn't check anything!")
        document.getElementById('alert').innerHTML = keyPhrasing.inputMsg;
        keyPhrasing.validation.push("[Good try, but please a word or phrase and see if I have a box you can check next time]");
        updateDOM(keyPhrasing.validation, keyPhrasing.hoursForActivity)
    }
    else if (document.querySelectorAll('[type="checkbox"]').checked == false && keyPhrasing.userInput.value == '' || keyPhrasing.userInput == null || keyPhrasing.userInput.value == undefined) {
        keyPhrasing.inputMsg.push('Please make entries before you submit. Thanks!')
        document.getElementById('alert').innerHTML = keyPhrasing.inputMsg;
        keyPhrasing.validation.push("[User did not input anything!]");
        updateDOM(keyPhrasing.validation, keyPhrasing.hoursForActivity)
    }
    else if (keyPhrasing.userInput.includes == [0 - 9]) {
        keyPhrasing.inputMsg.push("I'm not too sure that's your best greeting.")
        document.getElementById('alert').innerHTML = keyPhrasing.inputMsg;
        keyPhrasing.validation.push("[Good try, but please a word or phrase next time]");
        updateDOM(keyPhrasing.validation, keyPhrasing.hoursForActivity)
    }
    else if (keyPhrasing.userInput.value === '' || keyPhrasing.userInput.value === null || keyPhrasing.userInput.value === undefined) {
        keyPhrasing.inputMsg.push('Please make an entry before you submit. Thanks!')
        document.getElementById('alert').innerHTML = keyPhrasing.inputMsg;
        keyPhrasing.validation.push("[User did not input anything!]");
        updateDOM(keyPhrasing.validation, keyPhrasing.hoursForActivity)
        console.log(keyPhrasing.validation);
    }

    else if (document.querySelectorAll('[type="checkbox"]').checked == false) {
        keyPhrasing.inputMsg.push("You didn't check anything!")
        document.getElementById('alert').innerHTML = keyPhrasing.inputMsg;
        keyPhrasing.validation.push("[User did not check anything!]");
        updateDOM(keyPhrasing.validation, keyPhrasing.hoursForActivity)
    }
    else {
        keyPhrasing.inputMsg.push('Thanks for your input!')
        document.getElementById('alert').innerHTML = keyPhrasing.inputMsg;
        keyPhrasing.validation.push("[User had input and checked boxes!]");
        updateDOM(keyPhrasing.userInput)
    }

    // a new array of objects
    
    return {
            userInput: keyPhrasing.userInput.value,
            inputMsg: keyPhrasing.inputMsg,
            validation: keyPhrasing.validation,
            checkBoxed: keyPhrasing.checkBoxed,
            unCheckBoxed: keyPhrasing.unCheckBoxed
        }
}

/* 
// renderEditDelBtn the DOM creation of the buttons for handling edit and delete functionality in the table

function renderEditDelBtn(MY_DATA, index) {
    const td = document.createElement('td');
    const editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    const delBtn = document.createElement('button');
    delBtn.textContent = 'delete';
    editBtn.addEventListener('click', function(e){
        FORM[0].value = MY_DATA[index].miles
        FORM[1].value = MY_DATA[index].gallons
        FORM[2].value = MY_DATA[index].price
        MY_DATA.splice(index, 1)
        const disable_btns = document.querySelectorAll('.tbl-btn')
        disable_btns.forEach(function(btn){
            btn.setAttribute('disabled', true)
        })
    })
    delBtn.addEventListener('click', function(e){
        MY_DATA.splice(index, 1)
        saveTripData(MY_DATA)
        renderTable(MY_DATA)
    })
    editBtn.classList.add('tbl-btn')
    delBtn.classList.add('tbl-btn')
    td.appendChild(editBtn);
    td.appendChild(delBtn);
    return td;
}

//renderTable hands the render the DOM for the array of object (MY_DATA)

function renderTable(MY_DATA) {
    TBL_OUTPUT.innerHTML = ''
    const tbl = renderTableHeadings()
    TBL_OUTPUT.appendChild(tbl)
    MY_DATA.forEach(function (obj, index) {
            const tr = document.createElement('tr');
            for (const key in obj) {
                let td = document.createElement('td');
                td.textContent = obj[key];
                tr.appendChild(td);
            }
            const btnTD = renderEditDelBtn(MY_DATA ,index);
            tr.appendChild(btnTD);
            tbl.appendChild(tr);
        });   
}
*/
// submitting the form

document.getElementById('replay').addEventListener('click', (e) => {
    e.preventDefault();

    // refreshing the DOM and edit/delete the DOM

    keyPhrasing.checkBoxed.length = 0;
    keyPhrasing.unCheckBoxed.length = 0;
    keyPhrasing.validation.length = 0;
    document.getElementById('output').innerHTML = '';

    // returned array of objects

    const outPutObj = validate(keyPhrasing.userInput.value);
    console.log(outPutObj);
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
    return {
        userInput: [],
        inputMsg: [],
        validation: [],
        checkBoxed: [],
        unCheckBoxed:[]
    }
*/