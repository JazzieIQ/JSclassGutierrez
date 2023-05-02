const updateDOM = (input, id) => {
    const divEl = document.getElementById(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

let inputId = 0;

const myArrObjs = [
    {
        name: 'rio',
        hairColor: 'red',
    },
    {
        name: 'joe',
        hairColor: 'black',
    },
    {
        name: 'jane',
        hairColor: 'brown',
    }
]

myArrObjs.forEach(Array => {
    inputId = inputId + 1;
    const str =`${inputId}: ${Array.name} has ${Array.hairColor} hair color`
    updateDOM(str, 'output')
})