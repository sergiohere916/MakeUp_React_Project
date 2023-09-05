import React from "react";
import MyCollectionCard from "./MyCollectionCard";

function MyCollection({MyCollectionList}) {
    const myFavs = MyCollectionList.map((products) => <MyCollectionCard key={products.name} products={products}/>)
    return (
        <div className="My-Collection">
            <div className="CollectionTitle">
                <h2>My Collection</h2>
            </div>
            <div className="My-Collection-Cards">
                {myFavs}
            </div>
        </div>
      
    )

}

export default MyCollection