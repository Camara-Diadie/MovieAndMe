const initialState = { favoritesFilm: [] }

function toggleFavorite(state = initialState, action) {
  let nexState
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const favoritesFilmIndex = state.favoritesFilm.findIndex(
        (item) => item.id === action.value.id
      )
      if (favoritesFilmIndex !== -1) {
        nexState = {
          ...state,
          favoritesFilm: state.favoritesFilm.filter(
            (item, index) => index !== favoritesFilmIndex
          ),
        }
      } else {
        nexState = {
          ...state,
          favoritesFilm: [...state.favoritesFilm, action.value],
        }
      }
      return nexState || state
    default:
      return state
  }
}
export default toggleFavorite
