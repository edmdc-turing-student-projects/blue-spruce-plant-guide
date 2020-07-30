import React, { useState, useEffect } from 'react'
import styles from './App.scss'
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
    plantCatalog.map(plant => {
      const {id, common_name, scientific_name, image_url} = plant
      return (
        <figure className={`Info card for: ${common_name}`}>
          <img src={`${image_url}`} alt={`Image for: ${common_name}`} />
      )
    })
  }

  return (
    <div className={styles.main}>
      <h1>My React App</h1>
    </div>
  )
}

export default App
