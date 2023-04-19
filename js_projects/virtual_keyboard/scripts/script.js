"use strict"

let capsLookState = false;
let text = '';
let root = document.getElementById("root");
let letters = document.querySelectorAll("span");

function capsLook(delspan) {
    if (!capsLookState) {
        letters.forEach(element => {
            element.style = "text-transform: uppercase";
        });
        capsLookState = true;
        delspan.style.backgroundColor = "grey"
    }
    else{
        let letters = document.querySelectorAll("span");
        letters.forEach(element => {
            element.style = "text-transform: lowercase";
        });
        capsLookState = false;
    }
}

function typing(letter){
    if(capsLookState === true){
        text += letter.textContent.toUpperCase();
    }
    else{
        text += letter.textContent
    }
    root.innerHTML = text
}

function deleting(){
    text = text.slice(0, -1);
    root.innerHTML = text;
}