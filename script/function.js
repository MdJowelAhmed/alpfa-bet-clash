function hideElementId(elementId){
    const hide=document.getElementById(elementId);
    hide.classList.add('hidden')
}

function showGetElement(elementId){
    const show=document.getElementById(elementId);
    show.classList.remove('hidden')
}

function setBackgroundColor(elementId){
    const bgColor=document.getElementById(elementId);
    bgColor.classList.add('bg-orange-400')
}

function removeBackgroundColor(elementId){
    const bgColor=document.getElementById(elementId);
    bgColor.classList.remove('bg-orange-400')
}

function getAlphabetRandomNumber(){
    const alphabetRandom="abcdefghijklmnopqrstuvwxyz"
    const alpha=alphabetRandom.split('');
    const alphaRandom=Math.random()*25;
    const index=Math.round(alphaRandom);
    const alphabet=alpha[index]
    return alphabet
}