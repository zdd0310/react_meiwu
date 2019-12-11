
import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import IndexReducer from "../page/index/reducer/reducer"
const reducers=combineReducers({
    IndexReducer
})
let store=createStore(reducers,applyMiddleware(thunk))
export default store