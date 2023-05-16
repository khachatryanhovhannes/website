"use strict"

const canvas = document.querySelector("canvas")

const context = canvas.getContext("2d")

let monkey = document.createElement("img")
monkey.src = "./image/monkey.png"

let backImage = document.createElement("img")
backImage.src = "./image/back.jpg"

let banana = document.createElement("img")
banana.src = "./image/banana.png"

let monkeyData = {
    xDelta: 0,
    x: Math.floor(canvas.width / 2),
    y: canvas.height - 150,
    width: 100,
    height: 100,
    lifes: 3
};

let bananas = []


function update() {
    bananas = bananas.filter(banan => {
        if(!(banan.y >= monkeyData.y && banan.y <= monkeyData.y + monkeyData.height && banan.x >= monkeyData.x && banan.x <= monkeyData.x + monkeyData.width)){
            return banan
        }
    })


    if (bananas.length < 2) {
        bananas.push({
            xDelta: 0,
            x: Math.floor(Math.random() * canvas.width-30),
            y: 10,
            width: 30,
            height: 30,
            speed: Math.floor(Math.random() * 2 + 1)
        })
    }
    monkeyData.x += monkeyData.xDelta;
    bananas.forEach(banan => {
        banan.y += banan.speed
    })
    bananas = bananas.filter(banan =>{ 
        return banan.y < canvas.height
        })
    console.log(bananas)
}





function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(backImage, 0, 0, canvas.width, canvas.height);
    context.drawImage(monkey, monkeyData.x, monkeyData.y, monkeyData.width, monkeyData.height)
    bananas.forEach(banan => {
        context.drawImage(banana, banan.x, banan.y, banan.width, banan.height)
    })
}


function loop() {
    let reqId = requestAnimationFrame(loop);
    if(!monkeyData.lifes){
        cancelAnimationFrame(reqId)
    }
    update()
    draw()

}

loop()



document.addEventListener("keydown", (evt) => {
    if (evt.code === "ArrowRight") {
        monkeyData.xDelta = 5
    } else if (evt.code === "ArrowLeft") {
        monkeyData.xDelta = -5
    }
})

document.addEventListener("keyup", () => {
    monkeyData.xDelta = 0
})