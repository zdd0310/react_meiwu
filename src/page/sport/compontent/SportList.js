import React, { Component } from 'react'
import { Icon } from 'antd';
import {getSportDataList} from "../reducer/sportreducer"
import {connect} from "react-redux"


class SportList extends Component {
    componentDidMount(){
        this.props.getSportDataList()
    }
    render() {
        const {state}=this.props
        return (
            <ul className="sportList">
                {
                    state.listData.map(item=>{
                        return (
                            <li className="sport-detail" key={item.id}>
                                <img className="sportpic" src={item.imageUrl}/>
                                <div className="newtag">新品</div>
                                <div className="describe">
                                    <span className="sport-title">
                                        {item.title}
                                    </span>
                                    <div className="sport-info">
                                        <span className="sport-price">￥{item.price}</span>
                                        <span className="sport-buy"><Icon type="shopping-cart" /></span>
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
        state:state.SportReducer
    }
}
export default connect(mapStateProps,{getSportDataList})(SportList)