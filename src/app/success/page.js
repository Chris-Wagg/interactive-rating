'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useRef } from 'react'

// TODO: fix the focus grab to make sure the page is read out on load

function CardTwo() {
	const searchParams = useSearchParams()
	const value = searchParams.get('value')

	const heading = useRef(null)

	useEffect(() => {
		if (heading.current) {
			heading.current.focus()
		}
	}, [])

	return (
		<main>
			<h1 tabIndex={-1} className='hidden-heading' ref={heading}>
				Success
			</h1>
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
					<p className='card-2--thank-you'>Thank you!</p>
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
