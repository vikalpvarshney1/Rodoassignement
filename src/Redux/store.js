import middleware from "./middleware"
import reducer from "./reducer"
import { createStore } from 'redux'
export const store = createStore(reducer, middleware)