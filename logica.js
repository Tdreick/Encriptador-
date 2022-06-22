var inputMensaje = document.querySelector("#mensaje");
var inputResultado = document.querySelector("#resultado");
var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar");
var btnCopiar = document.querySelector("#copiar"); 



function encriptar (){
    var mensaje = inputMensaje.value;
    console.log(mensaje);
    var  mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");
    console.log(mensajeEncriptado)
    inputResultado.value = mensajeEncriptado
}


function desencriptar(){
    var mensajeEncriptado = inputMensaje.value
    var mensaje = mensajeEncriptado
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");

    inputResultado.value = mensaje;
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function copyToClipBoard() {
    var copyTextarea = document.querySelector('#resultado');
    copyTextarea.focus();
    copyTextarea.select();
    document.execCommand('copy');
    alert("Tienes 5 segundos para descubrir el mensaje antes de que se autodestruya!!!");    
}
btnCopiar.onclick = copyToClipBoard;





