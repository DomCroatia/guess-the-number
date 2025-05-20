const submitBtn = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const prevGuesses = document.querySelector(".prevGuesses");
const lastResult = document.querySelector(".lastResult");
const resetBtn = document.querySelector(".reset");
let randomNum = generateNewNum();

submitBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);
guessField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") checkGuess();
});
window.addEventListener("load", () => {
  guessField.focus();
});

function generateNewNum() {
  return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  const userGuess = Number(guessField.value);

  prevGuesses.textContent = `${
    prevGuesses.textContent || "Previous guesses:"
  } ${userGuess}`;

  if (userGuess === randomNum) {
    lastResult.textContent = `Congratulations you've guessed the number!`;
    guessField.disabled = true;
    submitBtn.disabled = true;
    resetBtn.classList.remove("reset");
  } else {
    const lowerOrHiger = userGuess < randomNum ? "low" : "high";

    lastResult.textContent = `Wrong, guess is too ${lowerOrHiger}.`;
  }

  guessField.value = null;
  guessField.focus();
}

function resetGame() {
  const fieldsToReset = document.querySelectorAll(".container p");
  for (let field of fieldsToReset) {
    field.textContent = null;
  }

  guessField.disabled = false;
  submitBtn.disabled = false;
  guessField.focus();
  resetBtn.classList.add("reset");
  randomNum = generateNewNum();
}
