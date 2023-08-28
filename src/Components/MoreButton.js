import React from "react";

function MoreButton({scrollThroughItems}) {

    function handleClick() {
        scrollThroughItems();
    }   
    
    
    return (
        <button onClick={handleClick}>
            View More
        </button>
    )
}

export default MoreButton;