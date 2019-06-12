import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './reducers'

const logger = createLogger({ predicate: (getState, store) => process.env.NODE_ENV !== 'production' })

function configureStore (initalState) {
  const enhancer = compose(
    applyMiddleware(thunk, logger)
  )
  return createStore(reducers, initalState, enhancer)
}

export default configureStore({})
