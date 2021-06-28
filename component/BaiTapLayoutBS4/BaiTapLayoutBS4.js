import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import Banners from './BodyComponent/Banners'
import Items from './BodyComponent/Items'
import FooterComponent from './FooterComponent'

import "./BaiTapLayoutBS4.css"

export default class BaiTapLayoutBS4 extends Component {
    render() {
        return (
            <div>
                <div>
                    <HeaderComponent></HeaderComponent>
                </div>
                <div className="container mt-5">
                    <Banners></Banners>
                </div>
                <div className="container mt-5">
                    <Items></Items>
                </div>
                <div className="mt-5">
                    <FooterComponent></FooterComponent>
                </div>
            </div>
        )
    }
}
