import React, { Component } from 'react'
import {getMustList} from "../reducer/mustreducer"
import {connect} from "react-redux"
 import {withRouter} from "react-router-dom"

class TabsMust extends Component {
    componentDidMount(){
        this.props.getMustList()
    }
    clickToDetail=(item)=>{
        this.props.history.push("/detail",{
            item
        })
    }
    render() {
        const {state}=this.props
        console.log(this.props)
        // console.log(state)
        return (
            <ul className="TabsMust"> 
                {
                    
                    state.listData.map(item=>{
                        return (
                            <li className="goods" onClick={this.clickToDetail.bind(this,item)} key={item.id}>
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
export default connect(mapStateProps,{getMustList})(withRouter(TabsMust))
