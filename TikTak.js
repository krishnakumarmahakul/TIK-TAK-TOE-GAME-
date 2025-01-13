let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let winnerMsg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");


let turnO=true;
let count=0;

let winner=[ [0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8]];


//  reset game
const resetGame= ()=>{
    turnO=true;
    count=0;
    enableBox();
    msgContainer.classList.add("hide");
    
};
// new game
const newGame= () =>{
    
    turnO=true;
    count=0;
    msgContainer.classList.add("hide");
    enableBox();
}


const dissableBox= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBox= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};




boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled =true;
        count++;

        cheakWinner();
    })

})

const cheakWinner = () =>{
    for(let parten of winner){
        
        let position1=boxes[parten[0]].innerText;
        let position2=boxes[parten[1]].innerText;
        let position3=boxes[parten[2]].innerText;


         if(position1 != "" && position2 != "" && position3 != ""){
            if( position1=== position2 && position2== position3){
                showWinner(position1);        
            }
         }
    }

    
}

//  show winner
let showWinner= (winner)=>{
    winnerMsg.innerText=`Congratulation the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    dissableBox();

};


// new game

//  buten fnctionality
newGameBtn.addEventListener("click",resetGame);


//  reset butten
resetBtn.addEventListener("click",resetGame);