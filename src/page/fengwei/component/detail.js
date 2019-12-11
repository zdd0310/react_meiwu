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
                            <h3><img src="http://img.yzcdn.cn/upload_files/2019/11/28/FuJ2zrFdTDTVvjdH06FLL10mZGDw.jpg"/></h3>
                        </div>
                        <div>
                            <h3><img src="http://img.yzcdn.cn/upload_files/2019/11/28/FtI_M1hllnjMW3FEIHzl1pKF_dqj.jpg"/></h3>
                        </div>
                        <div>
                            <h3><img src="http://img.yzcdn.cn/upload_files/2019/11/28/FngSRyspFvJuX7w2MxnDBEIrqxML.jpg"/></h3>
                        </div>
                        <div>
                            <h3><img src="http://img.yzcdn.cn/upload_files/2019/11/28/FmaaLd2IRx2bXN-O64yj1qE_RUjP.jpg"/></h3>
                        </div>
                    </Carousel>
                    <div className="intro">
                        <p><span>￥</span>65.00-125.00</p>
                        <h6>价格<span>￥85</span></h6>
                        <h2>安一酿造仙女座果酒仙柚撩人仙爽小青橘含40%果汁 仙爽怡人 妙不可言</h2>
                    </div>
                    <div className="green">
                        <img src="https://b.yzcdn.cn/goods/yzguarantee_logo_green.png"/>
                        <span>全程护航，请放心购买</span>
                    </div>
                    <div className="bag">
                    <div className="yunfei">
                        <span>运费</span><span>免运费</span><span>剩余599</span>
                    </div>
                    <div className="kouwei">
                        <p><span>服务</span><span>收货后结算.合作商直供.快递发货</span><span>></span></p>
                        <div className="choose">
                            <p><span>选择</span><span>口味</span><span>></span></p>
                            <p><img src="https://img.yzcdn.cn/upload_files/2019/11/28/FmA7Z2EHvIpNCU3_-qKJA1zuckIN.jpg!100x100.jpg"/>
                            <img src="https://img.yzcdn.cn/upload_files/2019/11/28/FvDchT1daIwLAVTF4ALTaSnCiWcM.jpg!100x100.jpg"/>
                            <img src="https://img.yzcdn.cn/upload_files/2019/11/28/FmaaLd2IRx2bXN-O64yj1qE_RUjP.jpg!100x100.jpg"/>
                            <span>共三种口味可选</span></p>
                        </div>
                    </div>
                    <div className="meiwu">
                        
                    </div>
                    </div>
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