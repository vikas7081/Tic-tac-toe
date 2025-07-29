console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false
let rem = document.getElementById("game");
let img = document.getElementById("image");




// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X";
}

// Function to check for a win

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2,],
        [3, 4, 5,],
        [6, 7, 8,],
        [0, 3, 6,],
        [1, 4, 7,],
        [2, 5, 8,],
        [0, 4, 8,],
        [2, 4, 6,],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            rem.classList.add('display');
            img.classList.remove("display");
            isgameover = true 
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(boxx =>{
    let boxtext = boxx.querySelector('.boxtext');
    boxx.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for" + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    rem.classList.remove("display");
    img.classList.add('display');
    Array.from(boxtexts).forEach(text => {
        text.innerText = "";
    });
    turn = "X"
    isgameover = false 
    document.getElementsByClassName("info")[0].innerText  =  "Turn for" + turn;

    
  

})

