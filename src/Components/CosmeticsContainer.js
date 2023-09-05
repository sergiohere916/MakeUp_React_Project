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
            <div className="h2"><h2>Luxury</h2></div>
            <div className="CardContainer">   
            {cosmeticsCards}
            </div>
            <MoreButton 
                scrollThroughMoreItems={scrollThroughMoreItems} 
                scrollThroughPreviousItems={scrollThroughPreviousItems} 
                row="luxury"
            />
             <div className="h2"><h2>Face</h2></div>
            <div className="CardContainer">
            {faceCards}
            </div>
            <MoreButton 
                scrollThroughMoreItems={scrollThroughMoreItems}
                scrollThroughPreviousItems={scrollThroughPreviousItems}
                row="face"
            /> 
             <div className="h2"><h2>Eyes</h2></div>
            <div className="CardContainer">
                {eyesCards}
            </div>
            <MoreButton 
                scrollThroughMoreItems={scrollThroughMoreItems}
                scrollThroughPreviousItems={scrollThroughPreviousItems}
                row="eyes"
            />  
             <div className="h2"><h2>Lips</h2></div>
            <div className="CardContainer">
            {lipsCards}
            </div>
            <MoreButton 
                scrollThroughMoreItems={scrollThroughMoreItems}
                scrollThroughPreviousItems={scrollThroughPreviousItems}
                row="lips"
            />  
        </div>
    )
}

export default CosmeticsContainer;