import React, { Component } from 'react'
import Header from './Header'
import NavigationComponent from './NavigationComponent'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'
export default class BaiTapComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Header></Header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <NavigationComponent></NavigationComponent>
                    </div>
                    <div className="col-8">
                        <ContentComponent></ContentComponent>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <FooterComponent></FooterComponent>
                    </div>
                </div>
            </div>
        )
    }
}
