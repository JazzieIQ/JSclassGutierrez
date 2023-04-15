//update the DOM
const updateDOM = (kingsInquiry) => {
    if (kingsInquiry == "kingly answer") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = kinglyAnswer
        divEl.appendChild(p);
    }
    else {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The hour is past and thou art DOOMED!!!!!"
        divEl.appendChild(p);
        alert("THOU HAST FAILED THE KING!");
    }
}
const kingsInquiry = window.prompt("Consider wisley as thou speaks for the King...", "kingly answer");
console.log("They transcribed " + '"' + kingsInquiry + '"');
const kinglyAnswer ='"African or European?"';
updateDOM(kingsInquiry);

function refreshInquiry() {
    document.getElementById("output").innerHTML = "";
    kingsInquiry;
    updateDOM(kinglyAnswer);
    }

/*


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

    document.querySelector('#refresh').addEventListener('click', () => {window.location.reload(true);})
addEventListener('click', () => { refreshInquiry();})
function refreshPage(){
    window.location.reload(true);
}
--unused html
<input id="answer" placeholder="Kingly Answer" type="text">

<input id="answerInquiry" placeholder="Kingly Answer"/>
            <button id="transcribe">Transcribe</button>
            

*/