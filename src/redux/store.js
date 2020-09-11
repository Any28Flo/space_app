import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import userReducer from "./userDuck"
import launchesReducer , {getCharactersAction} from "./launchesDuck"
import thunk from "redux-thunk";
let rootReducer = combineReducers({
    user: userReducer,
    launches : launchesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(rootReducer,
      composeEnhancers(applyMiddleware(thunk))
  )
    getCharactersAction()(store.dispatch , store.getState)
    return store
}