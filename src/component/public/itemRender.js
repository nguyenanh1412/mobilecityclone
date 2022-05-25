import React, { useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Toast from './toast';

function IitemRender(props) {
    const { productView } = props
    const [showMore, setShowMore] = useState(props.page)
    const [none, setNone] = useState('d-none')
    useEffect(() => {
        const setTime = setTimeout(() => { setNone('d-none'); }, 3100)
        return () => clearTimeout(setTime);
    }, [none])
    const [prop, setProp] = useState('')
    let handleShowMore = () => {
        if (showMore > props.allItem.length) {
            setNone('d-blocks')
            setProp('Bạn đã xem tới sản phẩm cuối cùng')
            return
        }
        setShowMore(prv => prv + 4)

    }
    return (
        <>
            <div className='row' >
                {props.allItem.slice(0, showMore).map(it => {
                    return (
                        <motion.div
                            animate={{ translateY: [100, 0], opacity: [0, 1] }}
                            key={it.id*Math.random()} className='col-lg-3 col-md-3 col-sm-6 col-6 item poiter'>
                            <div className='product-item-img'>
                                <a className='img-item'>
                                    <img src={it.img[1]} className="d-block w-100 " alt="..." />
                                </a>
                                <div className={props.pk === undefined ? 'mask-item' : 'd-none'}>

                                    {props.fix === undefined
                                        ? <>
                                            <div className='d-flex w-100 align-items-center title-mask-item'>
                                                <i className="fa-solid fa-parachute-box"></i>
                                                <p>MobileCity Care</p>
                                            </div>
                                            <ul>
                                                <li>BH 12 tháng nguồn, màn hình</li>
                                                <li>Đổi mới 30 ngày đầu tiên </li>
                                                <li>Tặng ốp lưng, dán cường lực</li>
                                                <li>Hỗ trợ phần mềm máy trọn đời</li>
                                            </ul>
                                            <button className='btn-primary btn btn-mask-item'>Bảo hành vàng</button>

                                        </>
                                        : <>
                                            <div className='d-flex w-100 align-items-center title-mask-item'>

                                            </div>
                                            <ul>
                                                <li>Liên hệ ngay Hotline - Miễn phí công thay lên tới 100K.</li>
                                                <li>Hà Nộ: <a href="tel:037437999">037.437.999</a></li>
                                                <li>TP.HCM: <a href="tel:0969520520">0969.520.520</a> </li>
                                                <li>Đà Nẵng: <a href="tel:0971239797">097.123.9797</a></li>
                                                <li>Miễn phí cài đặt phần mềm</li>
                                                <li>Tặng miếng dán cường lực</li>
                                                <li>Tặng Gift Card giảm giá mua hàng</li>
                                            </ul>
                                        </>}
                                </div>
                            </div>
                            <div className='product-item-info'>
                                <p>
                                    <Link className='name' to={`/product/${it.id}`}>{it.name.length<40? it.name : it.name.slice(0,40)+'...'}</Link>
                                </p>
                                <p style={{ color: 'red' }}>{it.price[0]}đ</p>
                                <Link to={`/product/${it.id}`} className="btn btn-primary w-100 btn-buy" role="button">{props.fix===''?'Liên hệ':'Mua'}</Link>
                                <p className={props.pk === '' || props.fix === '' ? 'd-none' : ''}>Tặng: Cường lực - Ốp lưng - Tai nghe khi mua BHV (Nếu trong hộp chưa có).</p>
                                <p className={props.pk === '' || props.fix === '' ? 'd-none' : ''}> Giảm: 100K áp dụng HSSV mua BHV tại 42 phố Vọng.</p>
                            </div>
                        </motion.div>

                    )
                })}
            </div>
            <Toast
                none={none}
                prop={prop}
            />
            <div className='row'>
                <div className='col-lg d-flex justify-content-center '>
                    <button className='view-more' onClick={handleShowMore}>Xem thêm</button>
                </div>
            </div>

        </>
    );
}

export default IitemRender;