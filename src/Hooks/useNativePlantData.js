import React, { useEffect } from 'react'
import getSomeNativePlants from '../ApiCalls'

export default function useNativePlantData() {
  useEffect(() => {
    async function getPlantDate() {
      const plantData = await getSomeNativePlants();
      console.log(plantData, "what's wrong?")
    }
    return getPlantDate();
  })
}
