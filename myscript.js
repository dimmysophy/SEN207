function buboff() {
  var bulb = (document.getElementById('bulbtest').src = 'images/buboff.jpg')
}
function bubon() {
  var bulb = (document.getElementById('bulbtest').src = 'images/bobon.jpg')
}
function btncheck() {
  var btnclick = (document.getElementById('demo').innerHTML =
    'This is a new content')
  console.log(typeof btnclick)
}
function fontchange() {
  var btnclicks = (document.getElementById('demos').style.fontSize = '24px')
}
const person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
}
console.log(person.firstName)
console.log(person.fullName())
console.log(typeof person)
let x = 123
let y = '123'
console.log(x == y)
console.log(x === y)
let str = "I love Oranges"
let newstr = str.slice(2,7)
console.log(newstr)

let texts = 'a,b,c,d,e,f'
//const myArray = text.split(',')

const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
let fLen = fruits.length
for (let i = 0; i < fLen; i++) {
  console.log(fruits[i])
}

