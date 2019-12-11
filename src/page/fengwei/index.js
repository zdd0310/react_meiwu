import React,{Component} from "react"
import "../../assets/css/fengwei/fengwei.css"
import Footer from "../public/footer"
import Jiao from "./component/jiao"
import {Icon} from "antd"
class fengwei extends Component{
    render(){
        return(
            <div className="fengwei">
                <div className="header">
                    <a>地方风味</a>
                    <a>水果</a>
                    <a>甜品</a>
                    <a>酒类</a>
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <img src="https://img.yzcdn.cn/upload_files/2019/11/26/FrFr51VDfwscm7XF_phUh2pU22jP.jpg!middle.jpg"/>
                            <div className="right">
                                <h3>潮汕手锤牛肉丸</h3>
                                <div className="cart"><p><span>￥</span>54</p><a><Icon type="shopping-cart" /></a></div>
                            </div>
                        </li>
                    </ul>
                    </div>
                   <Jiao/>
                <Footer/>
            </div>
        )

    }
}
export default fengwei


