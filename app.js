const gift = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/'
const container = document.querySelector('#container')

for(let i = 1; i < 20; i++){
	const pokemon = document.createElement('div')
	const img = document.createElement('img')
	img.src = `${gift}${i}.gif`
	pokemon.classList.add('style')
	pokemon.appendChild(img)
	container.appendChild(pokemon)
}