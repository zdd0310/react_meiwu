import "./assets/css/index.css"
import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
import App from "./App"
import "./assets/css/index.css"

import {mainRoutes} from "./router/routes"
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/admin" component={App} />
            {
                mainRoutes.map(item=>{
                    return <Route path={item.path} component={item.component} />
                })
            }
            <Redirect to="/admin" from="/" exact />
            <Redirect to="/404"/>
        </Switch>   
    </BrowserRouter>
    
    ,document.getElementById("root"))