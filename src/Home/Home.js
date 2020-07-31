import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home({ chooseQuizMode }) {
  return (
    <header>
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
    </header>
  )
}
