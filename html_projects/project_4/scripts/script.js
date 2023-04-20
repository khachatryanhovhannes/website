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