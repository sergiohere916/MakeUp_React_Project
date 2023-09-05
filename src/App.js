import React from "react";
import { useEffect, useState } from 'react';
import CosmeticsContainer from "./Components/CosmeticsContainer";
import Header from "./Components/Header";

function App() {
  const [cosmeticsList, setCosmeticsList] = useState([]);
  const [luxuryListindexes, setLuxuryListIndexes] = useState([0,5]);

  useEffect(() => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
    .then(r => r.json())
    .then(cosmeticsData => setCosmeticsList(cosmeticsData))
  }, [])


  let cosmeticsListCopy = [...cosmeticsList];
  const cosmeticsByHighestPrice = cosmeticsListCopy.sort((a,b) => b.price - a.price)
  const luxuryCosmeticsList = cosmeticsByHighestPrice.slice(luxuryListindexes[0], luxuryListindexes[1]);
  

  function scrollThroughMoreItems() {
    luxuryListindexes[0] +=5;
    luxuryListindexes[1] +=5;
    setLuxuryListIndexes([luxuryListindexes[0], luxuryListindexes[1]]);
  }

  function scrollThroughPreviousItems() {
    if (luxuryListindexes[0] > 0) {
      luxuryListindexes[0] -=5;
      luxuryListindexes[1] -=5;
      setLuxuryListIndexes([luxuryListindexes[0], luxuryListindexes[1]])
    }
  }


  return (
    <div className="App">
      <Header/>
      <h1>Luxury Items:</h1>
      <CosmeticsContainer luxuryCosmetics={luxuryCosmeticsList} scrollThroughMoreItems={scrollThroughMoreItems} scrollThroughPreviousItems={scrollThroughPreviousItems}/>
    </div>
  );
}

export default App;
