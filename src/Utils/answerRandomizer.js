export default function randomAnswerCreator(plantCatalog, i = 0, answerChoices = []) {
  if (i === 4) {
    const correctAnswer = answerChoices[Math.floor(Math.random() * 4)]
    return { answerChoices, correctAnswer }
  }

  const newAnswer = plantCatalog[Math.floor(Math.random() * plantCatalog.length)]

  if (answerChoices.includes(newAnswer)) {
    return randomAnswerCreator(plantCatalog, i, answerChoices)
  }

  if (i < 4 && !answerChoices.includes(newAnswer)) {
    const newAnswerChoices = [...answerChoices, newAnswer]
    return randomAnswerCreator(plantCatalog, i + 1, newAnswerChoices)
  }
}
