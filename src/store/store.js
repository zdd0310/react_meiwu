
import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import IndexReducer from "../page/index/reducer/reducer"
import MustReducer from "../page/classify/reducer/mustreducer"
import NewReducer from "../page/classify/reducer/newreducer"
const reducers=combineReducers({
    IndexReducer,
    MustReducer,
    NewReducer
})
let store=createStore(reducers,applyMiddleware(thunk))
export default store