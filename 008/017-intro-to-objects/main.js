const myObj = {
    name: 'Mac Mac',
    age: 32,
    hobbies: ['coding', 'gaming', 'reading', 'self-defense'],
    mobility: {
        wheelchair: 'manual',
        brand: 'Quickie'
    },
    myGreeting: function (person) {
        return 'O...M...G...Hola Mundo $(person)'
    }
}
const greeting = myObj.myGreeting('Matthew')
const myArr = []
const myNumber = 1

console.log(typeof myObj)
console.log(typeof myArr)
console.log(myArr === myObj)