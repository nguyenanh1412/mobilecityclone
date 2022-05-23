import React, { useEffect, useState } from 'react';
import "./style.css"
import { Carousel, Input } from 'reactstrap';
import Toast from './toast';



function Footer(props) {
    const [text, setText] = useState('')
    let handleChange = (ev) => {
        setText(ev.target.value)
    }


    const [none, setNone] = useState('d-none')
    useEffect(() => {
        const setTime = setTimeout(() => { setNone('d-none') }, 3100)
        return () => clearTimeout(setTime);
    }, [none])
    const [prop, setProp] = useState('')
    let handleSendEmail = () => {
        if (text.includes('@')) {
            setNone('d-blocks')
            setText('')
            setProp('Cảm ơn bạn đã đăng kí nhận thông tin, chúc bạn một ngày vui vẻ.')
            return
        }
        setNone('d-blocks')
        setProp('Email của bạn nhập chưa đúng')
    }
    return (

        <div className='wrap-footer'>
            <div className='container' style={{ overflow: 'hidden' }}>
                <div className='row'>
                    <Toast
                        none={none}
                        prop={prop}
                    />
                    <div className='col-lg-3 footer-1'>
                        <p className='head-footer'><i className="fa-solid fa-location-dot"></i> HỆ THỐNG CỬA HÀNG</p>

                        <p className='bold'>
                            Hà Nội
                        </p>

                        <p>
                            <p>120 Thái Hà, Q. Đống Đa <a href='./'>Xem bản đồ</a> Điện thoại: 0969.120.120 (Bán hàng) - 037.437.9999 (Kỹ thuật)</p>

                        </p>
                        <p>
                            <p>398 Cầu Giấy, Q. Cầu Giấy <a href='./'>Xem bản đồ</a> Điện thoại: 096.1111.398 (Bán hàng) - 037.437.9999 (Kỹ thuật)</p>
                        </p>
                        <p>
                            <p>42 Phố Vọng, Hai Bà Trưng <a href='./'> Xem bản đồ</a> Điện thoại: 0979.884242 (Bán hàng) - 037.437.9999 (Kỹ thuật)</p>
                        </p>

                        <p className='bold'>
                            Hồ Chí Minh
                        </p>

                        <p>
                            <p>123 Trần Quang Khải, Q.1<a href='./'> Xem bản đồ</a> Điện thoại: 0965.123.123 - 0969.520.520</p>
                        </p>
                        <p>
                            <p>602 Lê Hồng Phong, P.10, Q.10 <a href='./'>Xem bản đồ</a> Điện thoại: 097.1111.602 - 097.3333.602</p>
                        </p>

                        <p className='bold'>
                            Đà Nẵng
                        </p>

                        <p>
                            <p>97 Hàm Nghi, Q.Thanh Khê <a href='./'>Xem bản đồ</a> Điện thoại: 096.123.9797 - 097.123.9797</p>
                        </p>
                    </div>
                    <div className='col-lg-3'>
                        <p className='head-footer'><i className="fa-solid fa-circle-question"></i> QUY ĐỊNH - CHÍNH SÁCH</p>
                        <ul className='list-footer'>
                            <li><a href='./'>Chính sách bảo hành</a></li>
                            <li><a href='./'>Chính sách vận chuyển</a></li>
                            <li><a href='./'>Chính sách đổi trả hàng</a></li>
                            <li><a href='./'>Chính sách bảo mật thông tin</a></li>
                            <li><a href='./'>Hướng dẫn thanh toán</a></li>
                            <li><a href='./'>Hướng dẫn mua hàng Online</a></li>
                            <li><a href='./'>Dịch vụ Ship COD Toàn quốc</a></li>
                            <li><a href='./'>Chính sách đại lý linh, phụ kiện</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-3'>
                        <p className='head-footer'><i className="fa-solid fa-envelope-circle-check"></i> ĐĂNG KÝ NHẬN BẢNG TIN</p>
                        <div className='d-flex'>
                            <Input value={text} onChange={handleChange} type='enail' className='input-footer input-group' placeholder='Nhập Email của bạn' />
                            <button onClick={handleSendEmail} className='btn btn-primary btn-footer' type="button">Gửi</button>
                        </div>
                        <p className='head-footer connect'><i className="fa-solid fa-circle-nodes"></i> KẾT NỐI</p>
                        <div ><a href='https://www.facebook.com/anh.hoang.1412' className='facebook'><i className=" fa-brands fa-facebook"></i><p>Facebook</p></a></div>
                        <div ><a href='https://www.youtube.com/' className='youtube'><i className=" fa-brands fa-youtube"></i> <p>Youtube</p></a></div>
                    </div>
                    <div className='col-lg-3'>
                        <div className="all-icon icon-norton"></div>
                        <div className="all-icon icon-notification"></div>
                    </div>
                </div>
                <div className='row footer-infor'>
                    <div className='col-lg-5'>
                        <p className='infor-1'>© 2020 - HỘ KINH DOANH SỬA CHỮA BẢO HÀNH ĐIỆN THOẠI - 120 THÁI HÀ.</p>
                    </div>
                    <div className='col-lg-4 d-flex justify-content-around'>
                        <p>Bạn có thể thanh toán với</p>
                        <div className="all-icon icon-bank"></div>
                    </div>
                    <div className='col-lg-3'>
                        <p className='infor-1'>Tư vấn và phát triển bởi: <a href='https://www.facebook.com/anh.hoang.1412'>Nguyễn Anh</a></p>
                    </div>
                </div>
            </div>
        </div>




    );
}

export default Footer;