//Random szám generálása, min és max is beletartozik
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//eventlistener hozzáadása a mezőkhöz (td)
function addingEventListeners(){
    for(let i = 1; i <= 16; i++){
        tmp_i = "" + i;
        document.getElementById(tmp_i).addEventListener("click", test);
    }   
}

//Egyedi random számok kiosztása
const numbersSet = new Set();
const numbersSetTmp = new Set();
function generateNumbers(){
    document.getElementById("16").innerHTML = "";
    firstNumber = getRandomInteger(1, 15);
    document.getElementById("1").innerHTML = firstNumber;
    numbersSet.add(firstNumber);

    console.log("első szám: " + firstNumber);

    for(let i = 2; i <= 15; i++){
        tmp = "" + i;
        x = getRandomInteger(1, 15);
        numbersSetTmp.add(x);
        console.log("x: " + x);
        if(numbersSet.has(x)){
            do {
                y = getRandomInteger(1, 15);
                console.log("y: " + y);
            } while (numbersSet.has(y));
            document.getElementById(tmp).innerHTML = y;
            numbersSet.add(y);

            console.log("beírt szám: " + document.getElementById(tmp).innerHTML);
        }
        else{
            document.getElementById(tmp).innerHTML = x;
            numbersSet.add(x);

            console.log("beírt szám: " + document.getElementById(tmp).innerHTML);
        }
    }

    numbersSet.clear();
    numbersSetTmp.clear();
}

//vizsgáló függvény
function test(){
    var this_id = parseInt(this.id);
    var clickedValue;

    //-1
    if(parseInt(this_id) > 1 && document.getElementById(parseInt(this_id) - 1).innerHTML == "" && Math.ceil(parseInt(this_id)/4) == Math.ceil((parseInt(this_id) - 1) / 4)){
        clickedValue = document.getElementById(this_id).innerHTML;
        document.getElementById(parseInt(this_id) - 1).innerHTML = clickedValue;
        document.getElementById(this_id).innerHTML = "";
    }
    //+1
    else if(parseInt(this_id) < 16 && document.getElementById(parseInt(this_id) + 1).innerHTML == "" && Math.ceil(parseInt(this_id)/4) == Math.ceil((parseInt(this_id) + 1) / 4)){
        clickedValue = document.getElementById(this_id).innerHTML;
        document.getElementById(parseInt(this_id) + 1).innerHTML = clickedValue;
        document.getElementById(this_id).innerHTML = "";
    }
    //-4
    else if(parseInt(this_id) > 4 && document.getElementById(parseInt(this_id) - 4).innerHTML == ""){
        clickedValue = document.getElementById(this_id).innerHTML;
        document.getElementById(parseInt(this_id) - 4).innerHTML = clickedValue;
        document.getElementById(this_id).innerHTML = "";
    }
    //+4
    else if(parseInt(this_id) < 13 && document.getElementById(parseInt(this_id) + 4).innerHTML == ""){
        clickedValue = document.getElementById(this_id).innerHTML;
        document.getElementById(parseInt(this_id) + 4).innerHTML = clickedValue;
        document.getElementById(this_id).innerHTML = "";
    }
    else if(document.getElementById(this_id).innerHTML == ""){
        alert("Az üres mezőt nem tudod mozgatni.");
    }
    else{
        alert("Rossz helyre kattintottál");
    }

    /* Id-ék, értékek console-ra való kiíratása, működik, de nem önállóan, csak ha a fenti kód is bent van a függvényben
    if((parseInt(this_id) - 1) <= 0){ //bal felső sarok
        console.log("Rákkattintott elem id: " + this_id + " értéke: " + this.innerHTML); //ID
        console.log("Jobbra mellette elem id: " + (parseInt(this_id) + 1) + " értéke: " + document.getElementById(parseInt(this_id) + 1).innerHTML); //jobb
        console.log("Alatta elem id: " + (parseInt(this_id) + 4) + " értéke: " + document.getElementById(Number(this_id)+4).innerHTML); //alatta
    }
    else if((parseInt(this_id) - 4) <= 0){ 
        console.log("Rákkattintott elem id: " + this_id + " értéke: " + this.innerHTML); //ID
        console.log("Balra mellette elem id: " + (this_id - 1) + " értéke: " + document.getElementById(this_id-1).innerHTML); //bal
        console.log("Jobbra mellette elem id: " + (parseInt(this_id) + 1) + " értéke: " + document.getElementById(parseInt(this_id) + 1).innerHTML); //jobb
        console.log("Alatta elem id: " + (parseInt(this_id) + 4) + " értéke: " + document.getElementById(Number(this_id)+4).innerHTML); //alatta
        
    }
    else if((parseInt(this_id) + 1) > 16){ //jobb alsó sarok
        console.log("Rákkattintott elem id: " + this_id + " értéke: " + this.innerHTML); //ID
        console.log("Balra mellette elem id: " + (this_id - 1) + " értéke: " + document.getElementById(this_id-1).innerHTML); //bal
        console.log("Felette elem id: " + (this_id - 4) + " értéke: " + document.getElementById(this_id-4).innerHTML); //felette
        
    }
    else if((parseInt(this_id) + 4) >= 16){
        console.log("Rákkattintott elem id: " + this_id + " értéke: " + this.innerHTML); //ID
        console.log("Balra mellette elem id: " + (this_id - 1) + " értéke: " + document.getElementById(this_id-1).innerHTML); //balra
        console.log("Felette elem id: " + (this_id - 4) + " értéke: " + document.getElementById(this_id-4).innerHTML); //felette
        console.log("Jobbra mellette elem id: " + (parseInt(this_id) + 1) + " értéke: " + document.getElementById(parseInt(this_id) + 1).innerHTML); //jobbra
        
    }
    else{
        console.log("Rákkattintott elem id: " + this_id + " értéke: " + this.innerHTML);
        console.log("Balra mellette elem id: " + (this_id - 1) + " értéke: " + document.getElementById(this_id-1).innerHTML);
        console.log("Felette elem id: " + (this_id - 4) + " értéke: " + document.getElementById(this_id-4).innerHTML);
        console.log("Jobbra mellette elem id: " + (parseInt(this_id) + 1) + " értéke: " + document.getElementById(parseInt(this_id) + 1).innerHTML);
        console.log("Alatta elem id: " + (parseInt(this_id) + 4) + " értéke: " + document.getElementById(Number(this_id)+4).innerHTML);
        //console.log("Alatta elem id: " + this_id + 4 + " értéke: " + document.getElementById(Number(this_id)+4).innerHTML);
    }
    */
}
