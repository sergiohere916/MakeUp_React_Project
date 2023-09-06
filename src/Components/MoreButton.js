import React from "react";
import {BiSolidLeftArrow, BiSolidRightArrow} from 'react-icons/bi'

function MoreButton({scrollThroughMoreItems, scrollThroughPreviousItems, row}) {

    function handleMoreClick() {
        scrollThroughMoreItems(row);
    }   
    
    function handleLessClick() {
        scrollThroughPreviousItems(row);
    }

    return (
        <div className="MoreButtons">
            <BiSolidLeftArrow onClick={handleLessClick} className='left-arrow'/>
            <BiSolidRightArrow onClick={handleMoreClick} className='right-arrow'/>
        </div>
    )
}

export default MoreButton;