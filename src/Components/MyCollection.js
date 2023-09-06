import React from "react";
import MyCollectionCard from "./MyCollectionCard";

function MyCollection({MyCollectionList, handleDeleteItem, onSubmitUpdateExpiration}) {

    const myFavs = MyCollectionList.map((product) => <MyCollectionCard key={product.name} product={product} onDelete={handleDeleteItem} onSubmitUpdateExpiration={onSubmitUpdateExpiration}/>)
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