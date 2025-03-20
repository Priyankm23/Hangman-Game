# Hangman-Game
# Introduction

Hangman is a classic word-guessing game where players attempt to guess a hidden word by suggesting letters within a limited number of attempts. This project is a web-based implementation of the Hangman game using HTML, CSS, and JavaScript.

## Features

- Randomly selects a word from a predefined list.
- Displays the word with underscores representing unguessed letters.
- Allows players to input letters via on-screen buttons or keyboard.
- Visual representation of the hangman that updates with incorrect guesses.
- Tracks and displays incorrect guesses.
- Alerts the player upon winning or losing the game.
- Option to restart the game.

## Technologies Used

- **HTML**: Structure of the game.
- **CSS**: Styling and layout.
- **JavaScript**: Game logic and interactivity.

## How to Play

1. A random word is selected, and underscores are displayed in place of letters.
2. Guess a letter by clicking on the on-screen buttons or typing on your keyboard.
3. If the guessed letter is in the word, it will appear in the correct position(s).
4. If the guessed letter is incorrect, the hangman graphic updates, and the letter is added to the list of wrong guesses.
5. Continue guessing letters until you either:
   - Guess the entire word correctly (win), or
   - Reach the maximum number of incorrect guesses (lose).
6. After the game ends, you can start a new game by clicking the "Play Again" button
