import React, { Component } from 'react'
import "../../assets/css/sport/sport.css"
import SportCarousel from "./compontent/SportCarousel"
import SportList from "./compontent/SportList"

export default class Sport extends Component {
    render() {
        return (
            <div className="sport">
                <SportCarousel/>

            </div>
        )
    }
}
