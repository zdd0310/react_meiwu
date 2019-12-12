import React, { Component } from 'react'
import {getMustList} from "../reducer/mustreducer"
import {connect} from "react-redux"
class TabsMust extends Component {
    componentDidMount(){
        this.props.getMustList()
    }
    render() {
        const {state}=this.props
        console.log(state)
        return (
            <ul className="TabsMust">
                {
                    state.listData.map(item=>{
                        return (
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
        state:state.MustReducer
    }
}
export default connect(mapStateProps,{getMustList})(TabsMust)