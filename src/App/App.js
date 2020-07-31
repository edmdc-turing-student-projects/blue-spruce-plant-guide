import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styles from './App.scss'
import Home from '../Home/Home'
import getColoradoNativePlants from '../ApiCalls'

function App() {
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

  const createPlantCatalog = () => {
    const plantInfoCards = plantCatalog.map((plant, index) => {
      const {
        id, common_name, scientific_name, image_url
      } = plant
      return (
        <figure id={id} key={index} className={styles.plantCard}>
          <img className={styles.plantImage} src={`${image_url}`} alt={`${common_name}`} />
          <figcaption>
            <p><b>{`${common_name}`}</b></p>
            <p><i>{`${scientific_name}`}</i></p>
          </figcaption>
        </figure>
      )
    })
    return (
      <>
        {plantInfoCards}
      </>
    )
  }

  return (
    <Router>
      <div className={styles.main}>
        <h1>My React App</h1>
        {plantCatalog.length && createPlantCatalog()}
      </div>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  )
}

export default App
