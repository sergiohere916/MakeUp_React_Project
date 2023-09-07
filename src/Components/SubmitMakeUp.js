import React, {useState} from "react";
// import {BsSuitHeart, BsSuitHeartFill} from 'react-icons/bs'

function SubmitMakeUp({cosmetic, onClickHeartAddToCollection}) {
    // const {id, brand, name, product_type, price, description, api_featured_image} = cosmetic

    // function handleClick() {
    //     fetch("http://localhost:6001/MyCollection", {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify({
    //             name: name,
    //             product_type: product_type,
    //             brand: brand,
    //             image: api_featured_image,
    //             description: description,
    //             dateOfOpening: "",
    //             expiration: ""
    //         })
    //     })
    //     .then(r => r.json())
    //     .then(mySavedProduct => onClickHeartAddToCollection(mySavedProduct))
    // }



    return (
        <div className="Card">
            {/* <div className="Card-image">
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

            </div> */}
        </div>
    )
}

export default SubmitMakeUp;