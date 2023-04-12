//update the DOM

const updateDOM = (input) => {
    if (kingsInquiry == "kingly answer") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = input
        divEl.appendChild(p);
    }
    else {
        alert("THOU HAS FAILED THE KING!")
        kingsInquiry();
    }
}
const kingsInquiry = prompt("Respond for the King...", "kingly answer")
const kinglyAnswer = "African or European?"
updateDOM(kinglyAnswer)