import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './component/public/header';
import Footer from './component/public/footer';
import Home from './component/home/home'
import { Input } from 'reactstrap';
import Phone from './component/phone/phone';
import Tablet from './component/tablet/tablet';
import { AnimatePresence } from "framer-motion";
import ScrollToTop from './component/public/scrollTopNextPage';
import Accessory from './component/pk/Accessory';
import "./App.css"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import ScrollButton from './component/public/ScrollTop';
import Icon from './component/public/iconFbZl';
import { useEffect, useState } from 'react';
import TelePhone from './API/telePhone'
import NewAPI from './API/newAPI';
import Fix from './component/fix/fix';
import News from './component/news/News';
import Insurance from './component/insurance/insurance';
import Product from './component/public/product';
import Form from './component/form lh/Form';

function App() {
  const [allItemTelephone, setAllItemTelephone] = useState([])
  useEffect(() => {
    TelePhone.getAll().then(res => setAllItemTelephone(res))
  }, [])
  //props NEWS
  const [news, setNews] = useState([])
  useEffect(() => {
    NewAPI.getAll().then(res => setNews(res))
  }, [])
  // xem sp
  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenu = () => {
    setShowMenu(true)
  }
  const handleHideMenu = () => {
    setShowMenu(false)
  }


  return (
    <Router className='wrap-all'>
      <div className='sticky-top white'>
        <div className='container '>
        </div>
        <div className='red'>
          <div className="container ">
            <div className="row">
              <div className="col-lg-5 col-md">
                <div className='row'>
                  <div className='col-lg-5 col-md-3 col-sm-2 col-2  d-flex align-items-center justify-content-start'>
                    <Link to="/" className='d-flex align-items-center h-100 d-none d-md-flex'>
                      <img className='img' src='https://cdn.mobilecity.vn/mobilecity-vn/images/2022/01/w300/logo-mobilecity-2022.png' />
                    </Link>
                    <Link to="/" className='d-flex align-items-center h-100 d-md-none d-sm-flex'>
                      <img className='img' src='https://cdn.mobilecity.vn/mobilecity-vn/images/2022/01/w80/mc-logo-15-1.png' />
                    </Link>
                  </div>
                  <div className='col-lg-7 col-md-7 col-sm-8 col-8 d-flex align-items-center justify-content-end'>
                    <Input
                      type='search'
                      placeholder='Search.....'
                    />
                  </div>
                  {/* menu responsive */}
                  <div className='col-sm-2 d-flex col-md-2 col-sm-2 col-2 align-items-center d-lg-none d-sm-flex justify-content-end'>
                    <button onClick={handleShowMenu} className='btn-menu-res'><i class="fa-solid fa-bars"></i></button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 d-none d-lg-block">
                <div className='row wrap-nav'>
                  <NavLink to="/phone" href="" className="col-lg-2  nav">
                    <i className=" font fa-solid fa-mobile-screen"></i>
                    <p>điện thoại</p>
                  </NavLink>
                  <NavLink to="/tablet" className="col-lg-2  nav">
                    <i className=" font fa-solid fa-tablet-screen-button"></i>
                    <p>tablet</p>
                  </NavLink>
                  <NavLink to="/accessory" className="col-lg-2  nav">
                    <i className=" font fa-solid fa-boxes-packing"></i>
                    <p>phụ kiện</p>
                  </NavLink>
                  <NavLink to='/fix' className="col-lg-2  nav">
                    <i className="font fa-solid fa-screwdriver-wrench"></i>
                    <p>sửa chữa</p>
                  </NavLink>
                  <NavLink to="/news" className="col-lg-2  nav">
                    <i className=" font fa-solid fa-newspaper"></i>
                    <p>tin tức</p>
                  </NavLink>
                  <NavLink to="/insurance" className="col-lg  nav">
                    <i className=" font fa-solid fa-shield-heart"></i>
                    <p>tra cứu bh</p>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop>
        <AnimatePresence>
          <div
            className='d-lg-none d-sm-flex'
            style={{
              position: 'fixed',
              width: '100%',
              backgroundColor: 'white',
              height: '100%',
              zIndex: 5,
              transform: `${showMenu ? 'translateX(0)' : 'translateX(100%)'}`,
              transition: 'all .2s'
            }}
          >
            <div className='container'>
              <div className='row'>
                <div
                  onClick={handleHideMenu}
                  style={{
                    textAlign: 'end',
                    fontSize: 50,
                  }}><i class="fa-solid fa-xmark"></i></div>
              </div>
              <div className='row'>
                <NavLink  to="/" href="" className="  nav">
                  <p style={{color:'black', fontSize:'20px'}} onClick={handleHideMenu}>trang chủ</p>
                </NavLink>
              </div>
              <div className='row'>
                <NavLink  to="/phone" href="" className="  nav">
                  <p style={{color:'black', fontSize:'20px'}} onClick={handleHideMenu}>điện thoại</p>
                </NavLink>
              </div>
              <div className='row'>
                <NavLink  to="/tablet" className="  nav">
                  <p style={{color:'black', fontSize:'20px'}} onClick={handleHideMenu}>tablet</p>
                </NavLink>
              </div>
              <div className='row'>
                <NavLink  to="/accessory" className="  nav">
                  <p style={{color:'black', fontSize:'20px'}} onClick={handleHideMenu}>phụ kiện</p>
                </NavLink>
              </div>
              <div className='row'>
                <NavLink  to='/fix' className="  nav">
                  <p style={{color:'black', fontSize:'20px'}} onClick={handleHideMenu}>sửa chữa</p>
                </NavLink>
              </div>
              <div className='row'>
                <NavLink  to="/news" className="  nav">
                  <p style={{color:'black', fontSize:'20px'}} onClick={handleHideMenu}>tin tức</p>
                </NavLink>
              </div>
              <div className='row'>
                <NavLink  to="/insurance" className="nav">
                  <p style={{color:'black', fontSize:'20px'}} onClick={handleHideMenu}>tra cứu bh</p>
                </NavLink>
              </div>
            </div>
          </div>
          <Routes>
            <Route path='/' element={<Home
              allItemTelephone={allItemTelephone}
            />} />
            <Route path="/phone" element={<Phone
              allItemTelephone={allItemTelephone}
              name={'Điện thoại di động'}
              type={'phone'}
            />} />
            <Route path="/tablet" element={<Tablet allItemTelephone={allItemTelephone} />} />
            <Route path="/accessory" element={<Accessory allItemTelephone={allItemTelephone} />} />
            <Route path="/fix" element={<Fix allItemTelephone={allItemTelephone} />} />
            <Route path="/news" element={<News news={news[0]} />} />
            <Route path="/insurance" element={<Insurance />} />
            {allItemTelephone.map(it => {
              return (
                <Route key={it.id} path={`/product/${it.id}`} element={<Product
                  allItemTelephone={allItemTelephone}
                  id={it.id}
                />} />
              )
            })}
            <Route path="/form" element={<Form />} />

          </Routes>
        </AnimatePresence>
      </ScrollToTop>
      <Footer />
      <ScrollButton />
      <Icon />
    </Router >

  );
}

export default App;
