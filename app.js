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

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";                            //Se limpia la lista exstente
    for(let i = 0; i < listaDeAmigos.length; i++) {        //Recorrido de la lista
        const elemento = document.createElement('li');
        elemento.innerHTML = `${listaDeAmigos[i]}`
        listaAmigos.append(elemento);
    };
    return;
}

function sortearAmigo() {
    if(listaDeAmigos.length == 0) {
        alert('No hay amigos aún.');
        return;
    }
    const indice = Math.floor(Math.random() * listaDeAmigos.length);        //Genero un índice aleatorio.
    const amigoSecreto = listaAmigos[indice];                            //Obtengo el nombre para mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Que bien!, te tocó a:  ${amigoSecreto}`; 
    return;   
}
