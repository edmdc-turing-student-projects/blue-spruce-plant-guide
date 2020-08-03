import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter as Router } from 'react-router-dom'
import { mocked } from 'ts-jest/utils'
import App from './App'
import { getColoradoNativePlants, quizGenerator } from '../Utils/index'
import mockPlantIndex from '../Utils/mockPlantIndex'
import mockQuizData from '../Utils/mockQuizData'

jest.mock('../Utils/ApiCalls')
jest.mock('../Utils/quizGenerator')
// quizGenerator.mockImplementation(mockQuizData)

describe('App navigation from landing page', () => {
  getColoradoNativePlants.mockResolvedValue(mockPlantIndex)
  it('should navigate to plant index and display all plants', async () => {
    const { debug, getByRole, findAllByRole } = render(
      <Router>
        <App />
      </Router>
    )
    const link2PlantIndex = getByRole('link', { name: 'Plant Index' })

    expect(link2PlantIndex).toBeInTheDocument()
    fireEvent.click(link2PlantIndex)

    const plantGuide = await findAllByRole('figure')
    expect(plantGuide).toHaveLength(20)
  })
})

describe('App navigation to quiz', () => {
  quizGenerator.mockReturnValue(mockQuizData)
  it('should navigate to quiz and default to scientific name quiz mode', async () => {
    console.log(quizGenerator.mock.results[0].value[0])
    const {
      getByRole, findByRole, findAllByRole, debug
    } = render(
      <Router>
        <App />
      </Router>
    )

    const link2Quiz = getByRole('link', { name: 'Quiz' })

    expect(link2Quiz).toBeInTheDocument()
    fireEvent.click(link2Quiz)
    debug()

    const quizPrompt = await findByRole('heading', { name: 'Parnassia palustris' })
    const quizAnswerChoices = await findAllByRole('button')
    expect(quizPrompt).toBeInTheDocument()
    expect(quizAnswerChoices).toHaveLength(4)
  })
})
