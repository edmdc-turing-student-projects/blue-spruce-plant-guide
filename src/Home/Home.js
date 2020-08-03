import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './Home.scss'

export default function Home({ setQuizSettings, handleChange }) {
  return (
    <form
      className={styles.form}
    >
      <input
        className={styles.username}
        type="text"
        id="username"
        placeholder="Introduce yourself:"
        onChange={
          (event) => handleChange(event, 'username')
        }
      />
      <select
        required
        id="quizMode"
        title="quizMode"
        className={styles.selectMenu}
        placeholder="Quiz by..."
      >
        <option value>Images</option>
        <option value={false}>Scientific Name</option>
      </select>
      <NavLink to="/quiz">
        <button
          type="submit"
          className={styles.quizStartButton}
          onClick={(event) => setQuizSettings(event)}
        >
          Start Quiz
        </button>
      </NavLink>
    </form>
  )
}

Home.propTypes = {
  setQuizSettings: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}
