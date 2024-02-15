import React, { useContext } from "react";
import {Link} from "react-router-dom";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Vifnx from "../../img/vifnx.png";
import VitPGFriendly from "../../img/vitpgFriendly.png";
import MaxxWeather from "../../img/maxxweatherap.png";
import PortfolioMainak from "../../img/Mainak_portfolio.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
       
        <SwiperSlide>
        <a href="https://vifnx-academy.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={Vifnx} alt="" />
        </a>
        </SwiperSlide>

    

        <SwiperSlide>
        <a href="https://github.com/mainakkundu09/VIT-PG-Friendly" target="_blank" rel="noopener noreferrer">
          <img src={VitPGFriendly} alt="" />
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://mainak-maxxweatherapp-5f7334.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src={MaxxWeather} alt="" />
        </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={PortfolioMainak} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
