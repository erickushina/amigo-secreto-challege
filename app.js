// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function limpiarCaja() {
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
    return;
}

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if(amigo == '') {
        alert('Por favor, inserte un nombre');
    } else {
        listaDeAmigos.push(amigo);
        limpiarCaja();
    };
    return;
}
