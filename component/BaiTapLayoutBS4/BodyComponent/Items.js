import React, { Component } from 'react'

export default class Items extends Component {
    render() {
        return (
            <div>
                <div className="row line-1">
                    <div className="col-4">
                        <div className="card text-left bg-light">
                            <div className="card-body">
                                <div className="icon">
                                    <i className="far fa-folder" />
                                </div>
                                <h4 className="card-title text-center">Fresh new layout</h4>
                                <p className="card-text text-center">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card text-left bg-light">
                            <div className="card-body">
                                <div className="icon">
                                    <i className="far fa-folder" />
                                </div>
                                <h4 className="card-title text-center">Free to download</h4>
                                <p className="card-text text-center">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card text-left bg-light">
                            <div className="card-body">
                                <div className="icon">
                                    <i className="far fa-folder" />
                                </div>
                                <h4 className="card-title text-center">Jumbotron hero headert</h4>
                                <p className="card-text text-center">The heroic part of this template is the jumbotron hero header!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row line-2 mt-5">
                    <div className="col-4">
                        <div className="card text-left bg-light">
                            <div className="card-body">
                                <div className="icon">
                                    <i className="far fa-folder" />
                                </div>
                                <h4 className="card-title text-center">Feature boxes</h4>
                                <p className="card-text text-center">We've created some custom feature boxes using Bootstrap icons!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card text-left bg-light">
                            <div className="card-body">
                                <div className="icon">
                                    <i className="far fa-folder" />
                                </div>
                                <h4 className="card-title text-center">Simple clean code</h4>
                                <p className="card-text text-center">We keep our dependencies up to date and squash bugs as they come!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card text-left bg-light">
                            <div className="card-body">
                                <div className="icon">
                                    <i className="far fa-folder" />
                                </div>
                                <h4 className="card-title text-center">A name you trust</h4>
                                <p className="card-text text-center">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
