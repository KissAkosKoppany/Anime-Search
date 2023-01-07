import React from "react";

const Filters = ({ isActive, closeFiltersTab, applyFilters }) => {
    
    function handleFilterSubmit(e) {
        e.preventDefault();
        let type = e.target[0].value;
        let status = e.target[1].value;
        let order_by = e.target[2].value;
        let sort = e.target[3].value;
        applyFilters(type, status, order_by, sort)
    }

    return (
        <div>
            <div className={`filters-box ${isActive ? "active" : ""}`} id="filters">
                <form method="GET" onSubmit={handleFilterSubmit} className='filters-form'>
                    <div className="filters-container">
                        <div className="filter-group">
                            <h1 className="filter-name">Type:</h1>
                            <label htmlFor="type">
                                <select className="filter-tag button" id="type" name="type" defaultValue='tv'>
                                    <option value='tv'>Tv</option>
                                    <option value='movie'>Movie</option>
                                    <option value='ova'>Ova</option>
                                    <option value='special'>Special</option>
                                </select>
                            </label>
                        </div>
                        <div className="filter-group">
                            <h1 className="filter-name">Status:</h1>
                            <label htmlFor="status">
                                <select className="filter-tag button" id="status" name="status" defaultValue='complete'>
                                    <option value='complete'>Complete</option>
                                    <option value='airing'>Airing</option>
                                    <option value='upcoming'>Upcoming</option>
                                </select>
                            </label>
                        </div>
                        <div className="filter-group">
                            <h1 className="filter-name">Order by:</h1>
                            <label htmlFor="order_by">
                                <select className="filter-tag button" id="order_by" name="order_by" defaultValue='score'>
                                    <option value='score'>Score</option>
                                    <option value='title'>Title</option>
                                    <option value='rating'>Rating</option>
                                    <option value='episodes'>Episodes</option>
                                    <option value='Rank'>Rank</option>
                                    <option value='popularity'>Popularity</option>
                                </select>
                            </label>
                        </div>
                        <div className="filter-group">
                            <h1 className="filter-name">Sort:</h1>
                            <label htmlFor="sort">
                                <select className="filter-tag button" id="sort" name="sort" defaultValue='desc'>
                                    <option value='desc'>Descending</option>
                                    <option value='asc'>Ascending</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <button className="button submit-button" type="submit" onClick={closeFiltersTab}>Apply</button>
                </form>
            </div>
            <div onClick={closeFiltersTab} id="overlay" className={`${isActive ? "active" : ""}`}></div>
        </div>
    )
}

export default Filters;