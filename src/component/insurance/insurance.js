import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import './style.css'
function Insurance({ form }) {
    const [Form,setForm]=useState([])
    useEffect(()=>{
        setForm([...form])
    },[form])
    return (
        <motion.div
            animate={{ translateX: [100, 0], opacity: [0, 1] }}
            className='container'
        >
            <div className='row'>
                <div className="col-lg">
                    <div className='navbar'>
                        <div>
                            <a>
                                Đơn hàng
                            </a>
                        </div>
                        <div>
                            <a>
                                YCSC
                            </a>
                        </div>
                        <div>
                            <a>
                                Email KM
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div style={{overflowX:'auto',overflowY: 'auto'}} className="col-lg">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{ width: "2%" }} >#</th>
                                <th scope="col" style={{ width: "15%" }}>Tên </th>
                                <th scope="col" style={{ width: "10%" }}>SĐT</th>
                                <th scope="col" style={{ width: "15%" }}>Email</th>
                                <th scope="col" style={{ width: "45%" }}>Mô tả</th>
                                <th scope="col" style={{ width: "12%" }}>Tình trạng</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Form.map((it,idx)=>{return(
                            <tr 
                            style={{
                                borderBottom:'black 1px solid'
                            }}
                             key={it.number}>
                                <th scope="row">{idx+1}</th>
                                <td>{it.name}</td>
                                <td>{it.number}</td>
                                <td>{it.email}</td>
                                <td>{it.text}</td>
                                <td>
                                <button style={{marginBottom:10}} className='btn btn-primary'>{it.status}</button>
                                <button className='btn btn-primary'>Xoá</button>
                                </td>
                            </tr>
                        )})}
                        </tbody>
                    </table>
                </div>
            </div>

        </motion.div>
    );
}

export default Insurance;