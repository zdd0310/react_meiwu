import React,{Component} from "react"
import "../../assets/css/fengwei/fengwei.css"
import Footer from "../public/footer"
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
                        <li></li>
                    </ul>
                </div>
                <Footer/>
            </div>
        )

    }
}
export default fengwei


