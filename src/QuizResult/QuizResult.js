import React from 'react'
import PropTypes from 'prop-types'

export default function QuizResults({ username, score }) {
  return (
    <section className="none">
      <h3>{username}</h3>
      <h2 title="score">
        You got:
        {score}
        /10 correct
      </h2>
    </section>
  )
}

QuizResults.propTypes = {
  username: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}
