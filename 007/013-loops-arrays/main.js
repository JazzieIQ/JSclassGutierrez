// A Bridge Too Far: The Kings Inquiry HTML/Text Based Game.

// Key phrasing

const kinglyAnswer = '"African or European?"';
var count = 0;
var rateCount = 0;

//console.log (document.getElementById('output'))
const updateDOM = (kingsInquiry) => {
    if (kingsInquiry == "I am King I'm supposed to know these things.") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;    
        //console.log(rateCount);
        return;
    }
    else if (kingsInquiry == "a kingly answer") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        return;
    }
    else if (kingsInquiry == "five") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        return;
    }
    else if (kingsInquiry == "Holy Hand Grenade of Antioch") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;;
        return;
    }
    else if (kingsInquiry == "I am your King") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        return;
    }
    else {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The hour is past and thou art DOOMED!!!!!"
        divEl.appendChild(p);
        alert("THOU HAST FAILED THE KING!");
        rateCount;
        return;
    }
}

var buttonCount = document.getElementById("replay"),
  count;
replay.onclick = function() {
  count += 1;
    replay.innerHTML = "Attempt: " + count;
    return count;
};

//update the DOM
const updateDOMArray = (kingsInquiry) => {
        var divEl = document.querySelector('#array')
        var a = document.createElement('a')
    a.textContent = '"' + "The King's answer was: " + "'" + kingsInquiry + "' " + '"; '
    divEl.appendChild(a);
        return;
        }

// Play the game/ attemp again

document.querySelector('#replay').addEventListener('click', () => {
    buttonCount;
    var kingsInquiry = window.prompt("Consider wisley as thou speaks for the King...", "I am King I'm supposed to know these things.");
    var scribe = console.log("They transcribed " + '"' + kingsInquiry + '"');
    scribe;
    kinglyAnswer;
    updateDOM(kingsInquiry);

    //div "output" split into array. Array increase with attempt.

    updateDOMArray(kingsInquiry);
    const kingsRecord = (document.getElementById("array")).textContent.split('; ');
    const noNullKingsArray = kingsRecord.filter(element => element !== '');
    console.log(noNullKingsArray);
    noNullKingsArray.push('I told you that you were doomed! Oh but nobody listens to me!');

    // calculate success rate
    
    const rateSuccess = rateCount / count;
    console.log(rateSuccess);
    const success = rate.innerHTML = "Success: " + rateSuccess;
    success;
})


//refresh Output div. All code is reset including the array.

document.querySelector('#refresh').addEventListener('click', () => {
    document.getElementById("output").innerHTML = "";
})

// unused code
/*

const successRateUpdate = document.getElementById("refresh").onclick = function () {

    return;
};

//    const updateArray = kingsArray.replace("", 'I told you so, oh but nobody listens to me!' )

    // updateDOMArray(kingsInquiry);
    const updateDOMArray = [kingsInquiry];
    updateDOMArray.push("I told you so, oh but nobody listens to me!");

const updateDOMArray = (kingsInquiry) => {
        var divEl = document.querySelector('#array')
        var a = document.createElement('a')
    a.textContent = '"' + "The King's answer was: " + "'" + kingsInquiry + "' " + '"; '
        divEl.appendChild(a);
        return;
        }

//    const kingsArray = [];
//    kingsArray.push(kingsRecord);
//    console.log(kingsArray);
    
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