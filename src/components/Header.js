import React from 'react';
import { Button } from 'react-bootstrap';

function Header({ onHelpClick }) {
  return (
    <header className="mb-4">
      <h1>Hangman Game</h1>
      <Button variant="info" size='sm' className='float-end' onClick={onHelpClick}>Help</Button>
    </header>
  );
}

export default Header;