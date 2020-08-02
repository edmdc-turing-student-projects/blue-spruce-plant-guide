import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './Home.scss'

export default function Home({ chooseQuizMode, handleChange }) {
  return (
    <form
      className={styles.form}
    >
      <input
        className={styles.username}
        type="text"
        placeholder="Enter your name:"
        onChange={
          (event) => handleChange(event, 'username')
        }
      />
      <select
        required
        id="quizMode"
        name="quizMode"
        className={styles.selectMenu}
      >
        <option selected>Quiz Mode</option>
        <option value>Images</option>
        <option value={false}>Scientific Name</option>
      </select>
      {/* <NavLink to="/quiz"> */}
      {/*   <button */}
      {/*     type="button" */}
      {/*     onClick={() => chooseQuizMode(true)} */}
      {/*   > */}
      {/*     Images */}
      {/*   </button> */}
      {/* </NavLink> */}
      {/* <NavLink to="/quiz"> */}
      {/*   <button */}
      {/*     type="button" */}
      {/*     onClick={() => chooseQuizMode(false)} */}
      {/*   > */}
      {/*     Scientific Name */}
      {/*   </button> */}
      {/* </NavLink> */}
      <NavLink to="./quiz">
        <button
          type="submit"
          className={styles.quizStartButton}
          onClick={(event) => console.log(typeof event.target.closest('form').quizMode.value)}
        >
          Start Quiz
        </button>
      </NavLink>
    </form>
  )
}

Home.propTypes = {
  chooseQuizMode: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}
