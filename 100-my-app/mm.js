/*
function timeParse(hoursForActivity) {
    let i = 0;
    while (i < checkBoxed.length) {
        //console.log(typeof checkBoxed[i])
        //console.log(checkBoxed[i])
        let time = parseFloat(checkBoxed[i]);
        //console.log(time);
        hoursForActivity = hoursForActivity - time;
        //console.log(hoursForActivity);
        hoursForActivity;
        i++;
        
    }
    return hoursForActivity;
    };
*/
function updateDOM(userInput) {
    checked();
    let divOutput = document.querySelector('#output')
    let p = document.createElement('p')
    p.textContent = "Thanks user here is your greeting: " + ' "' + userInput + '"' + ". And your morning routine leaves you with:" + checkBoxedSum.hoursForActivity + "hour(s). Please consider doing the following to fill in your day: " + unCheckBoxed;
    divOutput.appendChild(p);
    //return;
};