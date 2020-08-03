import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter as Router } from 'react-router-dom'
import Home from './Home'

describe('Home component', () => {
  it('should be a form prompting for a name and quiz mode', () => {
    const { getByRole, getByPlaceholderText } = render(
      <Router>
        <Home />
      </Router>
    )

    const nameInput = getByPlaceholderText('Introduce yourself:')
    const quizModeSelectMenu = getByRole('combobox', { name: 'quizMode' })
    const startQuizButton = getByRole('button', { name: 'Start Quiz' })

    expect(nameInput).toBeInTheDocument()
    expect(quizModeSelectMenu).toBeInTheDocument()
    expect(startQuizButton).toBeInTheDocument()
  })
})
