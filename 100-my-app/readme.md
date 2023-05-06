I have updated my code to include these as my global variable, as follows, for my decision logic. I have:

let hoursForActivity = parseFloat(12);
const wholeDay = "You still have " + hoursForActivity + "hours left in your day";
let userInput = document.getElementById("inputTxt");
const validation = [];
let checkBoxed = [];
let unCheckBoxed = [];
let hoursRemaining;

I understand these to global variables due to the fact that I have declared in the global scope and initiazed or give them a general value then intend to pass them through multiple functions to get decision from my program. I know these have a general scope because in passing "hoursremaining" through my functions it became clear that not all my functions could see the value being passed to it from the prvious function and simply operated with its known value before those issues and got a number result. These vairables may find no use in the code as I optimize and refactor.