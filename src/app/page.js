export default function Home() {
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
						<button>1</button>
						<button>2</button>
						<button>3</button>
						<button>4</button>
						<button>5</button>
					</div>
					<button className='submit-btn'>SUBMIT</button>
				</div>
			</section>
			<section className='card-container'>
				<div className='card-2'>
					<img src='illustration-thank-you.svg' alt='' role='none' />
					<p>you selected *** out of 5</p>
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
