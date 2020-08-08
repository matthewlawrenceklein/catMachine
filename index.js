// main function for event listener
let hellCounter = 0 

function main(){
  newCatListener()
}

function newCatListener(){

  const form = document.querySelector('form')

  form.addEventListener('submit', function(event){

    event.preventDefault()
    const newCat = {
      name: event.target['cat-name'].value,
      image: event.target['cat-image'].value
    }

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCat)
    }

    fetch('http://localhost:3000/cats', reqObj)
      .then(resp => resp.json())
      .then(catData => {
        renderCat(catData)
      })

    function renderCat(cat){
      const catList = document.querySelector('#cat-list')

    const catDisplay = `
    <h3>Check out your cat!</h3>
    <h3>${cat.name}</h3>
    <img src=${cat.image} id="cat-image" alt="">
    <button id="destroy-cat">Send this Cat to Hell</button>
    `
    const catId = cat.id 
    catList.innerHTML = catDisplay
    destroyCatListener(catId)
    }

    form.reset()

  })


}


function destroyCatListener(catId){
  const button = document.getElementById('destroy-cat')
  button.addEventListener('click', function(event){
    console.log(catId);

  const reqObj = {
    method: 'DELETE'
  }
  fetch(`http://localhost:3000/cats/${catId}`, reqObj)
    .then(resp => resp.json())
    .then(catData => {

      hellCounter += 1 

      const catList = document.querySelector('#cat-list')
      catList.innerHTML = `<h3> You sent that cat to Hell <h3>`
      
      const banner = document.getElementById('banner')

      banner.innerHTML = `<h3> CAT HELL MACHINE</h3>
                          <img src="https://media1.popsugar-assets.com/files/thumbor/ayFpo7zdE6C22XsPoIh3RP6BAK4/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/08/16/663/n/1922243/8bb1accdaee60898_netimg2VZYy0/i/Devil-Cat-Costume.jpg" id="cat-image">
                          <p> You've sent ${hellCounter} cats to HELL <p>
      `
    })





  })
}





main()








































// // json-server --watch db.json

// function main() {
//     createFormListener()
// }

// function getCats(){
//     fetch('http://localhost:3000/cats')
//     .then(resp => resp.json())
//     .then(cat => {
  
//       renderCat(cat)
//     })
// }

// function renderCat(cat){
//     const catList = document.querySelector('#cat-list')

//     const catDisplay = `
//     <h3>Check out your cat!</h3>
//     <h3>${name}</h3>
//     <img src=${image} id="cat-image" alt="">
    
//     `

//     catList.innerHTML = catDisplay
// }

// function createFormListener(){
//     const form = document.querySelector('form')
  
  
//     form.addEventListener('submit', function(event){
//       event.preventDefault()
  
//       const newCat = {
//         name: event.target['cat-name'].value,
//         image: event.target['cat-image'].value
//       }
  
  
//       const reqObj = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newCat)
//       }
  
  
//       fetch('http://localhost:3000/cats', reqObj)
//       .then(resp => resp.json())
//       .then(cat => {
//         renderCat(cat)  
//       })
  
//     })  
// }



// main()