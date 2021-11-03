// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var name;
function nameInput() {
    name = prompt("Your explorer name: ");
    let text;

    if (name == null || name == "") {
        text = "User cancelled the prompt";
        document.getElementById("inputName").innerHTML = "You";
    }
    else {
        document.getElementById("inputName").innerHTML = name;
    }
}

document.getElementById("userName").innerHTML = name;
