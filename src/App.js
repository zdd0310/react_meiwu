import "./App.css"
import React,{Component} from "react"

import "antd/dist/antd.css"
import {getList} from "./api/api"

class App extends Component{
  render(){
    return (
      <div>App</div>
    )
  }

  componentDidMount(){
    getList().then(res=>{
      console.log(res.data.data.list)
    })
    // axios("/api/showcase/goodsList.json",{
    //   params : {
    //     tagId: 108071946,
    //     page: 1,
    //     pageSize: 8,
    //     goodsIds: "",
    //     goodsFrom: 1,
    //     isAdv: 0,
    //     offlineId: 0,
    //     goodsNumber: 8,
    //     json: 1,
    //     kdt_id:17879790
    //   }
    // })
    //   .then(res=>{
    //     console.log(res)
    //   }).catch(err=>{
    //     console.log(err)
    //   })
  }
}
export default App