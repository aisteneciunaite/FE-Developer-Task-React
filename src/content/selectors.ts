import { State } from './models'

export const items = (state: State) => state.pictures
export const loading = (state: State) => state.loading
export const hasNextPage = (state: State) => state.hasNextPage
export const favorites = (state: State) => state.favorites
export const isFavoriteById = (state: State, id: string): boolean =>
  state.favorites.includes(id)
