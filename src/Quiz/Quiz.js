import React from 'react'

export default function Quiz({ currentPlant, mode }) {
  const createQuizPrompt = () => ((mode) ? (
    <img src={`${currentPlant.image_url}`} alt="Quiz prompt" />
  ) : (
    <h3 title={`${currentPlant.scientific_name}`}>{`${currentPlant.scientific_name}`}</h3>
  ))

  return (
    <>
      {createQuizPrompt()}
    </>
  )
}
