import * as types from './types'
import { State, ContentAction, Picture } from './models'

const DEFAULT_STATE: State = {
  pictures: [] as Picture[],
  loading: false,
  hasNextPage: true,
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]') as string[],
  query: 'random',
  page: 0,
}

const contentReducer = (
  state: State = DEFAULT_STATE,
  action: ContentAction,
): State => {
  const { type, payload } = action

  switch (type) {
    case types.GET_REQUEST:
      return { ...state, loading: true }
    case types.GET_SUCCESS:
      return {
        ...state,
        pictures: [...state.pictures, ...(payload?.pictures || [])],
        hasNextPage: !!payload?.hasNextPage,
        page: ++state.page,
        loading: false,
      }
    case types.GET_ERROR:
      return { ...state, loading: false, hasNextPage: false }
    case types.TOGGLE_FAVORITE:
      const id = payload?.id
      if (id) {
        const favorites = state.favorites.includes(id)
          ? state.favorites.filter((i) => i !== id)
          : [...state.favorites, id]
        localStorage.setItem('favorites', JSON.stringify(favorites))
        return { ...state, favorites }
      } else return state
    case types.SEARCH: {
      if (payload?.query)
        return { ...state, query: payload.query, pictures: [], page: 0 }
      else return state
    }
    default:
      return state
  }
}

export default contentReducer
