import React from 'react'
import PropTypes from 'prop-types'
import styles from './Quiz.scss'

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
        className={styles.promptImage}
        src={`${image_url}`}
        alt={`${scientific_name}`}
        id={id}
      />
    ) : (
      <article
        className={styles.promptScienceName}
      >
        <h3
          title={`${scientific_name}`}
          id={id}
        >
          {`${scientific_name}`}
        </h3>
      </article>
    )
    const answerChoices = roundAnswers.map((answer) => (
      <button
        id={answer.id}
        type="button"
        className={styles.answerChoice}
        onClick={(event) => checkRoundAnswer(event)}
      >
        {answer.common_name ? answer.common_name : answer.scientific_name}
      </button>
    ))

    return (
      <article className={styles.quizSlide}>
        {quizPrompt}
        <div className={styles.answerChoices}>
          {answerChoices}
        </div>
      </article>
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
    <section className={styles.quizPage}>
      {round < 10 && createQuizSlide()}
    </section>
  )
}

Quiz.propTypes = {
  currentQuiz: PropTypes.array.isRequired,
  mode: PropTypes.bool.isRequired,
  round: PropTypes.number.isRequired,
  checkRoundAnswer: PropTypes.func.isRequired,
  calculateScore: PropTypes.func.isRequired,
  scoreTracker: PropTypes.array.isRequired
}
