import React, { Component } from 'react'
import {getNewList} from "../reducer/newreducer"
import {connect} from "react-redux"

class TabsNew extends Component {
    componentDidMount(){
        this.props.getNewList()
    }
    render() {
        const {state}=this.props
        console.log(state)
        return (
            <ul className="TabsNew">
                {
                    state.listData.map(item=>{
                        return(
                            <li className="goods" key={item.id}>
                                <img className="pic" src={item.imageUrl} />
                                <div className="txt">
                                    <span className="title">
                                        {item.title}
                                    </span>
                                    <p className="sub-title">
                                        {item.subTitle}
                                    </p>
                                    <div className="info">
                                        <span className="price">￥{item.price}</span>
                                        <span className="buy">购买</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
const mapStateProps=(state)=>{
    return {
        state:state.NewReducer
    }
}
export default connect(mapStateProps,{getNewList})(TabsNew)