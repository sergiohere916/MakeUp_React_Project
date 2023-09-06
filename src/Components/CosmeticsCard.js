import React, {useState} from "react";
import {BsSuitHeart, BsSuitHeartFill} from 'react-icons/bs'

function CosmeticsCard({cosmetic}) {
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
                expiration: ""
            })
        })
        .then(r => r.json())
        .then(mySavedProduct => console.log(mySavedProduct))
    }

    const favoriteClass = favorite ? "favorite" : "not-favorite"


// trying to include the description, doesn't work. get back to tomorrow
    // const briefDescription = () => {
    //     const sentence = description.substring(0,6) + '...'
    //     if (description.length > 6) {
    //         return sentence
    //     }
    // }

    return (
        <div className="Card">
            <div className="Card-image">
                <img src={api_featured_image}></img>
            </div>
            <div className="Card-content">
                <h3>
                {name}
                </h3>
                <div className={favoriteClass} >
                    {favorite ? <BsSuitHeart onClick={handleClick} /> 
                            : <BsSuitHeartFill onClick={handleClick}/>}
                </div>
                
                {/* <i>{briefDescription}</i> */}
            </div>
        </div>
    )
}

export default CosmeticsCard;