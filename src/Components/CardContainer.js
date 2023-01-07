import React, { useEffect, useState } from "react";
import Card from "./Card";
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

const CardContainer = ({ animeList }) => {

    const [sliderPosition, setSliderPosition] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);

    const slider = document.getElementById('slider');
    
    const scrollWidth = () => {
        if(animeList.length) setSliderWidth(slider?.scrollWidth);
    }

    useEffect(() => {
        scrollWidth();
    })

    const containerWidth = () => {
        if(animeList.length) return slider?.clientWidth;
    }
    
    const slideLeft = () => {
        var scrollLeft = slider?.scrollLeft - (slider?.clientWidth - 150);
        if(scrollLeft !== 0) {
            slider.scrollLeft = scrollLeft;
            setSliderPosition(scrollLeft);
        } else {
            slider.scrollLeft = scrollLeft;
            setSliderPosition(0);
        }
    }
    
    const slideRight = () => {
        var scrollRight = slider?.scrollLeft + (slider?.clientWidth - 150);
        if(scrollRight < slider.scrollWidth - slider.clientWidth) {
            slider.scrollLeft = scrollRight;
            setSliderPosition(scrollRight)
        } else {
            slider.scrollLeft = scrollRight;
            setSliderPosition(slider.scrollWidth)
        }
    }

    return (
        <div className="slide-items-container">
            <button id={sliderPosition <= 0 ? 'slide-button-hidden' : ''} onClick={slideLeft} className="slide-button slide-button-left"><MdKeyboardArrowLeft /></button>
            <div id="slider" className="card-container snap-inline">
            {
                animeList.map(anime => { 
                    if(anime.approved) return <Card key={anime.mal_id} anime={anime}/>
                    return null
            })}
            </div>
            <button id={sliderPosition === sliderWidth || sliderWidth <= containerWidth() ? 'slide-button-hidden' : ''} onClick={slideRight} className="slide-button slide-button-right"><MdKeyboardArrowRight /></button>
        </div>
    )
}

export default CardContainer;