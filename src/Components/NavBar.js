import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { Menu } from 'semantic-ui-react'

function NavBar({updateSearch, searchValue}) {

const [active, setActive] = useState(false)



    return (
        <nav id='navbar'>
            <Menu tabular>
            <Menu.Item as='Link' to="/cosmetics/luxury" className="luxury" name='Luxury'/>
    
            <Menu.Item as='Link' to="/cosmetics/face" className="face"/>
            <Menu.Item as='Link' to="/cosmetics/eyes" className="eyes">
                Eyes
            </Menu.Item>
            <Menu.Item as='Link' to="/cosmetics/lips" className="lips">
                Lips
            </Menu.Item>
            </Menu>
            <SearchBar className="search-bar"
                updateSearch={updateSearch} 
                searchValue={searchValue}
            />
        
        </nav>
    )
}

export default NavBar