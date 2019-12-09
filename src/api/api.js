import axios from "./axios"

export const getList=()=>{
    return axios("/example/1575336106332").then(res=>{
        console.log(res.data)
    })
}