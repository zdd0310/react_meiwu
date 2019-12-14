import "../../assets/css/public.css"
import {Icon} from "antd"
import {withRouter} from "react-router-dom"
import React, { Component } from 'react'

class Footer extends Component {
    to=(path)=>{
        this.props.history.push(path)
    }
    render() {
        return (
            <div className="footer">
                <p onClick={this.to.bind(this,"/index")}><Icon type="home" style={{fontSize:".18rem"}}/></p>
                <a onClick={this.to.bind(this,"/classify")}>分类</a>
                <a onClick={this.to.bind(this,"/fengwei")}>地方风味</a>
                <a>我的</a>
            </div>
        )
    }
}
export default withRouter(Footer)