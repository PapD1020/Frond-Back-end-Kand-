var listItems = document.getElementById("list").getElementsByTagName("li");
var ourHeader = document.getElementById("header");

for(var i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("click", activateItem);
}

function activateItem(){
    ourHeader.innerText = this.innerText;
}