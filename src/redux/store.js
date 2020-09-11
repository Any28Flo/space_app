import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import userReducer from "./userDuck"
import thunk from "redux-thunk";
let rootReducer = combineReducers({
    user: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
   /* const store = createStore(rootReducer,compose(
        applyMiddleware(ReduxThunk.withExtraArgument(thunk)),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));*/
  const store = createStore(rootReducer,
      composeEnhancers(applyMiddleware(thunk)))
}