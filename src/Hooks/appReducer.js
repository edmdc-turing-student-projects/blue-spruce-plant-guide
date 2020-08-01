import quizGenerator from '../Utils/quizGenerator'

export default function appReducer(state, action) {
  switch (action.type) {
    case 'getPlants': {
      return {
        ...state,
        plantCatalog: [...action.payload]
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
        scoreTracker: [...state.scoreTracker, action.payload],
        round: state.round + 1
      }
    }
    case 'checkScore': {
      return {
        ...state,
        quizScore: action.payload
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
