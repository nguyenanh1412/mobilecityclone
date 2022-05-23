/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Input } from 'reactstrap';
import "./style.css"

Header.propTypes = {

};

function Header(props) {
    return (
        <div className='sticky-top white'>
            <div className='container '>
                <div className='row'>
                    <div className='col-lg-3 '>
                        <p>Bạn đang xem giá, tồn kho tại:</p>
                    </div>
                    <div className='col-lg-2 '>
                        <Input
                            className='color'
                            id="exampleSelect"
                            name="select"
                            type="select"
                        >
                            <option>
                                Hà Nội
                            </option>
                            <option>
                                TP.HCM
                            </option>

                        </Input>
                    </div>
                    <div className='col-lg-5 hotline '>
                        <div>Hotline:</div>
                        <div> HN: 0969.120.120 - SG: 0965.123.123 - ĐN: 096.123.9797 - CSKH Online 037.462.9999 - 096.539.7966</div>
                    </div>
                    <div className='col-lg-2 login '>
                        <div>Đăng ký</div>
                        <div className='center'>|</div>
                        <div>Đăng nhập</div>
                    </div>
                </div>
            </div>
            <div className='red'>
                <div className="container ">
                    <div className="row">
                        <div className="col-5">
                            <div className='row'>
                                <div className='col-lg-5 d-flex align-items-center'>
                                    <img className='img' src='https://cdn.mobilecity.vn/mobilecity-vn/images/2022/01/w300/logo-mobilecity-2022.png' />
                                </div>
                                <div className='col-lg-7 d-flex align-items-center'>
                                    <Input
                                        type='search'
                                        placeholder='Search.....'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className='row wrap-nav'>
                                <a href="" className="col-lg nav">
                                    <i className=" font fa-solid fa-mobile-screen"></i>
                                    <p>điện thoại</p>
                                </a>
                                <a className="col-lg nav">
                                <i className=" font fa-solid fa-tablet-screen-button"></i>
                                    <p>tablet</p>
                                </a>
                                <a className="col-lg nav">
                                <i className=" font fa-solid fa-boxes-packing"></i>
                                    <p>phụ kiện</p>
                                </a>
                                <a className="col-lg nav">
                                <i className="font fa-solid fa-screwdriver-wrench"></i>
                                    <p>sửa chữa</p>
                                </a>
                                <a className="col-lg nav">
                                <i className=" font fa-solid fa-newspaper"></i>
                                    <p>tin tức</p>
                                </a>
                                <a className="col-lg nav">
                                <i className=" font fa-solid fa-calendar"></i>
                                    <p>events</p>
                                </a>
                                <a className="col-lg nav">
                                <i className=" font fa-solid fa-shield-heart"></i>
                                    <p>tra cứu bh</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;