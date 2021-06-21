import React, { Component } from "react";

// Import đường dẫn css : Ảnh hưởng toàn bộ ứng dụng
import "./BaiTapChonXe.css";
// Import cách 2:
import style from "./BaiTapChonXe.module.css";

export default class BTChonXe extends Component {
  /*
        Các bước thực hành bài tập react

        1/ Dàn layout chia component
        2/ Xác định thành phần thay đổi trên giao diện là gì? (src, innerHTML, value) ? Dùng kiểu dữ liệu nào để lưu trữ nó (string, number, array, object,...) nó
        3/ xử lý setState làm thay đổi giá trị đó cài dặt vào các event (onClick, onChange, onBlur)


    */

  state = {
    imgSrc: "./img/CarBasic/products/red-car.jpg",
  };

  handleChangeColor = (color) => {
    this.setState({
      imgSrc: `./img/CarBasic/products/${color}-car.jpg`,
    });
  };

  render() {
    const textStyle = { cursor: "pointer" };
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.imgSrc} alt="..."></img>
          </div>
          <div className="col-6">
            <div className="card">
              <div className={`card-header ${style["text-green"]}`}>
                Exterior
              </div>
              <div className="card-body">
                <div
                  className="row mt-2 border border-dark p-2"
                  style={textStyle}
                  onClick={() => {
                    this.handleChangeColor("black");
                  }}
                >
                  <div className="col-2">
                    <img
                      className="w-50"
                      src="./img/CarBasic/icons/icon-black.jpg"
                    ></img>
                  </div>
                  <div
                    className="col-10 d-flex"
                    style={{ justifyContent: "start", alignItems: "center" }}
                  >
                    Black color
                  </div>
                </div>

                <div
                  className="row mt-2 border border-dark p-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.handleChangeColor("red");
                  }}
                >
                  <div className="col-2">
                    <img
                      className="w-50"
                      src="./img/CarBasic/icons/icon-red.jpg"
                    ></img>
                  </div>
                  <div
                    className="col-10 d-flex"
                    style={{ justifyContent: "start", alignItems: "center" }}
                  >
                    Red color
                  </div>
                </div>

                <div
                  className="row mt-2 border border-dark p-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.handleChangeColor("silver");
                  }}
                >
                  <div className="col-2">
                    <img
                      className="w-50"
                      src="./img/CarBasic/icons/icon-silver.jpg"
                    ></img>
                  </div>
                  <div
                    className="col-10 d-flex"
                    style={{ justifyContent: "start", alignItems: "center" }}
                  >
                    Silver color
                  </div>
                </div>

                <div
                  className="row mt-2 border border-dark p-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.handleChangeColor("steel");
                  }}
                >
                  <div className="col-2">
                    <img
                      className="w-50"
                      src="./img/CarBasic/icons/icon-steel.jpg"
                    ></img>
                  </div>
                  <div
                    className="col-10 d-flex"
                    style={{ justifyContent: "start", alignItems: "center" }}
                  >
                    Steel color
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
