import React, { Component } from 'react'
import {withRouter} from "react-router"

class ContentTop extends Component {
    clickToSport=(tagId)=>{
        // console.log(this.props)
        this.props.history.push("/sport",{
            tagId:tagId
        })
    }
    render() {
        return (
            <ul className="contentTop">
                <li className="one" onClick={this.clickToSport.bind(this,108072009)}></li>
                <li className="two" onClick={this.clickToSport.bind(this,108072253)}></li>
                <li className="three" onClick={this.clickToSport.bind(this,108071966)}></li>
                <li className="four" onClick={this.clickToSport.bind(this,108646296)}></li>
                <li className="five" onClick={this.clickToSport.bind(this,108072001)}></li>
                <li className="six" onClick={this.clickToSport.bind(this,108071960)}></li>
            </ul>
        )
    }
}
export default withRouter(ContentTop)