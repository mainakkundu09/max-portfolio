import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>90%</div>
        <span  style={{color: darkMode?'white':''}}>Effective </span>
        <span>Communication Skills</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>80%</div>
        <span  style={{color: darkMode?'white':''}}>Team </span>
        <span>Collaboration</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>90%</div>
        <span  style={{color: darkMode?'white':''}}>Problem</span>
        <span>Solving</span>
      </div>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>95%</div>
        <span  style={{color: darkMode?'white':''}}>Adaptability </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>80%</div>
        <span  style={{color: darkMode?'white':''}}>Time </span>
        <span>Management</span>
      </div>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>85%</div>
        <span  style={{color: darkMode?'white':''}}>Leadership </span>
        <span>Skills</span>
      </div>
      
     
    
     
    
      
    </div>
  );
};

export default Experience;
