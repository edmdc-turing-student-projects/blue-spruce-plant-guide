import React from 'react'
import PropTypes from 'prop-types'
import styles from './QuizResult.scss'

export default function QuizResults({ username, score }) {
  return (
    <section className={styles.quizResults}>
      <h3>{username}</h3>
      <h2 title="score">
        You got:
        {score}
        {' '}
        of 10 correct
      </h2>
      <button type="submit" onClick={() => {}}>Start Another Quiz</button>
    </section>
  )
}

QuizResults.propTypes = {
  username: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}
