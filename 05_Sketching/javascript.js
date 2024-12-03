
const  CONTAINER_WIDTH = 580;

const container = document.querySelector("section");
const button = document.querySelector("button");
const input = document.querySelector("input"); 

button.addEventListener("click", ()=> {

let size=input.value;
const boxwidth = Math.floor(CONTAINER_WIDTH/size);
container.style.width = boxwidth*size + "px";
container.style.height = boxwidth*size + "px";

for(let i=0; i<size*size; i++){
    let box = document.createElement("div");
    box.style.width = boxwidth + "px";
    box.style.height = boxwidth + "px";

    box.addEventListener("mousedown", () => {
        isMouseDown = true;
        coloring();
    });

    box.addEventListener("mousemove", coloring);

    box.addEventListener("mouseup", () => {
        isMouseDown = false;
    });
    
    box.style.userSelect = "none";
    container.appendChild(box);
    }
})



let counter=0;
function coloring(event){
if(isMouseDown){
    event.target.style.backgroundColor = "rgba(255, 255, 255, 0)";
    event.stopPropagation();
    }
}



