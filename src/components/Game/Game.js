import React, {useState} from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import {sample} from '../../utils';
import {WORDS} from '../../data';

// Pick a random word on every page-load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
	const [guesses, setGuesses] = useState([]);

	function handleSubmitGuess(tentativeGuess) {
		setGuesses([...guesses, tentativeGuess]);
	}

	return (
		<>
			<GuessResults guesses={guesses} />
			<GuessInput handleSubmitGuess={handleSubmitGuess} />
		</>
	);
}

export default Game;
