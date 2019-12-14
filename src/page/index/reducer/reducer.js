import {getList,getHotList,getPeishiList} from "../../../api/api"
const GET_INDEX_LIST="GET_INDEX_LIST"
const GET_HOT_LIST="GET_HOT_LIST"
const GET_PEISHISCR_LIST="GET_PEISHISCR_LIST"
const GET_PEISHILI_LIST="GET_PEISHILI_LIST"
const indexState={
    listData:[],
    hotData:[],
    peishiData:{
        scrollData:[],
        liData:[]
    }
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
        case GET_PEISHISCR_LIST:
            newState.peishiData.scrollData=action.data
            return newState;
        case GET_PEISHILI_LIST:
            newState.peishiData.liData=action.data
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
const setPeishiScrlistData=(data)=>{
    return{
        type:GET_PEISHISCR_LIST,
        data
    }
}
const setPeishiLilistData=(data)=>{
    return{
        type:GET_PEISHILI_LIST,
        data
    }
}
export const getIndexList=()=>{
    return (dispatch)=>{
        getList().then(res=>{
            // console.log(res.data.data.list)
            dispatch(setlistData(res.data.data.list))
        })   
    }
}
export const gethotList=()=>{
    return (dispatch)=>{
        getHotList(91208886,8,8).then(res=>{
            // console.log(res.data.data.list)
            dispatch(setHotlistData(res.data.data.list))
        })   
    }
}
export const getPeishiscrList=()=>{
    return (dispatch)=>{
        getPeishiList().then(res=>{
            console.log(res.data.data.list)
            dispatch(setPeishiScrlistData(res.data.data.list))
        })   
    }
}
export const getPeishiliList=()=>{
    return (dispatch)=>{
        getHotList(108071966,8,8).then(res=>{
            console.log(res.data.data.list)
            dispatch(setPeishiLilistData(res.data.data.list))
        })   
    }
}