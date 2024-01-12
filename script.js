let color = document.getElementById("circle");
let colorBtn = document.getElementById("colorChange");
let shapeBtn = document.getElementById("shapeChange");
let shapeContainer = document.querySelector(".inner");

function changeColor(){
    let pallette = "0123456789ABCDEF"

    let str="#"

    for(let i=0;i<6;i++){
        let randomIndex = Math.floor(Math.random() * pallette.length);
        str += pallette[randomIndex];
    }

    color.style.backgroundColor = str;
    var audio = new Audio("sounds/1.mp3");
    audio.play();
}

function changeShape(){
    let shapes = ["square","rectangle","tri","circle2","star"]
    let randomShape = Math.floor(Math.random() * shapes.length);
    console.log(shapes[randomShape])
    shapeContainer.id = shapes[randomShape];
    var audio = new Audio("sounds/2.mp3");
    audio.play();
}

colorBtn.addEventListener("click",changeColor)
shapeBtn.addEventListener("click",changeShape)