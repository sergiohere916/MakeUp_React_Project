import React from "react";
import CosmeticsCard from "./CosmeticsCard";
import MoreButton from "./MoreButton";

function CosmeticsContainer({ luxuryCosmetics, faceList, lipsList, eyesList, scrollThroughMoreItems, scrollThroughPreviousItems}) {

    const cosmeticsCards = luxuryCosmetics.map((cosmetic) => <CosmeticsCard key={cosmetic.id} cosmetic={cosmetic}/>)
    const faceCards = faceList.map((cosmetic) => {
        return <CosmeticsCard key={cosmetic.id} cosmetic={cosmetic}/>
    })
    const lipsCards = lipsList.map((cosmetic) => {
        return <CosmeticsCard key={cosmetic.id} cosmetic={cosmetic} />
    })

    const eyesCards = eyesList.map((cosmetic) => {
        return <CosmeticsCard  key={cosmetic.id} cosmetic={cosmetic}/>
    })

    return (
        <div>
            <div className="CardContainer">   
            <h2>Luxury</h2>
            {cosmeticsCards}
            <MoreButton 
                scrollThroughMoreItems={scrollThroughMoreItems} 
                scrollThroughPreviousItems={scrollThroughPreviousItems} 
                row="luxury"
            />
            </div>
            <div className="CardContainer">
            <h2>Face</h2>
            {faceCards}
            <MoreButton 
                scrollThroughMoreItems={scrollThroughMoreItems}
                scrollThroughPreviousItems={scrollThroughPreviousItems}
                row="face"
            /> 
            </div>
            <div className="CardContainer">
                <h2>Eyes</h2>
                {eyesCards}
                <MoreButton 
                    scrollThroughMoreItems={scrollThroughMoreItems}
                    scrollThroughPreviousItems={scrollThroughPreviousItems}
                    row="eyes"
                />  
            </div>
            <div className="CardContainer">
            <h2>Lips</h2>
            {lipsCards}
                <MoreButton 
                    scrollThroughMoreItems={scrollThroughMoreItems}
                    scrollThroughPreviousItems={scrollThroughPreviousItems}
                    row="lips"
                />  
            </div>
        </div>
    )
}

export default CosmeticsContainer;