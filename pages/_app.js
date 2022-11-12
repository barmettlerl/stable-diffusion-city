import { useReducer, useMemo } from 'react'

import '../styles/globals.sass'
import StateContext from '../StateContext'

function MyApp({ Component, pageProps }) {

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'ADD_QUESTION':
          return {
            ...prevState,
            question: action.data,
          }
        case 'ADD_IMAGE':
          return {
            ...prevState,
            image: action.data,
          }
        case 'ADD_TEXT':
          return {
            ...prevState,
            text: action.data,
          }
      }
    },
    {
      question: "",
      image: "",
      text: "",
    },
  )

  const stateContext = useMemo(
    () => ({
      addQuestion: (question) => {
        dispatch({ type: 'ADD_QUESTION', data: question })
      },
      addImage: (image) => {
        dispatch({ type: 'ADD_IMAGE', data: image })
      },
      addText: (text) => {
        dispatch({ type: 'ADD_TEXT', data: text })
      },
      getData: () => state,
    }),
    [state],
  )

  return (
    <StateContext.Provider value={stateContext}>
      <Component {...pageProps} />
    </StateContext.Provider>
  )

}

export default MyApp
