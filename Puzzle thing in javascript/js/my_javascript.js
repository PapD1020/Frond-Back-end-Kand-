//Random szám generálása, min és max is beletartozik
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//Random számokkal a 4x4-es tábla egyes mezőinek feltöltése
function generateNumbers(){
    for(let i = 0; i < 1; i++){
        console.log("i: " + i);
        for(let j = 0; j < 16; j++){
            console.log("j: " + j);
            tmp = "" + i + j;
            console.log("tmp: " + tmp);
            document.getElementById(tmp).innerHTML = getRandomInteger(1, 16);
        }
    }
}