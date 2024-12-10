

let start = document.querySelector(".newGame");
start.addEventListener("click", () => {
    
    let container = document.querySelector(".board-container");
    container.innerHTML="";

    let board = {
        top: [],
        mid: [],
        bot: [],
    };

    let place = document.querySelector(".board-container");
   

    let arr = [1,2,3,4,5,6,7,8,9];

    let turn = "X";

createElements(board, arr, turn, place); 
})

function createElements(board, arr, turn, place){


    for(let i=0; i<9; i++){
        let box = document.createElement("button");
        box.addEventListener("click", () => {

            if(turn === "X" && !(arr[i]==="X" || arr[i]==="O") ){
                arr[i]="X";
                box.textContent="X";
                turn = "O";
            }
            else if (turn === "O" && !(arr[i]==="X" || arr[i]==="O")){
                arr[i]="O";
                box.textContent="O";
                turn = "X";
            }
            board.top = [arr[0], arr[1], arr[2]]
            board.mid = [arr[3], arr[4], arr[5]]
            board.bot = [arr[6], arr[7], arr[8]]

            control(board, turn);
        });

        place.append(box);
        
    }
}


function control(board, turn){

    if(
    board.top[0]===board.top[1]&&board.top[1]===board.top[2] ||
    board.mid[0]===board.mid[1]&&board.mid[1]===board.mid[2] ||
    board.bot[0]===board.bot[1]&&board.bot[1]===board.bot[2] ||

    board.top[0]===board.mid[0]&&board.mid[0]===board.bot[0] ||
    board.top[1]===board.mid[1]&&board.mid[1]===board.bot[1] ||
    board.top[2]===board.mid[2]&&board.mid[2]===board.bot[2] ||

    board.top[0]===board.mid[1]&&board.mid[1]===board.bot[2] ||
    board.top[2]===board.mid[1]&&board.mid[1]===board.bot[0]
    ){
        let dialog = document.querySelector("dialog");
        let result = document.querySelector(".result");
        if(turn === "O"){
            result.textContent="X won."
        }
        else {
            result.textContent="O won."
        }

        dialog.showModal();
    }
}
