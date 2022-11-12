import StateContext from '../StateContext';
import { useContext, useEffect, useMemo, useState } from 'react';
import Page from '../Page'

const Result = () => {
	const [loading, setLoading] = useState(false);
	const [imagePath, setImagePath] = useState("");
	const { getData } = useContext(StateContext)

	const data = useMemo(() => getData(), [getData])

	useEffect(() => {
		setLoading(true)
		fetch('/api/magique', {
			method: 'POST',
			body: JSON.stringify(data),
		}).then(res => res.json()).then(r => {
			console.log(r)
			setImagePath(r.image[0])
			setLoading(false)
		})
	}, [data])


	return (
		<Page>


			<div className='container mt-4'>
				{loading || imagePath === "" ? <h1>Loading...</h1> :
					<div>
						<div className='card mt-4'>
							{data.image ?
								<div className="card-image">
									<figure class="image is-4by3">
										<img src={imagePath} />
									</figure>
								</div>
								: "No image found"
							}

						</div>

					</div>
				}
			</div>
		</Page>
	)


}

export default Result