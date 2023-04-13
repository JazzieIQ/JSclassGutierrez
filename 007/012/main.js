//update the DOM

const updateDOM = (input) => {
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
        alert("THOU HAS FAILED THE KING!");
        //return;
    }
}
const kingsInquiry = prompt("Consider wisley as thou speaks for the King...", "kingly answer");
const kinglyAnswer = "The Kings answer be:" + "\n" + '"African or European?"';
updateDOM(kinglyAnswer)
document.querySelector('#refreshPage').addEventListener('click', () => {window.location.reload(true);})
/*
function refreshPage(){
    window.location.reload(true);
}
*/