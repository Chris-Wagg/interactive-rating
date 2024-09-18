'use client'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
	// let navigate = useNavigate()
	// let rating = { selectedRating }

	function handleClick() {
		history.push('/thank-you', { rating })
	}

	const [selectedRating, setSelectedRating] = useState(0)

	function setRatingOne() {
		setSelectedRating(1)
		console.log(selectedRating)
	}
	function setRatingTwo() {
		setSelectedRating(2)
	}
	function setRatingThree() {
		setSelectedRating(3)
	}
	function setRatingFour() {
		setSelectedRating(4)
	}
	function setRatingFive() {
		setSelectedRating(5)
	}

	return (
		<main>
			<section className='card-container'>
				<div className='card-1'>
					<img
						src='icon-star.svg'
						alt='Star icon'
						role='none'
						className='star-icon'
					/>
					<h2 className='title'>How did we do?</h2>
					<p>
						{`Please let us know how we did with your support request.
						All feedback is appreciated to help us improve our
						offering!`}
					</p>

					<form className='rating-form'>
						<label for='rating-1'>
							<input
								type='radio'
								name='rating'
								id='rating-1'
								value='1'
							/>
							<div
								className='rating-number'
								onClick={setRatingOne}>
								1
							</div>
						</label>
						<label for='rating-2'>
							<input
								type='radio'
								name='rating'
								id='rating-2'
								value='2'
							/>
							<div
								className='rating-number'
								onClick={setRatingTwo}>
								2
							</div>
						</label>
						<label for='rating-3'>
							<input
								type='radio'
								name='rating'
								id='rating-3'
								value='3'
							/>
							<div
								className='rating-number'
								onClick={setRatingThree}>
								3
							</div>
						</label>
						<label for='rating-4'>
							<input
								type='radio'
								name='rating'
								id='rating-4'
								value='4'
							/>
							<div
								className='rating-number'
								onClick={setRatingFour}>
								4
							</div>
						</label>
						<label for='rating-5'>
							<input
								type='radio'
								name='rating'
								id='rating-5'
								value='5'
							/>
							<div
								className='rating-number'
								onClick={setRatingFive}>
								5
							</div>
						</label>
					</form>
					<button className='submit-btn'>SUBMIT</button>
				</div>
			</section>
		</main>
	)
}
