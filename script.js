const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".word-display");
const guessedText = document.querySelector(".incorrect-guess b");
let HangImg = document.querySelector(".hangman-box img");
let gameModel = document.querySelector(".game-model");
let loseGif = document.querySelector(".content img");
let verdict = document.querySelector(".content h4");
let remark = document.querySelector(".content p");
let finalWord = document.querySelector(".content b");
let playAgain = document.querySelector(".content button");
let currentWord, correctLetter = [];
let wrongGuessed = 0;
const maxGuess = 6;

const resetGame = () => {
    wrongGuessed = 0;
    correctLetter = [];
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(bttn => {
        bttn.disabled = false;
        bttn.classList.remove("disabled");
    });
    HangImg.src = `hangman-${wrongGuessed}.svg`;
    guessedText.innerText = `${wrongGuessed}/${maxGuess}`;
    guessedText.classList.remove("danger");
    gameModel.classList.remove("show");
}

const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word, hint);
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

const gameOver = (isVictory) => {
    setTimeout(() => {
        if (isVictory === true) {
            loseGif.src = `victory.gif`;
            verdict.innerText = "Victory!!";
            remark.innerText = `Yes,the correct word was ${currentWord}`;
        } else {
            verdict.innerText = "lose";
            loseGif.src=`lost.gif`;
            remark.innerText = `The correct word was ${currentWord}`;
        }
        finalWord.innerHTML = currentWord;
        gameModel.classList.add("show");
    }, 300);
}

const initGame = (bttn, clickedLetter) => {
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetter.push(letter);
                const letterElement = wordDisplay.querySelectorAll("li")[index];
                letterElement.innerText = letter;
                letterElement.classList.add("guessed");
                letterElement.style.animation = "popIn 0.3s ease";
            }
        });
    }
    else {
        wrongGuessed++;
        HangImg.src = `hangman-${wrongGuessed}.svg`;
        HangImg.style.animation = "shake 0.5s ease";
        setTimeout(() => HangImg.style.animation = "", 500);
    }
    bttn.classList.add("disabled");
    bttn.disabled = true;
    guessedText.innerText = `${wrongGuessed}/${maxGuess}`;
    
    if (wrongGuessed >= maxGuess - 2) {
        guessedText.classList.add("danger");
    }

    if (wrongGuessed === maxGuess) return gameOver(false);
    if (currentWord.length === correctLetter.length) return gameOver(true);
}

for (let i = 97; i <= 122; i++) {
    let bttn = document.createElement("button");
    bttn.innerText = String.fromCharCode(i);
    bttn.classList.add("keyboard-button");
    keyboardDiv.appendChild(bttn);
    bttn.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgain.addEventListener("click", getRandomWord);