// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGround=document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }
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
