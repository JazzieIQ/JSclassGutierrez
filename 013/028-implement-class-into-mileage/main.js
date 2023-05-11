import { renderTable} from "./render.js";
import { saveTripData, getTripData } from "./storage.js";
import { isFormValid, trackMPGandCost } from "./updateDOM.js";
import { Trip } from "./trip.js";

/* Global const for updating DOM elements by their id*/

const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')
const MY_DATA = getTripData() // || []
renderTable(MY_DATA)

/* Eventlisteners for form submit button, checks validation and if valid saves input data and calculated 
data as an object into global array named MY_DATA */

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    const miles = parseFloat(e.target.miles.value)
    const gallons = parseFloat(e.target.gallons.value)
    const price = parseFloat(e.target.price.value)
    const isValid = isFormValid(miles, gallons, price)
    //preventEdDelBtn()
    if (isValid) {
        ERR.textContent = ''
        AVG_OUTPUT.textContent = ''
        const trip = new Trip(miles, gallons, price)
        //localStorage.setItem('tripdata', JSON.stringify(MY_DATA))
        console.log(trip);
        MY_DATA.push(trip); // || [trip]     
        console.log(MY_DATA);
        renderTable(MY_DATA, FORM);
        saveTripData(MY_DATA)
    }
    FORM.reset()
});
