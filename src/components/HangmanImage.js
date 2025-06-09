import React from 'react';

function HangmanImage({ stage }) {
  return (
    <div className="hangman-image">
      <img 
        src={`${process.env.PUBLIC_URL}/hangman-images/${stage}.png`} 
        alt={`Hangman stage ${stage}`} 
        style={{ width: "200px", height: "auto" }} 
      />
    </div>
  );
}

export default HangmanImage;