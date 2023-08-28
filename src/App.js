import React from "react";
import { useEffect, useState } from 'react';
import CosmeticsContainer from "./Components/CosmeticsContainer";

function App() {
  const [cosmeticsList, setCosmeticsList] = useState([]);
  const [luxuryListindexes, setLuxuryListIndexes] = useState([0,6]);

  useEffect(() => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
    .then(r => r.json())
    .then(cosmeticsData => setCosmeticsList(cosmeticsData))
  }, [])


  let cosmeticsListCopy = [...cosmeticsList];
  const cosmeticsByHighestPrice = cosmeticsListCopy.sort((a,b) => b.price - a.price)
  const luxuryCosmeticsList = cosmeticsByHighestPrice.slice(luxuryListindexes[0], luxuryListindexes[1]);
  

  function scrollThroughItems() {
    luxuryListindexes[0] +=6;
    luxuryListindexes[1] +=6;
    setLuxuryListIndexes([luxuryListindexes[0], luxuryListindexes[1]]);
  }


  return (
    <div className="App">
      <h1>Luxury Items:</h1>
      <CosmeticsContainer luxuryCosmetics={luxuryCosmeticsList} scrollThroughItems={scrollThroughItems}/>
    </div>
  );
}

export default App;
