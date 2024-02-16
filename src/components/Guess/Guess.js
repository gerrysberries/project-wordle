import React from 'react';
import {range} from '../../utils';

function Guess({guess}) {
	return (
		<p className="guess">
			{range(5).map((_, i) => (
				<span
					key={crypto.randomUUID()}
					className="cell"
				>
					{guess.at(i) || ''}
				</span>
			))}
		</p>
	);
}

export default Guess;
