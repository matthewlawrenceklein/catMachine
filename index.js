// json-server --watch db.json

function main() {
    getCats()
    createFormListener()
}

function getCats(){
    fetch('http://localhost:3000/cats')
    .then(resp => resp.json())
    .then(cats => {
  
      cats.forEach(renderCat)
    })
}

function renderCat(cat){
    const catList = document.querySelector('#cat-list')
    const pTag = document.createElement('p')
    pTag.innerText = `${cat.name} - ${cat.style}`

    catList.append(pTag)
}

function createFormListener(){
    const form = document.querySelector('form')
  
  
    form.addEventListener('submit', function(event){
      event.preventDefault()
  
      const newCat = {
        name: event.target['cat-name'].value,
        style: event.target['cat-style'].value
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
      .then(cat => {
        console.log(cat)
        renderCat(cat)
      })
  
    })  
}






main()