"use strict"
function gallerySlider(control) {
    if (control === "right") {
        let gallery_1 = document.getElementById("gallery_1");
        gallery_1.style = "width: 320px; overflow: hidden";
    }
    else {
        let gallery_1 = document.getElementById("gallery_1");
        gallery_1.style = "width: auto";
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