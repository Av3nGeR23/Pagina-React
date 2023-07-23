import React, { useState, useEffect } from 'react';

const Game = () => {
  const [remainingGuesses, setRemainingGuesses] = useState(4);
  const word = "javascript"; // Palabra a adivinar, se puede modificar
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [hiddenWord, setHiddenWord] = useState("_".repeat(word.length));
  const [message, setMessage] = useState(null);

  const stickPersonStages0 = [
    // colgado inicial, cada vez que se reinicie el juego iniciará con este colgado
    "    +---+\n" +
    "    |   |\n" +
    "    O   |\n" +
    "   /|\\  |\n" +
    "   / \\  |\n" +
    "        |\n" +
    "  =========\n"
  ];
  const stickPersonStages = [
    // sin piernas
    "    +---+\n" +
    "    |   |\n" +
    "    O   |\n" +
    "   /|\\  |\n" +
    "        |\n" +
    "        |\n" +
    "  =========\n"
  ];
  const stickPersonStages2 = [
    // sin piernas y brazos
    "    +---+\n" +
    "    |   |\n" +
    "    O   |\n" +
    "    |   |\n" +
    "        |\n" +
    "        |\n" +
    "  =========\n"
  ];
  const stickPersonStages3 = [
    // sin cuerpo
    `    +---+
    |   |
    O   |
        |
        |
        |
    =========`
  ];

  useEffect(() => {
    updateWordContainer();
  }, []);

  function updateWordContainer() {
    setHiddenWord(hiddenWord.split("").map((char, index) => (guessedLetters.includes(word[index]) ? word[index] : char)).join(""));
  }

  function guessLetter() {
    const letterInput = document.getElementById("letter-input");
    const letter = letterInput.value.toLowerCase();

    if (letter.length !== 1) {
      alert("Ingresa una única letra.");
      return;
    }

    if (guessedLetters.includes(letter)) {
      alert("Ya has adivinado esa letra.");
      return;
    }

    setGuessedLetters([...guessedLetters, letter]);

    if (word.includes(letter)) {
      if (!hiddenWord.includes("_")) {
        showMessage("¡Felicidades! Has adivinado la palabra correctamente: " + word, "success");
        resetGame();
        return;
      }
    } else {
      setRemainingGuesses((prevGuesses) => prevGuesses - 1);

      if (remainingGuesses >= 0) {
        if (remainingGuesses === 3) {
          document.getElementById("stick-person").innerHTML = stickPersonStages[0];
        } else if (remainingGuesses === 2) {
          document.getElementById("stick-person").innerHTML = stickPersonStages2[0];
        } else if (remainingGuesses === 1) {
          document.getElementById("stick-person").innerHTML = stickPersonStages3[0];
        }
      }

      if (remainingGuesses === 0) {
        showMessage("¡Oh no! Has perdido. La palabra correcta era: " + word, "error");
        resetGame();
      }
    }

    updateWordContainer();
    letterInput.value = "";
  }

  function showMessage(message, type) {
    setMessage({ text: message, type: type });
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  }

  function resetGame() {
    setGuessedLetters([]);
    setRemainingGuesses(4);
    setHiddenWord("_".repeat(word.length));
    document.getElementById("stick-person").innerHTML = stickPersonStages0;
  }

  return (
    <div>
      <section id="game">
        <pre id="stick-person">
          {remainingGuesses === 4 ? stickPersonStages0[0] : remainingGuesses === 3 ? stickPersonStages[0] : remainingGuesses === 2 ? stickPersonStages2[0] : stickPersonStages3[0]}
        </pre>
        <div id="word-container">
          <p>Ingresa una letra: <input type="text" id="letter-input" /></p>
          <button className="comic-button" onClick={guessLetter}>
            Adivinar
          </button>
          <p>Intentos restantes: <span id="remaining-attempts">{remainingGuesses}</span></p>
          {message && <div className={`alert ${message.type}`}>{message.text}</div>}
        </div>
      </section>
    </div>
  );
};

export default Game;
