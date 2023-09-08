import React, {useState} from "react";
import {BsSuitHeart, BsSuitHeartFill} from 'react-icons/bs'

function CosmeticsCard({cosmetic, onClickHeartAddToCollection}) {
    const {id, brand, name, product_type, price, description, api_featured_image} = cosmetic
    const [favorite, setFavorite] = useState(true)

    function handleClick() {
        setFavorite(!favorite)
        fetch("http://localhost:6001/MyCollection", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                product_type: product_type,
                brand: brand,
                image: api_featured_image,
                description: description,
                dateOfOpening: "",
                expiration: ""
            })
        })
        .then(r => r.json())
        .then(mySavedProduct => onClickHeartAddToCollection(mySavedProduct))
    }

    const favoriteClass = favorite ? "favorite" : "not-favorite"


    return (
        <div className="Card">
            <div className="Card-image">
                <img src={api_featured_image}></img>
            </div>
            <div className="Card-content">
            <div className={favoriteClass} >
                    {favorite ? <BsSuitHeartFill id="Fav-Heart"onClick={handleClick} /> 
                            : <BsSuitHeartFill id="NFav-Heart" onClick={handleClick}/>}
                </div>
                <h3>
                {name}
                </h3>
                <p className="descrip">{description}</p>
            </div>
        </div>
    )
}

export default CosmeticsCard;