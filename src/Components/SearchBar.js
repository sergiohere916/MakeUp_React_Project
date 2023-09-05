import React from "react";

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
            <button id="SearchButton"><img src="https://media.discordapp.net/attachments/1147172028114272277/1148679251130847294/search.png?width=450&height=450"/>
</button>
        </div>
    )
}

export default SearchBar;