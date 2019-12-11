import React, { Component } from 'react'
import { Carousel } from 'antd';



export default class SportCarousel extends Component {
    render() {
        return (
            <Carousel autoplay>
                <div>
                    <img src="https://img.yzcdn.cn/upload_files/2019/09/29/Fg0mY9p7P6dco6w6h0CUPMtJ7f4W.jpg!large.jpg"/>
                </div>
                <div>
                   <img src="https://img.yzcdn.cn/upload_files/2019/02/25/Fp6rTYy7E2oyDopJQTZfAv_vxs_X.jpg!large.jpg"/>
                </div>
            </Carousel>
        )
    }
}
