import React from "react";

function MyCollectionCard ({product}){
    const {name, image, product_type, brand, description, expiration } = product
    return (
        <div>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
        </div>
    )

}









export default MyCollectionCard