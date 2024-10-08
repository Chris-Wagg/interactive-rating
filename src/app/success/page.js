'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

// TODO: fix the focus grab to make sure the page is read out on load

function CardTwo() {
	const searchParams = useSearchParams()
	const value = searchParams.get('value')

	return (
		<main>
			<section className='card-container' id='cardTwo'>
				<div className='card-2'>
					<img src='illustration-thank-you.svg' alt='' role='none' />
					<p className='card--rating-selected'>
						you selected
						<span className='rating-selected--number'>
							&nbsp;
							{value}
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

export default function Success() {
	return (
		<Suspense>
			<CardTwo />
		</Suspense>
	)
}
