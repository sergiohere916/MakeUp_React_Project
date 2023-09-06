import React from "react";
import MyCollectionCard from "./MyCollectionCard";
import MoreButton from "./MoreButton";

function MyCollection({MyCollectionList, handleDeleteItem, onSubmitUpdateExpiration, scrollThroughMoreItems,scrollThroughPreviousItems, row }) {

    const myFavs = MyCollectionList.map((product) => <MyCollectionCard key={product.id} product={product} onDelete={handleDeleteItem} onSubmitUpdateExpiration={onSubmitUpdateExpiration}/>)
    return (
        <div className="My-Collection">
            <div className="CollectionTitle">
                <h2>My Collection</h2>
            </div>
            <div className="My-Collection-Cards">
                {myFavs}
            </div>
            <MoreButton scrollThroughMoreItems={scrollThroughMoreItems} scrollThroughPreviousItems={scrollThroughPreviousItems} row={row}/>
        </div>
      
    )

}

export default MyCollection