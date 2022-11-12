import { useContext } from 'react';
import StateContext from '../StateContext';
import { useRouter } from 'next/router'
import Page from '../Page'


const SelectImage = () => {
	const { addImage } = useContext(StateContext)
	const router = useRouter()

	const images = ["sample1.jpg", "sample2.jpg", "sample3.jpg"];

	const addImageHandler = (image) => {
		addImage(image)
		router.push('/text')
	}

	return (
		<Page>
			<div class="container mt-4">
				<h1 className="is-size-1 has-text-weight-semibold">Was möchtest du verändern?</h1>
				<div className="columns is-multiline">
					{images.map((image, index) =>
						<div className="card m-2 column" key={image}>
							<a onClick={() => addImageHandler(image)}>
								<div className="card-image">
									<figure className="image is-4by3">
										<img src={"/city_images/" + image} />							</figure>
								</div>
							</a>

						</div>
					)
					}
				</div>

			</div>
		</Page>
	);
}


export default SelectImage