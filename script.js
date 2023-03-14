// // Pratica Guiada I - CallBacks

// function triplicarNumeros (arrayDeNumeros) {
//   const arrayTriplicado = []

//   for (let numero of arrayDeNumeros) {
//     const numeroTriplicado = numero * 3
//     arrayTriplicado.push(numeroTriplicado)
//   }

//   return arrayTriplicado

// }

// console.log(triplicarNumeros([1, 2, 3, 4, 5]))

// function retornarPares(arrayDeNumeros){
//   const arrayPares = []

//   for (let numero of arrayDeNumeros){
//     if(numero % 2 === 0){
//       arrayPares.push(numero)
//     }
//   }

// return arrayPares
// }

// // console.log(retornarPares(numeros))


// function manipulaNumeros(arrayDeNumeros, callback){
//   const novoArray = callback(arrayDeNumeros)

//   return novoArray
// } 

// // console.log(`triplicando`, manipulaNumeros([1, 2, 3, 4, 5, 6],
// //  triplicarNumeros))

// // console.log(`so pares`, manipulaNumeros([1, 2, 3, 4, 5, 6],
// //  retornarPares))

// // Pratica Guiada II - Map()

// const numeros = [1, 2, 3, 4, 5, 6]

// const numerosTriplicados = numeros.map((elemento, indice, arrayOriginal) => {
 
//   return elemento * 3

// })

// // console.log(numerosTriplicados)

// // Pratica Guiada III - Filter()

// const numerosPares = numeros.filter((elemento, indice, arrayOriginal) => {

//   return elemento % 2 === 0
// })

// console.log(numerosPares)

// Exercicios Template

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

// 1
function vidaCem (poke) {
  poke.vida = 100

  return poke
}

// console.log(vidaCem(pokemons[0]))
// console.log(vidaCem(pokemons[1]))
// console.log(vidaCem(pokemons[2]))
// console.log(vidaCem(pokemons[3]))
// console.log(vidaCem(pokemons[4]))
// console.log(vidaCem(pokemons[5]))

// 2
const pokemonsVidaCheia = pokemons.map(vidaCem)

console.log(pokemonsVidaCheia)

// 3 

const pokemonsDeFogo = pokemons.filter((pokemon, indice, arrayOriginal) => {
  return pokemon.tipo === `fogo`
})

console.log(pokemonsDeFogo)