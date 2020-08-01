import React from 'react'

export default function Quiz({
  currentQuiz, mode, round, checkRoundAnswer
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
      <button type="button" onClick={(event) => checkRoundAnswer(event)}>
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

  return (
    <>
      {round < 10 ? createQuizSlide() : null}
    </>
  )
}
