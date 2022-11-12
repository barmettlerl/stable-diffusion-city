import { useContext, useEffect, useState } from 'react';
import StateContext from '../StateContext';
import { useRouter } from 'next/router'
import Page from '../Page'

const images = [
	"Solituede.jpg",
	"alter_bhf_platz.jpg",
	"altstadt_verschneit.jpg",
	"athletikzentrum.jpg",
	"athletikzentrum_aussen.jpg",
	"autobahnkantine.jpg",
	"bach.jpg",
	"belly_of_the_biest.jpg",
	"bhf_eingeschneit.jpg",
	"falkenburg.jpg",
	"fuerstenland.jpg",
	"gemeinden_sg.jpg",
	"guebsensee_alt.jpg",
	"gueterbhf_areal.jpg",
	"handballhotspot.jpg",
	"holzcheller.jpg",
	"industrie_sitthurtobel.jpg",
	"kastanienkantine.jpg",
	"kornfeldxbleiche.jpg",
	"lattich.jpg",
	"mondbasis.jpg",
	"nacht_posti.jpg",
	"nomol_frauebadi.jpg",
	"notkerseggerianerinne.jpg",
	"openair.jpg",
	"openair_nacht.jpg",
	"saeuli.jpg",
	"sanierung_sob_viadukt.jpg",
	"sbb_sitterviadukt.jpg",
	"schoren.jpg",
	"sitthurtobel.jpg",
	"skatepark.jpg",
	"sob_herbstviadukt.jpg",
	"sob_sitterviadukt.jpg",
	"st.fiden.jpg",
	"st.leopard.jpg",
	"st.otmar.jpg",
	"st.schlecht_isoliert.jpg",
	"sw_winkeln.jpg",
	"teilspange.jpg",
	"tröcknerturm.jpg",
	"turmbauzuguellen.jpg",
	"vadian.jpg",
	"vor_klimawandel.jpg",
	"wandernxbleiche.jpg",
	"weiern.jpg"
]

console.log(images)

const SelectImage = () => {
	const { addImage } = useContext(StateContext)
	const router = useRouter()

	const addImageHandler = (image) => {
		addImage(image)
		router.push('/text')
	}


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