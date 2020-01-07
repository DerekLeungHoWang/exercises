

const data = await fetch('/data/file.json')
const response =  data.json()
console.log(JSON.stringify(response))

const getData = async () => {
const fetchData = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
const realResponse = await fetchData.json();
console.log(realResponse)
}

getData()