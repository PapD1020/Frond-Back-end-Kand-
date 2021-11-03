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

var req = new XMLHttpRequest();
req.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
req.onload = function(){
    console.log(req);
}