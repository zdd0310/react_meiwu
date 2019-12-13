import React, { Component } from 'react'
import {getMoreList} from "../reducer/blankmore"
import {connect} from "react-redux"


class ShopcarMore extends Component {
    componentDidMount(){
        this.props.getMoreList()
    }
    render() {
        const {state}= this.props
        return (
            <ul className="blankList">
                {
                    state.listData.map(item=>{
                        return(
                            <li className="blank-detail" key={item.id}>
                                <img className="blankpic" src={item.imageUrl}/>
                                <div className="describe">
                                    <span className="blank-title">
                                        {item.title}
                                    </span>
                                    <div className="blank-info">
                                        <span className="blank-price">￥{item.price}</span>
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
    return{
        state:state.BlankMoreReducer
    }
}
export default connect (mapStateProps,{getMoreList})(ShopcarMore)