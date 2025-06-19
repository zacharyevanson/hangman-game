import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HangmanImage from './components/HangmanImage';
import Help from './components/Help';
import Keyboard from './components/Keyboard';
import RestartButton from './components/Restart';
import ResultBanner from './components/Result';
import WordDisplay from './components/WordDisplay';

//  array of words to be randomly selected everytime a game is initiated
const WORDS = ['SHARK', 'ELEPHANT', 'TIGER', 'MEERKAT', 'CANARY', 'GOLDFISH'];

function App() {

  // React hooks for updating the state of the word, letters guessed, wrong guesses, and the result
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
    // if letter is already guessed or is in the result, it is not set as an updated guessed letter
    if (guessedLetters.includes(letter) || result) return;

    // updating guessed letters each time handleGuess is called
    const updatedGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(updatedGuessedLetters);

    if (!word.includes(letter)) {
      // wrong guesses updates for each letter that is not in the word and has not been guessed
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

  // resetting all state variables to ensure the do not carry over to next game
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
