import React, {useState} from "react";

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

    return (
        <div className="Card">
            <div className="Card-image">
                <img src={api_featured_image}></img>
            </div>
            <div className="Card-content">
                <h3>
                {name}
                </h3>
                <input type="button" value="♡" onClick={handleClick}/>
                
                {/* <p>Price: ${parseFloat(price)}</p> */}
            </div>
        </div>
    )
}

export default CosmeticsCard;