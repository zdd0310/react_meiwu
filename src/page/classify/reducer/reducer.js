import {getClassifyMustList} from "../../../api/api"
const GET_MUST_LIST="GET_MUST_LIST"
const mustState={
    listData:[]
}
export default (state=mustState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case GET_MUST_LIST:
            newState.listData=action.data
            return newState;
        default:
            return state
    }
}
const setMustlistData=(data)=>{
    return{
        type:GET_MUST_LIST,
        data
    }
}
export const getMustList=()=>{
    return (dispatch)=>{
        getClassifyMustList().then(res=>{
            console.log(res.data.data.list)
            dispatch(setMustlistData(res.data.data.list))
        })   
    }
}