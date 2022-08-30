//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
  let pokePic = []
  let pokeTypes = []

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        pokePic.push(data.sprites.front_shiny)
        pokeTypes.push(data.types[0].type.name)

        document.querySelector('h2').innerText = (data.name + '!')
        document.querySelector('img').src = pokePic[0]
        document.getElementById('pokeNumber').innerText = ('No. ' + data.id)
        document.querySelector('span').innerText = ('Type: ' + pokeTypes[0]) 
        document.getElementById('pokeHeight').innerText = ('Height: ' + data.height + ' decimetres')
        document.getElementById('pokeWeight').innerText = ('Weight: ' + data.weight + ' hectograms')

        console.log(data.abilities)
        data.abilities.forEach( obj => {
            console.log(obj.ability.name)
            const li = document.createElement('li')
            li.textContent = obj.ability.name
            document.querySelector('ul').appendChild(li)
        })

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
