function buscador(){
    let busca = document.getElementById('pokemon').value
    fetch ('https://pokeapi.co/api/v2/pokemon/'+busca.toLowerCase())
    .then(response=>{
        return response.json()    
    })
    .then(data=>{
        let sprite = document.querySelector('.sprite')
        let nome = document.querySelector('.nome')
        let id = document.querySelector('.id')
        sprite.src= data.sprites.other['official-artwork'].front_default
        nome.innerHTML = data.name
        id.innerHTML=data.id
    })
.catch(error=>{
    console.log(error)
    alert('não existe')
})


}

let pokemon = document.getElementById('pokemon')
pokemon.addEventListener('keyup',(e)=>{
    if(e.key== "Enter"){
        buscador()
    }
})