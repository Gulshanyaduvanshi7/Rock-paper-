let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector('#msg');
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



const genCompChoice=()=>
{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
};

const drawGame=()=>
{
    console.log("game was draw!.");
    msg.innerText="game was draw.Paly again!";
    msg.style.backgroundColor="#81b31";
}

const showWinner=(userWin,userChoice,compChoice)=>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } 
    else
    {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>
{
    //console.log("user Choice =",userChoice);
    //generate comp choices
    const compChoice=genCompChoice();
   // console.log("comp Choice =",compChoice);

    if(userChoice===compChoice)
    {
        //draw game
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            //paper,scissors
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }
        else
        {
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
};

choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice)
    }); 
});
