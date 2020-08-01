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
    scoreTracker: [],
    quizScore: 0
  }

  const [state, dispatch] = useReducer(appReducer, initialSate)
  const {
    plantCatalog, imageMode, currentQuiz, round, scoreTracker
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
    const { id } = currentQuiz[round].correctAnswer
    const buttonId = parseInt(event.target.id, 10)
    const answerScore = (id === buttonId) ? 1 : 0
    dispatch({ type: 'roundCheck', payload: answerScore })
  }

  function calculateScore(score) {
    dispatch({ type: 'checkScore', payload: score })
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
                  scoreTracker={scoreTracker}
                  calculateScore={calculateScore}
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
