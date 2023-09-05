import React from "react";
import {BsSearchHeart} from 'react-icons/bs'


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
            <button id="SearchButton">{BsSearchHeart}</button>
        </div>
    )
}

export default SearchBar;