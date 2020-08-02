import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.scss'

export default function Header() {
  return (
    <section className={styles.header}>
      <h1 className={styles.headerTitle}>Blue Spruce Plant Guide</h1>
      <nav className={styles.navBar}>
        <NavLink
          className={styles.inactiveLink}
          activeClassName={styles.activeLink}
          to="/plantIndex"
        >
          Plant Index
        </NavLink>
        <NavLink
          className={styles.inactiveLink}
          activeClassName={styles.activeLink}
          to="/quiz"
        >
          Quiz
        </NavLink>
      </nav>
    </section>
  )
}
