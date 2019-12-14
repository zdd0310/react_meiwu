import {getBlankMoretList} from "../../../api/api"    
const GET_MORE_LIST="GET_MORE_LIST"
const moreState={
    listData:[]
}
export default (state=moreState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case GET_MORE_LIST:
            newState.listData=action.data
            return newState;
        default:
            return state
    }
}
const setmorelistData=(data)=>{
    return{
        type:GET_MORE_LIST,
        data
    }
}
export const getMoreList=()=>{
    return (dispatch)=>{
        getBlankMoretList().then(res=>{
            console.log(res.data.data.list)
            dispatch(setmorelistData(res.data.data.list))
        })   
    }
}