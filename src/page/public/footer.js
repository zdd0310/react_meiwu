import React from "react"
import "../../assets/css/public.css"
import {Icon} from "antd"
export default function Footer(){
    return(
        <div className="footer">
            <p><Icon type="home" style={{fontSize:".18rem"}}/></p>
            <a>分类</a>
            <a>地方风味</a>
            <a>我的</a>
        </div>
    )
}