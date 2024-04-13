const axios = require('axios')
const {Client} = require('@notionhq/client')

const notion = new Client({auth: process.env.NOTION_KEY})

const pokeArray = []

async function getPokemon() {
  await axios.get('https://pokeapi.co/api/v2/pokemon/1')
    .then((poke) => {
      //console.log(poke)
    
      const name = poke.name
      
  })
    .catch((error) => {
      console.log(error)
  })
}
          
getPokemon()