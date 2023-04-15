//update the DOM
const updateDOM = (kingsInquiry) => {
    if (kingsInquiry == "kingly answer") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = kinglyAnswer
        divEl.appendChild(p);
        return;
    }
    else {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The hour is past and thou art DOOMED!!!!!"
        divEl.appendChild(p);
        alert("THOU HAST FAILED THE KING!");
        return;
    }
}
var kingsInquiry = window.prompt("Consider wisley as thou speaks for the King...", "kingly answer");
var scribe = console.log("They transcribed " + '"' + kingsInquiry + '"');
const kinglyAnswer ='"African or European?"';
updateDOM(kingsInquiry);
var kingsRecord = document.getElementById("output");
var kingsArray = console.log(kingsRecord.textContent.split(" "));


// Play the game again

document.querySelector('#replay').addEventListener('click', () => {
    var kingsInquiry = window.prompt("Consider wisley as thou speaks for the King...", "kingly answer");
    updateDOM(kingsInquiry);
    scribe = console.log("They transcribed " + '"' + kingsInquiry + '"');
    kingsRecord = document.getElementById("output");
    kingsArray = console.log(kingsRecord.textContent.split(" "));
})

//refresh Output div

document.querySelector('#refresh').addEventListener('click', () => {
    document.getElementById("output").innerHTML = "";
})



/*
function refreshInquiry() {

 
    }
window.location.reload(true);
const refreshInquiry() {
    document.getElementById("output").addEventListener('click', () => {document.getElementById("output").innerHTML = ""});
};
refreshIqinuiry(refresh);

    kingsInquiry = prompt("Consider wisley as thou speaks for the King...", "kingly answer");
    updateDOM(kinglyAnswer);
.textContent = 'clear'
 = prompt("Consider wisley as thou speaks for the King...", "kingly answer")
addEventListener('click', () => {
        document.getElementById("output").
    })


addEventListener('click', () => { refreshInquiry();})
function refreshPage(){
    window.location.reload(true);
}
--unused html
<input id="answer" placeholder="Kingly Answer" type="text">

<input id="answerInquiry" placeholder="Kingly Answer"/>
            <button id="transcribe">Transcribe</button>
    onclick="refreshInquiry()"

*/