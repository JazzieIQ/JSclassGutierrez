const myObj = {
    name: 'Mac Mac',
    age: 32,
    hobbies: ['coding', 'gaming', 'reading', 'self-defense'],
    mobility: {
        wheelchair: 'manual',
        brand: 'Quickie',
    },
    likes: 0,
    myGreeting: function (person) {
        let i = 0;
        while (i < myObj.hobbies.length) {
            console.log(this.name + ' has ' + this.hobbies[i] + ' as a hobby.');
            i++;
        };
        let p = document.createElement('p')
        p.textContent = ('"$(person) says "O...M...G...Hola Mundo"');
        return p;
    },
    increaseLikes: function () {
        this.likes += 1
    }
};

// additional code

myObj.hobbies.forEach(hobby => {
    console.log('This object has a' + myObj.hobbies + 'array and one value is ' + hobby);  
    
});



// myObj clone to table

function mattObj(myObj) {
    let objToTable = document.createElement("table");
//Add a header
    let header = document.createElement("tr");
    let idHeaderCell = document.createElement("th");
    let nameHeaderCell = document.createElement("th");
    let relevanceHeaderCell = document.createElement("th");

header.appendChild(idHeaderCell);
header.appendChild(nameHeaderCell);
header.appendChild(relevanceHeaderCell);
table.appendChild(header);

//Add the rest of the data to the table

    for (let i = 0; i < data.length; i++) {
    let id = (i + 1);
    let name = data[i].key;
    let relevance = data[i].value;

    let tr = document.createElement("tr");

    let idCell = document.createElement("td");
    let nameCell = document.createElement("td");
    let relevanceCell = document.createElement("td");

    idCell.appendChild(document.createTextNode(id));
    nameCell.appendChild(document.createTextNode(name));
    relevanceCell.appendChild(document.createTextNode(relevance));

    tr.appendChild(idCell);
    tr.appendChild(nameCell);
    tr.appendChild(relevanceCell);

    table.appendChild(tr);
}    
    //mattObj = { myObj };
    //return mattObj; 
};
/*
cloneObj(myObj);
mattObj;

console.log(mattObj === myObj);
 
// changes to mattObj will not change myObj

mattObj.increaseLikes();
const greeting = mattObj.myGreeting('Mac Mac');
greeting;
const updateHobbies = mattObj.hobbies.unshift('drumming');
updateHobbies;

// I played around with these methods.
console.log(mattObj === myObj)
console.log(myObj.likes + '<= shows original likes; and shows clone like =>' + mattObj.likes)
console.log("This the original code is as follows:" + myObj.myGreeting)
console.log("Here is the clone:" + greeting)
console.log(myObj.hobbies)
console.log(mattObj.hobbies)
*/

// more mess around

const myArr = [];
const mylikes = myObj.likes;
myArr.push(mylikes)
console.log(typeof(myArr) + ' + ' + myArr + ' + ' + myArr.length)

