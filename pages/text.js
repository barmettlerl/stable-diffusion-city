import { useContext, useMemo, useState } from 'react';
import StateContext from '../StateContext';
import { useRouter } from 'next/router'
import Page from '../Page'

const Text = () => {
	const [textInput, setTextInput] = useState("");
	const { addText, getData } = useContext(StateContext)
	const router = useRouter()
	const data = useMemo(() => getData(), [getData])

	const submitToServer = () => {
		if (textInput.length > 0) {
			console.log(textInput)
			addText(textInput)
			router.push('/result')
		}
	}

	return (
		<Page>
			<div className="container mt-4">

				<div className='columns mt-4 is-flex is-flex-direction-column'>
					<div className="column is-half is-offset-one-quarter">
						<h1 className="is-size-1 has-text-weight-semibold">Wie möchtest du es verändern?</h1>

						<div className='mt-4'>
							<input className="input is-large" type="text" placeholder="z.B mehr Bäume auf den Häusern" onChange={(e) => setTextInput(e.target.value)} />
						</div>

						<div>
							<button className="button is-primary is-large mt-4 " onClick={submitToServer}>Vorschlag realisieren</button>
						</div>
						<div className='card mt-4'>
							{data.image ?
								<div className="card-image">
									<figure className="image is-4by3">
										<img src={`/city_images/${data.image}`} />
									</figure>
								</div>
								: "No image found"
							}

						</div>

					</div>

				</div>
			</div>
		</Page>
	)
}

export default Text