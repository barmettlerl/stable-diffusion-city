import { useContext, useMemo, useState } from 'react';
import StateContext from '../StateContext';
import { useRouter } from 'next/router'
import Page from '../Page'
import translation from "./descs.json";

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
				<button className="button is-primary is-outlined is-align-self-center" onClick={() => router.push('/select-image')}>Zurück</button>

				<div className='columns is-flex is-flex-direction-column'>
					<div className="column is-half is-offset-one-quarter">
						<div className="is-flex is-justify-content-center page__title">
							<h1>Wie soll es sich verändern?</h1>
						</div>

						<div className='mt-4'>
							<input className="input is-large" type="text" placeholder="z.B Gestaltet von Nikki de Saint Phalle" onChange={(e) => setTextInput(e.target.value)} />
						</div>

						<div className='is-flex is-justify-content-flex-end'>
							<button className="button is-primary is-large mt-4 " onClick={submitToServer}>Vorschlag generieren</button>
						</div>
						<div className='card mt-5'>
							{data.image ?
								<div className="card-image">
									<figure className="image">
										<img src={`/city_images/${data.image}`} alt={translation[data.image]} />
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
