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
    case 'quizMode': {
      return {
        ...state,
        imageMode: action.payload
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
