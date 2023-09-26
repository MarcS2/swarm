

// SECTION global variables


const locations = [
  '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
  name: 'Jimbo',
  picture: '🤵',
  location: '🏤'
},
{
  name: 'Sammy',
  picture: '🙆‍♀️',
  location: '🏤'
},
{
  name: 'Michael',
  picture: '👷',
  location: '🏤'
},
{
  name: 'Robert',
  picture: '👷',
  location: '🏥'
},
{
  name: 'Terry',
  picture: '🤴',
  location: '🏥',
},
{
  name: 'Bill',
  picture: '🕵️',
  location: '🏥',
},
{
  name: 'Marie',
  picture: '👩‍🍳',
  location: '🏭',
},
{
  name: 'Mykeal',
  picture: '💂',
  location: '🏭',
},
{
  name: 'Phil',
  picture: '🧜‍♂️',
  location: '🏭',
},
{
  name: 'Wilson',
  picture: '🏐',
  location: '🏢',
},
{
  name: 'Wendy',
  picture: '👩‍⚕️',
  location: '🏢',
},
{
  name: 'Jeremy',
  picture: '🦹',
  location: '🏢',
}
]

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')

const buttons = [
  {
    number: btn1,
    picture: '🏤'
  },
  {
    number: btn2,
    picture: '🏥'
  },
  {
    number: btn3,
    picture: '🏭'
  },
  {
    number: btn4,
    picture: '🏢'
  },
  {
    number: btn5,
    picture: '🏣'
  },
]


// !SECTION
// NOTE this needs function added that actives when clicked
// @ts-ignore
// @ts-ignore



// SECTION functions
function draw() {

  locations.forEach(location => {
    const filteredPeople = people.filter(p => p.location == location)
    console.log(filteredPeople)

    let emoji = ''
    filteredPeople.forEach(fPeople => emoji += fPeople.location)
    console.log(emoji)
    const locationElem = document.getElementById(location)

    // @ts-ignore
    locationElem.innerText = emoji
  })


}

function bite() {
  console.log(btnEmoji)

}

// !SECTION
