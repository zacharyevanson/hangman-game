import React from 'react';

function WordDisplay({ word, guessedLetters }) {
  return (
    <h2 className="word-display">
      {word.split('').map((letter, index) => (
        <span className="letter" key={index}>
          {guessedLetters.includes(letter.toUpperCase()) ? letter : '_'}
        </span>
      ))}
    </h2>
  );
}

export default WordDisplay;
