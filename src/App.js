import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HangmanImage from './components/HangmanImage';
import Help from './components/Help';
import Keyboard from './components/Keyboard';
import RestartButton from './components/Restart';
import ResultBanner from './components/Result';
import WordDisplay from './components/WordDisplay';

const WORDS = ['SHARK', 'ELEPHANT', 'TIGER', 'MEERKAT', 'CANARY', 'GOLDFISH'];

function App() {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(1);
  const [result, setResult] = useState(null);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(randomWord);
  }, []);

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || result) return;

    const updatedGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(updatedGuessedLetters);

    if (!word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      if (newWrongGuesses >= 11) {
        setResult('lose');
      }} else {
          const allGuessed = word.split('').every(l => updatedGuessedLetters.includes(l));
          if (allGuessed) {
          setResult('win');
        }
    }
  };

  const handleRestart = () => {
    const newWord = WORDS[Math.floor(Math.random() * WORDS.length)]
    setWord(newWord);
    setGuessedLetters([]);
    setWrongGuesses(1);
    setResult(null);
    setShowHelp(false);
  };

  return (
    <div className="App">
      <Header onHelpClick={() => setShowHelp(true)}/>
      <HangmanImage stage={wrongGuesses} />
      <WordDisplay word={word} guessedLetters={guessedLetters}/>
      <Keyboard
        onGuess={handleGuess}
        guessedLetters={guessedLetters}
        isDisabled={!!result}
      />
      <ResultBanner result={result} word={word} />
      <RestartButton onRestart={handleRestart} />
      <Help show={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  );
}

export default App;
