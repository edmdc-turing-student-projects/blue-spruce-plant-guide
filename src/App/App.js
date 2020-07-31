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
    const plantInfoCards = plantCatalog.map((plant) => {
      const {
        id, common_name, scientific_name, image_url
      } = plant
      return (
        <figure id={id} className={styles.plantCard}>
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
    <div className={styles.main}>
      <h1>My React App</h1>
      {plantCatalog.length && createPlantCatalog()}
    </div>
  )
}

export default App
