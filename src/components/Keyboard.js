import React from 'react';
import { Button } from 'react-bootstrap';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function Keyboard({ onGuess, guessedLetters, isDisabled }) {
  return (
    <div className="keyboard">
      {ALPHABET.split('').map((letter) => (
        <Button
          key={letter}
          variant="secondary"
          onClick={() => onGuess(letter)}
          disabled={guessedLetters.includes(letter) || isDisabled}
          className="m-1"
        >
          {letter}
        </Button>
      ))}
    </div>
  );
}

export default Keyboard;
