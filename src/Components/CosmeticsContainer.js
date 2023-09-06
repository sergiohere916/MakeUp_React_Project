import React from "react";
import CosmeticsCard from "./CosmeticsCard";
import MoreButton from "./MoreButton";

function CosmeticsContainer({ list, row, scrollThroughMoreItems, scrollThroughPreviousItems, onClickHeartAddToCollection}) {
    
    const cosmeticsCards = list.map((cosmetic) => <CosmeticsCard key={cosmetic.id} cosmetic={cosmetic} onClickHeartAddToCollection={onClickHeartAddToCollection}/>)

    return (
        <div>
            <div className="h2"><h2>Luxury</h2></div>
            <div className="CardContainer">
            {cosmeticsCards}
            </div>
            <MoreButton 
                scrollThroughMoreItems={scrollThroughMoreItems} 
                scrollThroughPreviousItems={scrollThroughPreviousItems} 
                row={row}
            />
        </div>
    )
}

export default CosmeticsContainer;