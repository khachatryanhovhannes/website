"use strict"
let number_1 = "";
let number_2 = "";
let cond = false;
let input = document.getElementById("input")
function typeNumber(num){
    if(!cond){
        number_1 += num;
        input.innerHTML = number_1;
    }
    else{
        number_2 += num;
        input.innerHTML = number_1 + cond + number_2;
    }
}

function enterOperation(operation){
    cond = operation;
    input.innerHTML = number_1 + cond;
}

function clearIn(){
    input.innerHTML = "";
    number_1 = "";
    number_2 = "";
    cond = false;
} 

function result(){
    if(cond === "+"){
        input.innerHTML = +number_1 + (+number_2);
    }
    else if(cond === "-"){
        input.innerHTML = +number_1 - (+number_2);
    }
    else if(cond === "*"){
        input.innerHTML = +number_1 * (+number_2);
    }
    else if(cond === "/"){
        input.innerHTML = +number_1 / (+number_2);
    }
    number_1 = ""
    number_2 = ""
    cond = false
}