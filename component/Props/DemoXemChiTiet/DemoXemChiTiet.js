import React, { Component } from 'react';
import SanPham from './SanPham';
import Cart from './Cart';


export default class DemoXemChiTiet extends Component {


    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]


    state = {
        sanPhamChiTiet: { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" },
        gioHang: [
            { maSP: 1, tenSP: 'Iphone XS Max', soLuong: 1, giaBan: 27000000, hinhAnh: './img/applephone.jpg' }
        ]
    }

    //============================================ THÊM GIỎ HÀNG =========================================
    themGioHang = (spClick) => {

        console.log('sanPhamDuocClick', spClick)

        // Thêm thuộc tính số lượng cho spClick
        let spGioHang = { ...spClick, soLuong: 1 };

        // Khi người dùng click vào => thêm sản phẩm được click vào mảng giỏ hàng
        let gioHangCapNhat = [...this.state.gioHang];

        //Tìm sản phẩm được click có trong giỏ hàng hay chưa 
        let sp = gioHangCapNhat.find(spGH => spGH.maSP === spGioHang.maSP);

        if (sp) {
            sp.soLuong += 1;
        } else {
            gioHangCapNhat.push(spGioHang);
        }

        console.log('Giỏ hàng sau khi cập nhật', gioHangCapNhat);

        // gọi hàm setState cập nhật lại giỏ hàng 
        this.setState({
            gioHang: gioHangCapNhat
        });

        // chắc chắn hàm này sẽ gọi hàm setState
        // this.setState({})
    }

    //==========================XÓA GIỎ HÀNG==============================================
    xoaGioHang = (maSP) => {
        console.log('spDuocClick', maSP);

        // Từ mã sp tìm ra sản phẩm trong mảng => xóa đi
        let gioHangCapNhat = [...this.state.gioHang];

        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);

        if (index !== -1) {
            gioHangCapNhat.splice(index, 1);
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    //===============================TĂNG GIẢM SỐ LƯỢNG================================
    tangGiamSoLuong = (maSP, soLuong) => {
        console.log(maSP, soLuong)
        let gioHangCapNhat = [...this.state.gioHang];

        // kiểm tra sp có trong giỏ hàng không
        let spGH = gioHangCapNhat.find(spGH => spGH.maSP === maSP);

        if (spGH) {
            spGH.soLuong += soLuong;
            if (spGH.soLuong < 1) {
                spGH.soLuong -= soLuong;
            }
        }
        // chắc chắn gọi lại hàm setState
        this.setState({
            gioHang: gioHangCapNhat
        })
    }


    //========================= TÍNH TỔNG SỐ LƯỢNG =======================
    tinhTongSoLuong = () => {

        let tongSoLuong = this.state.gioHang.reduce((tong, spGH, index) => {
            return tong += spGH.soLuong;
        }, 0);

        return tongSoLuong;
    }
    renderSanPham = () => {
        return this.mangSanPham.map((sanPham, index) => {
            return <div className="col-4" key={index}>
                <SanPham sp={sanPham} xemChiTiet={this.xemChiTiet} themGioHang={this.themGioHang}></SanPham>
                {/* <div className="card">
                    <img src={sanPham.hinhAnh} alt="..." height={300}></img>
                    <div className="card-body">
                        <p>{sanPham.tenSP}</p>
                        <p>{sanPham.giaBan.toLocaleString()}</p>
                        <button onClick={()=>{
                            this.xemChiTiet(sanPham);
                        }} className="btn btn-success">Xem chi tiết</button>
                    </div>
                </div> */}
            </div>
        })
    }

    xemChiTiet = (sanPhamDuocClick) => {
        console.log('sanPhamDuocClick', sanPhamDuocClick)
        // thay đổi sản phẩm chi tiết trong state = sản phẩm được click
        this.setState({
            sanPhamChiTiet: sanPhamDuocClick
        })
    }

    render() {
        let { sanPhamChiTiet } = this.state
        return (
            <div className="container">
                <Cart gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}></Cart>
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="text-right">
                    <span className="btn" data-toggle="modal" data-target="#modelId" style={{ fontSize: "20px" }}><i className="fas fa-shopping-cart mr-2" />
                        Giỏ hàng({this.tinhTongSoLuong()})</span>
                </div>
                <div className="row">
                    {this.renderSanPham()}
                </div>

                <div className="row mt-5">
                    <div className="col-4">
                        <h3>{sanPhamChiTiet.tenSP}</h3>
                        <img src={sanPhamChiTiet.hinhAnh} height={300} alt="..."></img>
                    </div>

                    <div className="col-8">
                        <h3>Thông số kĩ thuật</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{sanPhamChiTiet.manHinh}</th>
                                </tr>

                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{sanPhamChiTiet.heDieuHanh}</th>
                                </tr>

                                <tr>
                                    <th>Camera trước</th>
                                    <th>{sanPhamChiTiet.cameraTruoc}</th>
                                </tr>

                                <tr>
                                    <th>Camera sau</th>
                                    <th>{sanPhamChiTiet.cameraSau}</th>
                                </tr>

                                <tr>
                                    <th>Ram</th>
                                    <th>{sanPhamChiTiet.ram}</th>
                                </tr>

                                <tr>
                                    <th>Rom</th>
                                    <th>{sanPhamChiTiet.rom}</th>
                                </tr>


                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
