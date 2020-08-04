import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.scss'

export default function Header() {
  return (
    <section className={styles.header}>
      <NavLink
        activeClassName={styles.activeHeader}
        className={styles.headerLink}
        to="/"
      >
        <h1>Blue Spruce Plant Guide</h1>
      </NavLink>
      <nav className={styles.navBar}>
        <NavLink
          className={styles.leftLink}
          activeClassName={styles.activeLink}
          to="/plantIndex"
        >
          Plant Index
        </NavLink>
        <NavLink
          className={styles.rightLink}
          activeClassName={styles.activeLink}
          to="/quiz"
        >
          Quiz
        </NavLink>
      </nav>
    </section>
  )
}
