function GenerarLista(arraypokemones){
      let listaHTML = "";
    for (let i = 0; i < arraypokemones.length; i++) {
        let id = arraypokemones[i].url.split("/")[6];
        listaHTML += `
        <div class="c-lista-pokemon poke-${id}" onclick="Detalle('${id}')">
            <p>#${id}</p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" width="auto" height="60" loading="lazy" alt="${arraypokemones[i].name}">
            <p>${arraypokemones[i].name}</p>
        </div>`;
    }

    return listaHTML;
}

function buscadorfuncion(asa){
    if(asa.length >=2) {
        const filtrados = [];
        for (let i = 0; i < pokemones.length; i++) {
            const nombre = pokemones[i].name.toLowerCase();
            if (nombre.includes(asa.toLowerCase())) {
                filtrados.push(pokemones[i]);
            }
        }
        let listaHTML = GenerarLista(filtrados)
        document.getElementById("la-lista").innerHTML = listaHTML;
    }else{
        let listaHTML = GenerarLista(pokemones)
        document.getElementById("la-lista").innerHTML = listaHTML;
    }
}





function Home(){
     var root = document.getElementById("root");
    root.innerHTML = ""; // limpiar antes de pintar
     // buscador 
      
    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar Pokémon...";
    buscador.addEventListener("input", () => {
            buscadorfuncion(buscador.value);
    });
    // flitro
       const tipos = [
        "normal", "fighting", "flying", "poison", "ground", "rock", "bug",
        "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice",
        "dragon", "dark", "fairy", "stellar", "unknown"
    ];
    const filtro =  document.createElement("div");
    for (let i = 0; i < tipos.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = tipos[i];
        
        // Agregar el evento click para filtrar por tipo
        btn.addEventListener("click", () => {
            FiltroConexion(tipos[i]); 
        });

        // Agregar el botón al contenedor
        filtro.appendChild(btn);
    }
//listas
    const listaHTML = GenerarLista(pokemones);
    const contenedorLista = document.createElement("div");
    contenedorLista.classList.add("c-lista");
    contenedorLista.innerHTML = listaHTML;
    contenedorLista.id = "la-lista";

    //agregar
    document.getElementById("root").appendChild(buscador);
    document.getElementById("root").appendChild(filtro);
    document.getElementById("root").appendChild(contenedorLista);
    contenedorLista.id = "la-lista";
    console.log(GenerarLista(pokemones))


   
}

   
