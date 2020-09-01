import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render, fireEvent, rerender } from '@testing-library/react'
import '@testing-library/jest-dom'
import Quiz from './Quiz'
import mockQuiz from '../Utils/mockQuizData'

describe('Quiz slide modes', () => {
  it('should display an image and four answer choices when image mode is on', () => {
    const { getByRole, getAllByRole } = render(
      <Router>
        <Quiz
          currentQuiz={mockQuiz}
          mode
          round={0}
          checkRoundAnswer={jest.fn()}
          quizLength={10}
          quizScore={0}
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
          quizLength={10}
          quizScore={0}
        />
      </Router>
    )

    const quizPromptHeading = getByRole('heading', { name: 'Parnassia palustris' })
    const answerChoiceButtons = getAllByRole('button')

    expect(quizPromptHeading).toBeInTheDocument()
    expect(answerChoiceButtons).toHaveLength(4)
  })
})

describe('user flow through quiz', () => {
  const quizPage = (
    <Router>
      <Quiz
        currentQuiz={mockQuiz}
        mode
        round={0}
        checkRoundAnswer={jest.fn()}
        quizLength={10}
        quizScore={0}
      />
    </Router>
  )

  it.skip('should have ten rounds and keep score', async () => {
    const {
      getByRole, getByText, findByRole, findByText, debug
    } = render(quizPage)
    const roundImage = getByRole('img', { name: 'Parnassia palustris' })
    const roundAnswer = getByRole('button', { name: 'marsh grass of Parnassus' })
    let scoreTracker = getByText('0 of 10')

    expect(scoreTracker).toBeInTheDocument()
    expect(roundImage).toBeInTheDocument()
    expect(roundAnswer).toBeInTheDocument()

    fireEvent.click(roundAnswer)
    debug()
    scoreTracker = await findByText('1 of 10')
    expect(scoreTracker).toBeInTheDocument()
  })
})
