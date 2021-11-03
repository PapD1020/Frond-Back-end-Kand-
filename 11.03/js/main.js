var listItems = document.getElementById("list").getElementsByTagName("li");
var ourHeader = document.getElementById("header");
var ourButton = document.getElementById("buttonAddNewItem");
var ourList = document.getElementById("list");
var newItemCounter = listItems.length + 1;

//A hozzáadott elemre nem működik
/*for(var i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("click", activateItem);
}*/

ourList.addEventListener("click", activateItem);

function activateItem(e){
    if(e.target.nodeName == "LI"){
        ourHeader.innerText = e.target.innerText;

        for(var i = 0; i < e.target.parentNode.children.length; i++){
            e.target.parentNode.children[i].classList.remove("active");
        }
    
        e.target.classList.add("active");
    }
}

ourButton.addEventListener("click", createNewItem);

function createNewItem(){

    ourList.innerHTML += "<li>" + newItemCounter + " item" + "</li>";
    newItemCounter++;
}