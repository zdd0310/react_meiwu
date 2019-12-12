import {getFengweiList} from "../../../api/api"
const GET_FENGWEI_LIST="GET_FENGWEI_LIST"
const fengweiState={
    listData:[],
    
}
export default (state=fengweiState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case GET_FENGWEI_LIST:
            newState.listData=action.data
            return newState;
        default:
            return state
    }
}
const setlistData=(data)=>{
    return{
        type:GET_FENGWEI_LIST,
        data
    }
}
export const getfengweiList=()=>{
    return (dispatch)=>{
        getFengweiList().then(res=>{
            console.log(res.data.data.list)
            dispatch(setlistData(res.data.data.list))
        })   
    }
}