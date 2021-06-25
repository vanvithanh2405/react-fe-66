import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-dark">
                    <div className="container px-lg-5">
                        <a className="navbar-brand text-white" href="#">Start Bootraps</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="d-flex justify-content-end">
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item active">
                                        <a className="nav-link text-white" href="#">Home<span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">About</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact</a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                                            <a className="dropdown-item" href="#">Action 1</a>
                                            <a className="dropdown-item" href="#">Action 2</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>


            </div>
        )
    }
}
