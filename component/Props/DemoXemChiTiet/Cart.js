import React, { Component } from 'react'

export default class Cart extends Component {


    renderGioHang = () =>{
        // nhận giá trị giỏ hàng từ component DemoXemChiTiet
        let {gioHang} = this.props;
        let {xoaGioHang} = this.props;
        let {tangGiamSoLuong} = this.props
        return gioHang.map((spGH,index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} width={50} height={50} alt="..."></img></td>
                <td>{spGH.giaBan.toLocaleString()}</td>
                <td>
                    <button onClick={()=>{
                        tangGiamSoLuong(spGH.maSP,1)
                    }} className="btn btn-primary mr-2">+</button>
                    {spGH.soLuong}
                    <button onClick={()=>{
                        tangGiamSoLuong(spGH.maSP,-1)
                    }} className="btn btn-primary ml-2">-</button>
                </td>
                <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                <td>
                    <button onClick={()=>{
                        xoaGioHang(spGH.maSP)
                    }} className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        })
    }




    render() {
        return (
            <div>
                <div>
                    {/* Button trigger modal */}
        
                    {/* Modal */}
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Giỏ hàng</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Mã sản phẩm</th>
                                                <th>Tên sản phẩm</th>
                                                <th>Hình ảnh</th>
                                                <th>Đơn giá</th>
                                                <th>Số lượng</th>
                                                <th>Thành Tiền</th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                           {this.renderGioHang()}
                                        </tbody>

                                        <tfoot>
                                            <tr>
                                                <td colSpan="5"></td>
                                                <td>Tổng tiền</td>
                                                <td>{this.props.gioHang.reduce((tongTien,spGH,index)=>{
                                                       return tongTien += spGH.soLuong * spGH.giaBan; 
                                                },0).toLocaleString()}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Đóng</button>
                                    <button type="button" className="btn btn-success">Thanh toán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
