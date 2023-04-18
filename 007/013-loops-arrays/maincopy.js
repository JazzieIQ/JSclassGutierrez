//update the DOM

//user input

const kingsInquiry = (input) => {
    window.prompt("Consider wisley as thou speaks for the King...", "I am King I'm supposed to know these things.");
}

// a couple key phrases

const kinglyAnswer = '"African or European?"';
const scribe = console.log("They transcribed " + '"' + kingsInquiry.textContent + '"');

//console.log (document.getElementById('output'))
const updateDOM = (kingsInquiry) => {
    if (kingsInquiry == "I am King I'm supposed to know these things.") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer + '\n'
        divEl.appendChild(p);
        return;
    }
    else if (kingsInquiry == "a kingly answer") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer + '\n'
        divEl.appendChild(p);
        return;
    }
    else if (kingsInquiry == "five") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer + '\n'
        divEl.appendChild(p);
        return;
    }
    else if (kingsInquiry == "Holy Hand Grenade of Antioch") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer + '\n'
        divEl.appendChild(p);
        return;
    }
    else if (kingsInquiry == "I am your King") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer + '\n'
        divEl.appendChild(p);
        return;
    }
    else {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The hour is past and thou art DOOMED!!!!!" + '\n'
        divEl.appendChild(p);
        alert("THOU HAST FAILED THE KING!");
        return;
    }
}

var buttonCount = document.getElementById("replay"),
  count = 0;
replay.onclick = function() {
  count += 1;
  replay.innerHTML = "Attempt: " + count;
};

const updateDOMArray = (kingsInquiry) => {
        var divEl = document.querySelector('#array')
        var a = document.createElement('a')
        a.textContent = "The King's answer be: " + kingsInquiry.textContent
        divEl.appendChild(a);
        return;
        }

    // Play the game/ attemp again

document.querySelector('#replay').addEventListener('click', () => {
    buttonCount;
    kingsInquiry;
    scribe;
    kinglyAnswer;
    updateDOM(kingsInquiry);

    //div "output" split into array. Array increase with attempt.

    var kingsRecord = document.getElementById("output");
    var kingsArray = console.log(kingsRecord.textContent.split('\n'));
    kingsArray;
    updateDOMArray(kingsInquiry);
})

//refresh Output div. All code is reset including the array.

document.querySelector('#refresh').addEventListener('click', () => {
    document.getElementById("output").innerHTML = "";
})

// unused code
/*

    var outputJs = document.getElementById("output");
    var kingsRecord = console.log(outputJs.textContent.split('/n'));
    kingsRecord;
    const kingsArray = []
    kingsArray.push(kingsRecord);
    console.log(kingsArray);

var kingsInquiry = window.prompt("Consider wisley as thou speaks for the King...", "a kingly answer");
const domResult = updateDOM(kingsInquiry.textContent);
console.log(valueOf(domResult));

var outputJs = document.getElementById("output");
var kingsRecord = console.log(outputJs.textContent.split('null'));
//kingsRecord;
var kingsArray = console.log(kingsRecord.textContent.split('\n'));

kingsArray;
    var outputJs = document.getElementById("output");
    var kingsRecord = console.log(outputJs.textContent.split('null' + "<br/>"));
    kingsRecord;

    const kingsArray = []
    kingsArray.push(kingsRecord);
    console.log(kingsArray);


    var kingsRecord = document.getElementById("output");
    var kingsArray = console.log(kingsRecord.textContent.split('/n'));
    kingsArray;
     */