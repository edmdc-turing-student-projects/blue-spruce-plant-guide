import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <header>
      <h1>Quiz By:</h1>
      <NavLink to="/quiz">
        <button type="button">Images</button>
      </NavLink>
      <NavLink to="/quiz">
        <button type="button">Scientific Name</button>
      </NavLink>
    </header>
  )
}
