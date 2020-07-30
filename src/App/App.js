import React, { useState, useEffect } from 'react';
import styles from './App.scss'
import { useNativePlantData } from '../Hooks/useNativePlantData'
import { getSomeNativePlants } from '../ApiCalls'

function App () {
  const [plantCatalog, setPlantCatalog] = useState([])
  useEffect(() => {
    const poop = async () => {
    try{
      const apple = await getSomeNativePlants()
      console.log(apple, 'hello')
      setPlantCatalog(getSomeNativePlants())
    } catch(error) {
      console.error(error)
    }
    }
    poop();
  }, [])

  console.log(plantCatalog)

  return (
  <div className={styles.main}>
    <h1>My React App</h1>
  </div>
  );
}

export default App;
