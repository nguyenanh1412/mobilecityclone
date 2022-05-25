import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'


function News(props) {
    let { news } = props
    let hightNew = news.lastest === undefined ? undefined : { ...news }.lastest.sort((a, b) => b.views - a.views)[0]

    const [view, setView] = useState(4)
    const handleViewMore = () => {
        if (view > news.lastest.length) {
            toast.warn('Bạn đã xem tới trang cuối cùng.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
            return
        }
        setView(pre => pre + 4)
    }
    return (
        <motion.div
            animate={{ translateX: [100, 0], opacity: [0, 1] }}
        >
            <div className='container'>
                <div className='row'>
                    <div className='col-lg header'>
                        Tin tức
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-9'>
                        <div className='row'>
                            <div className='col-lg-5 poiter'>
                                <div>
                                    <img className='w-100' src={hightNew === undefined ? '' : hightNew.img} />
                                    <p className='title'>{hightNew === undefined ? '' : hightNew.heading}</p>
                                    <p className='paragrap'>{hightNew === undefined ? '' : hightNew.info.slice(0, 200) + "..."}</p>
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                {news.lastest === undefined ? "" : news.lastest.sort((a, b) => b.id - a.id).slice(0, view).map(it => {
                                    return (
                                        <motion.div
                                            animate={{ opacity: [0, 1] }}
                                            key={it.id*Math.random()}
                                            className='poiter'
                                        >
                                            <div className='row title'>
                                                <div className="col-lg">{it.heading}</div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-5'>
                                                    <img className='w-100' src={it.img} />
                                                </div>
                                                <div className='col-lg-7 d-flex justify-content-between flex-column'>
                                                    <div className='row paragrap'>{it.info.slice(0, 80) + '...'}</div>
                                                    <div className='row'>
                                                        <div className='col-lg d-flex justify-content-between'>
                                                            <div className='time'> {it.time}</div>
                                                            <div className='time'><i className="fa-solid fa-eye"></i> {it.views}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                                <div className='row'>
                                    <div className='col-lg d-flex justify-content-center'>
                                        <button className='view-more' onClick={handleViewMore}>Xem thêm</button>
                                        <ToastContainer
                                            // position="top-right"
                                            // hideProgressBar={true}
                                            // newestOnTop={false}
                                            // closeOnClick
                                            // rtl={false}
                                            // pauseOnFocusLoss
                                            // draggable
                                            // pauseOnHover
                                        />
                                        <ToastContainer />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>Tin công nghệ</div>
                        {news.newTechnology === undefined ? "" : news.newTechnology.sort((a, b) => b.id - a.id).slice(0, 6).map(it => {
                            return (
                                <motion.div
                                    animate={{ translateX: [100, 0], opacity: [0, 1] }}
                                    className='row newTechnology poiter'>
                                    key={it.id*Math.random()}
                                    <div className='col-lg-4'>
                                        <img className='w-100' src={it.img} />
                                    </div>
                                    <div className='col-lg-8 d-flex flex-column justify-content-between'>
                                        <div className='row'>
                                            <div className="col-lg">
                                                <p style={{ padding: 0 }} className='title'>{it.heading}</p>
                                                <p className='paragrap'>{it.info.slice(0, 150) + "..."}</p>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg d-flex justify-content-between'>
                                                <div className='time'> {it.time}</div>
                                                <div className='time'><i className="fa-solid fa-eye"></i> {it.views}</div>
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>)
                        })}
                    </div>
                    <div className='col-lg-3 '>
                        <div className='row'>
                            <div className='col-lg header'>
                                Tin khuyến mại
                            </div>
                        </div>
                        {news.promotion === undefined ? "" : news.promotion.sort((a, b) => b.id - a.id).slice(0, 3).map(it => {
                            return (
                                <motion.div
                                    animate={{ translateX: [100, 0], opacity: [0, 1] }}
                                    className='row poiter'>
                                    key={it.id*Math.random()}
                                    <div className="col-lg">
                                        <div>
                                            <img className='w-100' src={it.img} />
                                            <p style={{ padding: 0 }} className='title'>{it.heading}</p>
                                            <p className='view'><i className="fa-solid fa-eye"></i> {it.views}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default News;