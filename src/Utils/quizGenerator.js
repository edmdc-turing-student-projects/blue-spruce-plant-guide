function randomAnswerCreator(plantCatalog, i = 0, answerChoices = []) {
  if (i === 4) {
    return answerChoices
  }

  const newAnswer = plantCatalog[Math.floor(Math.random() * plantCatalog.length)]

  if (answerChoices.includes(newAnswer)) {
    return randomAnswerCreator(plantCatalog, i, answerChoices)
  }

  if (i < 4 && !answerChoices.includes(newAnswer)) {
    const newAnswerChoices = [...answerChoices, newAnswer]
    return randomAnswerCreator(plantCatalog, i + 1, newAnswerChoices)
  }

  return 'Oh no! Infinite loop warning!!'
}

export default function quizGenerator(plantCatalog, round = 0, quizKey = []) {
  if (round === 10) {
    return quizKey
  }

  if (round < 10) {
    const roundAnswers = randomAnswerCreator(plantCatalog)
    const correctAnswer = roundAnswers[Math.floor(Math.random() * 4)]
    const modifiedPlantCatalog = plantCatalog.filter(
      (plant) => plant.id !== correctAnswer.id
    )
    const newKey = [...quizKey, { roundAnswers, correctAnswer }]
    return quizGenerator(modifiedPlantCatalog, round + 1, newKey)
  }

  return 'Break the infinite loop!'
}
