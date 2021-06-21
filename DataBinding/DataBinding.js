import React, { Component } from "react";

export default class DataBinding extends Component {
  product = {
    id: 1,
    name: "Iphone 12 ProMax",
    price: "35.000.000VND",
    img: "https://picsum.photos/200/200",
  };

  renderProduct = () => {
    <div className="w-25 mt-2">
      <div className="card">
        <img src={this.product.img} alt="..."></img>
        <div className="card-body">
          <p>{this.product.name}</p>
          <p>{this.product.price}</p>
        </div>
        <div className="card-footer bg-dark text-white">
          <button className="btn btn-success">Đặt mua</button>
        </div>
      </div>
    </div>;
  }

  // Phương thức render
  render() {
    let hoTen = "Văn Vĩ Thành";
    let product = {
      id: 1,
      name: "Iphone 12 ProMax",
      price: "35.000.000VND",
      img: "https://picsum.photos/200/200",
    };

    return (
      <div className="container">
        <p id="txtHoTen">Họ tên : {hoTen}</p>
        <div className="w-25 mt-2">
          <div className="card">
            <img src={product.img} alt="..."></img>
            <div className="card-body">
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
            <div className="card-footer bg-dark text-white">
              <button className="btn btn-success">Đặt mua</button>
            </div>
          </div>
        </div>
        {this.renderProduct()}
      </div>
    );
  }
}
