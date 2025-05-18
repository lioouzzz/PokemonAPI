const apiUrl="https://pokeapi.co/api/v2/pokemon"
const pokemon='pikachu'

fetch(`${apiUrl}/${pokemon}`)
    .then(response=>{
        if(!response.ok){
            throw new Error("查無此寶可夢")
        }
        return response.json();
    })
    .then(object=>{
        document.getElementById("result").innerHTML=`
        <h2>${object.name}</h2>
        <img src="${object.sprites.front_default}" alt="${object.name}">
        `
    })
    .catch(error=>{
        document.getElementById("result").innerText=`錯誤:${error.message}`

    })