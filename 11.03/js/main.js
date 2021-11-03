var listItems = document.getElementById("list").getElementsByTagName("li");
var ourHeader = document.getElementById("header");
var ourButton = document.getElementById("buttonAddNewItem");
var ourList = document.getElementById("list");
var newItemCounter = listItems.length + 1;

/*for(var i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("click", activateItem);
}*/

function activateItem(){
    ourHeader.innerText = this.innerText;

    for(var i = 0; i < listItems.length; i++){
        listItems[i].classList.remove("active");
    }

    this.classList.add("active");
}

ourButton.addEventListener("click", createNewItem);

function createNewItem(){

    ourList.innerHTML += "<li>" + newItemCounter + "</li>";
    newItemCounter++;
}