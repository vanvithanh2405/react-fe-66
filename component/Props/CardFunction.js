import React from 'react'


// props là thuộc tính chứa giá trị từ component cha (component sử dụng thẻ này) truyền vào
export default function CardFunction(props) {
    
    
    const product = props.product
    
    return (
        <div>
            <div className="card bg-dark text-white">
                <img src={product.image} alt="..."></img>
                <div className="card-body">
                    <p className="font-weight-bold">{product.name}</p>
                    <p>{product.price}</p>
                </div>
            </div>
        </div>
    )
}
