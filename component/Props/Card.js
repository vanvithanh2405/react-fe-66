import React, { Component } from 'react'

export default class Card extends Component {
    
    
    
    
    
    render() {
        // so sánh sự khác biệt giữa this.state và this.props

        /*
            Gióng nhau:
                Đều là thuộc tính của react class component để chứa các giá trị cần render ra giao diện
            Khác nhau:
                + State:  dùng để chứa các giá trị thay đổi khi người dùng thao tác trên giao diện. props dùng để nhận giá trị từ component cha truyền vào
                + State có thể gắn lại giá trị mới bằng phương thức setState
                + props không thể gán lại giá trị mới 

         */

        // this.props là thuộc tính có sẵn của react class component
        let product = this.props.product;
        return (
            <div className="card bg-dark text-white">
                <img src={product.image} alt="..."></img>
                <div className="card-body">
                    <p className="font-weight-bold">{product.name}</p>
                    <p>{product.price}</p>
                </div>
            </div>
        )
    }
}
