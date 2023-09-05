import React from "react";

function MoreButton({scrollThroughMoreItems, scrollThroughPreviousItems, row}) {

    function handleMoreClick() {
        scrollThroughMoreItems(row);
    }   
    
    function handleLessClick() {
        scrollThroughPreviousItems(row);
    }

    return (
        <div className="MoreButtons">
            <button onClick={handleLessClick}>
                View Previous
            </button>
            <button onClick={handleMoreClick}>
                View More
            </button>
        </div>
    )
}

export default MoreButton;