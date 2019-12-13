import React, { Component } from 'react'

export default class ShopBlank extends Component {
    render() {
        return (
            <div className="blank-top">
                <img className="blankpic" src="https://img.yzcdn.cn/public_files/2019/07/15/c8bae38935ab388f2aeeedf80c4a5d00.png"/>
                <h2>购物车还是空的</h2>
                <div className="blank-desc">赶紧买点宝贝慰劳下自己吧</div>
                <div className="hang">去逛逛</div>
            </div>
        )
    }
}
