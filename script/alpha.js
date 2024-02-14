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

function handleKeyupPress(event){
    const playerPress=event.key;
    console.log('Player press',playerPress)

    // expected press 
    const alphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=alphabetElement.innerText.toLowerCase();
    console.log(currentAlphabet,playerPress);

    // check macth 
    if(currentAlphabet===playerPress){
        console.log('You win and get point 1');
        
        // update score 
        const currentScoreElement=document.getElementById('current-score');
        const currentScoreInner=currentScoreElement.innerText;
        const currentScore=parseInt(currentScoreInner);
        console.log(currentScore);

        const newScore=currentScore + 1;

        currentScoreElement.innerText=newScore
        console.log(currentAlphabet);
        removeBackgroundColor(currentAlphabet);
        gameContinue()
    }
    else{
        console.log('You wrong so you lost your point and try again mode successful by self')
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
    showGetElement('play-ground')
    gameContinue();
}
