let randomNumber = 0 // Defines randomNumber as a variable.
let userGuess = 0 // Defines userGuess as a variable.

document.getElementById('guess').addEventListener('click', random) // Starts event listener for Guess! button and sets it to trigger 'random' function on click.
document.getElementById('repeat').hidden = true
document.getElementById('repeat').addEventListener('click', encore) // Starts event listener for Play again? button and sets it to trigger 'encore' function on click.

function random () {
  document.getElementById('repeat').hiddent = true
  userGuess = document.getElementById('input').value // Gets number inputted by user.
  userGuess = parseInt(userGuess) // Converts number inputted by user to integer.
  randomNumber = (Math.random() * 6) + 1 // Generates number between 1 and 6.
  randomNumber = parseInt(randomNumber) // Converts random number to integer.

  if (userGuess === randomNumber) { // Makes if statement that if the user's guess is equal to the random number, text saying they won appears.
    document.getElementById('result').innerHTML = 'Congrats! You win!' // Displays text.
    document.getElementById('repeat').hidden = false // Reveals play again button.
  }
  if (userGuess !== randomNumber) { // Makes if statement that if the user's guess is not equal to the random, text saying they lost appears.
    document.getElementById('result').innerHTML = 'You lose.' // Displays text.
    document.getElementById('repeat').hidden = false // Reveals play again button.
  }
}

function encore () {
  window.location.reload() // Reloads page to restart everything for the user to play again.
}
