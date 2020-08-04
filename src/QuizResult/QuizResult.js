import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './QuizResult.scss'

export default function QuizResults({ username, score, startNewRound }) {
  return (
    <section className={styles.quizResults}>
      <h3>{username}</h3>
      <h2 title="score">
        You got:
        {score}
        {' '}
        of 10 correct
      </h2>
      <NavLink to="/quiz">
        <button
          type="submit"
          onClick={() => startNewRound()}
        >
          Start Another Quiz
        </button>
      </NavLink>
    </section>
  )
}

QuizResults.propTypes = {
  username: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}
