import React, { Component } from 'react'
import {Carousel,Icon} from "antd"
import {connect} from "react-redux"
import {getIndexList} from "../reducer/reducer"
import { Item } from 'rc-menu'
class One extends Component {
    componentDidMount(){
        this.props.getIndexList()
        
        setTimeout(()=>{
            console.log(this.props.state.IndexReducer) 
        },2000)
        
    }
    render() {
        const {state}=this.props
        console.log(state)
        return (
            <div className="one">
                {
                    state.IndexReducer.listData.map(item=>{
                        return <p key={item.title}>{item.title}</p>
                    })
                }
               
                <div className="banner">
                    <Carousel autoplay>
                        <div>
                            <img src="https://img.yzcdn.cn/upload_files/2019/12/09/FnjRFiEs2G_TD4tDdJ2B55OVTFTg.jpg!large.jpg"></img>
                        </div>
                        <div>
                            <img src="https://img.yzcdn.cn/upload_files/2019/12/09/FrN7g7enOiBNAPCtvSvldJDj6McB.jpg!large.jpg"></img>
                        </div>
                        <div>
                            <img src="https://img.yzcdn.cn/upload_files/2019/12/09/FsL6psSvj7I1pPZdionSUmyeE0hV.jpg!large.jpg"></img>
                        </div>
                    </Carousel>
                </div>
                <div className="new">
                    <div className="title"><img src="https://img.yzcdn.cn/upload_files/2019/07/12/FurK-TBE5q1A-NpoZyzECqTqV3i_.jpg!large.jpg"></img></div>
                    <div className="scrollX">
                        <ul>
                            <li>
                                <dt>
                                    <img src="https://img.yzcdn.cn/upload_files/2019/10/11/FhlsxBDLUOELNibLypZAlkPCDeU_.jpg!middle.jpg"></img>
                                </dt>
                                <dd>
                                    <p>keheal科西K2取暖器 2秒速暖 全屋均匀升温 暖而不燥</p>
                                    <p><span>￥</span>1099</p>
                                </dd>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="tuijian">
                    <div className="title"><img src="https://img.yzcdn.cn/upload_files/2019/08/06/FgnSq8P0DCmFdXTrxJIVPq-JnbZf.jpg!large.jpg"></img></div>
                    <Carousel autoplay>
                        <div>
                            <img src="https://img.yzcdn.cn/upload_files/2019/09/30/Fmx7P7BwbSipnKYqjAXUmnmzImnL.jpg!large.jpg"></img>
                        </div>
                        <div>
                            <img src="https://img.yzcdn.cn/upload_files/2019/08/06/FlyeMjiz4YLRdz7fgw2Vv90FSMqi.jpg!large.jpg"></img>
                        </div>
                        <div>
                            <img src="https://img.yzcdn.cn/upload_files/2019/07/12/FsPSuw1LipNNO9T7qbLyy6Wfl12F.jpg!large.jpg"></img>
                        </div>
                    </Carousel>
                </div>
                <div className="hot">
                    <div className="title"><img src="https://img.yzcdn.cn/upload_files/2019/07/12/FlYLm8geZ7_bmz5DpS_tVHSqPFLX.jpg!large.jpg"></img></div>
                    <ul>
                        <li>
                            <dt>
                                <img src="https://img.yzcdn.cn/upload_files/2017/11/22/FrX2ClJ8SXmM0EQpSVfwBWE8UuIp.jpg!middle.jpg" />
                            </dt>
                            <dd>
                                <p>极柚葡萄柚 约5斤/箱 水润多汁 清甜爽口</p>
                                <div>
                                    <p><span>￥</span>69.9</p>
                                    <Icon type="shopping-cart" />
                                </div>
                            </dd>
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateProps=(state)=>{
    return {
        state
    }
}
export default connect(mapStateProps,{getIndexList})(One)