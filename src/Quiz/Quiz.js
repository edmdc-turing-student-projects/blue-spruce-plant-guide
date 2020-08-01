import React from 'react'
import PropTypes from 'prop-types'

export default function Quiz({
  currentQuiz, mode, round, checkRoundAnswer
}) {
  const {
    correctAnswer: {
      image_url, scientific_name, id
    },
    roundAnswers
  } = currentQuiz[round]

  const createQuizPrompt = () => ((mode) ? (
    <img
      src={`${image_url}`}
      alt={`${scientific_name}`}
      id={id}
    />
  ) : (
    <h3 title={`${scientific_name}`} id={id}>
      {`${scientific_name}`}
    </h3>
  ))

  const createAnswerChoices = () => roundAnswers.map((answer) => (
    <button type="button" onClick={(event) => checkRoundAnswer(event)}>
      {answer.common_name}
    </button>
  ))

  return (
    <>
      {createQuizPrompt()}
      {createAnswerChoices()}
    </>
  )
}
