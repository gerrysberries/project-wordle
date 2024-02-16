import React, {useState} from 'react';

function GuessInput({handleSubmitGuess}) {
	const [tentativeGuess, setTentativeGuess] = useState('');

	function handleSubmit(e) {
		e.preventDefault();

		handleSubmitGuess(tentativeGuess);

		setTentativeGuess('');
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="guess-input-wrapper"
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
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
