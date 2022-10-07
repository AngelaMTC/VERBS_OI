const showVerb = document.getElementById('showVerb');
const showImage = document.getElementById('showImage');
const showAudio = document.getElementById('showAudio');

const first = document.getElementById('first-verb');
const second = document.getElementById('second-verb');
const third = document.getElementById('third-verb');
const fourth = document.getElementById('fourth-verb');

const next = document.getElementById('next');
const verbsCounter = document.getElementById('verbs-counter');
const allRightCounter = document.getElementById('all-right-answers');
const verbsContainer = document.getElementById('verbs-container');

// Acceder a un Array:
const numberOfVerbs = verbs.length;
console.log(numberOfVerbs);


let answerRoullette = [0, 1, 1, 1];
let everyNumberOfVerbs = [];
let rightAnswer;
let allRightAnswerCounter = 0;

next.addEventListener('click', function () {
    ponerVerbo();
    next.style.display = 'none';
});

makeRandomList();

let lasPosition = everyNumberOfVerbs.length - 1;

//Llamar la función arriba o abajo:
function makeRandomList() {
    for (var i = o; i < numberOfVerbs; i++) {
        everyNumberOfVerbs.push(i);
    }
    // everyNumberOfVerbs = everyNumberOfVerbs.sort(); //Alphabetic order
    everyNumberOfVerbs = everyNumberOfVerbs.sort(() => Math.random() - 0.5);
}

function btnEffect(itsRight, button) {
    if (itsRight == true) {
        //Adding a class:
        button.classList.add('rightAnswer');
        setTimeout(function () {
            button.classList.remove('rigthAnswer');
        }, 1000);
        rightAnswerCounter = rightAnswerCounter + 1;
    } else {
        button.classList.add('wrongAnswer');
        setTimeout(function () {
            button.classList.remove('wrongAnswer');
        }, 1000);
    }
}

first.addEventListener('click', function () {
    btnEffect(isitRight_(first.innerHTML), this)
});
second.addEventListener('click', function () {
    btnEffect(isitRight_(second.innerHTML), this)
});
third.addEventListener('click', function () {
    btnEffect(isitRight_(third.innerHTML), this)
});
fourth.addEventListener('click', function () {
    btnEffect(isitRight_(fourth.innerHTML), this)
});

//Move the answer randomly;
function shuffleAnswer(array){
    let numberOfAnswerButtons = array.length;
    let randomIndex;

    while(numberOfAnswerButtons != 0){
        randomIndex = Math.floor(Math.random()*numberOfAnswerButtons);
        numberOfAnswerButtons--;
        //Intercambio de numbers:
        [array[numberOfAnswerButtons], array [randomIndex] = array[randomIndex], array[numberOfAnswerButtons]]
    }
}
function isitRight_(answer){
    return answer = rightAnswer?true:false;
}

function randomVerbo(notThisOne){
    theOne = Math.floor(Math.random()*verbsContainer.length);
    //Correcta más otras no difrentes, selecciona cualquiera de los verbos en español, regresa al azar:
    return theOne == notThisOne?randomVerbo(notThisOne):theOne;
}

function ponerVerbo(){
    answerRoullette = shuffleAnswer(answerRoullette);
    let randomPosition = everyNumberOfVerbs[lasPosition];
    let imgText = "<img src='img/'" + verbs [randomPosition] + ".jpg";
    imgText += "height='140px' width='100px'>"

    first.classList.add("btn", "btn-otline-primary", "btn-md");
    second.classList.add("btn", "btn-otline-primary", "btn-md");
    third.classList.add("btn", "btn-otline-primary", "btn-md");
    fourth.classList.add("btn", "btn-otline-primary", "btn-md");

    if(lasPosition >= 0){
        var just_position = lasPosition-1;
        verbsCounter.innerHTML = '' + just_position + '/' + numberOfVerbs;
        allRightAnswerCounter.innerHTML = 'Right Answers:' + rightAnswer;
        
        showVerb.innerHTML = verbs[randomPosition];
        showImage.innerHTML = imgText;
        showAudio.src = "audio/" + verbs[randomPosition] + ".mp3";
        showAudio.play();
        
        first.innerHTML = !answerRoullette[0]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)]
        second.innerHTML = !answerRoullette[1]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)]
        third.innerHTML = !answerRoullette[2]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)]
        fourth.innerHTML = !answerRoullette[3]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)]
        
        rightAnswer = verbos[randomPosition];
        //Atrás para adelante:
        lasPosition = lasPosition-1;
    }else{
        verbsCounter.innerHTML = "0 /" + numberOfVerbs;
        allRightCounter.innerHTML = "Right answers:" + rightAnswerCounter;
        showVerb.innerHTML = "Thank you!";
        verbsContainer.innerHTML = "";
    }
}

function ponerVerbo() {
    // showVerb.innerHTML = ":3"
    return true;
}