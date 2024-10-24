//Declarem les variables globals
let nomjugador = "default";
let puntuació;
let estatDelJoc;
//Fem els events listeners de la primera Pagina
document.getElementById("bcp").addEventListener("click",comencaPartida)

//Fem el text de la pagina inicial
document.getElementById("infonavegador").textContent = navigator.userAgent
document.getElementById("infoURL").textContent = window.location.href

//Fem les funcions
function comencaPartida(){
    nomjugador = document.getElementById("nomi").value
    console.log(nomjugador)
}