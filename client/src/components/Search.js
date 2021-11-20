import React from 'react'
import search from '../images/search.svg';

function Search({fetchSearchAPI}){
    const handleChange = (e) => {
        fetchSearchAPI(e.target.value)
    }
    return (
        <div className="search left">
                <input type='text' placeholder="Search" onChange={handleChange} />
                <span>
                    <img src={search} alt="search"  className="searchImg"/>
                </span>
        </div>
    )
}

export default Search
