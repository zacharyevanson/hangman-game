import React from 'react';
import { Alert } from 'react-bootstrap';

function ResultBanner({ result, word }) {
  if (!result) return null;

  return (
    <Alert variant={result === 'win' ? 'success' : 'danger'}>
      {result === 'win' ? 'You won!' : `You lost! The word was: ${word}`}
    </Alert>
  );
}

export default ResultBanner;
