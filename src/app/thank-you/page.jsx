'use client'
export default function Home(props) {
	const { rating } = props.location.state

	return (
		<main>
			<section className='card-container'>
				<div className='card-2'>
					<img src='illustration-thank-you.svg' alt='' role='none' />
					<p className='card--rating-selected'>
						you selected {rating} out of 5
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

{
	/* <form className='rating-form'>
						<label for='rating-1'>
							<input
								type='radio'
								name='rating'
								id='rating-1'
								value='1'
							/>
							<button
								type='button'
								className='rating-number'
								onClick={setRatingOne}>
								1
							</button>
						</label>
						<label for='rating-2'>
							<input
								type='radio'
								name='rating'
								id='rating-2'
								value='2'
							/>
							<button
								type='button'
								className='rating-number'
								onClick={setRatingTwo}>
								2
							</button>
						</label>
						<label for='rating-3'>
							<input
								type='radio'
								name='rating'
								id='rating-3'
								value='3'
							/>
							<button
								type='button'
								className='rating-number'
								onClick={setRatingThree}>
								3
							</button>
						</label>
						<label for='rating-4'>
							<input
								type='radio'
								name='rating'
								id='rating-4'
								value='4'
							/>
							<button
								type='button'
								className='rating-number'
								onClick={setRatingFour}>
								4
							</button>
						</label>
						<label for='rating-5'>
							<input
								type='radio'
								name='rating'
								id='rating-5'
								value='5'
							/>
							<button
								type='button'
								className='rating-number'
								onClick={setRatingFive}>
								5
							</button>
						</label>
						<button className='submit-btn'>SUBMIT</button>
					</form> */
}
