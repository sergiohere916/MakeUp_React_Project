import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'


function NavBar({updateSearch, searchValue}) {



    return (
        <nav id='navbar'>
            <Link to="/cosmetics/luxury" className="luxury">
                Luxury
            </Link>
            <Link to="/cosmetics/face" className="face">
                Face
            </Link>
            <Link to="/cosmetics/eyes" className="eyes">
                Eyes
            </Link>
            <Link to="/cosmetics/lips" className="lips">
                Lips
            </Link>
            <SearchBar className="search-bar"
                updateSearch={updateSearch} 
                searchValue={searchValue}
            />
        </nav>
    )
}

export default NavBar