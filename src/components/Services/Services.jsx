import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './UpdatedResume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>About</span>
        <span>Me</span>
        <spane>
          <br />
          I am a final year B.Tech Computer Science student at Vellore Institute of Technology,
          <br />
           Bhopal, with a passion for Web Development and Problem Solving.
          <br />
          I am well-versed in crafting visually appealing and user-friendly
          <br />
          interfaces, ensuring a seamless user experience. My strong foundation 
           <br />
           
           in web development is complemented by a keen eye for design and a 
           <br />
           commitment to delivering high-quality work. Alongside my frontend 
            <br />
            proficiency, I possess a foundational understanding of backend  
           <br />
           technologies and robust problem-solving skills in C/C++, Python 
           <br />
           and Java. I'm dedicated to improving my coding skills and love 
           <br />
           creating simple, accessible websites and responsive webapps. 
           <br />
           Let's build something awesome together
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Basic Backend"}
            detail={"C++, Server-Side Framework(Express.js), DBMS(MySQL, MongoDB), Node.js, Java, JSON Web Token, RESTful Api,Open-Weather Api"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Front-End Development"}
            detail={"Html, Css, JavaScript, React,  React hooks, Modern CSS(Framework - Bootsrap), Framer Motion, Swiper js, Email .js library ,Responsive WebApp"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Tools"}
            detail={
              "GitHub, Git, Github Desktop,Netlify, Vercel, Canva, Vs-Code, Insomnia, Email js, Excel, MsWord, Ms-Office Prompt(ChatGPT, Bard-Ai)"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
