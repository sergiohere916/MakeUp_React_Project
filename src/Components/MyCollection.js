import React from "react";
import MyCollectionCard from "./MyCollectionCard";

function MyCollection({MyCollectionList}) {
    const myFavs = MyCollectionList.map((products) => <MyCollectionCard key={products.name} products={products}/>)
    return (
        <div className="My-Collection">
            <div className="CollectionTitle">
                <h2>My Collection</h2>
            </div>
            {myFavs}
        </div>
      
    )

}

export default MyCollection