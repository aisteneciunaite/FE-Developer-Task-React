import * as types from './types'
import unsplash from '../unsplash'
import { AppDispatch } from '../app/store'

export const fetchContent = (page: number, query = 'random') => async (
  dispatch: AppDispatch,
) => {
  dispatch({ type: types.GET_REQUEST })
  setTimeout(async () => {
    try {
      const res = await unsplash.search.getPhotos({
        query,
        page,
        perPage: 30,
        orientation: 'landscape',
      })
      if (res.status !== 200 || !res.response) throw new Error('response error')
      dispatch({
        type: types.GET_SUCCESS,
        payload: {
          pictures: res.response.results,
          hasNextPage: res.response.total_pages > page,
        },
      })
    } catch (error) {
      dispatch({ type: types.GET_ERROR })
      alert(error.message)
    }
  }, 500)
}

export const toggleFavoriteById = (id: string) => ({
  type: types.TOGGLE_FAVORITE,
  payload: { id },
})

export const search = (query: string) => ({
  type: types.SEARCH,
  payload: { query },
})
