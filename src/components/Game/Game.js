import React, {useState} from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

// Pick a random word on every page-load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
	const [guesses, setGuesses] = useState([]);

	function handleSubmitGuess(tentativeGuess) {
		setGuesses([...guesses, tentativeGuess]);
	}

	function checkGameOver(guess) {
		return guess === answer || (guesses.length === NUM_OF_GUESSES_ALLOWED && guess !== answer);
	}

	return (
		<>
			<GuessResults
				guesses={guesses}
				answer={answer}
				checkGameOver={checkGameOver}
			/>
			<GuessInput
				handleSubmitGuess={handleSubmitGuess}
				answer={answer}
				checkGameOver={checkGameOver}
				guesses={guesses}
			/>
		</>
	);
}

export default Game;
