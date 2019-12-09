
import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
const reducers=combineReducers({
    
})
let store=createStore(reducers,applyMiddleware(thunk))
export default store