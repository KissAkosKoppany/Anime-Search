import React from "react";
import './SectionOne.css';
// import { MdKeyboardArrowDown } from 'react-icons/md'

const SectionOne = () => {
    return (
        <div className="section-one">
            <div className="first-container">
                <div className="left-box">
                    <h1>Anime</h1>
                    <h1>reviews</h1>
                </div>
                <div className="right-box">
                    <div className="side-crd left"></div>
                    <div className="middle-crd"></div>
                    <div className="side-crd right"></div>
                </div>
            </div>
            <div className="info-container">
                <div className="info-box">
                    <h2>Description</h2>
                    <p>Detailed descrition for each anime.</p>
                </div>
                <div className="info-box">
                    <h2>Statistics</h2>
                    <p>Rating scores, rankings, popularity based on thousands of fan reviews.</p>
                </div>
                <div className="info-box">
                    <h2>Information</h2>
                    <p>Informations about the series including number of the episodes, source, current status, studio and a lot more.</p>
                </div>
            </div>
            {/* <a href="#section-two"><button className="section-change-button"><MdKeyboardArrowDown /></button></a> */}
	    </div>
    )
}

export default SectionOne;