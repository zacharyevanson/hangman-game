import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function Help({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>How to Play Hangman</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Guess the hidden word by clicking the letters below.</p>
        <p>Each wrong guess adds to the hangman drawing. You lose after 10 wrong guesses.</p>
        <p>Try to guess the word before it's too late!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Help;
