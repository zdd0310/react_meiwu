import {getClassifyNewList} from "../../../api/api"
const GET_NEW_LIST="GET_NEW_LIST"
const newState={
    listData:[]
}
export default (state=newState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case GET_NEW_LIST:
            newState.listData=action.data
            return newState;
        default:
            return state
    }
}
const setNewlistData=(data)=>{
    return{
        type:GET_NEW_LIST,
        data
    }
}
export const getNewList=()=>{
    return (dispatch)=>{
        getClassifyNewList().then(res=>{
            console.log(res.data.data.list)
            dispatch(setNewlistData(res.data.data.list))
        })   
    }
}