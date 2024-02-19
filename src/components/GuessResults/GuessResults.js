import React from 'react';
import Guess from '../Guess';

import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import {range} from '../../utils';

function HappyBanner({guesses}) {
	return (
		<div className="happy banner">
			<p>
				<strong>Congratulations!</strong> Got it in{' '}
				<strong>
					{guesses.length} {guesses.length === 1 ? 'guess' : 'guesses'}
				</strong>
			</p>
		</div>
	);
}

function SadBanner({answer}) {
	return (
		<div className="sad banner">
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
		</div>
	);
}

function GuessResults({guesses, answer, checkGameOver}) {
	return (
		<div className="guess-results">
			{range(NUM_OF_GUESSES_ALLOWED).map(num => (
				<Guess
					key={num}
					guessNum={num + 1}
					value={guesses[num]}
					answer={answer}
					checkGameOver={checkGameOver}
				/>
			))}
			{checkGameOver(guesses.at(-1)) && <HappyBanner guesses={guesses} />}
			{checkGameOver(guesses.at(-1)) && guesses === NUM_OF_GUESSES_ALLOWED && <SadBanner answer={answer} />}
		</div>
	);
}

export default GuessResults;
