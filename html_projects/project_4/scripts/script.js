"use strict"
function gallerySlider(control) {
    if (control === "right") {
        let gallery_1 = document.getElementById("gallery_1");
        gallery_1.style = "animation-name:gallerySlider; animation-duration:3s; animation-fill-mode:forwards";
    }
    else {
        let gallery_1 = document.getElementById("gallery_1");
        gallery_1.style = "animation-name:gallerySliderNone; animation-duration:3s; animation-fill-mode:forwards";
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