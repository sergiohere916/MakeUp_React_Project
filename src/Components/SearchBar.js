import React from "react";
import {BsSearchHeart} from "react-icons/bs"

function SearchBar() {
    return(
        <div id="SearchBar">
            <input type="text"/>
            <button id="SearchButton">{BsSearchHeart}</button>
        </div>
    )
}

export default SearchBar;