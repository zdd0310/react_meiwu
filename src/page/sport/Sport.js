import React, { Component } from 'react'
import "../../assets/css/sport/sport.css"
import { Layout } from 'antd';
import SportCarousel from "./compontent/SportCarousel"
import SportList from "./compontent/SportList"
import SportFooter from "../public/footer"
const { Footer, Content } = Layout;
export default class Sport extends Component {
    render() {
        return (
            <div className="sport">
                <Layout>
                    <Content>
                        <SportCarousel/>
                        <SportList/>
                    </Content>
                    <Footer>
                        <SportFooter/>    
                    </Footer>
                </Layout>
            </div>
        )
    }
}
