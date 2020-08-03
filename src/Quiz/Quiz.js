import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './Quiz.scss'

export default function Quiz({
  currentQuiz,
  mode,
  round,
  checkRoundAnswer,
  quizLength,
  quizScore
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
        key={answer.id}
        type="button"
        className={styles.answerChoice}
        onClick={(event) => checkRoundAnswer(event)}
      >
        {answer.common_name ? answer.common_name : answer.scientific_name}
      </button>
    ))

    return (
      <>
        <article className={styles.quizSlide}>
          {quizPrompt}
          <div className={styles.answerChoices}>
            {answerChoices}
          </div>
        </article>
        <article className={styles.userScore}>
          <p>
            <b>Your score:</b>
            {`${quizScore} of ${quizLength}`}
          </p>
        </article>
      </>
    )
  }

  return (
    <section className={styles.quizPage}>
      {(round < quizLength) && createQuizSlide()}
      {round === quizLength && <Redirect to="/results" />}
    </section>
  )
}

Quiz.propTypes = {
  currentQuiz: PropTypes.array.isRequired,
  mode: PropTypes.bool.isRequired,
  round: PropTypes.number.isRequired,
  checkRoundAnswer: PropTypes.func.isRequired,
  quizLength: PropTypes.number.isRequired,
  quizScore: PropTypes.number.isRequired,
  toggleLoading: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}
