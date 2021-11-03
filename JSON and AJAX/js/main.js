/*
var cat = {
    "name": "Menta",
    "species": "Felis catus",
    "gender": "They are not 18 yes."
}

//tömb
var colors = ["black", "grey", "green"];


//JSON JavaScript Object Notation
var pets = [
    {
        "name": "Menta",
        "species": "Felis catus",
        "gender": "They are not 18 yes."
    },
    {
        "name": "Maci",
        "species": "Canis lupus familiaris",
        "gender": "They are not 18 yes."
    },
    {
        "name": "Hamu",
        "species": "Felis catus",
        "gender": "They are not 18 yes."
    }
];

//Hivatkozás JSON-ra
pets[1].species;
*/

var counter = 1;
var req = new XMLHttpRequest();
var button = document.getElementById("fetchButton");
var container = document.getElementById("info");
button.addEventListener("click", function(){
        req.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + counter + '.json');
        req.onload = function(){
        var data = JSON.parse(req.responseText);
        readerHTML(data);
    }
    req.send();
    counter++;

    if(counter > 3){
        button.classList.add("hide");
    }
});

function readerHTML(data){
    var sometext = "";

    for(let i = 0; i < data.length; i++){
        sometext += "<p>" + data[i].name + "is a " + data[i].species + " that likes to eat" + "</p>";

        for (let index = 0; index < data[i].foods.likes.length; index++) {
            if(index == 0){
                sometext += data[i].foods.likes[index];
            }
            else{
                sometext += " and " + data[i].foods.likes[index];
            }    
        }

        sometext += " and nem szeret ";

        for (let index = 0; index < data[i].foods.dislikes.length; index++) {
            if(index == 0){
                sometext += data[i].foods.dislikes[index];
            }
            else{
                sometext += " and " + data[i].foods.dislikes[index];
            }    
        }
    }
    container.insertAdjacentHTML('beforeend', sometext);
}







/*
var button2 = document.getElementById("fetchButton2");
button2.addEventListener("click", function(){
        
        req.open('GET', 'https://github.com/PapD1020/Frond-Back-end-Kand-/blob/master/JSON%20and%20AJAX/data.json');
        req.onload = function(){
        var data = JSON.parse(req.responseText);
        console.log(data[0]);
    }
    req.send();
});
*/
