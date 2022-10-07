const showVerb = document.getElementById('showVerb');
const showImage = document.getElementById('showImage');
const showAudio = document.getElementById('showAudio');

const first = document.getElementById('first-verb');
const second = document.getElementById('second-verb');
const third = document.getElementById('third-verb');
const fourth = document.getElementById('fourth-verb');

const next = document.getElementById('next');
const verbsCounter = document.getElementById('verbs-counter');
const allRightCounter = document.getElementById('all-right-answer');
const verbsContainer = document.getElementById('verbs-container');

// Acceder a un Array:
const numberOfVerbs = verbs.length;
console.log(numberOfVerbs);


let answerRoulette = [0, 1, 1, 1];
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

    while(numberOfAnswerButtons !=0){
        randomIndex = Math.floor(Math.random()*numberOfAnswerButtons);
        numberOfAnswerButtons--;
        //Intercambio de numbers:
        [array[numberOfAnswerButtons], array [randomIndex] = array[randomIndex], array[numberOfAnswerButtons]]
    }
}

function ponerVerbo() {
    // showVerb.innerHTML = ":3"
    return true;
}