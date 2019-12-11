import "./index.css"
import "./rem"
import React from "react";
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import store from "./store/store"
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
import App from "./App"
import Classify from "./page/classify/Classify"
import Sport from "./page/sport/Sport"
import {mainRoutes} from "./router/routes"
import 'antd/dist/antd.css'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/classify" component={Classify} exact/>
            <Route path="/sport" component={Sport} exact/>
            {
                mainRoutes.map(item=>{
                    return <Route key={item.path} path={item.path} component={item.component}/>
                })
            }
        </Switch>   
    </BrowserRouter>
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/classify" component={Classify} exact/>
                {
                    mainRoutes.map(item=>{
                        return <Route key={item.path} path={item.path} component={item.component}/>
                    })
                }
            </Switch>   
        </BrowserRouter>
    </Provider>
    
    
    ,document.getElementById("root"))