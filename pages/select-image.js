import { useContext, useEffect, useState } from 'react';
import StateContext from '../StateContext';
import { useRouter } from 'next/router'
import Page from '../Page'
import translations from './descs.json'



const SelectImage = () => {
	const { addImage } = useContext(StateContext)
	const router = useRouter()

	const addImageHandler = (image) => {
		addImage(image)
		router.push('/text')
	}

	const images = useMemo(() => Object.keys(translations), [])

	return (
		<Page>
			<div className="container mt-4">
				<button className="button is-primary is-outlined is-align-self-center" onClick={() => router.push('/')}>Zurück</button>

				<div className="is-flex is-justify-content-center">
					<h1 className="is-size-2 has-text-weight-semibold mb-4 ml-6 ">Was möchtest du verändern?</h1>
				</div>
				<div className="is-flex is-flex-wrap-wrap">
					{images.map((image) =>
						<div style={{ width: "230px" }} key={image}>
							<div className='card'>
								<a onClick={() => addImageHandler(image)}>
									<div className="card-image">
										<figure className="image is-4by4">
											<img src={"/city_images/" + image} />							</figure>
									</div>
								</a>
							</div>

						</div>
					)
					}
				</div>

			</div>
		</Page>
	);
}


export default SelectImage