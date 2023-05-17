"use strict"

const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

let monkey = document.createElement("img")
monkey.src = "./image/monkey.png"

let backImage = document.createElement("img")
backImage.src = "./image/back.jpg"

let banana = document.createElement("img")
banana.src = "./image/banana.png"

let heart = document.createElement("img")
heart.src = "./image/heart.png"

let data = {
    monkey: {
        xDelta: 0,
        x: Math.floor(canvas.width / 2),
        y: canvas.height - 150,
        width: 100,
        height: 100,
        lifes: 3,
        score: 0,
        speed: 5
    },
    banan: {
        width: 30,
        height: 30,
    },
    heart: {
        x: 10,
        y: 10,
        width: 50,
        height: 50,
    }
}

let bananas = []
console.log(window.innerWidth)
if (window.innerWidth < 800) {
    data.monkey.width = 50;
    data.monkey.height = 50;
    data.monkey.y = canvas.height - 60
    data.monkey.speed = 7
    data.banan.width = 20;
    data.banan.height = 20;
    data.heart.width = 20;
    data.heart.height = 20;
}


function update() {
    bananas = bananas.filter(banan => {
        if (!(banan.y >= data.monkey.y && banan.y <= data.monkey.y + data.monkey.height && banan.x >= data.monkey.x && banan.x <= data.monkey.x + data.monkey.width)) {
            return banan
        }
        else {
            data.monkey.score++;
            if (!(data.monkey.score % 20)) {
                data.monkey.lifes++
            }

            if (!(data.monkey.score % 5)) {
                data.monkey.width += 10
            }
        }
    })
    if (bananas.length < 2) {
        bananas.push({
            xDelta: 0,
            x: Math.floor(Math.random() * (canvas.width - 30)),
            y: 5,
            width: data.banan.width,
            height: data.banan.height,
            speed: Math.floor(Math.random() * 2 + 1)
        })
    }
    data.monkey.x += data.monkey.xDelta;
    bananas.forEach(banan => {
        banan.y += banan.speed
    })
    bananas = bananas.filter(banan => {
        if (banan.y < canvas.height) {
            return banan.y < canvas.height

        }
        else {
            data.monkey.lifes--
        }
    })
}





function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(backImage, 0, 0, canvas.width, canvas.height);
    context.drawImage(monkey, data.monkey.x, data.monkey.y, data.monkey.width, data.monkey.height)
    bananas.forEach(banan => {
        context.drawImage(banana, banan.x, banan.y, banan.width, banan.height)
    })
    for (let i = 0; i < data.monkey.lifes; i++) {
        context.drawImage(heart, i * data.heart.width + data.heart.x, data.heart.y, data.heart.width, data.heart.height)
    }
    context.font = "50px serif"
    context.fillText(data.monkey.score, canvas.width - 80, 50)
}


function loop() {
    let reqId = requestAnimationFrame(loop);
    if (!data.monkey.lifes) {
        cancelAnimationFrame(reqId)
    }
    update()
    draw()

}

loop()



document.addEventListener("keydown", (evt) => {
    if (evt.code === "ArrowRight") {
        data.monkey.xDelta = data.monkey.speed
    } else if (evt.code === "ArrowLeft") {
        data.monkey.xDelta = -data.monkey.speed
    }
})

document.addEventListener("keyup", () => {
    data.monkey.xDelta = 0
})

function goRight(){
    data.monkey.xDelta = data.monkey.speed;
}

function goLeft(){
    data.monkey.xDelta = -data.monkey.speed
}

function stopMove(){
    data.monkey.xDelta = 0
}