function hideElementById(id) {
    const element = document.getElementById(id);
    element.classList.add('hidden');
}

function showElementById(id) {
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}

function setBackgroundColorById(id){
    const element = document.getElementById(id);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(id){
    const element = document.getElementById(id);
    element.classList.remove('bg-orange-400');
}

function setTextElementValueById(id, num){
    const element = document.getElementById(id);
    element.innerText = num;
}

function getARandomAlphabet(){
    const keyboardKey = 'abcdefghijklmnopqrstuvwxyz/';
    const keyArray = keyboardKey.split('');
    const index = Math.round(Math.random()*26);
    const key = keyArray[index];
    return key;
}