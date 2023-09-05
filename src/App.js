import React from "react";
import { useEffect, useState } from 'react';
import CosmeticsContainer from "./Components/CosmeticsContainer";
import Header from "./Components/Header";
import MyCollection from "./Components/MyCollection";

function App() {
  const [cosmeticsList, setCosmeticsList] = useState([]);
  const [luxuryListindexes, setLuxuryListIndexes] = useState([0,5]);
  const [faceListindexes, setFaceListIndexes] = useState([0,5]);
  const [lipsListindexes, setLipsListIndexes] = useState([0,5]);
  const [eyesListindexes, setEyesListIndexes] = useState([0,5]);
  const [filterCosmetics, setFilterCosmetics] = useState([])
  const [myCollectionList, setMyCollectionList] = useState([])
  const API = "http://makeup-api.herokuapp.com/api/v1/products.json"

  useEffect(() => {
    fetch(" http://localhost:6001/MyCollection")
    .then(r => r.json())
    .then(myCollectionItems => {
      fetch(API)
      .then(r => r.json())
      .then(cosmeticsData => {
      setCosmeticsList(cosmeticsData);
      setMyCollectionList(myCollectionItems);
    })
    })
    
  }, [])

  console.log(cosmeticsList);
  

  function scrollThroughMoreItems(rowToMove) {
    if (rowToMove === "luxury") {
      luxuryListindexes[0] +=5;
      luxuryListindexes[1] +=5;
      setLuxuryListIndexes([luxuryListindexes[0], luxuryListindexes[1]]); 
    } else if (rowToMove === "face") {
      faceListindexes[0] +=5;
      faceListindexes[1] +=5;
      setFaceListIndexes([faceListindexes[0], faceListindexes[1]])
    } else if (rowToMove === "lips") {
      lipsListindexes[0] +=5;
      lipsListindexes[1] +=5;
      setFaceListIndexes([lipsListindexes[0], lipsListindexes[1]])
    } else if (rowToMove === "eyes") {
      eyesListindexes[0] +=5;
      eyesListindexes[1] +=5;
      setFaceListIndexes([eyesListindexes[0], eyesListindexes[1]])
  }
}

  function scrollThroughPreviousItems(rowToMove) {
    if (rowToMove === "luxury") {
      if (luxuryListindexes[0] > 0) {
        luxuryListindexes[0] -=5;
        luxuryListindexes[1] -=5;
        setLuxuryListIndexes([luxuryListindexes[0], luxuryListindexes[1]])
      } 
    } else if (rowToMove === "face") {
      if (faceListindexes[0] > 0) {
        faceListindexes[0] -=5;
        faceListindexes[1] -=5;
        setFaceListIndexes([faceListindexes[0], faceListindexes[1]])
      }
    } else if (rowToMove === "lips") {
      if (lipsListindexes[0] > 0) {
        lipsListindexes[0] -=5;
        lipsListindexes[1] -=5;
        setLipsListIndexes([lipsListindexes[0], lipsListindexes[1]])
      }
    } else if (rowToMove === "eyes") {
      if (eyesListindexes[0] > 0) {
        eyesListindexes[0] -=5;
        eyesListindexes[1] -=5;
        setEyesListIndexes([eyesListindexes[0], eyesListindexes[1]])
      }
    }
  }
  
  function onClickHeartAddToCollection(savedProduct) {
    setMyCollectionList([...myCollectionList, savedProduct]);
  }
  //Row1
  let cosmeticsListCopy = [...cosmeticsList];
  const cosmeticsByHighestPrice = cosmeticsListCopy.sort((a,b) => b.price - a.price)
  const luxuryCosmeticsList = cosmeticsByHighestPrice.slice(luxuryListindexes[0], luxuryListindexes[1]);
  //Row2
  const faceProducts = cosmeticsList.filter((cosmetic) => {
    const product = cosmetic.product_type.toLowerCase()
    return (product.includes("blush") || (product.includes("foundation")) || (product.includes("concealer")));
  })
  const faceList = faceProducts.slice(faceListindexes[0], faceListindexes[1]);
  
  //Row3
  const lipProducts = cosmeticsList.filter((cosmetic) => {
    const product = cosmetic.product_type.toLowerCase()
    return (product.includes("lipstick") || (product.includes("lip_liner")))
  })
  const lipsList = lipProducts.slice(lipsListindexes[0], lipsListindexes[1]);

  
  //Row4
  const eyeProducts = cosmeticsList.filter((cosmetic) => {
    const product = cosmetic.product_type.toLowerCase()
    return (product.includes("mascara") || (product.includes("eyebrow")) || (product.includes("eyeliner")) || (product.includes("eyeshadow")))
  })
  const eyesList = eyeProducts.slice(eyesListindexes[0], eyesListindexes[1]);
 
 
 
 
  // search to recontinue upon completing lists
  // const filterCosmetics = cosmeticsData.filter((cosmeticsData) => cosmeticsData.name.toLowerCase().includes(setFilterCosmetics.toLowerCase()))

  // let updateSearch = (SearchBar) => {setFilterCosmetics(SearchBar)}

  return (
    <div className="App">
      <Header/>
      <MyCollection
        MyCollectionList={myCollectionList} 
      /> 
      <CosmeticsContainer 
        luxuryCosmetics={luxuryCosmeticsList} 
        faceList={faceList} 
        lipsList={lipsList}
        eyesList={eyesList}
        scrollThroughMoreItems={scrollThroughMoreItems} 
        scrollThroughPreviousItems={scrollThroughPreviousItems}
        onClickHeartAddToCollection={onClickHeartAddToCollection}
      />
    </div>
  );
}

export default App;
