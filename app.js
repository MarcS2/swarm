

// SECTION global variables



const locations = [
  '🏤', '🏥', '🏭', '🏢', '🏣'
]
const death = '🦇🦇🦇🦇🦇🦇🦇🦇🦇🦇🦇🦇'
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

let hours = 8


// // !SECTION





// SECTION functions
function draw() {

  locations.forEach(location => {
    const filteredPeople = people.filter(p => p.location == location)
    const locationElem = document.getElementById(location)
    console.log(filteredPeople)

    // @ts-ignore
    locationElem.innerText = '';
    // @ts-ignore
    filteredPeople.forEach(person => {
      // @ts-ignore
      locationElem.innerText += person.picture
    })

  })
}




function bite(location) {
  const victims = location;
  console.log(victims)

  const victimsLocated = people.filter(p => p.location == victims)
  victimsLocated.forEach(victim => {
    victim.picture = '🦇'
  })
  gameWin()
  moveAround()
  countdown()
  draw()
}



function gameWin() {
  let death = true
  people.forEach(p => {
    if (p.picture !== '🦇') {
      death = false

    }
  })
  if (death) {
    window.alert("All Victims Have Been Turned. YOU WIN!")
  }
}

function moveAround() {
  people.forEach(p => {
    const rndLocationIdex = Math.floor(Math.random() * locations.length)
    const rndLocation = locations[rndLocationIdex]
    p.location = rndLocation
  })
}

function countdown() {
  hours--
  console.log(hours)
  if (!hours) {
    alert('Time is up, sun is shining, and you are dead')
  }
}


// function hunterHero() {
//   const rngPersonIndex = Math.floor(Math.random() * people.length)

//   const rngPerson = people[rngPersonIndex]

//   hunter = rngPerson.name
// }

// !SECTION


// SECTION startup functions 

draw()


// !SECTION