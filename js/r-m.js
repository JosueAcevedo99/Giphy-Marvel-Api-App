//GIPHY
const url = 'https://api.giphy.com/v1/gifs/search';
const key = '&api_key=aOslCAwvpK1P42qmyVrydW8XDVzqU72D';
const limite = "&limit=4";

let busqueda = "?q=";
let urlCompleta = "";
let q = "";


const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const rickUrl = 'https://rickandmortyapi.com/api/character/?name=';

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

        q =  document.getElementById('busqueda').value + " Rick and Morty";
       
        urlCompleta = url + busqueda + q + key + limite;
        getData();

        q =  document.getElementById('busqueda').value;
        q = q.toLowerCase();

        urlCompleta = rickUrl + q;
        getData2();

    }



    const getData = async () => {

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
  
  getData();
  
  

const getData2 = async () => {

//   await fetch(urlCompleta).then((response) => {
//     return response.json();
// }).then((rickMorty) => {
//     for(let i=0; i<rickMorty.results.length; i++){

//         const character = document.createElement('img');
//         character.src = rickMorty.results[i].image;
//         character.className = "mb-3";
//         document.getElementById("portafoliorym").appendChild(character);
//     }
// })

const container = document.querySelector('#portafoliorym');
        let contentHTML = '';
  
          await fetch(urlCompleta).then((response) => {
              return response.json();
          }).then((rickMorty) => {
              for(let i=0; i<rickMorty.results.length; i++){
  
                  const urlcharacter = rickMorty.results[i].url;
                  const imgcharacter = rickMorty.results[i].image;
                  const tittle = rickMorty.results[i].species + "-" + rickMorty.results[i].status + "-" + rickMorty.results[i].name;
                  //const gif = document.createElement('img');
                  // gif.src = giphy.data[i].images['original'].url;
                  // gif.className = "mb-3";
                  // document.getElementById("portafolio").appendChild(gif);
  
                  contentHTML += `
                  <div class="col-md-4">
                      <a href="${urlcharacter}" target="_blank">
                        <img src="${imgcharacter}" class="img-thumbnail">
                      </a>
                      <h3 class="title">${tittle}</h3>
                  </div>`;
              }
              container.innerHTML = contentHTML;
          })
}



getData2();



