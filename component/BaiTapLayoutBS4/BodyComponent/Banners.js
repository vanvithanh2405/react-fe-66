import React, { Component } from 'react'

export default class Banners extends Component {
    render() {
        return (
            <div className="banner-card">
                <div className="card text-left bg-light">
                    <div className="card-body">
                        <h4 className="card-title display-4 text-center">A warm welcome!</h4>
                        <p className="card-text text-center">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <button className="btn btn-primary btn-Call">Call to action</button>
                    </div>
                </div>

            </div>
        )
    }
}
