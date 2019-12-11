
import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import IndexReducer from "../page/index/reducer/reducer"
import MustReducer from "../page/classify/reducer/reducer"
const reducers=combineReducers({
    IndexReducer,
    MustReducer
})
let store=createStore(reducers,applyMiddleware(thunk))
export default store