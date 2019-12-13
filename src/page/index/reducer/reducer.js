import {getList,getHotList} from "../../../api/api"
const GET_INDEX_LIST="GET_INDEX_LIST"
const GET_HOT_LIST="GET_HOT_LIST"
const indexState={
    listData:[],
    hotData:[]
}
export default (state=indexState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case GET_INDEX_LIST:
            newState.listData=action.data
            return newState;
        case GET_HOT_LIST:
            newState.hotData=action.data
            return newState;
        default:
            return state
    }
}
const setlistData=(data)=>{
    return{
        type:GET_INDEX_LIST,
        data
    }
}
const setHotlistData=(data)=>{
    return{
        type:GET_HOT_LIST,
        data
    }
}
export const getIndexList=()=>{
    return (dispatch)=>{
        getList().then(res=>{
            console.log(res.data.data.list)
            dispatch(setlistData(res.data.data.list))
        })   
    }
}
export const gethotList=()=>{
    return (dispatch)=>{
        getHotList().then(res=>{
            console.log(res.data.data.list)
            dispatch(setHotlistData(res.data.data.list))
        })   
    }
}