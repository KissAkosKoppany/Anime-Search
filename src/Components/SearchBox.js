import React, { useState } from "react";
import Filters from "./Filters";
import { FaFilter } from 'react-icons/fa';

const SearchBox = ({ searchInput, handleChecked, applyFilters }) => {

    const [isActive, setIsActive] = useState(false)

    function openFiltersTab() {
        setIsActive(true)
    }

    function closeFiltersTab() {
        setIsActive(false)
    }

    return (
        <div className="search-box-container">
            <input
                // onKeyPress={searchInput}
                onKeyDown={searchInput}
                type="search"
                className="search-box"
                placeholder="Search..."
            />
            <button onClick={openFiltersTab} className="button">Filters <FaFilter /></button> 
            <Filters isActive={isActive} closeFiltersTab={closeFiltersTab} applyFilters={applyFilters} />
        </div>
    )
}

export default SearchBox;