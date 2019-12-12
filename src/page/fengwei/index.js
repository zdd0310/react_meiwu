import React,{Component} from "react"
import {connect} from "react-redux"
import "../../assets/css/fengwei/fengwei.css"
import Footer from "../public/footer"
import Jiao from "./component/jiao"
import {Icon} from "antd"
import {getfengweiList} from "./reducer/reducer"
class fengwei extends Component{
    componentDidMount(){
        this.props.getfengweiList("9rs2lr3f")
    }
    render(){
        const {state,getfengweiList}=this.props
        console.log(state.listData)
        return(
            <div className="fengwei">
                <div className="header">
                    <a onClick={getfengweiList.bind(this,"9rs2lr3f")}>地方风味</a>
                    <a onClick={getfengweiList.bind(this,"pj1ublt6")}>水果</a>
                    <a onClick={getfengweiList.bind(this,"nyfltj111")}>甜品</a>
                    <a onClick={getfengweiList.bind(this,"w43bj5jm")}>酒类</a>
                </div>
                <div className="content">
                    <ul>
                        {
                            state.listData.map(item=>{
                                return(
                                    <li key={item.id}>
                                    <img src={item.imageUrl}/>
                                    <div className="right">
                                        <h3>{item.title}</h3>
                                        <div className="cart"><p><span>￥</span>{item.price}</p><a><Icon type="shopping-cart" /></a></div>
                                    </div>
                                </li>
                                )
                            })
                        } 
                    </ul>
                    <Jiao/>
                    </div> 
                <Footer/>
            </div>
        )

    }
}
const mapStateProps=(state)=>{
    return {
        state:state.FengweiReducer
    }
}
export default connect(mapStateProps,{getfengweiList})(fengwei)


