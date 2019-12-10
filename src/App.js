import "./App.css"
import React,{Component} from "react"

import "antd/dist/antd.css"
import axios from "axios"

class App extends Component{
  render(){
    return (
      <div>App</div>
    )
  }

  componentDidMount(){
    axios("/api/goods-api/goodsByTagAlias.json?pageSize=10&page=1&alias=9rs2lr3f&offlineId=0&json=1")
      .then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
  }
}
export default App