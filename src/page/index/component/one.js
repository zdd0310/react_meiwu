import React, { Component } from 'react'
import {Carousel} from "antd"
export default class One extends Component {
    render() {
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
                    </Carousel>,
                </div>
            </div>
        )
    }
}
