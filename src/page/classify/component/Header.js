import React, { Component } from 'react'
import { Icon } from 'antd';

export default class Header extends Component {
    render() {
        return (
            <div className="search-box">
                <Icon type="search" />
                <span>涌泉蜜柑</span>
            </div>
        )
    }
}
