import React from "react";

function MoreButton({scrollThroughMoreItems, scrollThroughPreviousItems}) {

    function handleMoreClick() {
        scrollThroughMoreItems();
    }   
    
    function handleLessClick() {
        scrollThroughPreviousItems();
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