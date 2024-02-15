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

    if(playerPress==='Escape'){
        gameIsOver();
    }

    // expected press 
    const alphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=alphabetElement.innerText.toLowerCase();
    console.log(currentAlphabet,playerPress);

    // check macth 
    if(currentAlphabet===playerPress){
        console.log('You win and get point 1');

        const currentScoreDisplay=elementTextId('current-score')
        console.log(currentScoreDisplay);
        const updateScore=currentScoreDisplay + 1;
        setElementId('current-score',updateScore)
        
        // update score 
        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreInner=currentScoreElement.innerText;
        // const currentScore=parseInt(currentScoreInner);
        // console.log(currentScore);

        // const newScore=currentScore + 1;

        // currentScoreElement.innerText=newScore

        console.log(currentAlphabet);
        removeBackgroundColor(currentAlphabet);
        gameContinue()
    }
    else{
        console.log('You wrong so you lost your point and try again mode successful by self')
        const currentLife=elementTextId('current-life');
        const updatedLife=currentLife - 1;
        setElementId('current-life',updatedLife)

        if(updatedLife ===0){
            gameIsOver()
        }


        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeInner=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeInner);
        // console.log(currentLife)
        // const newLife=currentLife - 1;
        // currentLifeElement.innerText = newLife;
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
}

function gameIsOver(){
    hideElementId('play-ground')
    showGetElement('final-score')

    const lastScore=elementTextId('current-score');
    console.log(lastScore)
    setElementId('last-score',lastScore);

    const currentAlphabet=getElementTextById('current-alphabet');
    removeBackgroundColor(currentAlphabet)
}