import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter as Router } from 'react-router-dom'
import Header from './Header'

describe('App header', () => {
  it('should have a title', () => {
    const { getByRole } = render(
      <Router>
        <Header />
      </Router>
    )
    const appTitle = getByRole('heading', { name: 'Blue Spruce Plant Guide' })
    expect(appTitle).toBeInTheDocument()
  })

  it('should have a nav bar with two links', () => {
    const { getByRole } = render(
      <Router>
        <Header />
      </Router>
    )
    const plantIndexLink = getByRole('link', { name: 'Plant Index' })
    const quizLink = getByRole('link', { name: 'Quiz' })

    expect(plantIndexLink).toBeInTheDocument()
    expect(quizLink).toBeInTheDocument()
  })
})
