import quizGenerator from '../Utils/quizGenerator'

export default function appReducer(state, action) {
  switch (action.type) {
    case 'getPlants': {
      return {
        ...state,
        plantCatalog: [...action.payload]
      }
    }
    case 'setQuizSettings': {
      const { quizMode, username } = action.payload
      return {
        ...state,
        imageMode: quizMode,
        username
      }
    }
    case 'handleChange': {
      return {
        ...state,
        [action.fieldName]: action.payload
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
        quizScore: state.quizScore + action.payload,
        round: state.round + 1
      }
    }
    case 'resetQuiz': {
      const newQuiz = quizGenerator(state.plantCatalog)
      return {
        ...state,
        quizScore: 0,
        round: 0,
        currentQuiz: newQuiz
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
