import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div  className="home">
            <div className="home__container">
                 <img
                  className="home__image"
                  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                  alt=""
                 />

                    <div className="home_row">
                        <Product
                            id="11246581"
                            title="Roll over image to zoom in 2 VIDEOS Ninja OS301 Foodi 10-in-1 Pressure Cooker and Air Fryer with Nesting Broil Rack, 6.5-Quart Capacity, and a Stainless Finish"
                            price={199.99}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/71h7Y437BLL._AC_SL1500_.jpg"
                        />

                        <Product
                            id="67452251"
                            title="Canon ImageCLASS MF236n All in One, Mobile Ready Printer, Black, 2.3"
                            price={210.00}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/811jJK8hLkL._AC_SL1500_.jpg"
                        />
                        <Product
                            id="98642873"
                            title="Monarch Specialties White Hollow-Core 3 Drawer File Cabinet on Castors"
                            price={129.93}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/61ALoZ8KHqL._AC_SL1300_.jpg"
                        />
                    </div>
                    <div className="home_row">
                       <Product 
                       id="12321341"
                       title="KOIOS Electric Juicer"
                       price={99.99}
                       rating={5}
                       image="https://m.media-amazon.com/images/I/41IX+BQZJGL._AC_SY240_.jpg"
                       />
                       <Product 
                       id="49538094"
                       title="Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support"
                       price={159.99}
                       rating={4}
                       image="https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg"
                       />
                    </div>
                    <div className="home_row">
                        <Product
                            id="4903850"
                            title="Lenovo Chromebook S330 Laptop, 14-Inch FHD (1920 x 1080) Display, MediaTek MT8173C Processor, 4GB LPDDR3, 64GB eMMC, Chrome OS, 81JW0000US, Business Black"
                            price={267.97}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/61ViOMIUhmL._AC_SX425_.jpg"
                        />

                        <Product
                            id="99903850"
                            title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
                            price={139.99}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
                        />
                        <Product
                            id="3254354345"
                            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                            price={598.99}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        />
                    </div>
                    <div className="home_row">
                        <Product
                            id="90829332"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                            price={1094.98}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
                        />
                       
                    </div>
            </div> 
        </div>
    );
}

export default Home;
