import StateContext from '../StateContext';
import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo, useState } from 'react';
import Page from '../Page'

import translation from './descs.json'

const Result = () => {
	const [loading, setLoading] = useState(false);
	const [imagePath, setImagePath] = useState("");
	const { getData } = useContext(StateContext)
	const router = useRouter()

	const data = useMemo(() => getData(), [getData])

	useEffect(() => {
		if (data.image === "" || data.text === "") {
			router.push('/failure')
		}

		setLoading(true)
		fetch('/api/magique', {
			method: 'POST',
			body: JSON.stringify(data),
		}).then(res => res.json()).then(r => {
			setImagePath(r.image[0])
			setLoading(false)
		})
	}, [])


	return (
		<Page>

			<div className='container mt-4'>
				<button className="button is-primary is-outlined is-align-self-center" onClick={() => router.push('/text')}>Zurück</button>

				{loading || imagePath === "" ?
					<>
						<div className='is-flex is-justify-content-center'>
							<h1 className="is-size-2 has-text-weight-semibold">Warte, deine Vision wird generiert!</h1>

						</div>
						<div className='is-flex is-justify-content-center'>
							<img src='/loading.gif' />

						</div>
					</> :
					<div className='columns'>
						<div className='column is-half is-offset-one-quarter'>
							<div className="is-flex is-justify-content-center">
								<h1 className="is-size-2 has-text-weight-semibold">{translation[data.image]} mit {data.text}</h1>
							</div>
							<div className='card mt-4'>
								{data.image ?
									<div className="card-image">
										<figure className="image is-4by3">
											<img src={imagePath} />
										</figure>
									</div>
									: "No image found"
								}

							</div>
						</div>

					</div>
				}
			</div>
		</Page>
	)


}

export default Result