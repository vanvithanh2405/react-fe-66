import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {sp} = this.props;
        return (
            <div>
                 <div className="card">
                    <img src={sp.hinhAnh} alt="..." height={300}></img>
                    <div className="card-body">
                        <p>{sp.tenSP}</p>
                        <p>{sp.giaBan.toLocaleString()}</p>
                        <button onClick={()=>{
                            // Định nghĩa sự kiện click trên mỗi sản phẩm
                            {this.props.xemChiTiet(sp)} 
                        }} className="btn btn-success">Xem chi tiết</button>

                        <button onClick={()=>{
                            this.props.themGioHang(sp)
                        }} className="btn btn-danger ml-2">Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
