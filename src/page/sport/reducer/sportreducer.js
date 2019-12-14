import {getSportList} from "../../../api/api"    
const GET_SPORT_LIST="GET_SPORT_LIST"
const sportState={
    listData:[]
}
export default (state=sportState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case GET_SPORT_LIST:
            newState.listData=action.data
            return newState;
        default:
            return state
    }
}
const setsportlistData=(data)=>{
    return{
        type:GET_SPORT_LIST,
        data
    }
}
export const getSportDataList=(tagId)=>{
    return (dispatch)=>{
        getSportList(tagId).then(res=>{
            console.log(res.data.data.list)
            dispatch(setsportlistData(res.data.data.list))
        })   
    }
}