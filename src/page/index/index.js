import React, { Component } from 'react'
import { Icon, Menu } from "antd"
import {Route,Switch,Redirect} from "react-router-dom"
import "../../assets/css/index/index.css"
import {indexRoutes} from "../../router/routes"
import Footer from "../public/footer"




export default class Index extends Component {
    state = {
        current: '',
    };
    shuaxin(){
        const reg=/^\/index\/(.{1,})$/g;
        const key =reg.exec(this.props.location.pathname)
        this.setState({
            current: key,
        });
    }
    handleClick = e => {
        this.setState({
            current: e.key,
        });
        this.props.history.push(`/index/${e.key}`)
    };
    componentWillMount(){
        this.shuaxin()
    }
    render() {
        return (
            <div className="index">
                <div className="search">
                    <Icon type="search" />
                    <span>搜索商品</span>
                </div>
                <div className="nav">
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="one">
                            首页
                        </Menu.Item>
                        <Menu.Item key="eat">
                            寻味
                        </Menu.Item>
                        <Menu.Item key="beautiful">
                            美妆
                        </Menu.Item>
                        <Menu.Item key="children">
                            儿童
                        </Menu.Item>
                        <Menu.Item key="home">
                            居家
                        </Menu.Item>
                        <Menu.Item key="out">
                            户外
                        </Menu.Item>
                        <Menu.Item key="direction">
                            配饰
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="indexContent">
                    <Switch>
                        {
                            indexRoutes.map(item=>{
                                return <Route key={item.path} path={item.path} component={item.component} exact/>
                            })
                        }
                        <Redirect to="/index/one" from="/index" exact/>
                    </Switch>
                    
                </div>
                <Footer />
            </div>
        )
    }
}
