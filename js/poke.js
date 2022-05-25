//GIPHY
const url = 'https://api.giphy.com/v1/gifs/search';
const key = '&api_key=aOslCAwvpK1P42qmyVrydW8XDVzqU72D';
const limite = "&limit=4";

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
        q = q.toLowerCase();
        urlCompleta = baseUrl +  q + "/";
        getData();

        q =  document.getElementById('busqueda').value;
        q += " pokemon";
        urlCompleta = url + busqueda + q + key + limite;
        getData2();
       

    }


    const getData = async () => {

        // await fetch(urlCompleta).then((response) => {
        //     return response.json();
        // }).then((pokemon) => {
        //         const poke = document.createElement('img');
        //         poke.src = pokemon.sprites.front_default;
        //         poke.className = "mb-3";
        //         document.getElementById("portafolioPokemon").appendChild(poke);
        //       })

        const container = document.querySelector('#portafolioPokemon');
        let contentHTML = '';
    
          await fetch(urlCompleta).then((response) => {
              return response.json();
          }).then((pokemon) => {
            for(let i=0; i<1; i++){
                 
                  const imgpokemon = pokemon.sprites.front_default;
                  const tittlepokemon = pokemon.name;
                  const move = pokemon.moves[0].move.name;
                  const abiliti = pokemon.abilities[0].ability.name;
                  const type = pokemon.types[0].type.name;
                  console.log(type);
                  //const gif = document.createElement('img');
                  // gif.src = giphy.data[i].images['original'].url;
                  // gif.className = "mb-3";
                  // document.getElementById("portafolio").appendChild(gif);
    
                  contentHTML += `
                  <div class="row mx-3 mb-3">

                    <div class="col-lg-6 col-md-12 col-sm-12 ">
                        <img src="${imgpokemon}" class="img-poke">
                        
                    </div>

                    <div class="col-lg-6 col-md-12 col-sm-12 pt-5">

                        <h3 class="title">Nombre: ${tittlepokemon}</h3>
                        <h3 class="title">Tipo: ${type}</h3>
                        <h3 class="title">Movimiento Random: ${move}</h3>
                        <h3 class="title">Habilidad Random: ${abiliti}</h3>
                        
                    </div>

                  </div>`;
            }
              
              container.innerHTML = contentHTML;
          }) 

    }

getData();


const getData2 = async () => {

    const container = document.querySelector('#portafolio');
    let contentHTML = '';

      await fetch(urlCompleta).then((response) => {
          return response.json();
      }).then((giphy) => {
          for(let i=0; i<giphy.data.length; i++){

              const urlgif = giphy.data[i].url;
              const imgGif = giphy.data[i].images['original'].url;
              const tittle = giphy.data[i].title;
              const gif = document.createElement('img');
              // gif.src = giphy.data[i].images['original'].url;
              // gif.className = "mb-3";
              // document.getElementById("portafolio").appendChild(gif);

              contentHTML += `
              <div class="col-md-4">
                  <a href="${urlgif}" target="_blank">
                    <img src="${imgGif}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${tittle}</h3>
              </div>`;
          }
          container.innerHTML = contentHTML;
      })

  }

getData2();



