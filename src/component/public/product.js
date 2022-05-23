import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Product(props) {
    let { allItemTelephone, id } = props
    let itemRender = allItemTelephone.filter(it => it.id === id)[0]
    console.log(itemRender);
    let arrColor = [{ name: 'white-color', color: 'Màu trắng' }, { name: 'black-color', color: 'Màu đen' }, { name: 'blue-color', color: 'Màu xanh' }]
    const [check, setCheck] = useState('')
    const [color, setColor] = useState('')
    let handleColor = (ev, color) => {
        console.log(ev.target.className, color);
        setCheck(ev.target.className);
        setColor(color)

    }
    const [stoge, setStoge] = useState('')
    let handleStoge = (ev, it) => {
        setStoge(it)
    }
    const [tick, setTick] = useState('')
    const handleBH = (ev) => {
        setTick(tick === 'tick' ? '' : 'tick')
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm();
    const onSubmit = (data) => {
        toast.success('From đã gửi thành công, chúng tôi sẽ liên hệ lại sau ít phút. Xin cảm ơn !!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        console.log(data);
        reset()
    };
    return (
        <div className='container'>
            <div className='row'>
                <div style={{ fontWeight: 700, padding: '25px 0' }} className="col-lg">
                    {itemRender.name}
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-5'>
                    <img className='w-100' src={itemRender.img[1]} />
                    <p style={{ fontWeight: 700, padding: '25px 0' }}>Danh Sách Cửa Hàng:</p>
                    <ul style={{ backgroundColor: '#f6f6f6' }}>
                        <li>Cửa hàng online <span className={`stt ${itemRender.type === 'sc' ? 'd-none' : ''}`}>(còn hàng)</span></li>
                        <li>120 Thái Hà, Q. Đống Đa <span className={`stt ${itemRender.type === 'sc' ? 'd-none' : ''}`}>(còn hàng)</span></li>
                        <li>398 Cầu Giấy, Q. Cầu Giấy <span className={`stt ${itemRender.type === 'sc' ? 'd-none' : ''}`}>(còn hàng)</span></li>
                        <li>42 Phố Vọng, Hai Bà Trưng <span className={`stt ${itemRender.type === 'sc' ? 'd-none' : ''}`}>(còn hàng)</span></li>
                    </ul>
                </div>
                <div className={`col-lg-7 ${itemRender.type === 'sc' ? 'd-none' : ''}`}>
                    <div className='row'>
                        <div className="col-lg">
                            <p style={{ fontWeight: 700, padding: '0 0 25px 0' }}>Giá:</p>
                            <p style={{ fontSize: 20, color: 'red' }}>{itemRender.price[0] + "đ"}  {itemRender.type === 'pk' ? '' : '-' + itemRender.price[1] + "đ"} <span style={{ fontSize: 15, color: 'black', textDecoration: 'line-through' }}>{itemRender.priceOld + "đ"}</span> </p>
                            <p className={itemRender.type !== 'pk' ? '' : 'd-none'}>Chọn phiên bản:</p>
                            {console.log(itemRender.type)}
                            <table className={`table ${itemRender.type !== 'pk' ? '' : 'd-none'}`}>
                                <tbody>
                                    <tr>
                                        <td width={'25%'}>Màu sắc</td>
                                        <td className='d-flex align-items-center'>
                                            {arrColor.map(it => {
                                                return (
                                                    <div key={it.name} onClick={(ev) => handleColor(ev, it.color)} className={`${it.name} ${check.includes(it.name) ? 'tick' : ''}`}></div>
                                                )
                                            })}
                                            <p style={{ paddingLeft: 10 }}>{color}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bộ nhớ</td>
                                        <td className='d-flex align-items-center'>
                                            {itemRender.stoge.map(it => {
                                                return (
                                                    <div key={it} onClick={(ev) => handleStoge(ev, it)} className={`stoge ${stoge.includes(it) ? 'tick' : ''}`}>{it}</div>
                                                )
                                            })}
                                            <div style={{ paddingLeft: 10 }}>{stoge}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Gói bảo hành</td>
                                        <td className='d-flex align-items-center'>
                                            <div onClick={(ev) => handleBH(ev)} className={`stoge ${tick}`}>Bảo hành vàng</div>
                                            <div style={{ paddingLeft: 10 }} className={tick === '' ? 'd-none' : ''}>+650.000đ</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>Thời gian bảo hành: <sapn style={{ fontWeight: 700 }}>BH thường 12 tháng</sapn><sapn style={{ fontWeight: 700 }} className={tick === '' ? 'd-none' : ''}>, BHV 12 tháng.</sapn></div>
                            <div>Giao hàng tận nơi miễn phí.</div>
                            <div className='KM'>
                                <p>Khuyến mãi:</p>
                                <ul>
                                    <li>Tặng: <span>Cường lực - Ốp lưng - Tai nghe</span> khi mua BHV (Nếu trong hộp chưa có)</li>
                                    <li>Giảm: <span>100K</span> áp dụng HSSV mua BHV tại <span>42 phố Vọng</span></li>
                                    <li>Mua: Dán cường lực 21D full màn chỉ <span>30K</span></li>
                                    <li>Giảm 100K khi mua BHV và đặt hàng tại: </li>
                                    <li>- Chat online: <a href='https://www.facebook.com/'>Chat Facebook</a></li>
                                    <li>- Hà Nội: <a href='tel:0969.120.120'>0969.120.120</a></li>
                                    <li>- Tp.HCM: <a href='tel:0965.123.123'>0965.123.123</a></li>
                                    <li>- Đà Nẵng: <a href='tel:096.123.9797'>096.123.9797</a></li>
                                    <li>Mua SHOPEE giá Rẻ: <a href='https://shopee.vn/'>CLICK</a></li>
                                </ul>
                            </div>
                            <p>Hotline: 0969.120.120 (HN) | 0965.123.123 (HCM) | 096.123.9797 (ĐN)</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'><button style={{ padding: '20px 10px' }} className='btn btn-primary w-100'>THÊM VÀO GIỎ HÀNG</button></div>
                        <div className='col-lg-6'><button style={{ padding: '20px 10px', backgroundColor: '#f98c46' }} className='btn btn-primary w-100'>MUA NGAY</button></div>
                    </div>
                    <div className='row'>
                        <div style={{ padding: '20px 10px' }} className='col-lg-12'><button style={{ padding: '24px 10px' }} className='btn btn-primary w-100'>MUA TRẢ GÓP</button></div>
                    </div>
                </div>
                <div className={`col-lg-7 ${itemRender.type === 'sc' ? '' : 'd-none'}`}>
                    <div className="col-lg">
                        <p>Để nhận được dịch vụ sửa chữa cũng như những ưu đãi tốt nhất bạn vui lòng điền vào form kiên hệ sau.</p>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Họ tên</label>
                                <input {...register("name", { required: true })} type="text" class="form-control" id="exampleInputPassword1" />
                                {errors.name && <p style={{ color: 'red', fontSize: 15 }}>*Trường này không thể bỏ trống</p>}
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Số điện thoại</label>
                                <input {...register("number", { required: true })} type="number" class="form-control" id="exampleInputPassword1" />
                                {errors.number && <p style={{ color: 'red', fontSize: 15 }}>*Trường này không thể bỏ trống</p>}
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input {...register("email", { required: true })} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                {errors.email && <p style={{ color: 'red', fontSize: 15 }}>*Trường này không thể bỏ trống</p>}
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Mô tả tình trạng hỏng hóc</label>
                                <textarea {...register("status")} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Gửi</button>
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                            {/* Same as */}
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
            <div className={`row ${itemRender.type === 'sc' ? 'd-none' : ''}`}>
                <div className="col-lg">
                    <p style={{ fontWeight: 700, padding: '25px 0' }}>Chi tiết sản phẩm</p>
                    <p>Siêu phẩm {itemRender.name}, chip Dimensity 1200 mạnh mẽ, rẻ nhất tại Hà Nội, Tp.HCM, Đà Nẵng. Phân phối {itemRender.name}, BH chính hãng! <br /> {itemRender.name} chạy chip Dimensity 1200 6nm đem đến hiệu năng mạnh mẽ, máy kết hợp với RAM 6GB và 8GB (tuỳ từng phiên bản) đem đến khả năng chơi game bền bỉ, đa nhiệm các tác vụ trên máy một cách mượt mà trơn tru nhất. {itemRender.name} xứng đáng là một chiếc gaming phone giá rẻ, hiệu năng cao mà người tiêu dùng nhất định phải sở hữu.</p>
                    <div style={{ textAlign: 'center', margin: '20px 0' }}><img className='w-100' src={itemRender.img[0]} /></div>
                    <p> {itemRender.name} là một gaming phone có hệ thống tản nhiệt tân tiến nhất thời điểm hiện tại.  {itemRender.name} được trang bị hệ thống tản nhiệt buồng hơi (Vapor Chamber) và tản nhiệt bằng tấm Graphite, cho hiệu quả tản nhiệt cao hơn với hệ thống tản nhiệt tân tiến này chắc chắn đem đến cho người tiêu dùng việc chơi game lâu dài và bền bỉ diễn ra một cách hoàn hảo nhất.</p>
                    <div style={{ textAlign: 'center', margin: '20px 0' }}><img className='w-100' src={itemRender.img[1]} /></div>
                    <p> {itemRender.name} có loa được tinh chỉnh bởi hãng âm thanh trứ danh JBL đem đến khả năng phát âm thanh độ phân giải cao với những thanh âm trong trẻo, phù hợp mọi thể loại âm thanh mà người tiêu dùng mong muốn.  {itemRender.name} xứng đáng là chiếc gaming phone có loa trên điện thoại thông minh hay nhất.</p>
                    <div style={{ textAlign: 'center', margin: '20px 0' }}><img className='w-100' src={itemRender.img[2]} /></div>
                </div>
            </div>
        </div>
    );
}

export default Product;