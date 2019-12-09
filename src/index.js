import "./index.css"
import "./rem"
import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
import App from "./App"
import Index from "./page/index/index"


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/index" component={Index}/>
        </Switch>   
    </BrowserRouter>
    
    ,document.getElementById("root"))