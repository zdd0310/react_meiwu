import React, { Component } from 'react'
import {Icon} from "antd"

export default class Index extends Component {
    render() {
        return (
            <div>
                <div className="search">
                    <Icon type="search" />
                    <span>搜索商品</span>
                </div>
                <div>LoginIndex</div>
            </div>
        )
    }
}
