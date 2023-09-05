import React from "react";

function CosmeticsCard({cosmetic}) {
    const {id, brand, name, price, description, api_featured_image} = cosmetic
    

    return (
        <div className="Card">
            <div className="Card-image">
                <img src={api_featured_image}></img>
            </div>
            <div className="Card-content">
                <h3>
                {name}
                </h3>
                <p id="Favorite-Icon">♡</p>
                {/* <p>Price: ${parseFloat(price)}</p> */}
            </div>
        </div>
    )
}

export default CosmeticsCard;