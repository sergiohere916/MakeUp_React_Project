import React from "react";
import {FiSearch} from 'react-icons/fi'


function SearchBar({updateSearch, filterCosmetics}) {

    const handleChange = (e) => {updateSearch(e.targert.value)}
    return(
        <div id="SearchBar">
            <input type="text"
            placeholder="Find Your MakeUp"
            id="search"
            value={filterCosmetics}
            onChange={handleChange}
            />
            <button id="SearchButton">{FiSearch}</button>
        </div>
    )
}

export default SearchBar;