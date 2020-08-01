import React, { useEffect, useReducer } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styles from './App.scss'
import Home from '../Home/Home'
import PlantIndex from '../PlantIndex/PlantIndex'
import Header from '../Header/Header'
import Quiz from '../Quiz/Quiz'
import appReducer from '../Hooks/appReducer'
import getColoradoNativePlants from '../Utils/ApiCalls'

function App() {
  const initialSate = {
    plantCatalog: [],
    imageMode: false,
    currentQuiz: [],
    round: 0,
    score: []
  }

  const [state, dispatch] = useReducer(appReducer, initialSate)
  const {
    plantCatalog, imageMode, currentQuiz, round
  } = state

  useEffect(() => {
    const getPlantInfo = async () => {
      try {
        const plantInfoRequests = await getColoradoNativePlants()
        dispatch({ type: 'getPlants', payload: plantInfoRequests })
        dispatch({ type: 'createQuiz' })
      } catch (err) {
        dispatch({ type: 'error', payload: { ...err } })
      }
    }
    getPlantInfo()
  }, [])

  function chooseQuizMode(mode) {
    dispatch({ type: 'setQuizMode', payload: mode })
  }

  function checkRoundAnswer(event) {
    const { id } = currentQuiz[round].correctAnswer.id
    const answerScore = (id === event.target.id) ? 1 : 0
    dispatch({ type: 'roundCheck', payload: answerScore })
  }

  return (
    <Router>
      <Header />
      {state.plantCatalog.length
        && (
          <>
            <Route
              path="/plantIndex"
              render={() => <PlantIndex plantCatalog={plantCatalog} />}
            />
            <Route
              path="/quiz"
              render={() => (
                <Quiz
                  currentQuiz={currentQuiz}
                  mode={imageMode}
                  round={round}
                  checkRoundAnswer={checkRoundAnswer}
                />
              )}
            />
          </>
        )}
      <Route exact path="/">
        <Home chooseQuizMode={chooseQuizMode} />
      </Route>
    </Router>
  )
}

export default App
