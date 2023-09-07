import React from "react";
import { useEffect, useState } from 'react';
import CosmeticsContainer from "./Components/CosmeticsContainer";
import Header from "./Components/Header";
import MyCollection from "./Components/MyCollection";
import {Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";


function App() {
  const [cosmeticsList, setCosmeticsList] = useState([]);
  const [luxuryListindexes, setLuxuryListIndexes] = useState([0,5]);
  const [faceListindexes, setFaceListIndexes] = useState([0,5]);
  const [lipsListindexes, setLipsListIndexes] = useState([0,5]);
  const [eyesListindexes, setEyesListIndexes] = useState([0,5]);

  // SEARCH BAR FILTER LISTS BELOW
  const [searchValue, setSearchValue] = useState('')

  
  // MY COLLECTION LIST BELOW
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

  // console.log(cosmeticsList);
  

  function scrollThroughMoreItems(rowToMove) {
    if (rowToMove === "Luxury") {
      console.log("luxury is moving");
      luxuryListindexes[0] +=5;
      luxuryListindexes[1] +=5;
      setLuxuryListIndexes([luxuryListindexes[0], luxuryListindexes[1]]); 
    } else if (rowToMove === "Face") {
      console.log("face is moving");
      faceListindexes[0] +=5;
      faceListindexes[1] +=5;
      setFaceListIndexes([faceListindexes[0], faceListindexes[1]])
    } else if (rowToMove === "Lips") {
      console.log("lips is moving");
      lipsListindexes[0] +=5;
      lipsListindexes[1] +=5;
      setLipsListIndexes([lipsListindexes[0], lipsListindexes[1]])
    } else if (rowToMove === "Eyes") {
      console.log("eyes is moving");
      eyesListindexes[0] +=5;
      eyesListindexes[1] +=5;
      setEyesListIndexes([eyesListindexes[0], eyesListindexes[1]])
  }
}

  function scrollThroughPreviousItems(rowToMove) {
    if (rowToMove === "Luxury") {
      if (luxuryListindexes[0] > 0) {
        console.log("luxury is moving");
        luxuryListindexes[0] -=5;
        luxuryListindexes[1] -=5;
        setLuxuryListIndexes([luxuryListindexes[0], luxuryListindexes[1]])
      } 
    } else if (rowToMove === "Face") {
      if (faceListindexes[0] > 0) {
        console.log("face is moving");
        faceListindexes[0] -=5;
        faceListindexes[1] -=5;
        setFaceListIndexes([faceListindexes[0], faceListindexes[1]])
      }
    } else if (rowToMove === "Lips") {
      if (lipsListindexes[0] > 0) {
        console.log("lips is moving");
        lipsListindexes[0] -=5;
        lipsListindexes[1] -=5;
        setLipsListIndexes([lipsListindexes[0], lipsListindexes[1]])
      }
    } else if (rowToMove === "Eyes") {
      if (eyesListindexes[0] > 0) {
        console.log("eyes is moving");
        eyesListindexes[0] -=5;
        eyesListindexes[1] -=5;
        setEyesListIndexes([eyesListindexes[0], eyesListindexes[1]])
      }
    }
  }
  
  function onClickHeartAddToCollection(savedProduct) {
    setMyCollectionList([...myCollectionList, savedProduct]);
  }

  function onSubmitUpdateExpiration(updatedItem) {
    const newCollection = myCollectionList.map((item) => {
      if (item.id !== updatedItem.id) {
        return item;
      } else {
        return updatedItem;
      }
    })
    setMyCollectionList([...newCollection]);
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
  const filterFaceCosmetic = faceProducts.filter((faceProduct) => faceProduct.name.toLowerCase().includes(searchValue.toLowerCase()))
  const filterFaceCosmeticList = filterFaceCosmetic.slice(faceListindexes[0], faceListindexes[1]); 
  
  //Row3
  const lipProducts = cosmeticsList.filter((cosmetic) => {
    const product = cosmetic.product_type.toLowerCase()
    return (product.includes("lipstick") || (product.includes("lip_liner")))
  })
  const filterLipsCosmetic = lipProducts.filter((lipsProduct) => lipsProduct.name.toLowerCase().includes(searchValue.toLowerCase()))
  const filterLipsCosmeticList = filterLipsCosmetic.slice(lipsListindexes[0], lipsListindexes[1]);

  
  //Row4
  const eyeProducts = cosmeticsList.filter((cosmetic) => {
    const product = cosmetic.product_type.toLowerCase()
    return (product.includes("mascara") || (product.includes("eyebrow")) || (product.includes("eyeliner")) || (product.includes("eyeshadow")))
  })

  const filterEyesCosmetic = eyeProducts.filter((eyesProduct) => eyesProduct.name.toLowerCase().includes(searchValue.toLowerCase()))
  const filterEyesCosmeticList = filterEyesCosmetic.slice(eyesListindexes[0], eyesListindexes[1]);
 
 
 
// search to recontinue upon completing lists
  const filterLuxuryCosmetic = luxuryCosmeticsList.filter((luxuryCosmeticsList) => luxuryCosmeticsList.name.toLowerCase().includes(searchValue.toLowerCase()))
  
  
  const updateSearch = ((searchBar) => {setSearchValue(searchBar)})



  function handleDeleteItem(deletedItemId) {
    const updateCollection = myCollectionList.filter((item) => item.id !== deletedItemId)
    setMyCollectionList(updateCollection)
  }

  return (
    <div className="App">
      <Header />
      <NavBar 
      updateSearch={updateSearch} 
      searchValue={searchValue}
      />
      <MyCollection
        MyCollectionList={myCollectionList} 
        handleDeleteItem={handleDeleteItem}
        onSubmitUpdateExpiration={onSubmitUpdateExpiration}
      /> 
        <Routes>
        <Route path="/cosmetics/luxury" element={
          <CosmeticsContainer 
          list={filterLuxuryCosmetic} 
          scrollThroughMoreItems={scrollThroughMoreItems} 
          scrollThroughPreviousItems={scrollThroughPreviousItems}
          onClickHeartAddToCollection={onClickHeartAddToCollection}
          row="Luxury"
        />
        }/>
        <Route path="/cosmetics/face" element={
          <CosmeticsContainer
          list={filterFaceCosmeticList} 
          scrollThroughMoreItems={scrollThroughMoreItems} 
          scrollThroughPreviousItems={scrollThroughPreviousItems}
          onClickHeartAddToCollection={onClickHeartAddToCollection}
          row="Face"
        />
        }/>
          <Route path="/cosmetics/lips" element={
            <CosmeticsContainer
            list={filterLipsCosmeticList}
            scrollThroughMoreItems={scrollThroughMoreItems} 
            scrollThroughPreviousItems={scrollThroughPreviousItems}
            onClickHeartAddToCollection={onClickHeartAddToCollection}
            row="Lips"
          />
          }/>
          <Route path="/cosmetics/eyes" element={
            <CosmeticsContainer
            list={filterEyesCosmeticList}
            scrollThroughMoreItems={scrollThroughMoreItems} 
            scrollThroughPreviousItems={scrollThroughPreviousItems}
            onClickHeartAddToCollection={onClickHeartAddToCollection}
            row="Eyes"
          />
          }/>
         </Routes>
    </div>
  );
}

export default App;
