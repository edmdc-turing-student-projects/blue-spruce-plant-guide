import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter as Router } from 'react-router-dom'
import App from './App'
import mockPlantIndex from '../Utils/mockPlantIndex'
import getColoradoNativePlants from '../Utils/ApiCalls'

jest.mock('../Utils/ApiCalls')
getColoradoNativePlants.mockResolvedValue(mockPlantIndex)

describe('App navigation from landing page', () => {
  it('should navigate to plant index and display all plants', async () => {
    const { getByRole, findAllByRole, debug } = render(
      <Router>
        <App />
      </Router>
    )
    const link2PlantIndex = getByRole('link', { name: 'Plant Index' })

    expect(link2PlantIndex).toBeInTheDocument()
    fireEvent.click(link2PlantIndex)

    debug()
    const plantGuide = await findAllByRole('figure')
    expect(plantGuide).toHaveLength(20)
  })
})
