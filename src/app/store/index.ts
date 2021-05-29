import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import content from '../../content'

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
})

const store = createStore(
  content.reducer,
  process.env.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(thunk))
    : applyMiddleware(thunk),
)

export type AppDispatch = typeof store.dispatch

export default store
