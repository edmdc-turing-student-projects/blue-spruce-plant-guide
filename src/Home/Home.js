import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Home({ chooseQuizMode, handleChange }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Enter your name:"
        onChange={
          (event) => handleChange(event, 'username')
        }
      />
      <h1>Quiz By:</h1>
      <NavLink to="/quiz">
        <button
          type="button"
          onClick={() => chooseQuizMode(true)}
        >
          Images
        </button>
      </NavLink>
      <NavLink to="/quiz">
        <button
          type="button"
          onClick={() => chooseQuizMode(false)}
        >
          Scientific Name
        </button>
      </NavLink>
    </form>
  )
}

Home.propTypes = {
  chooseQuizMode: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}
