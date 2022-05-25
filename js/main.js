//GIPHY
const url = 'https://api.giphy.com/v1/gifs/search';
const key = '&api_key=aOslCAwvpK1P42qmyVrydW8XDVzqU72D';
const limite = "&limit=8";

let busqueda = "?q=";
let urlCompleta = "";
let q = "";


//MARVEL
const marvelurl = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith=';
const tsApiKeyHash = "&ts=1&apikey=a27a8d0850fd1d9cd49580aed0cc2dc2&hash=b5da86791de0fb6b19ae25e1386f670b";
let nom = "";
let marvelurlcompleta = "";
let espacio = "%20";

//https://gateway.marvel.com/v1/public/characters?nameStartsWith=spider';

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
        q += " marvel";
        urlCompleta = url + busqueda + q + key + limite;
        getData();

        nom = document.getElementById('busqueda').value.toLowerCase();
        marvelurlcompleta = marvelurl + nom + tsApiKeyHash;
        marvel.render();

    }


    const getData = async () => {

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

getData();




//const marvelurl = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith=';
//let name = document.getElementById('busqueda').value.toLowerCase();
//const hash = "b5da86791de0fb6b19ae25e1386f670b";

const marvel = {
    render: () => {
      //const urlAPI = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith=spider&ts=1&apikey=a27a8d0850fd1d9cd49580aed0cc2dc2&hash=b5da86791de0fb6b19ae25e1386f670b';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(marvelurlcompleta)
        .then(res => res.json())
        .then((json) => {
          for (const hero of json.data.results) {
            let urlHero = hero.urls[0].url;
            contentHTML += `
              <div class="col-md-4">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${hero.name}</h3>
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
  };
  marvel.render();

  