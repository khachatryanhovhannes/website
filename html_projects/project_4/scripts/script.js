"use strict"
function gallerySlider(control) {
    if (control === "right") {
        let gallery_1 = document.getElementById("galleryAnimation");
        gallery_1.style = "justify-content: end; padding-right:80px";
    }
    else {
        let gallery_1 = document.getElementById("galleryAnimation");
        gallery_1.style = "justify-content: start";
    }
}

function feedBack(control){
    if(control === "right"){
    document.getElementById("feedbacks").style = "justify-content: right"
    }
    else{
    document.getElementById("feedbacks").style = "justify-content: left"
    }
}

function seePopUp(bool){
    if(bool === "show"){
        document.getElementById("popUpForm").style.display = "block"
    }
    else if(bool){
        document.getElementById("popUpForm").style.display = "none"
        document.getElementById("crate").style.display = "block"
    }
    else{
        document.getElementById("popUpForm").style.display = "none"
        document.getElementById("crate").style.display = "none"
    }
}