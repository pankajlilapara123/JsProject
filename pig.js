'use strict';

const score0El = document.querySelector('#score--0');
const Score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

score0El.textContent = 0;
Score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

btnRoll.addEventListener('click', function () {

    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice.${dice}.png`;
    console.log(dice);

    if (dice !== 1) {
        currentScore = currentScore + dice;
        //current0El.textContent = currentScore;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;


    }
    else {
        //switching player

        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;




    }
})

btnHold.addEventListener('click', function () {
    //1.add current score to active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    //check if player score is >=25
    if (scores[activePlayer] >= 25) {

        playing = false;

        document.querySelector(`.player--${activePlayer}`)
    }

});

btnNew.addEventListener('click', function () {
    score0El.textContent = 0;
    Score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;



});