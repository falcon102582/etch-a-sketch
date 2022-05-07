// Choose size
let size = document.getElementById("sizeInput");
let OnOff = document.getElementById("OnOff");
let color = "black"
let click = true;

makeboard(16);


size.addEventListener("input", function() {
    document.getElementById("sizeOutput").innerHTML = `${size.value} * ${size.value}`;
    makeboard(size.value);
}, true); 

function makeboard(num){
    let board = document.getElementById("board");
    let pixels = board.querySelectorAll("div");
    pixels.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    let press = false;

    for(let i=0; i< num * num; i++){
    let pixel= document.createElement("div");
    pixel.className="pixels"
    pixel.addEventListener("mouseover", pixelColor);
    pixel.style= "background: white;";
    board.appendChild(pixel);
    }
}

function pixelColor(){
    if(click){
        this.style.backgroundColor = color;
        if(color === 'random'){
            this.style.backgroundColor = getRandomColor();
        }else{
            this.style.backgroundColor = color;
        } 
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
}

function changeColor(choice){
    return color = choice;
}

function reset(){
    for(pixel of document.getElementsByClassName("pixels")){
        pixel.style= "background: white;";
    }
    return;
}


document.querySelector("body").addEventListener("mousedown", (e) => {
    if(e.target.tagName != 'BUTTON'){
        click = !click;
        if(click === true){
            OnOff.innerText = "Drawing Mode: On";
        }else{
            OnOff.innerText = "Drawing Mode:Off";
        }
    }
});