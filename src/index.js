import "./index.css"
import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
import App from "./App"


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} />
            
        </Switch>   
    </BrowserRouter>
    
    ,document.getElementById("root"))