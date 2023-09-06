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
            {row === "Collection" ? (<BiSolidLeftArrow onClick={handleLessClick} className='lc-arrow'/>) : (<BiSolidLeftArrow onClick={handleLessClick} className='left-arrow'/>) }
            {row === "Collection" ? (<BiSolidRightArrow onClick={handleMoreClick} className='rc-arrow'/>) : (<BiSolidRightArrow onClick={handleMoreClick} className='right-arrow'/>) }
        </div>
    )
}

export default MoreButton;