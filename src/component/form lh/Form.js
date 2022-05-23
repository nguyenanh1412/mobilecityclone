import React from 'react';
import { motion } from "framer-motion";


function Form(props) {
    return (
        <motion.div
            animate={{ translateX: [100, 0], opacity: [0, 1] }}
            className='container'
        >
            <div className='row'>
                <div className="col-lg">
                    <h1>Yêu cầu sửa chữa</h1>
                </div>
            </div>
            <div className='row'>
                <div className="col-lg">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col-lg">#</th>
                                <th scope="col-lg">Tên khách hàng</th>
                                <th scope="col-lg">Số điện thoại</th>
                                <th scope="col-lg">Email</th>
                                <th scope="col-lg">Mô tả</th>
                                <th scope="col-lg">Tình trạng xử lí</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </motion.div>
    );
}

export default Form;