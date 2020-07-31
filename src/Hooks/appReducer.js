export default function appReducer(state, action) {
  switch (action.type) {
    case 'getPlants': {
      return {
        ...state,
        plantCatalog: [...action.payload]
      }
    }
    case 'quizMode': {
      return {
        ...state,
        quizMode: action.payload
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
