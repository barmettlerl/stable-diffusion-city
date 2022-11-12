import { useContext } from 'react';
import StateContext from '../StateContext';
import { useRouter } from 'next/router'
import Page from '../Page'

const Question = () => {
	const { addQuestion } = useContext(StateContext)
	const router = useRouter()

	const addQuestionHandler = (q) => {
		addQuestion(q)
		router.push('/select-image')
	}

	const questions = ["What is your name?", "What is your age?", "What is your favorite color?"];



	return (

		<Page>
			<div className="container mt-4">
				<h1 className="is-size-1">Wähle deine Frage</h1>
				{questions.map((question, index) =>
					<div className="card mt-4 " key={question}>
						<a
							onClick={() => addQuestionHandler(question)}
						>
							<div className="card-content is-flex is-justify-content-space-between">
								<span >{question}</span>
								<span ><i className="fa-solid fa-arrow-right"></i></span>
							</div>
						</a>

					</div>
				)}
			</div>
		</Page>
	);


}


export default Question