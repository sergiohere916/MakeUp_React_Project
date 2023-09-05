import React from "react";

function MyCollectionCard ({products}){
    const {name, img} = products
    return (
        <div>
            <img src={img} alt={name}/>
            <h3>{name}</h3>
        </div>
    )

}









export default MyCollectionCard