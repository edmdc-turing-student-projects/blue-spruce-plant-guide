import quizGenerator from '../Utils/quizGenerator'

export default function appReducer(state, action) {
  switch (action.type) {
    case 'getPlants': {
      return {
        ...state,
        plantCatalog: [...action.payload]
      }
    }
    case 'setCurrentPlant': {
      const randomIndex = Math.floor(Math.random() * state.plantCatalog.length)
      return {
        ...state,
        currentPlant: { ...state.plantCatalog[randomIndex] }
      }
    }
    case 'setQuizMode': {
      return {
        ...state,
        imageMode: action.payload
      }
    }
    case 'createQuiz': {
      const currentQuiz = quizGenerator(state.plantCatalog)
      return {
        ...state,
        currentQuiz
      }
    }
    case 'roundCheck': {
      return {
        ...state,
        score: [...state.score, action.payload],
        round: state.round + 1
      }
    }
    case 'error': {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return { state }
  }
}
