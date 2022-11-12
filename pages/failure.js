import StateContext from '../StateContext';
import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo, useState } from 'react';
import Page from '../Page'
import Link from 'next/link'


const Result = () => {
	const [loading, setLoading] = useState(false);
	const [imagePath, setImagePath] = useState("");
	const { getData } = useContext(StateContext)
	const router = useRouter()

	return (
		<Page>


			<div className='container mt-4'>
				<div className='columns'>
					<div className='column is-half is-offset-one-quarter'>
						<div className=' mt-4'>
							<h2 className='is-size-2'>Uups ein Fehler ist aufgetretten.</h2>

							<Link
								href="/">
								<button className='button is-primary'>Zurück zu Start</button>
							</Link>

						</div>
					</div>

				</div>

			</div>
		</Page>
	)


}

export default Result