import { Basic } from 'unsplash-js/dist/methods/photos/types'
import { Action } from 'redux'

export type Picture = Basic

export interface State {
  pictures: Picture[]
  loading: boolean
  hasNextPage: boolean
}

export interface ContentAction extends Action {
  payload?: {
    pictures: Picture[]
    hasNextPage: boolean
  }
}
