import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import QuizResults from '../QuizResult/QuizResult'
import styles from './Quiz.scss'

export default function Quiz({
  currentQuiz, mode, round, checkRoundAnswer, quizLength, calculateScore
}) {
  const {
    correctAnswer: {
      image_url, scientific_name, id
    },
    roundAnswers
  } = (currentQuiz[round]) ? currentQuiz[round] : currentQuiz[round - 1]

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

  const createQuizResult = () => (
    <section className="none">
      <h3>Can&apost tell you just yet</h3>
      <>
        <h2>
          You got:
          {calculateScore()}
          /10 correct
        </h2>
      </>
    </section>
  )

  return (
    <section className={styles.quizPage}>
      {(round < quizLength) && createQuizSlide()}
      {round === quizLength
          && (<Redirect to="/results" />
          )}
    </section>
  )
}

Quiz.propTypes = {
  currentQuiz: PropTypes.array.isRequired,
  mode: PropTypes.bool.isRequired,
  round: PropTypes.number.isRequired,
  checkRoundAnswer: PropTypes.func.isRequired,
  quizLength: PropTypes.number.isRequired,
  calculateScore: PropTypes.func.isRequired
}
