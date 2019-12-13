import React, { Component } from "react"
import "../../assets/css/fengwei/cart.css"
import {Icon,Checkbox } from "antd"
class cart extends Component {
    render(){
        function onChange(e) {
            console.log(`checked = ${e.target.checked}`);
          }
        return(
            <div className="cart">
                <div className="bangding">
                    <Icon type="close-circle" />
                    <span>绑定手机号可保存购物车中所有商品</span>
                    <span>立即绑定</span>
                </div>
                <div className="sto">
                    <div className="tit">
                        <Icon type="shop" /><span>美物Store ></span><span>编辑</span> 
                    </div>
                    <div className="gouwu">
                        <div className="yuan"><Checkbox onChange={onChange}></Checkbox></div>
                        <div className="gouwu2">
                            <img src="https://img.yzcdn.cn/upload_files/2019/11/28/FvDchT1daIwLAVTF4ALTaSnCiWcM.jpg?imageView2%2F2%2Fw%2F200%2Fh%2F200%2Fq%2F75%2Fformat%2Fjpg" />
                            <div className="right">
                                <p>安一酿造仙女座果酒仙柚撩人仙爽小青橘｜含40%果汁 仙爽怡人 妙不可言</p>
                                <p>仙爽小青橘礼盒装</p>
                                <span>￥</span><span>65.00</span><span><button>-</button><button>1</button><button>+</button></span>
                            </div>
                        </div>
                    </div>
                    <div className="jing">更多精选商品</div>
                </div>
              <div className="foot">
                <Checkbox className="quan" onChange={onChange}>全选</Checkbox>
                <div className="jiesuan">
                    <p>合计：<span>￥0.00</span>
                    <span>不含运费</span>
                    </p>
                    <button>结算</button>
                    
                </div>
              </div>
            </div>
        )
    }
}
export default cart