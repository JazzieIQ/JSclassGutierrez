I have updated my code to include these as my global variable, as follows, for my decision logic. I have:

let hoursForActivity = parseFloat(12);
const wholeDay = "You still have " + hoursForActivity + "hours left in your day";
let userInput = document.getElementById("inputTxt");
const validation = [];
let checkBoxed = [];
let unCheckBoxed = [];
let hoursRemaining;

I understand these to global variables due to the fact that I have declared in the global scope and initiazed or give them a general value then intend to pass them through multiple functions to get decision from my program. I know these have a general scope because in passing "hoursremaining" through my functions it became clear that not all my functions could see the value being passed to it from the prvious function and simply operated with its known value before those issues and got a number result. These vairables may find no use in the code as I optimize and refactor.

correction: My code is almost working and I believe meets decision logic requirments. This code now receives user input, and allows users to create a list of things in the morning to fill outpart of their day. User input is passed to a validation function that determines certain conditons including giving an error message in place of user response if user gave a null text input via an if-else statement. The decision process continues via the checkBoxed list they provide to my program. The programs decision logic comes in when it determines if the user has enough time to compete the tasks they have checked off. If they do not the program shows them the time they have remaining and provides a list of suggested items they can do to fill in their availible time. The user can change their respomse and uncheck or check items and the program will update the decision and suggest a different. My submit button is also a splice which essentially is an edit/delete. The only element perhaps not present is a localstorage and an array of objects saving each decision result.

week # 13 - DOM Rendering Plan

My code currently outputs user input, errormessages/response to user input resulting from validation via if/else statement, and decision logic which passes to the DOM as an array of suggested activities to complete and the difference in a acitvities performed in a 12 hour slected by the user. i also have adjusted my variables so that they passed from an array of objects to my decision logic and return to a new array of objects then to pass to the DOM. The user is able to change their response and the program will update the decision and suggest a different outcome. My submit button is also a splice which essentially is an edit/delete. The only element perhaps not present is a localstorage to save each decision or at least the previous one and an array of objects saving each decision result. My plan for render is perhaps to code an edit and delete button and a render a table for each decision logic result. I have copied the render.js and intend to reverse engineer a solution.