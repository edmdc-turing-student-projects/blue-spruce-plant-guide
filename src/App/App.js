import React, { useState, useEffect, useReducer } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styles from './App.scss'
import Home from '../Home/Home'
import PlantIndex from '../PlantIndex/PlantIndex'
import Header from '../Header/Header'
import Quiz from '../Quiz/Quiz'
import getColoradoNativePlants from '../ApiCalls'

function App() {
  const initialSate = {
    plantCatalog = [],
    quizMode = ''
  }

  const [ state, dispatch ] = useReducer(appReducer, initialSate)
  const [plantCatalog, setPlantCatalog] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    const getPlantInfo = async () => {
      try {
        const plantInfoRequests = await getColoradoNativePlants()
        setPlantCatalog(plantInfoRequests)
      } catch (err) {
        setError(err)
      }
    }
    getPlantInfo()
  }, [])

  return (
    <Router>
      <Header />
      {plantCatalog.length
        && (
          <>
            <Route
              path="/plantIndex"
              render={() => <PlantIndex plantCatalog={plantCatalog} />}
            />
            <Route
              path="/quiz"
              render={() => <Quiz />}
            />
          </>
        )}
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  )
}

export default App
