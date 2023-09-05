import React from "react";
import CosmeticsCard from "./CosmeticsCard";
import MoreButton from "./MoreButton";

function CosmeticsContainer({luxuryCosmetics, scrollThroughMoreItems, scrollThroughPreviousItems}) {

    const cosmeticsCards = luxuryCosmetics.map((cosmetic) => {
        return <CosmeticsCard key={cosmetic.id} cosmetic={cosmetic}/>
    })


    return (
        <div className="CardContainer">
            {cosmeticsCards}
            <MoreButton scrollThroughMoreItems={scrollThroughMoreItems} scrollThroughPreviousItems={scrollThroughPreviousItems}/>
        </div>
    )
}

export default CosmeticsContainer;