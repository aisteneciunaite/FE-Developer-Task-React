import * as types from './types'
import unsplash from '../unsplash'

export const fetchContent = (page: number) => async (dispatch: any) => {
  dispatch({ type: types.GET_REQUEST })
  setTimeout(async () => {
    try {
      const res = await unsplash.search.getPhotos({
        query: 'random',
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
