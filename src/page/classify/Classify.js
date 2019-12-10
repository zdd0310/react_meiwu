import React ,{Component} from "react"
import "./assets/classify.css"
import ClassifyHeader from "./component/Header"
import ContentTop from "./component/ContentTop"
import { Layout } from 'antd';
const { Header, Footer,Content } = Layout;



class Classify extends Component {
    render(){
        return(
            <div className="all">
                <Layout>
                    <Header style={{background:"transparent"}}>
                        <ClassifyHeader/>
                    </Header>
                    <Content style={{background:"yellow"}}>
                        <ContentTop/>
                        <img className="pic"/>
                    </Content>
                    <Footer style={{background:"skyblue"}}>
                        Footer
                    </Footer>
                </Layout>
            </div>
        )
    }
}


export default Classify