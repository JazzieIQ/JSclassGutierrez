const myObj = {
    name: 'Mac Mac',
    age: 32,
    hobbies: ['coding', 'gaming', 'reading', 'self-defense'],
    mobility: {
        wheelchair: 'manual',
        brand: 'Quickie',
    likes: 0,
    },
    myGreeting: function (person) {
        let i = 0
            //console.log(myObj.hobbies.length)
        while (i < myObj.hobbies.length) {
            console.log('$(this.name) has $(this.hobbies)')
        };
        system.out.println('$(this.name) who loves $(this.hobbies) says "O...M...G...Hola Mundo $(person)"')
    },
    increaseLikes: function () {
        this.likes +=1
    }
}
const mattObj = myObj;
mattObj.increaseLikes();
const greeting = myObj.myGreeting('Matthew')
greeting;

for (key in myObj) {
    console.log('key $(key) and value ${myObj[key]}')
}

// I played around with these methods.

const myArr = []
const myNumber = 1
myArr.push(myNumber)
console.log(typeof(myArr) + myArr + '' + myArr.length)
console.log(valueOf(myObj))
console.log(myArr === myObj)
console.log(myObj.mobile.make.length)
console.log(mattObj)

