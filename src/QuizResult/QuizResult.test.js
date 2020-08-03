import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter as Router } from 'react-router-dom'
import QuizResults from './QuizResult'

describe('Quiz result component', () => {
  it("should display the user's name and score", () => {
    const { getByRole } = render(
      <Router>
        <QuizResults username="Mark" score={6} />
      </Router>
    )

    const usernameTitle = getByRole('heading', { name: 'Mark' })
    const scoreHeading = getByRole('heading', { name: 'score' })

    expect(usernameTitle).toBeInTheDocument()
    expect(scoreHeading).toBeInTheDocument()
  })
})
