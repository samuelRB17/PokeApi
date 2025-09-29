let pokemones = [];
let totalPokes = 1025;

// Conexión para obtener la lista de Pokémon
async function conexion() {
  if(UnFiltro == "All"){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokes}`);
  const data = await res.json();
  return data.results;
  }else{
    const res = await fetch(`https://pokeapi.co/api/v2/type/${UnFiltro}`);
    const data = await res.json();

    const pokemonesTipo = [];
    for (let i = 0; i < data.pokemon.length; i++) {
      pokemonesTipo.push(data.pokemon[i].pokemon);
    }
 
}
 return pokemonesTipo;
}

// Cargar todos los Pokémon al iniciar
async function General() {
  if (pokemones.length === 0) {
    pokemones = await conexion("All");
  }
  console.log(pokemones)
  Home(pokemones);
   console.log(pokemones[2].name)
}

// General()


function FiltroConexion(filtroElegido){
pokesfiltrados = await conexion(filtroElegido)
document.getElementById("").innerHTML="";
listaFiltro = GenerarLista(pokesfiltrados)
document.getElementById("").innerHTML=listaFiltro



}