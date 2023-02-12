import React, { useState } from "react";

const Card = ({ anime }) => {

    const [flip, setFlip] = useState(false)

    return (
        <div onClick={() => setFlip(!flip)} className={flip ? "flip card-element" : "card-element"}>
            <div 
                className="card-content card-content-front" 
                style={{
                    backgroundImage: `url(${anime?.images.jpg.large_image_url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* <img className="card-image" src={anime.image_url} alt=""/> */}
                <p className="title">{anime?.title}</p>
            </div>
            <div className="card-content card-content-back">
                <h1 className="info-title">{anime?.title}</h1>
                <div className="anime-info">
                    <h2 className="info-text">Episodes: {anime?.episodes}</h2>
                    <h2 className="info-text">Start date: {anime?.aired.string}</h2>
                    <h2 className="info-text">Genres: {anime?.genres.map(genre => genre.name + " ")}</h2>
                    <h2 className="info-text">Score: {anime?.score}</h2>
                    <h2 className="info-text">Type: {anime?.type}</h2>
                    <h2 className="info-text">For more info: </h2>
                    <a className="link" href={anime?.url}>Click the Link</a>
                </div>
            </div>
        </div>
    )
}

export default Card;