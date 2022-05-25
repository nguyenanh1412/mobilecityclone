import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import './style.css'
import IitemRender from '../public/itemRender';



function Phone(props) {
    let { allItemTelephone, pk, fix } = props
    const [arrRender, setArrRender] = useState([])
    useEffect(() => {
        setArrRender([...allItemTelephone].filter(it=>it.type===props.type))
    }, [allItemTelephone])
    //lọc theo giá
    const [conditionalName, setConditionalName] = useState([])
    const [conditionalPrice, setConditionalPrice] = useState([])
    useEffect(() => {
        setConditionalName([...allItemTelephone])
        setConditionalPrice([...allItemTelephone])
    }, [allItemTelephone])
    useEffect(() => {
        let arrFilter = ((conditionalPrice.map(it => conditionalName.indexOf(it)).filter(it => it !== -1)));
        setArrRender(arrFilter.map(it => conditionalName[it]).filter(it=>it.type===props.type));
    }, [conditionalPrice, conditionalName])
    const [filterPrice, setFilterPrice] = useState('Tất cả')
    const [filterName, setFilterName] = useState('Tất cả')
    let arrFilterPrice = [{
        name: 'Tất cả',
        conditional: [...allItemTelephone]
    },
    {
        name: 'Dưới 3 triệu',
        conditional: [...allItemTelephone].filter(it => Number(it.price[0].split('.').join('')) <= 3000000)
    },
    {
        name: 'Dưới 5 triệu',
        conditional: [...allItemTelephone].filter(it => Number(it.price[0].split('.').join('')) <= 5000000)
    },
    {
        name: 'Dưới 7 triệu',
        conditional: [...allItemTelephone].filter(it => Number(it.price[0].split('.').join('')) <= 7000000)
    },
    {
        name: 'Dưới 10 triệu',
        conditional: [...allItemTelephone].filter(it => Number(it.price[0].split('.').join('')) <= 10000000)
    },
    {
        name: 'Trên 10 triệu',
        conditional: [...allItemTelephone].filter(it => Number(it.price[0].split('.').join('')) > 10000000)
    }]
    let handleFilterPrice = (ev) => {
        let getConditionalPrice = (arrFilterPrice[arrFilterPrice.map(it => it.name).indexOf(ev.target.innerHTML)].conditional);
        setConditionalPrice(getConditionalPrice)
        setFilterPrice(ev.target.innerHTML)
    }
    //lọc theo hãng
    let arrFilterName = [{
        name: 'Tất cả',
        conditional: [...allItemTelephone]
    },
    {
        name: 'Xiaomi',
        conditional: [...allItemTelephone].filter(it => it.origin === 'Xiaomi')
    },
    {
        name: 'Samsung',
        conditional: [...allItemTelephone].filter(it => it.origin === 'Samsung')
    },
    {
        name: 'Apple',
        conditional: [...allItemTelephone].filter(it => it.origin === 'Apple')
    }]
    let handleFilterName = (ev) => {
        let getConditional = (arrFilterName[arrFilterName.map(it => it.name).indexOf(ev.target.innerHTML)].conditional);
        setConditionalName(getConditional)
        setFilterName(ev.target.innerHTML)
    }
    return (
        <motion.div
            animate={{ translateX: [100, 0], opacity: [0, 1] }}
        >
            <div className='container'>
                <div className='row'>
                    <div style={{ fontWeight: 'bold', padding: ' 15px 0' }} className="col-lg">
                        {props.name}
                    </div>
                </div>
                <div className={`row d-flex ${props.pk===''?'d-none':''}`} style={{ padding: '15px 0' }}>
                    <div className='col-lg-6 filter'>
                        <ul className='d-flex'>
                            <li style={{ fontWeight: 'bold' }}>Tìm theo</li>
                            <li className='filter-price'>
                                Mức giá
                                <i className="fa-solid fa-angle-down"></i>
                                <ul>
                                    {arrFilterPrice.map((it, idx) => {
                                        return (
                                            <li key={idx*Math.random()} className={filterPrice === it.name ? 'cheked' : ''} onClick={handleFilterPrice}>{it.name}</li>
                                        )
                                    })}
                                </ul>
                            </li>
                            <li className='filter-name'>
                                Hãng sản xuất
                                <i className="fa-solid fa-angle-down"></i>
                                <ul>
                                    {arrFilterName.map((it, idx) => {
                                        return (
                                            <li key={idx*Math.random()} className={filterName === it.name ? 'cheked' : ''} onClick={handleFilterName}>{it.name}</li>
                                        )
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className='row d-flex justify-content-center'>
                    {arrRender.length === 0
                        ? <motion.div
                            animate={{ translateX: [100, 0], opacity: [0, 1] }}
                            style={{
                                fontWeight: 'bold',
                                color: '#c69a39',
                                fontSize: '20px',
                                paddingBottom: '50px'
                            }}
                            className='col-lg d-flex justify-content-center'>Không có sản phẩm bạn cần tìm !!!!!!!!!!!</motion.div>
                        : <IitemRender
                            allItem={arrRender}
                            page={12}
                            pk={pk}
                            fix={fix}
                        />}
                </div>
            </div>
        </motion.div>
    );
}

export default Phone;