import {getList} from "../../../api/api"
const GET_INDEX_LIST="GET_INDEX_LIST"
const indexState={
    listData:[]
}
export default (state=indexState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case GET_INDEX_LIST:
            newState.listData=action.data
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
export const getIndexList=()=>{
    return (dispatch)=>{
        getList().then(res=>{
            console.log(res.data.data.list)
            dispatch(setlistData(res.data.data.list))
        })   
    }
}