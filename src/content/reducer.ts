import { AnyAction } from 'redux'
import { Basic } from 'unsplash-js/dist/methods/photos/types'
import * as types from './types'
import { State } from './model'

const DEFAULT_STATE: State = {
  pictures: [] as Basic[],
  loading: false,
  hasNextPage: true,
}

const contentReducer = (
  state: State = DEFAULT_STATE,
  action: AnyAction,
): State => {
  const { type, payload } = action

  switch (type) {
    case types.GET_REQUEST:
      return { ...state, loading: true }
    case types.GET_SUCCESS:
      return {
        ...state,
        pictures: [...state.pictures, ...payload.pictures],
        hasNextPage: payload.hasNextPage,
        loading: false,
      }
    case types.GET_ERROR:
      return { ...state, loading: false, hasNextPage: false }
    default:
      return state
  }
}

export default contentReducer
