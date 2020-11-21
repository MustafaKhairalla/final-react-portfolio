import React from 'react';
import { useSpring, animated } from 'react-spring'


import "./about.css";

function About() {
    return (
        <div className="about">
            <div className="image">
                <img alt="mustafa khairalla" src={require("../../data/img/mustafa.jpg")}></img>
            </div>

            <div className="myText">
                <div className="title">
                    <h1>I design code to solve complex problems</h1>
                </div>
                <div className="para">
                    <p>Sotware Developer with a background in Web Development and Graphic design. With years of IT and development experience I can effectively combine creativity and problem solving to develop user-friendly applications. Known among staff for high derive to learn and great attention to details.</p>
                </div>
            </div>
        </div>
    )
};

export default About;