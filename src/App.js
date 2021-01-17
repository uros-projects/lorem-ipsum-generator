import React, { useState } from 'react';
import data from './data';


function App() {
	const [count, setCount] = useState(0)
	const [text, setText] = useState([data[0]])
	const [maxNumber, setMaxNumber] = useState(data.length)

	const handleSubmit = e => {
		e.preventDefault();

		let pNumber = parseInt(count);
		if(count <= 0) {
			pNumber = 1;
		}
		if(count > maxNumber) {
			pNumber = maxNumber;
		}

		setText(data.slice(0, pNumber));
	}

	return (
		<main>
			<section className='section-center'>
				<h3>tired of boring lorem ipsum?</h3>
				<form className='lorem-form' onSubmit={handleSubmit}>
					<label htmlFor='number'>
						paragraphs:
					</label>
					<input
						type='number'
						name='number'
						id='number'
						value={count}
						onChange={ e => setCount(e.target.value) } />
						<button type='submit' className='btn'>generate</button>
				</form>
				<article className='lorem-text'>
					{text.map( (item, index) => {
						return <p key={index}>{item}</p>
					})}
				</article>
			</section>
		</main>
	);
}

export default App;
