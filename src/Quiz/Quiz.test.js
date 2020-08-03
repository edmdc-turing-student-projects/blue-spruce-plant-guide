import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Quiz from './Quiz'
import mockQuiz from './mockQuizData'

describe('Quiz slide modes', () => {
  it('should display an image and four answer choices when image mode is on', () => {
    const { getByRole, getAllByRole } = render(
      <Router>
        <Quiz
          currentQuiz={mockQuiz}
          mode
          round={0}
          checkRoundAnswer={jest.fn()}
          quizLength={5}
          calculateScore={jest.fn()}
        />
      </Router>
    )

    const quizPromptImage = getByRole('img', { name: 'Parnassia palustris' })
    const answerChoiceButtons = getAllByRole('button')

    expect(quizPromptImage).toBeInTheDocument()
    expect(answerChoiceButtons).toHaveLength(4)
  })

  it('should display an scientific name heading and four answer choices when image mode is off', () => {
    const { getByRole, getAllByRole } = render(
      <Router>
        <Quiz
          currentQuiz={mockQuiz}
          mode={false}
          round={0}
          checkRoundAnswer={jest.fn()}
          quizLength={5}
          calculateScore={jest.fn()}
        />
      </Router>
    )

    const quizPromptHeading = getByRole('heading', { name: 'Parnassia palustris' })
    const answerChoiceButtons = getAllByRole('button')

    expect(quizPromptHeading).toBeInTheDocument()
    expect(answerChoiceButtons).toHaveLength(4)
  })
})
