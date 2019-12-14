import React, { Component } from 'react'
import "../../assets/css/shopcarblank/shopcarblank.css"
import ShopBlank from "./component/ShopBlank"
import ShopcarMore from "./component/ShopcarMore"


export default class ShopcarBlank extends Component {
    render() {
        return (
            <div className="blank">
                <ShopBlank/>
                <div className="more-title">更多精选商品</div>
                <ShopcarMore/>
            </div>
        )
    }
}
