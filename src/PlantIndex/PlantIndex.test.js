import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter as Router } from 'react-router-dom'
import PlantIndex from './PlantIndex'
import mockPlantIndex from '../Utils/mockPlantIndex'

describe('Plant index from plant catalog', () => {
  it('should render plant cards with an image, common name and scientific name', () => {
    const { getAllByRole } = render(
      <Router>
        <PlantIndex plantCatalog={mockPlantIndex} />
      </Router>
    )

    const plantImages = getAllByRole('img')
    const plantNames = getAllByRole('heading')

    expect(plantImages).toHaveLength(20)
    expect(plantNames).toHaveLength(20)
  })
})
