import React, { Component } from "react"
import { Carousel } from 'antd';
import "../../../assets/css/fengwei/detail.css"
import Jiao from "../component/jiao"
class detail extends Component {
    render() {
        return (
            <div className="detail">
                <div className="content">
                    <Carousel autoplay>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>,
                <Jiao />
                </div>
                <div className="footer">
                    <button>立即抢购</button>
                </div>
            </div>
        )
    }
}
export default detail