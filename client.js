const PokeContainer = document.querySelector("#PokeContainer");

const pokemonCount = 1281
const colors = {
   fire: '#e35645',
   grass: '#44d7a8',
   electric: '#f2f28d',
   water: '#5eacd2',
   ground: '#b9946e',
   rock: '#d5d5d4',
   fairy: '#ff8aa2',
   poison: '#e994ff',
   bug: '#e2e4b7',
   dark: '#777',
   ghost: '#533a51',
   dragon: '#97b3e6',
   psychic: '#debde7',
   flying: '#c6c6ec',
   fighting: '#E6E0D4',
   normal: '#F5F5F5'
}

const mainTypes = Object.keys(colors);

const fetchpokemons = async () => { 
   for (let i = 1; i <= pokemonCount; i++){
      await getPokemons(i)
   }
}

const getPokemons = async (id) => {
const url = `https://pokeapi.co/api/v2/pokemon/${id}`
   const resp = await fetch(url)
   const data = await resp.json()
   createpokemoncard(data);
} 
const createpokemoncard = (poke) => {
   const card = document.createElement('div')
   card.classList.add("pokemon")
   const name = poke.name[0].toUpperCase() + poke.name.slice(1)
   const id = poke.id.toString().padStart(3,'0')
   const poketypes = poke.types.map(type => type.type.name)
   const type = mainTypes.find(type => poketypes.indexOf(type) > -1)
   const color= colors[type]
   card.style.backgroundColor = color

   const pokemonInnerHTML = `
   <div class="imgContainer"</div>
   <img src=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${name}">

</div>
<div class="info">
   <span class="Number">#${id}</span>
   <h3 class="name">${name}</h3>
   <small class="type"> Type: <span>${type}</span></small>
</div>
`

card.innerHTML = pokemonInnerHTML

PokeContainer.appendChild(card)
}
 
fetchpokemons()