import React, { useEffect, useState } from "react";
import './SectionTwo.css';
import CardContainer from "../Components/CardContainer";
import SearchBox from "../Components/SearchBox";

const SectionTwo = () => {

    const [animeList, setAnimeList] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [filters, setFilters] = useState({
        type: 'tv',
        status: 'complete',
        order_by: 'score',
        sort: 'desc'
    })

    const base_url = 'https://api.jikan.moe/v4/anime';

    useEffect(() => {
        fetch(`${base_url}?q=${searchfield}&type=${filters.type}&status=${filters.status}&order_by=${filters.order_by}&sort=${filters.sort}`)
            .then(response => response.json())
            .then(data => setAnimeList(data.data))
            .catch(err => console.log(err))
    }, [filters, searchfield] )

    function searchInput(e) {
        if(e.charCode === 13) setSearchfield(e.target.value)
    }

    function applyFilters(type, status, order_by, sort) {
        setFilters({
            type: type,
            status: status,
            order_by: order_by,
            sort: sort
        })
    }

    

    // console.log(animeList)

    return (
        <div className="slide-container">
            <div className="slide-title">
                <h2>Dive into the world of Anime</h2>
            </div>
            <SearchBox 
                searchInput={searchInput}
                applyFilters={applyFilters}
            />
            <CardContainer 
                animeList={animeList}
            />
	    </div>
    )
}

export default SectionTwo;