import React, { useEffect, useReducer } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import styles from './App.scss'
import Home from '../Home/Home'
import PlantIndex from '../PlantIndex/PlantIndex'
import Header from '../Header/Header'
import Quiz from '../Quiz/Quiz'
import QuizResults from '../QuizResult/QuizResult'
import appReducer from '../Hooks/appReducer'
import getColoradoNativePlants from '../Utils/ApiCalls'

const initialSate = {
  plantCatalog: [],
  imageMode: false,
  isLoading: false,
  currentQuiz: [],
  round: 0,
  quizLength: 10,
  quizScore: 0,
  username: ''
}

function App() {
  const [state, dispatch] = useReducer(appReducer, initialSate)
  const {
    plantCatalog,
    imageMode,
    currentQuiz,
    round,
    quizLength,
    username,
    quizScore,
    isLoading
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

  function setQuizSettings(event) {
    const form = event.target.closest('form')
    const unstringifiedQuizMode = (form.quizMode.value === 'true')
    const payload = {
      quizMode: unstringifiedQuizMode,
      username: form.username.value
    }
    dispatch({
      type: 'setQuizSettings', payload
    })
  }

  function handleChange(event, fieldName) {
    dispatch({
      type: 'handleChange',
      fieldName,
      payload: event.target.value
    })
  }

  function checkRoundAnswer(event) {
    const { id } = currentQuiz[round].correctAnswer
    const buttonId = parseInt(event.target.id, 10)
    const answerScore = (id === buttonId) ? 1 : 0
    dispatch({ type: 'isLoading', payload: true })
    dispatch({ type: 'roundCheck', payload: answerScore })
  }

  function toggleLoading() {
    dispatch({ type: 'isLoading', payload: !state.isLoading })
  }

  return (
    <main styles={styles.main}>
      <Router>
        <Header />
        {state.plantCatalog.length
        && (
        <>
          <Route
            path="/plantIndex"
            render={() => <PlantIndex plantCatalog={plantCatalog} />}
          />
            {(!currentQuiz) ? <Redirect to="/" />
              : (
                <Route
                  path="/quiz"
                  render={() => (
                    <Quiz
                      currentQuiz={currentQuiz}
                      mode={imageMode}
                      round={round}
                      checkRoundAnswer={checkRoundAnswer}
                      quizLength={quizLength}
                      quizScore={quizScore}
                      isLoading={isLoading}
                      toggleLoading={toggleLoading}
                    />
                  )}
                />
              )}
            {(round === quizLength) && (
            <Route
              path="/results"
              render={() => (
                <QuizResults
                  username={username}
                  score={quizScore}
                />
              )}
            />
            )}
        </>
        )}
        <Route exact path="/">
          <Home
            setQuizSettings={setQuizSettings}
            handleChange={handleChange}
          />
        </Route>
      </Router>
    </main>
  )
}

export default App
