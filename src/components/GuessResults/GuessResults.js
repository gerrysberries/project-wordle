import React from 'react';
import Guess from '../Guess';

import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import {range} from '../../utils';

function GuessResults({guesses}) {
	return (
		<div className="guess-results">
			{range(NUM_OF_GUESSES_ALLOWED).map((_, i) => (
				<Guess
					key={crypto.randomUUID()}
					guess={guesses[i] || ''}
				/>
			))}
		</div>
	);
}

export default GuessResults;
