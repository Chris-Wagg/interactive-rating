'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
	const [selectedRating, setSelectedRating] = useState()
	const [errorMessage, setErrorMessage] = useState({})
	const [notification, setNotification] = useState('')

	useEffect(() => {
		if (notification !== '') {
			console.log('Live region updated with:', notification)
		}
	}, [notification]) // Effect will run when the notification changes

	// handles the radio button changes to update the state for the selected rating
	const handleChange = (e) => {
		setSelectedRating(Number(e.target.value))
	}

	const router = useRouter()

	const handleNavigate = () => {
		if (
			selectedRating === 0 ||
			selectedRating === null ||
			selectedRating === undefined
		) {
			return
		} else {
			setNotification('Submitting form, you will be redirected shortly.')

			// Simulate a redirect after a delay (e.g., 3 seconds)
			setTimeout(() => {
				router.push(`/success?value=${selectedRating}`)
			}, 3000)
		}
	}

	const submitValidation = (e) => {
		e.preventDefault()
		handleNavigate()
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
						<fieldset>
							<legend>Please select a rating</legend>
							<div className='rating-button-container'>
								<label htmlFor='rating-1'>
									<input
										required
										type='radio'
										name='rating'
										id='rating-1'
										value='1'
										// checked={selectedRating === 1}
										onChange={handleChange}
									/>
									<div className='rating-number'>1</div>
								</label>
								<label htmlFor='rating-2'>
									<input
										type='radio'
										name='rating'
										id='rating-2'
										value='2'
										// checked={selectedRating === 2}
										onChange={handleChange}
										on
									/>
									<div className='rating-number'>2</div>
								</label>
								<label htmlFor='rating-3'>
									<input
										type='radio'
										name='rating'
										id='rating-3'
										value='3'
										// checked={selectedRating === 3}
										onChange={handleChange}
									/>
									<div className='rating-number'>3</div>
								</label>
								<label htmlFor='rating-4'>
									<input
										type='radio'
										name='rating'
										id='rating-4'
										value='4'
										// checked={selectedRating === 4}
										onChange={handleChange}
									/>
									<div className='rating-number'>4</div>
								</label>
								<label htmlFor='rating-5'>
									<input
										type='radio'
										name='rating'
										id='rating-5'
										value='5'
										// checked={selectedRating === 5}
										onChange={handleChange}
									/>
									<div className='rating-number'>5</div>
								</label>
							</div>
							<div>
								<button className='submit-btn'>SUBMIT</button>
							</div>
							<div
								aria-live='polite'
								style={{
									visibility: notification
										? 'visible'
										: 'hidden',
									height: '1px',
								}}>
								{notification}
							</div>
						</fieldset>
					</form>
				</div>
			</section>
		</main>
	)
}
