import { State } from './models'

export const items = (state: State) => state.pictures
export const loading = (state: State) => state.loading
export const hasNextPage = (state: State) => state.hasNextPage
