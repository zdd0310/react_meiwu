import React ,{Component} from "react"
import "./assets/classify.css"
import ClassifyHeader from "./component/Header"
import ContentTop from "./component/ContentTop"
import ContentTabs from "./component/ContentTabs"
import ClassifyFooter from "../public/footer"
import { Layout } from 'antd';
const { Header, Footer,Content } = Layout;



class Classify extends Component {
    render(){
        return(
            <div className="all">
                <Layout>
                    <Header style={{background:"#f9f9f9"}}>
                        <ClassifyHeader/>
                    </Header>
                    <Content style={{background:"#f9f9f9"}}>
                        <ContentTop/>
                        <hr className="line"/>
                        <img className="picy" src="https://img.yzcdn.cn/upload_files/2018/12/14/FkHuff5zthnTV_2nqWfwByzyr-ou.jpg!large.jpg"/>
                        <ContentTabs/>
                    </Content>
                    <Footer>
                        <ClassifyFooter/>
                    </Footer>
                </Layout>
            </div>
        )
    }
}


export default Classify