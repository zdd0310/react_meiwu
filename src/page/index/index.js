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
        const key1 =reg.exec(this.props.location.pathname)
        const ke=key1[1]
        console.log(ke)
        this.setState({
            current: ke,
        });
    }
    handleClick = (e) => {
        const reg2=/^([a-z]{1,})([0-9]{0,})$/g;
        const key=reg2.exec(e.key)
        const key2=key[1]
        const tagId=key[2]
        console.log(key2,tagId)
        this.setState({
            current: key2,
        });
        this.props.history.push(`/index/${key2}`,{
            tagId
        })
        
    };
    // toList=(tagId)=>{
    //     this.props.history.push("/index/sport",{
    //         tagId
    //     })
    // }
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
                            <span>首页</span>
                        </Menu.Item>
                        <Menu.Item key="eat108071946">
                            <span>寻味</span>
                        </Menu.Item>
                        <Menu.Item key="beautiful108072253">
                            <span>美妆</span>
                        </Menu.Item>
                        <Menu.Item key="children108088088">
                            <span>儿童</span>
                        </Menu.Item>
                        <Menu.Item key="home108072001">
                            <span>居家</span>
                        </Menu.Item>
                        <Menu.Item key="out108072009">
                            <span>户外</span>
                        </Menu.Item>
                        <Menu.Item key="direction108071966">
                            <span>配饰</span>
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
