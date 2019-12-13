import React, { Component } from "react"
import { Carousel } from 'antd';
import "../../../assets/css/fengwei/detail.css"
import Jiao from "../component/jiao"
class detail extends Component {
    componentDidMount(){
        // console.log(this.props.location.state.item)
    }
    render() {
        const item=this.props.location.state.item
        console.log(item)
        return (
            <div className="detail">
                <div className="content">
                    <Carousel autoplay>
                    {
                            item.picture.map(it=>{
                                return(
                                    <div key={it.id}>
                                        <h3><img src={it.url}/></h3>
                                    </div>
                                )
                            })
                        } 
                    </Carousel>
                    <div className="intro">
                    <p><span>￥</span>{item.price}</p>
                    <h6>价格<span>￥{item.origin}</span></h6>
                        <h2>{item.title}</h2>
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
                            <p><span>选择</span><span>规格</span><span>></span></p>
                        </div>
                    </div>
                    <div className="meiwu">
                        <img src="https://img.yzcdn.cn/upload_files/2018/05/10/FqR0_CoPQ77auRMhAkXvCmPfAw0O.jpg"/>
                        <p><span>美物Store</span>
                        <img src="https://b.yzcdn.cn/public_files/612c211e81684a31abe374f5bf0ea6c4.png"></img></p>
                        <a>关注店铺</a>
                        <a>进店逛逛</a>
                    </div>
                    <h4>价格说明</h4>
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