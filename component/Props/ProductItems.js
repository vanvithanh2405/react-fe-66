import React, { Component } from 'react'

export default class ProductItems extends Component {
    
    
    
    
    render() {
        let product = this.props.product
        return (
            <div>
                <div className="card text-left">
                    <img src={product.image} alt="..." className="w-70" />
                    <div className="card-body">
                        <p className="card-title font-weight-bold">{product.name}</p>
                        <p className="card-text">{product.price}</p>
                        <button className="btn btn-dark p-2">Add to cart <i className="fas fa-shopping-cart ml-2" /></button>
                    </div>
                </div>

            </div>
        )
    }
}
