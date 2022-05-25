//GIPHY
const url = 'https://api.giphy.com/v1/gifs/search';
const key = '&api_key=aOslCAwvpK1P42qmyVrydW8XDVzqU72D';
const limite = "&limit=3";

let busqueda = "?q=";
let urlCompleta = "";
let q = "";




//POKEMON
const baseUrl = "https://pokeapi.co/api/v2/pokemon/"



const btn = document.getElementById('btn');
const input = document.getElementById('busqueda');

  input.addEventListener("keypress", function (event) {
      if (event.key=== "Enter") {
         event.preventDefault();
         document.getElementById("btn").click();
      }
   });


    btn.onclick = () =>{
        document.getElementById("portafolio").innerHTML= "";

        q =  document.getElementById('busqueda').value;
        urlCompleta = baseUrl +  q + "/";
        getData();

        q =  document.getElementById('busqueda').value;
        q += " pokemon";
        urlCompleta = url + busqueda + q + key + limite;
        getData2();
       

    }


    const getData = async () => {

        await fetch(urlCompleta).then((response) => {
            return response.json();
        }).then((pokemon) => {
                const poke = document.createElement('img');
                poke.src = pokemon.sprites.front_default;
                poke.className = "mb-3";
                document.getElementById("portafolioPokemon").appendChild(poke);
              })

    }

getData();

const getData2 = async () => {

  await fetch(urlCompleta).then((response) => {
    return response.json();
}).then((giphy) => {
    for(let i=0; i<giphy.data.length; i++){

        const gif = document.createElement('img');
        gif.src = giphy.data[i].images['original'].url;
        gif.className = "mb-3";
        document.getElementById("portafolio").appendChild(gif);
    }
})

}

getData2();


