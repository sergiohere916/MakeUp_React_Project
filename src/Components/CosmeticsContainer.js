import React from "react";
import CosmeticsCard from "./CosmeticsCard";
import MoreButton from "./MoreButton";

function CosmeticsContainer({luxuryCosmetics, scrollThroughItems}) {

    const cosmeticsCards = luxuryCosmetics.map((cosmetic) => {
        return <CosmeticsCard key={cosmetic.id} cosmetic={cosmetic} />
    })


    return (
        <div className="CardContainer">
            {cosmeticsCards}
            <MoreButton scrollThroughItems={scrollThroughItems}/>
        </div>
    )
}

export default CosmeticsContainer;