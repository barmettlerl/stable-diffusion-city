import { useContext, useMemo } from 'react';
import StateContext from '../StateContext';
import { useRouter } from 'next/router'
import Page from '../Page'
import translations from './descs.json'
import Masonry from 'react-masonry-css'
import translation from "./descs.json";


const SelectImage = () => {
	const { addImage } = useContext(StateContext)
	const router = useRouter()

	const breakpointColumnsObj = {
		default: 5,
		1100: 4,
		700: 3,
		500: 2,
		300: 1
	}

	const addImageHandler = (image) => {
		addImage(image)
		router.push('/text')
	}

	const images = useMemo(() => Object.keys(translations), [])

	return (
		<Page>
			<div className="page container mt-4">
				<button className="button is-primary is-outlined is-align-self-center" onClick={() => router.push('/')}>Zurück</button>

				<div className="page__title">
					<h1>Was möchtest du verändern?</h1>
				</div>

				<div className="page__content">
					<Masonry
						breakpointCols={breakpointColumnsObj}
						className="my-masonry-grid"
						columnClassName="my-masonry-grid_column">
						{images.map((image) =>
							<div  key={image}>
								<div className='card'>
									<a onClick={() => addImageHandler(image)}>
										<div className="card-image">
											<figure className="image is-4by4">
												<img src={"/city_images/" + image} loading='lazy' alt={translation[image]} />
											</figure>
										</div>
									</a>
								</div>

							</div>
						)
						}
					</Masonry>
				</div>
			</div>
		</Page>
	);
}


export default SelectImage
