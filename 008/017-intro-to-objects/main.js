const myObj = {
    name: 'Mac Mac',
    age: 32,
    hobbies: ['coding', 'gaming', 'reading', 'self-defense'],
    mobility: {
        wheelchair: 'manual',
        brand: 'Quickie'
    },
    myGreeting: function (person) {
        let i = 0
        //console.log(myObj.hobbies.length)
        while (i < myObj.hobbies.length) {
            console.log('$(this.name) has $(this.hobbies)')
        };
        system.out.println('$(this.name) who loves $(this.hobbies) says "O...M...G...Hola Mundo $(person)"')
    }
}
const greeting = myObj.myGreeting('Matthew')
greeting;

const myArr = []
const myNumber = 1

console.log(typeof myObj)
console.log(typeof myArr)
console.log(myArr === myObj)
console.log(myObj.mobile.make.length)