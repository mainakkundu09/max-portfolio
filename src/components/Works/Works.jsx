import React, { useContext } from "react";
import "./Works.css";
import VIFNX from "../../img/vifnx.png"
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked for my Own
          </span>
          <span>Website VIFNX-(Business-oriented)</span>
          <spane>
            <p> It's a Virtual Integrated Natural Fitness Platform-Academy.</p>
           
            <br />
            I worked as a Frontend Developer and Designer on this project. Since I believe how much
            <br />
             fitness is needed in day-to-day life with that in mind and as I my self is related to 
             <br />
             the field of fitness (Up. Brown in Karate-Shinkyokushin), Yoga, Body weight Exercises 
             <br />
             and Gym-Diets too so I thought to make an website to help everyone irrespective of age
             <br />
              in this world of busy schedules pupils dont have time to go to gym physicallly so I 
              <br />
              have created this Exclusive Platform where anyone from anywhere can get trained according
              <br />
               to their interests . A lot of Free Resources are also Provided by me created by my own knowledge 
               <br />
               and experience in that. With a Business thought and collaboration with other pupils in this in
               <br />
               mind because any trainer who wants to teach and anyone who want to join as a trainee can simply 
               <br />
               register by putting their email in the contact section of our website. Thankyou . Here I am the 
               <br />
               Founder as well as Personal Fitness Trainer and Developer of this Project. It has benefitted pupils too   
           
            <br />
           
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          {/* <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div> */}
          {/* <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div> */}
          <div className="w-secCircle">
            <img class="Vifnx" src={VIFNX} alt="" />
          </div>{" "}
          {/* <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div> */}
          {/* <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div> */}
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle">
        </div>
        
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
