import '../home/style.css'
import IitemRender from '../public/itemRender'
import { motion } from "framer-motion";



function HomePage(props) {
    let { allItemTelephone } = props

    return (
        <motion.div
            animate={{
                translateX: [100, 0],
                opacity: [0, 1]
            }}
        >
            <div className='container' style={{ overflow: 'hidden' }}>
                {/* Slider */}
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src="https://cdn.mobilecity.vn/mobilecity-vn/images/2022/04/banner-redmi-note-11-chinh-hang-2.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="https://cdn.mobilecity.vn/mobilecity-vn/images/2022/04/banner-iphone-12-nhat.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.mobilecity.vn/mobilecity-vn/images/2022/04/banner-redmi-note-11-chinh-hang-2.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* sản phẩm hot */}
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg hot-product'>
                        <p>Sản phẩm HOT nhất</p>
                    </div>
                    <IitemRender
                        page={4}
                        allItem={allItemTelephone}
                    />
                </div>
                {/* phụ kiện */}
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg hot-pk'>
                        <p>Phụ kiện HOT</p>
                    </div>
                    <IitemRender
                        allItem={allItemTelephone.filter(it=>it.type==='pk')}
                        page={4}
                        pk={''}
                    />
                </div>
                {/* dịch vụ sửa chữa */}
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg hot-pk'>
                        <p>Dịch vụ sửa chữa</p>
                    </div>
                    <IitemRender
                        page={4}
                        allItem={allItemTelephone.filter(it=>it.type==='sc')}
                        fix={''}
                    />
                </div>


            </div>
        </motion.div>
    );
}

export default HomePage;