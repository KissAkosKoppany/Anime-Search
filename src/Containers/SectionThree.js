import React from "react";
import './SectionThree.css';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';

const SectionThree = () => {
    return (
        <div className="footer">
            <h2>Follow Me</h2>
            <div className="nav-bar">
                <abbr title="Subscribe to my Youtube chanel"><FaYoutube className="icon" /></abbr>
                <abbr title="Follow me on Facebook"><FaFacebook className="icon" /></abbr>
                <abbr title="Follow me on Github"><FaGithub className="icon" /></abbr>
            </div>
            <a href="https://mailchi.mp/d00df4440b19/animereviews">
                <button className="register-button">Register now</button>
            </a>
            <div className="copy-right">
                <FaCopyright className="copy-right-icon"/>
                <p>2022 Developed by Kiss Akos</p>
            </div>
	    </div>
    )
}

export default SectionThree;