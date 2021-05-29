import { Basic } from 'unsplash-js/dist/methods/photos/types'

export interface State {
  pictures: Basic[]
  loading: boolean
  hasNextPage: boolean
}
