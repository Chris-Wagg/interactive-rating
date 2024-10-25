'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
	const [selectedRating, setSelectedRating] = useState(0)
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
			}, 500)
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

					<fieldset>
						<legend>Please select a rating</legend>
						<form
							className='rating-form'
							onSubmit={submitValidation}>
							<div className='rating-button-container'>
								<div>
									<input
										required
										type='radio'
										name='rating'
										id='rating-1'
										value='1'
										onChange={handleChange}
									/>
									<label
										htmlFor='rating-1'
										className='rating-number'>
										1
									</label>
								</div>
								<div>
									<input
										type='radio'
										name='rating'
										id='rating-2'
										value='2'
										onChange={handleChange}
										on
									/>
									<label
										htmlFor='rating-2'
										className='rating-number'>
										2
									</label>
								</div>
								<div>
									<input
										type='radio'
										name='rating'
										id='rating-3'
										value='3'
										onChange={handleChange}
									/>
									<label
										htmlFor='rating-3'
										className='rating-number'>
										3
									</label>
								</div>
								<div>
									<input
										type='radio'
										name='rating'
										id='rating-4'
										value='4'
										onChange={handleChange}
									/>
									<label
										htmlFor='rating-4'
										className='rating-number'>
										4
									</label>
								</div>
								<div>
									<input
										type='radio'
										name='rating'
										id='rating-5'
										value='5'
										onChange={handleChange}
									/>
									<label
										htmlFor='rating-5'
										className='rating-number'>
										5
									</label>
								</div>
							</div>
							<div>
								<button className='submit-btn'>SUBMIT</button>
							</div>
						</form>
					</fieldset>
				</div>
			</section>
		</main>
	)
}
