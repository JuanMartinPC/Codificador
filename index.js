const boton = document.getElementById("encriptar");
function codificar(event){
    event.preventDefault()
    var inputTxt = document.getElementById("input").value;
    inputTxt = inputTxt.toLowerCase();
    var newTxt = '';
    var contenido = document.getElementById("texto");
    for (indice in inputTxt){
        if (inputTxt[indice] == 'a' | inputTxt[indice] == 'u'){
            newTxt += inputTxt[indice] + 'av'} else if ( inputTxt[indice] == 'e' | inputTxt[indice] == 'o'){
                newTxt += inputTxt[indice] + 'k a'}else if (  inputTxt[indice] == 'i'){
                    newTxt += inputTxt[indice] + '. H'} else {newTxt += inputTxt[indice]}
    }
    contenido.innerHTML = newTxt;
}
boton.addEventListener('click', codificar);

var resetBtn = document.getElementById('resetBtn');
function reset(){
    var contenido = document.getElementById("texto");
    contenido.innerHTML = ''
}
resetBtn.addEventListener('click', reset);


const temaBtn = document.getElementById('temaBtn')
const themeContainer = document.getElementById('theme-container');
const cambiarTema = () => {
    themeContainer.classList.toggle('on-screen');
};
temaBtn.addEventListener('click', cambiarTema);



/* COLOR ROJO */
const red = document.getElementById("red");
const redBody = () =>{
    document.documentElement.style.setProperty('--color-body', '#ff0000');
    document.documentElement.style.setProperty('--color-body-2', '#e60000');
    document.documentElement.style.setProperty('--color-button', '#8b0000');
    document.documentElement.style.setProperty('--color-textBox', '#8b0000');
    document.documentElement.style.setProperty('--color-sombra-1', '#b30000')
}
red.addEventListener('click', redBody);

/* COLOR AZUL */
const blue = document.getElementById("blue");
const blueBody = () =>{
    document.documentElement.style.setProperty('--color-body', 'blue');
    document.documentElement.style.setProperty('--color-body-2', '#0000e6');
    document.documentElement.style.setProperty('--color-button', 'darkblue');
    document.documentElement.style.setProperty('--color-textBox', 'darkblue');
    document.documentElement.style.setProperty('--color-sombra-1', '#0000b3')
}
blue.addEventListener('click', blueBody);

/* COLOR VERDE */
const green = document.getElementById("green");
const greenBody = () =>{
    document.documentElement.style.setProperty('--color-body', 'green');
    document.documentElement.style.setProperty('--color-body-2', '#007300');
    document.documentElement.style.setProperty('--color-button', 'darkgreen');
    document.documentElement.style.setProperty('--color-textBox', 'darkgreen');
    document.documentElement.style.setProperty('--color-sombra-1', '#005a00')
}
green.addEventListener('click', greenBody);

/* COLOR PURPURA */
const black = document.getElementById("black");
const blackBody = () =>{
    document.documentElement.style.setProperty('--color-body', '#1c1c1c');
    document.documentElement.style.setProperty('--color-body-2', '#191919');
    document.documentElement.style.setProperty('--color-button', 'black');
    document.documentElement.style.setProperty('--color-textBox', 'black');
    document.documentElement.style.setProperty('--color-sombra-1', '#141414')
}
black.addEventListener('click', blackBody);