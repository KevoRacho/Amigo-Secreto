// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos =[];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == "") {
        alert('¿Acaso no tienes amigos? Ingresa un nombre de un amigo por favor.');
    } else {
        amigos.push(nombreAmigo);
        document.getElementById('amigo').value = "";
    }
    console.log(amigos);
    mostrarListaAmigos(amigos, "listaAmigos");
}

function mostrarListaAmigos (amigos, elementoID) {
    let lista = document.getElementById(elementoID);
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let amiko = amigos[i];
        let elementoLista = document.createElement("li");
        elementoLista.textContent = amiko;
        lista.appendChild(elementoLista);
    }
}