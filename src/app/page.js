'use client'

import { useState, useEffect } from 'react'

export default function Home() {
	const [selectedRating, setSelectedRating] = useState(0)
	const [errorBoolean, setErrorBoolean] = useState(false)
	const [errorMessage, setErrorMessage] = useState({})

	// sets the value rating through state change
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

	useEffect(() => {
		// checks to see if error message is present and then sets the error boolean
		console.log(selectedRating)
		let errorMessage = document.getElementById('errorMessage')
		if (errorMessage === null) {
			console.log('error message = false')
			setErrorBoolean(false)
			return
		} else {
			console.log('error message = true')
			setErrorBoolean(true)
			errorMessage.focus()
		}
	}, [errorBoolean])

	// checks the rating number on submit and sets the corresponding error message and sets the error boolean

	let cardTwo = document.getElementById('cardTwo')
	let cardOne = document.getElementById('cardOne')

	const validateRating = () => {
		let errorMessage = {}
		if (selectedRating === 0) {
			setErrorBoolean(true)
			errorMessage.text = 'Please select a rating'
			setErrorMessage(errorMessage)
		} else if (selectedRating >= 1) {
			console.log(`selected rating is`, selectedRating)
			errorMessage.text = ''
			setErrorMessage(errorMessage)
			setErrorBoolean(false)
			cardOne.classList.add('hidden')
			cardTwo.classList.add('show')
		}
	}

	//
	const submitValidation = (e) => {
		e.preventDefault()
		validateRating()
	}

	return (
		<main>
			<section className='card-container' id='cardOne'>
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

					<form className='rating-form' onSubmit={submitValidation}>
						{errorMessage.text && (
							<div className='error-message' id='errorMessage'>
								{errorMessage.text}
							</div>
						)}

						<div className='rating-button-container'>
							<label htmlFor='rating-1'>
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
							<label htmlFor='rating-2'>
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
							<label htmlFor='rating-3'>
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
							<label htmlFor='rating-4'>
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
							<label htmlFor='rating-5'>
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
						</div>
						<div>
							<button className='submit-btn'>SUBMIT</button>
						</div>
					</form>
				</div>
			</section>
			<section className='card-container hidden' id='cardTwo'>
				<div className='card-2'>
					<img src='illustration-thank-you.svg' alt='' role='none' />
					<p className='card--rating-selected'>
						you selected
						<span className='rating-selected--number'>
							&nbsp;
							{selectedRating}
							&nbsp;
						</span>
						out of 5
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
