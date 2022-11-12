import StateContext from '../StateContext';
import { useContext, useEffect, useMemo, useState } from 'react';
import Page from '../Page'

const Result = () => {
	const [loading, setLoading] = useState(false);
	const { getData } = useContext(StateContext)

	const data = useMemo(() => getData(), [getData])

	useEffect(() => {
		setLoading(true)
		fetch('/api/magique', {
			method: 'POST',
			body: JSON.stringify(data),
		}).then(res => res.json()).then(data => {
			setLoading(false)
		})
	}, [data])


	return (
		<Page>


			<div className='container mt-4'>
				{loading ? <h1>Loading...</h1> :
					<div>
						<ul>
							<li>{data.question}</li>
							<li>{data.image}</li>
							<li>{data.text}</li>
						</ul>
					</div>
				}
			</div>
		</Page>
	)


}

export default Result