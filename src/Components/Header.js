import React from "react";
import SearchBar from "./SearchBar";
import {BsFlower3} from 'react-icons/bs'

function Header() {

    return (
        <div id="Header">
            <h1 className="logo-name">
                Bloom <BsFlower3 className='logo'/>
            </h1>
            <SearchBar/>
        </div>
    )
}

export default Header;