let userscore=0;
let computerscore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const computerscorepara=document.querySelector("#computer-score");

const gencomputerchoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()* 3);
    return options[randomIdx];
};

const drawgame=()=>{    
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31";
};

const showwinner=(userwin,  userchoice, computerchoice)=>{
    if(userwin){       
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerscore++;
        computerscorepara.innerText=computerscore;
        msg.innerText=`you lost. ${computerchoice} beats  your ${userchoice}`;
        msg.style.backgroundColor="red"; 
    }
};

const playgame=(userchoice)=>{
    // Generate computer choice
    const computerchoice=gencomputerchoice();

   if(userchoice === computerchoice){
        //Draw Game
        drawgame();
    }else{
        let userwin=true;
        if( userchoice==="rock"){
            //scissors,paper
            userwin = computerchoice==="paper" ?false:true;
         }else if(userchoice==="paper"){
            //rock,scissors
             userwin=computerchoice==="scissors"?false:true;
        }else{
            //rock,paper
             userwin=computerchoice==="rock"?false:true;
        }
        showwinner(userwin, userchoice, computerchoice)
    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id")
        // console.log("choice was clicked", userchoice);
        playgame(userchoice);
    })
})
    