let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");

const msg=document.querySelector('#msg');

const userP = document.querySelector('#user-score');
const compP= document.querySelector('#comp-score');





const generateCompChoice = ()=>{

    //rock , papers, sciscore

    let options=["rock" , "papers" , "scissors"]
    const index = Math.floor(Math.random()*3);

    return options[index]


}
 
const showWinner=(userWin,userChoice,comptChoice)=>{
     
    if(userWin){
        userScore++;
        userP.innerText=userScore;
        msg.innerText = `YOU WIN as  your ${userChoice} beats ${comptChoice} `;
        msg.style.backgroundColor ="green"
       

    }
    else{
        compScore++;
        compP.innerText=compScore;
        msg.innerText=`YOU LOSE as  ${comptChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red" ;
        compScore++;
    }

     
}

const playgame= (userChoice)=>{
   console.log(`User choice is ${userChoice}`);

   // GENERATING THE COMPUTER CHOICE

   const comptChoice= generateCompChoice();

   if(userChoice === comptChoice ){
      //draw system
    msg.innerText="It's a Draw ,  Play again "
    msg.style.backgroundColor="black";
    msg.style.color="white"
      
   }
   else{
    let userWin =true;
    if(userChoice==="rock"){
        userWin = comptChoice==="paper" ? false : true  ;     
    }
    if(userChoice==="paper"){
        userWin = comptChoice==="scissors"?false:true ;
    }
    if(userChoice ==="scissors"){
        userWin = comptChoice==="rock"?false:true;
    }

    showWinner(userWin , userChoice,comptChoice);
   }


   


}

choices.forEach((choice)=>{
    choice.addEventListener('click' ,()=>{
        const userChoice =choice.getAttribute("id")
          console.log("Choice Clicked" , userChoice);

          playgame(userChoice);

    })
})