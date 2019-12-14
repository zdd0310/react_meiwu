import React, { Component } from "react"
import "../../assets/css/fengwei/cart.css"
import {Icon,Checkbox } from "antd"
class cart extends Component {
    render(){
        let car=localStorage.getItem("cart")
        if(car){
            car=JSON.parse(car)
            console.log(car)
        }
        else{
            console.log("no 东西")
        }
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
                    {
                        car.map(item=>{
                        return(  
                            <div className="gouwu" key={item.id}>
                                <div className="yuan"><Checkbox onChange={onChange}></Checkbox></div>
                                <div className="gouwu2">
                                    <img src={item.imageUrl} />
                                    <div className="right">
                                        <p>{item.title}</p>
                                        <p>{item.subTitle}</p>
                                        <span>￥</span><span>{item.price}</span><span><button>-</button><button>1</button><button>+</button></span>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                  
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