const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')

const trackingObj  = {
    myMPG: [],
    myTripCost: [],
    updateDOM: (input, id) => {
        const divEl = document.querySelector(id)
        const p = document.createElement('p')
        p.textContent = input
        divEl.appendChild(p)
    },
    trackMPGandCost: function(miles, gallons, price = 3.79) {
        const MPG  = Math.round(miles/gallons)
        const tripCost = Math.round(gallons * price)
        this.updateDOM(`Miles per gallon  is ${MPG} and trip cost is ${tripCost}`, '#output')
        this.myMPG.push(MPG)
        this.myTripCost.push(tripCost)
    }, 
    calculateSUM: (arr) => {
        let sum = 0
        for(value of arr) {
           sum += value
        }
        return sum
    },
    calculateAvg: function () {
        const sumMPG = this.calculateSUM(this.myMPG)
        const sumTripCost = this.calculateSUM(this.myTripCost)
        const avgMPG = Math.round(sumMPG/this.myMPG.length)
        const avgTripCost = Math.round(sumTripCost/this.myTripCost.length)
        this.updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
        this.updateDOM(`Average Trip Cost is ${avgTripCost}`, '#output-avg')
    },
    validateForm: function (e) {
        const errMsg = []
        const miles = parseInt(e.target.miles.value)
        const gallons = parseInt(e.target.gallons.value)
        const price = parseInt(e.target.price.value)
        if(miles === 0 || gallons === 0 || price === 0) {
            errMsg.push('Make sure your input value greater than 0!!, Try Again')
        }
        if(price > 1000) {
            errMsg.push('Really!!!?? I think this is in error...Try again')
        }
        if(errMsg.length > 0) {
            ERR.textContent = errMsg
        } else {
            ERR.textContent = ''
            AVG_OUTPUT.textContent = ''
            this.trackMPGandCost(miles, gallons, price)
            this.calculateAvg()
        }
        FORM.reset()
    }

}

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    trackingObj.validateForm(e)  
})


/*

// A Bridge Too Far: The Kings Inquiry HTML/Text Based Game.

//creating an Object

const kingsKeep = {
    
    // Key phrasing
    
    kinglyAnswer: '"African or European?"',
    count: 0,
    rateCount: 0,
    rateSuccessArray: [],
    win: 1,
    lose: 0,
    winTxt: "Tally!",
    loseTxt: "Oh Peril! the King's man hath lost his footing off the bridge of death!",
    userTxt: document.getElementById("inputTxt"),

    //updateDOM

    updateDOM: (kingsInquiry) => {
        if (kingsInquiry == "african or european" || kingsInquiry == "i am king i'm supposed to know these things" || kingsInquiry == "a kingly answer" || kingsInquiry == "five" || kingsInquiry == "holy hand grenade of antioch" || kingsInquiry == "ni" || kingsInquiry == "I am authur, king of the britains" || kingsInquiry == "i am your king" || kingsInquiry == "you don't vote for kings" || kingsInquiry == "be quiet!" || kingsInquiry == "now, stand aside worthy adversary!" || kingsInquiry == "on second thought, let's not go to camelot. 'tis a silly place") {
            let divEl = document.querySelector('#output')
            let p = document.createElement('p')
            p.textContent = "The King's answer be: " + kingsKeep.kinglyAnswer
            divEl.appendChild(p);
            kingsKeep.rateCount;
            kingsKeep.rateCount += 1;
            kingsKeep.rateSuccessArray.push(kingsKeep.win);
            console.log(kingsKeep.winTxt);
            return;
        }
        else {
            let divEl = document.querySelector('#output')
            let p = document.createElement('p')
            p.textContent = "The hour is past and thou art DOOMED!!!!!"
            divEl.appendChild(p);
            alert("Thou has been cast into the Gorge of Eternal Peril!");
            kingsKeep.rateCount;
            kingsKeep.rateSuccessArray.push(kingsKeep.lose);
            console.log(kingsKeep.loseTxt);
            return;
        }
    },
    buttonCount: document.getElementById("replay").addEventListener('click', () => {
        kingsKeep.count;
        kingsKeep.count += 1;
        replay.innerHTML = "Attempt: " + kingsKeep.count;
        return kingsKeep.count;
    }),

    //update the DOM

    updateDOMArray: (kingsInquiry) => {
        let divEl = document.querySelector('#array')
        let a = document.createElement('a')
        a.textContent = '"' + "The King's answer was: " + "'" + kingsInquiry + "' " + '"; '
        divEl.appendChild(a);
        return;
    }
};

// Play the game/ attemp again

document.querySelector('#replay').addEventListener('click', () => {
    kingsKeep.buttonCount;
    let swerian = kingsKeep.userTxt.value;
    let kingsInquiry = swerian.toLowerCase()//.replace; (/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/, '');
    let scribe = console.log("They transcribed " + '"' + kingsInquiry + '"');
    scribe;
    kingsKeep.updateDOM(kingsInquiry);

    //div "output" split into array. Array increase with attempt.

    kingsKeep.updateDOMArray(kingsInquiry);
    const kingsRecord = (document.getElementById("array")).textContent.split('; ');
    const noNullKingsArray = kingsRecord.filter(element => element !== '');
    console.log(noNullKingsArray);
    noNullKingsArray.push('I told you that you were doomed! Oh but nobody listens to me!');
    
    // calculate success rate
    
    const rateSuccess = (kingsKeep.rateCount / kingsKeep.count) * 100;
    const ratePercent = Math.round(rateSuccess) + "%";
    
    // Give success rate Array with For Loop.

    let i = 0
    let sumSuccesses = 0;
    let appendDivElRate = "; Success Rates Array: ";
    let appendSuccessArray = "; The scribe has thou averaged plainy: ";
    while (i < kingsKeep.rateSuccessArray.length) {
        sumSuccesses = sumSuccesses + kingsKeep.rateSuccessArray[i];
        i++
    }
    let rateCounting = sumSuccesses / kingsKeep.count;
    const success = rate.innerHTML = "Success: " + ratePercent + appendDivElRate + kingsKeep.rateSuccessArray + appendSuccessArray + rateCounting;
    success;
    ;
});

//refresh Output div. All code is reset including the array.

document.querySelector('#refresh').addEventListener('click', () => {
    document.getElementById("output").innerHTML = "";
    document.getElementById("input").reset()
});
*/   