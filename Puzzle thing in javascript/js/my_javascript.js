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
function generateNumbers4(){
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
    /*var myArray = [];
    for (let i = 1; i <= 16; i++) {
        tmp_i2 = "i"
        tmp_value = document.getElementById(tmp_i2).innerHTML;
        myArray.push(tmp_value);
    }*/

    var this_id = parseInt(this.id);
    
    var leftId, aboveId, rightId, underId;
    var leftValue, aboveValue, rightValue, underValue;

    if((parseInt(this_id) - 1) <= 0 || (parseInt(this_id) - 4) <= 0 || (parseInt(this_id + 1) >= 16 || (parseInt(this_id) + 1) >= 16)){
        alert("error");
    }
    else{
        console.log("Rákkattintott elem id: " + this_id + " értéke: " + this.innerHTML);
        console.log("Balra mellette elem id: " + (this_id - 1) + " értéke: " + document.getElementById(this_id-1).innerHTML);
        console.log("Felette elem id: " + (this_id - 4) + " értéke: " + document.getElementById(this_id-4).innerHTML);
        console.log("Jobbra mellette elem id: " + (parseInt(this_id) + 1) + " értéke: " + document.getElementById(parseInt(this_id) + 1).innerHTML);
        console.log("Alatta elem id: " + (parseInt(this_id) + 4) + " értéke: " + document.getElementById(Number(this_id)+4).innerHTML);
        //console.log("Alatta elem id: " + this_id + 4 + " értéke: " + document.getElementById(Number(this_id)+4).innerHTML);
    }
}

/*
//Második próba
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
//Első próba
function generateNumbers2(){
    for(let i = 1; i <= 16; i++){
        tmp = "" + i;
        document.getElementById(tmp).innerHTML = getRandomInteger(1, 16);
    }
}
//Harmadik próba
function generateNumbers3(){
    document.getElementById("1").innerHTML = getRandomInteger(1, 16);
    //console.log("első szám: " + document.getElementById("1").innerHTML);
    for(let i = 2; i <= 16; i++){
        console.log("i: " + i);
        tmp = "" + i;
        do {
            num = getRandomInteger(1, 16);
            document.getElementById(tmp).innerHTML = num;
            //console.log("random szám: " + num);
        } while (document.getElementById(tmp).innerHTML == document.getElementById(tmp - 1).innerHTML);

        //console.log("ami beírtásra került: " + document.getElementById(tmp).innerHTML);
    }
}
*/
