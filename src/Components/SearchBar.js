import React from "react";
import {BsSearch} from 'react-icons/bs'


function SearchBar({updateSearch, filterCosmetics}) {
    

    const handleChange = (e) => {updateSearch(e.targert.value)}
    return(
        <div id="SearchBar">
            <input type="text"
            placeholder="Search"
            id="search"
            value={filterCosmetics}
            onChange={handleChange}
        />
        <BsSearch id="SearchButton"/>
        </div>
    )
}

export default SearchBar;