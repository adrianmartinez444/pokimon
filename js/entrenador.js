function batalla (){ 
    let nombre = document.getElementById("Nombre").value;

    if(nombre.length <3) {
        alert("El nombre debe tener como minimo 3 caracteres.");
    return false;
    }
    let apellido = document.getElementById("Apellidos").value
    
    if(apellido.length <3) {
        alert("El apellido debe tenere como minimo 3 caracteres.");
    return false;
    }

    let telefono = document.getElementById("Telefono").value;
    let telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)){
        alert("El numero debe tener 10 digitos minimo.")
        return false;
    }

    let email = document.getElementById("Correo").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
        alert("El correo electronico no es valido.");
        return false;
    }
    
    let nombrepoki = document.getElementById("Nombrepoki").value;

    if(nombrepoki.length <3) {
        alert("el nombre del pokimon no cumple los caracteres");
    return false;
    }

    let tipo = document.getElementById("Tipopoki").value;

    if(tipo.length <2) {
        alert("el elemento del pokimon no se encuentra en el sistema");
    return false;
    }

    let ataque = document.getElementById("Ataquepoki").value;

    if(ataque.length <2) {
        alert("Escribe correctamente la habilidad");
    return false;
    }

    let defensa = document.getElementById("Defensapoki").value;

    if(defensa.length <5) {
        alert("Escribe correctamente la defensa");
    return false;
    }
    if (defensa.length < 5) { document.getElementById("resultado-batalla").textContent = "Escribe correctamente la defensa"; 
        return false;
    }

    

    
    const probabilidadDePerder = 0.5;
    const perdiste = Math.random() < probabilidadDePerder;
    const resultadoDiv = document.getElementById("resultado-batalla");

    if (perdiste) {
        resultadoDiv.textContent = "¡Tu Pokémon ha sido derrotado!";
        resultadoDiv.style.color = "red"; // Opcional: dar un estilo al resultado
    } else {
        resultadoDiv.textContent = "¡Felicidades! ¡Tu Pokémon ha ganado!";
        resultadoDiv.style.color = "green"; // Opcional: dar un estilo al resultado
        return true;
    }

    

    function verificarCombate() {
        const ataque = parseInt(document.getElementById("ataque").value);
        const defensa = parseInt(document.getElementById("defensa").value);
        const nombre = document.getElementById("pokemonList").value;
        const tipo = document.getElementById("pokimon").value;
    
        if (isNaN(ataque) || isNaN(defensa)) {
            alert("Selecciona un Pokémon primero.");
            return;
        }
    
        const poderTotal = ataque + defensa;
        const poderPikachu = 90 + 40; 
    
        const datos = {
            nombre,
            tipo,
            ataque,
            defensa,
            resultado: poderTotal > poderPikachu ? "Ganó" : "Perdió"
        };
    
        localStorage.setItem("resultadoCombate", JSON.stringify(datos));
    
        if (poderTotal > poderPikachu) {
            alert("Fue registrado tu pokimon correctamente");
            window.location.href = "../vistas/combate.html";
        } else {
            alert("Fue registrado tu pokimon correctamente");
            window.location.href = "../vistas/combate.html";
        }
    }
    
    const datosPokemones = {  
        Pikachu: { tipo: "Eléctrico", ataque: 90, defensa: 40 },
        Charmander: { tipo: "Fuego", ataque: 85, defensa: 50 },
        Bulbasaur: { tipo: "Planta", ataque: 70, defensa: 65 },
        Squirtle: { tipo: "Agua", ataque: 60, defensa: 80 },
        Eevee: { tipo: "Normal", ataque: 75, defensa: 60 }
    };
    
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("pokemonList").addEventListener("change", function () {
            const seleccion = this.value;
            if (datosPokemones[seleccion]) {
                document.getElementById("pokimon").value = datosPokemones[seleccion].tipo;
                document.getElementById("ataque").value = datosPokemones[seleccion].ataque;
                document.getElementById("defensa").value = datosPokemones[seleccion].defensa;
        
                mostrarImagen(seleccion);
            } else {
                document.getElementById("pokimon").value = "";
                document.getElementById("ataque").value = "";
                document.getElementById("defensa").value = "";
        
                mostrarImagen("");
            }
        });
    });
    
    
    function mostrarImagen(nombre) {
        const pokemons = ["Pikachu", "Charmander", "Kookodrile", "Squirtle", "Eevee"];
    
        pokemons.forEach(pokemon => {
            const img = document.getElementById(`img ${pokemon}`);
            if (img) {
                img.style.display = (pokemon === nombre) ? "block" : "none";
            }
        });
    }

}


        // Lógica de victoria aquí
    

    /*return true; */// Permite el envío del formulario (si es un formulario)



    /*let combate = document.getElementById("combatir")

    if(combatir){
        alert("Tu pokimon perdio");
        return false;
    }*/
