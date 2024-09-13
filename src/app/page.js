'use client'

import { useState } from 'react'

export default function Home() {
	const [selectedRating, setSelectedRating] = useState(0)

	function setRatingOne() {
		setSelectedRating(1)
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
					<div className='rating-button-container'>
						<button onClick={setRatingOne}>1</button>
						<button onClick={setRatingTwo}>2</button>
						<button onClick={setRatingThree}>3</button>
						<button onClick={setRatingFour}>4</button>
						<button onClick={setRatingFive}>5</button>
					</div>
					<button className='submit-btn'>SUBMIT</button>
				</div>
			</section>
			<section className='card-container'>
				<div className='card-2'>
					<img src='illustration-thank-you.svg' alt='' role='none' />
					<p className='card--rating-selected'>
						you selected {selectedRating} out of 5
					</p>
					<h2>Thank you!</h2>
					<p>
						{`We appreciate you taking the time to give a rating. If you
						ever need more support, don’t hesitate to get in touch!`}
					</p>
				</div>
			</section>
		</main>
	)
}
