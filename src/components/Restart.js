import React from 'react';
import { Button } from 'react-bootstrap';

function RestartButton({ onRestart }) {
  return (
    <Button variant="warning" onClick={onRestart} className="mt-3">
      Restart Game
    </Button>
  );
}

export default RestartButton;
