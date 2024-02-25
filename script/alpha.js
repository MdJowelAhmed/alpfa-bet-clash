// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGround=document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }
// function handleKeyboardButtonPress(){
//     console.log('Press keyboard any button')
// }
// document.addEventListener('keyup', handleKeyboardButtonPress)
const audio=new Audio();
let isGamePlayOn=false;
let artBoard=document.getElementById('art-board');
function handleKeyupPress(event){
    if(isGamePlayOn===false) return;
    const playerPress=event.key;
    console.log('Player press',playerPress)

    if(playerPress==='Escape'){
        gameIsOver();
    }

    // expected press 
    const alphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=alphabetElement.innerText.toLowerCase();
    console.log(currentAlphabet,playerPress);

    // check macth 
    if(currentAlphabet===playerPress){
       
        audio.src = "../audio/right.mp3";
            audio.play();
        console.log('You win and get point 1');

        const currentScoreDisplay=elementTextId('current-score')
        console.log(currentScoreDisplay);
        const updateScore=currentScoreDisplay + 1;
        setElementId('current-score',updateScore);

    
        if(updateScore===5 ){
            audio.src = "../audio/right2.mp3";
            audio.play();
        }


        console.log(currentAlphabet);
        removeBackgroundColor(currentAlphabet);
        gameContinue()
    }
    else{
        audio.src="../audio/wrong.mp3"
        audio.play();
       
        console.log('You wrong so you lost your point and try again mode successful by self')
        const currentLife=elementTextId('current-life');
        const updatedLife=currentLife - 1;
        setElementId('current-life',updatedLife);
        let updatedLifePercentage=(updatedLife/5)*100;
        artBoard.style.background=`linear-gradient(#FFFFFF ${updatedLifePercentage}%,red)`

        if(updatedLife ===0){
            gameIsOver()
        }


       
    }

}
document.addEventListener('keyup',handleKeyupPress)

function gameContinue(){
    const random=getAlphabetRandomNumber();
    console.log(random);
    const currentAlphabet=document.getElementById('current-alphabet');
    currentAlphabet.innerText=random;

    setBackgroundColor(random)
}

function play(){
  
    hideElementId('home-screen');
    showGetElement('play-ground');
    hideElementId('final-score');

    setElementId('current-life',5);
    setElementId('current-score',0)
    gameContinue();
    isGamePlayOn=true
}

function gameIsOver(){
    hideElementId('play-ground')
    showGetElement('final-score')

    const lastScore=elementTextId('current-score');
    console.log(lastScore)
    setElementId('last-score',lastScore);

    const currentAlphabet=getElementTextById('current-alphabet');
    removeBackgroundColor(currentAlphabet)
    isGamePlayOn=false;
    artBoard.style.background="linear-gradient(#FFFFFFA3 100%,red)"
}