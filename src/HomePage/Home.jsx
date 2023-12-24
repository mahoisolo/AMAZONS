import React from 'react'
import "./home.css"
import Products from './Products';

function Home() {
  return (
    <div>
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71j8damPo5L._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Products
            id="12321341"
            title="toys"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg"
          />
          <Products
            id="123"
            title="Deals in Pc"
            price={20.01}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v1._SY608_CB573698005_.jpg"
          />
          <Products
            id="234"
            title="shop last-minute holiday deals now"
            price={11.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/LastMinuteDeals/Fuji_Last_Minute_Deals_Card_2x_12_Dec_EN._SY608_CB571034271_.jpg"
          />
          <Products
            id="34"
            title="shop deals in fashion"
            price={51.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_2x._SY232_CB623353881_.jpg"
          />
        </div>
        <div className="home__row">
          <Products
            id="340"
            title="beauty steals"
            price={51.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v5._SY608_CB573698005_.jpg"
          />
          <Products
            id="342"
            title="Home decor"
            price={70.0}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg"
          />
          <Products
            id="341"
            title="Gaming accessories"
            price={8.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg"
          />
          <Products
            id="343"
            title="Refresh your space"
            price={20.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_LP-HP_B08MYX5Q2W_01.23._SY232_CB619238939_.jpg"
          />
        </div>
        <div className="home__row">
          <Products
            id="344"
            title="Fashio trends you would like"
            price={20.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_4_x2._SY232_CB595261253_.jpg"
          />
          <Products
            id="345"
            title="Deals on most loved ones"
            price={22.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2023/Shoulder/W1/GW/DQC/SP23_332_DQC_CML01_HOME_2x._SY232_CB577173231_.jpg"
          />
          <Products
            id="346"
            title="A whole new way to work"
            price={9.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1622892_3373436_758x608_2X_en_US._SY608_CB597161294_.jpg"
          />
          <Products
            id="347"
            title="Host gifts"
            price={1.07}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Winter23/WIN23_HostessGifts_Candles_QuadCard_D_01_372x232._SY232_CB577074175_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home