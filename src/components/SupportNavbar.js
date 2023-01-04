import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./scss/SupportNavbar.scss";
const SupportNavbar = () => {
  return (
    <>
      <div className="outterBody">
        <div className="innerBody">
          <div className="support">
            <p>
              <FontAwesomeIcon icon={faHeadset} /> support(00)33-169-7720
            </p>
          </div>
          <div className="policy">
            <Swiper
              rewind={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
          <div className="order-lang">
            <div className="orderTrack">
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> Order tracking
              </p>
            </div>
            <div className="lang">
              <select>
                <option>
                  <p>IND/$</p>
                </option>
                <option>ENG/$</option>
                <option>PAK/$</option>
                <option>CHINA/$</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportNavbar;
