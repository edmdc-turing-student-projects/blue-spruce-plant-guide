import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <section>
      <h1>Blue Spruce Plant Guide</h1>
      <NavLink to="/plantIndex">
        Plant Index
      </NavLink>
      <NavLink to="/quiz">
        Quiz
      </NavLink>
    </section>
  )
}
