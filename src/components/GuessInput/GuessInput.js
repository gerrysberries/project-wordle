import React, {useState} from 'react';

function GuessInput({handleSubmitGuess, checkGameOver, guesses}) {
	const [tentativeGuess, setTentativeGuess] = useState('');
	// const isWinner = tentativeGuess ? tentativeGuess === answer : undefined;

	function handleSubmit(e) {
		e.preventDefault();

		handleSubmitGuess(tentativeGuess);
		console.log(checkGameOver(tentativeGuess));
		setTentativeGuess('');
		return checkGameOver(tentativeGuess);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="guess-input-wrapper"
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				disabled={checkGameOver(guesses.at(-1))}
				required
				minLength={5}
				maxLength={5}
				pattern="[a-zA-Z]{5}"
				title="5 letter word"
				id="guess-input"
				type="text"
				value={tentativeGuess}
				onChange={e => setTentativeGuess(e.target.value.toUpperCase())}
			/>
		</form>
	);
}

export default GuessInput;
