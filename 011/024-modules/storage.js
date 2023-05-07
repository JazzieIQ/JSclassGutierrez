/* MY_DATA is global array that will be updated by the user input with objects from form input values 
and calculate data */

function getTripData() {
    const tripDataJSON = localStorage.getItem('tripdata')
    if (tripDataJSON !== null) {
        return JSON.parse(tripDataJSON)
    }
    else {
        return []
    }
}

function saveTripData(MY_DATA) {
    localStorage.setItem('tripdata', JSON.stringify(MY_DATA))
}
export {getTripData, saveTripData}