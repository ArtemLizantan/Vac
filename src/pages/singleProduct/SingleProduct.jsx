import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./singleProduct.scss";
import { inventory } from "../../data/inventory.js";
import { useParams } from "react-router-dom";
import LinkSolid from "../../UI/links/linkSolid/LinkSolid.jsx";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
export const SingleProduct = () => {
  const { idCar } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const selectedProduct = inventory.find((product) => product.id === idCar);

  return (
    <div className="single-product" key={selectedProduct.id}>
      <div className="container">
        <div className="single-product__body">
          <div className="single-product__top">
            <h2 className="single-product__title">
              {selectedProduct.name + " " + selectedProduct.model}
            </h2>
          </div>
          <div className="single-product__center">
            <div className="single-product__left">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 single-product__myswiper2"
              >
                {selectedProduct.images.map((img, id) => (
                  <SwiperSlide key={id}>
                    <img className="single-product__swiper-img" src={img} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper single-product__myswiper"
              >
                {selectedProduct.images.map((img, id) => (
                  <SwiperSlide key={id}>
                    <img className="single-product__swiper-img" src={img} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="single-product__right single-right">
              <div className="single-right__body">
                <div className="single-right__columns">
                  <div className="single-right__column">
                    <div className="single-right__column-item">
                      <div className="single-right__column-item-top">Price</div>
                      <div className="single-right__column-item-bottom single-right__column-item-bottom--price">{`${parseFloat(
                        selectedProduct.price
                      ).toLocaleString()} $`}</div>
                    </div>
                    <div className="single-right__column-item">
                      <div className="single-right__column-item-top">Body</div>
                      <div className="single-right__column-item-bottom">
                        {selectedProduct.bodyType}
                      </div>
                    </div>
                    <div className="single-right__column-item">
                      <div className="single-right__column-item-top">
                        Transmission
                      </div>
                      <div className="single-right__column-item-bottom">
                        {selectedProduct.transmission}
                      </div>
                    </div>
                  </div>
                  <div className="single-right__column">
                    <div className="single-right__column-item">
                      <div className="single-right__column-item-top">Year</div>
                      <div className="single-right__column-item-bottom">
                        {selectedProduct.year}
                      </div>
                    </div>
                    <div className="single-right__column-item">
                      <div className="single-right__column-item-top">
                        Kilometres{" "}
                      </div>
                      <div className="single-right__column-item-bottom">{`${parseFloat(
                        selectedProduct.kilometres
                      ).toLocaleString()}`}</div>
                    </div>
                  </div>
                </div>
                <div className="single-right__detail">
                  <h3 className="single-right__title">Detail</h3>
                  <div className="single-right__detail-columns">
                    <div className="single-right__detail-column">
                      <div className="single-right__detail-column-item">
                        {selectedProduct.occasion}
                      </div>
                      <div className="single-right__detail-column-item">
                        {selectedProduct.cylinders}
                      </div>
                      <div className="single-right__detail-column-item">
                        {selectedProduct.acceleration}
                      </div>
                      <div className="single-right__detail-column-item">
                        {selectedProduct.rate}
                      </div>
                    </div>
                    <div className="single-right__detail-column">
                      <div className="single-right__detail-column-item">
                        Capacity {selectedProduct.capacity}
                      </div>
                      <div className="single-right__detail-column-item">
                        {selectedProduct.workinkVolume}
                      </div>
                      <div className="single-right__detail-column-item">
                        Power steering
                      </div>
                      <div className="single-right__detail-column-item">
                        2500-4000 rpm
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-right__desc">
                  <h3 className="single-right__desc-title">Description</h3>
                  <p className="single-right__desc-text">
                    {selectedProduct.description}
                  </p>
                  <LinkSolid>Request more information</LinkSolid>
                </div>
              </div>
            </div>
          </div>
          <div className="single-product__bottom"></div>
        </div>
      </div>
    </div>
  );
};
