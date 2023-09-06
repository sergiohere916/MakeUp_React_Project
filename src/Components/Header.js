import React from "react";
import SearchBar from "./SearchBar";
import {BsFlower3} from 'react-icons/bs'

function Header({updateSearch, searchValue}) {

    return (
        <div id="Header">
            <h1 className="logo-name">
                Bloom <BsFlower3 className='logo'/>
            </h1>
            <SearchBar 
                updateSearch={updateSearch} 
                searchValue={searchValue}
            />
        </div>
    )
}

export default Header;