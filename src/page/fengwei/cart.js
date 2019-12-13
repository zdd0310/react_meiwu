import React, { Component } from "react"
import "../../assets/css/fengwei/cart.css"
import {Icon} from "antd"
class cart extends Component {
    render(){
        return(
            <div className="cart">
                <div className="bangding">
                    <Icon type="close-circle" />
                    <span>绑定手机号可保存购物车中所有商品</span>
                    <span>立即绑定</span>
                </div>
                <div className="sto">
                    <div className="tit">
                        <Icon type="shop" /><span>美物Store ></span><span>编辑</span> 
                    </div>
                    <div className="gouwu">
                        <div className="gouwu2"></div>
                    </div>
                </div>
              
            </div>
        )
    }
}
export default cart