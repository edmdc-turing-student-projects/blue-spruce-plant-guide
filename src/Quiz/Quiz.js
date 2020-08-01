import React from 'react'

export default function Quiz({
  currentQuiz, mode, round, checkRoundAnswer, calculateScore, scoreTracker
}) {
  const {
    correctAnswer: {
      image_url, scientific_name, id
    },
    roundAnswers
  } = currentQuiz[round]

  const createQuizSlide = () => {
    const quizPrompt = (mode) ? (
      <img
        src={`${image_url}`}
        alt={`${scientific_name}`}
        id={id}
      />
    ) : (
      <h3 title={`${scientific_name}`} id={id}>
        {`${scientific_name}`}
      </h3>
    )
    const answerChoices = roundAnswers.map((answer) => (
      <button id={answer.id} type="button" onClick={(event) => checkRoundAnswer(event)}>
        {answer.common_name}
      </button>
    ))

    return (
      <>
        {quizPrompt}
        {answerChoices}
      </>
    )
  }

  const displayQuizResults = () => {
    const score = scoreTracker.reduce((totalScore, questionScore) => {
      totalScore += questionScore
      return totalScore
    }, 0)

    return (
      <>
        <h2>
          {' '}
          You got:
          {score}
          /10 correct
        </h2>
      </>
    )
  }

  return (
    <>
      {round < 10 && createQuizSlide()}
      {round === 10 && displayQuizResults()}
    </>
  )
}
