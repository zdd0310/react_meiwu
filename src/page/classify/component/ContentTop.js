import React, { Component } from 'react'

export default class ContentTop extends Component {
    // clickToSport=(tagId)=>{
    //     console.log(this.props)
    //     this.props.history.push("/sport",{
    //         tagId:tagId
    //     })
    // }
    render() {
        return (
            <ul className="contentTop">
                <li className="one"></li>
                <li className="two"></li>
                <li className="three"></li>
                <li className="four"></li>
                <li className="five"></li>
                <li className="six"></li>
            </ul>
        )
    }
}
