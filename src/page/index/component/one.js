import React, { Component } from 'react'
import {Carousel,Icon} from "antd"
import {connect} from "react-redux"
import {getIndexList,gethotList,getPeishiscrList,getPeishiliList} from "../reducer/reducer"
class One extends Component {
    componentDidMount(){
        this.props.getIndexList() 
        this.props.gethotList()  
        this.props.getPeishiscrList()
        this.props.getPeishiliList()
    }
    render() {
        const {state}=this.props
        console.log(state)
        return (
            <div className="one">
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
                            {
                                state.listData.map(item=>{
                                    return (
                                        <li key={item.id}>
                                            <dt>
                                                <img src={item.imageUrl}></img>
                                            </dt>
                                            <dd>
                                                <p>{item.title}</p>
                                                <p><span>￥</span>{item.price}</p>
                                            </dd>
                                        </li>
                                    )
                                })
                            }
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
                        {
                            state.hotData.map(item=>{
                                return (
                                    <li key={item.id}>
                                        <dt>
                                            <img src={item.imageUrl} />
                                        </dt>
                                        <dd>
                                            <p>{item.title}</p>
                                            <div>
                                                <p><span>￥</span>{item.price}</p>
                                                <Icon type="shopping-cart" />
                                            </div>
                                        </dd>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="more">查看更多</div>
                </div>
                <div className="peishi">
                    <div className="title"><img src="https://img.yzcdn.cn/upload_files/2019/07/12/FpnrSdJP1ucA9M7V2DFMtcplgRhI.jpg!large.jpg"></img></div>
                    <div className="img"><img src="https://img.yzcdn.cn/upload_files/2019/06/17/FnNRNU_DfU5dkcM_5PWSFfBeFCZK.gif!large.gif"></img></div>
                    <div className="scrollX">
                        <ul>
                            {
                                state.peishiData.scrollData.map(item=>{
                                    return (
                                        <li key={item.id}>
                                            <dt>
                                                <img src={item.imageUrl}></img>
                                            </dt>
                                            <dd>
                                                <p>{item.title}</p>
                                                <p><span>￥</span>{item.price}</p>
                                            </dd>
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                    <div className="hot">
                        <ul>
                            {
                                state.peishiData.liData.map(item=>{
                                    return (
                                        <li key={item.id}>
                                            <dt>
                                                <img src={item.imageUrl} />
                                            </dt>
                                            <dd>
                                                <p>{item.title}</p>
                                                <div>
                                                    <p><span>￥</span>{item.price}</p>
                                                    <Icon type="shopping-cart" />
                                                </div>
                                            </dd>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="more">查看更多</div>
                    </div>
                </div>


            </div>
        )
    }
}

const mapStateProps=(state)=>{
    return {
        state:state.IndexReducer
    }
}
export default connect(mapStateProps,{getIndexList,gethotList,getPeishiscrList,getPeishiliList})(One)