import React from "react";
import { useEffect, useState } from 'react';
import CosmeticsContainer from "./Components/CosmeticsContainer";
import Header from "./Components/Header";
import MyCollection from "./Components/MyCollection";
import {Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import SubmitMakeUp from "./Components/SubmitMakeUp";


function App() {
  const [cosmeticsList, setCosmeticsList] = useState([]);
  const [luxuryListindexes, setLuxuryListIndexes] = useState([0,5]);
  const [faceListindexes, setFaceListIndexes] = useState([0,5]);
  const [lipsListindexes, setLipsListIndexes] = useState([0,5]);
  const [eyesListindexes, setEyesListIndexes] = useState([0,5]);

  // SEARCH BAR FILTER LISTS BELOW
  const [searchValue, setSearchValue] = useState("")

  
  // MY COLLECTION LIST BELOW
  const [myCollectionList, setMyCollectionList] = useState([])
  const [collectionindexes, setCollectionIndexes] = useState([0,3]) 
  
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
      if (luxuryListindexes[1] < cosmeticsByHighestPrice.length  && searchValue.length === 0) {
        luxuryListindexes[0] +=5;
        luxuryListindexes[1] +=5;
        setLuxuryListIndexes([luxuryListindexes[0], luxuryListindexes[1]]); 
      } else if (luxuryListindexes[1] < luxuryCosmeticsList.length ) {
        luxuryListindexes[0] +=5;
        luxuryListindexes[1] +=5;
        setLuxuryListIndexes([luxuryListindexes[0], luxuryListindexes[1]]);
      }
    } else if (rowToMove === "Face") {
      if (faceListindexes[1] < faceProducts.length && searchValue.length === 0) {
        faceListindexes[0] +=5;
        faceListindexes[1] +=5;
        setFaceListIndexes([faceListindexes[0], faceListindexes[1]])
      } else if (faceListindexes[1] < filterFaceCosmetic.length) {
        faceListindexes[0] +=5;
        faceListindexes[1] +=5;
        setFaceListIndexes([faceListindexes[0], faceListindexes[1]])
      }
    } else if (rowToMove === "Lips") {
      if(lipsListindexes[1] < lipProducts.length && searchValue.length === 0) {
        lipsListindexes[0] +=5;
        lipsListindexes[1] +=5;
        setLipsListIndexes([lipsListindexes[0], lipsListindexes[1]])
      } else if (lipsListindexes[1] < filterLipsCosmetic.length) {
        lipsListindexes[0] +=5;
        lipsListindexes[1] +=5;
        setLipsListIndexes([lipsListindexes[0], lipsListindexes[1]])
      }
    } else if (rowToMove === "Eyes") {
      if (eyesListindexes[1] < eyeProducts.length && searchValue.length === 0) {
        eyesListindexes[0] +=5;
        eyesListindexes[1] +=5;
        setEyesListIndexes([eyesListindexes[0], eyesListindexes[1]])
      } else if (eyesListindexes[1] < filterEyesCosmetic.length) {
        eyesListindexes[0] +=5;
        eyesListindexes[1] +=5;
        setEyesListIndexes([eyesListindexes[0], eyesListindexes[1]])
      }
    } else if (rowToMove === "Collection") {
      if (collectionindexes[1] < myCollectionList.length) {
        collectionindexes[0] +=3
        collectionindexes[1] +=3
        setCollectionIndexes([collectionindexes[0], collectionindexes[1]])
      }
    }
  }

  function scrollThroughPreviousItems(rowToMove) {
    if (rowToMove === "Luxury") {
      if (luxuryListindexes[0] > 0) {
        luxuryListindexes[0] -=5;
        luxuryListindexes[1] -=5;
        setLuxuryListIndexes([luxuryListindexes[0], luxuryListindexes[1]])
      } 
    } else if (rowToMove === "Face") {
      if (faceListindexes[0] > 0) {
        faceListindexes[0] -=5;
        faceListindexes[1] -=5;
        setFaceListIndexes([faceListindexes[0], faceListindexes[1]])
      }
    } else if (rowToMove === "Lips") {
      if (lipsListindexes[0] > 0) {
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
    } else if (rowToMove === "Collection") {
      if (collectionindexes[0] > 0) {
        collectionindexes[0] -=3;
        collectionindexes[1] -=3;
        setCollectionIndexes([collectionindexes[0], collectionindexes[1]])
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

  //My Collection
  const filterMyCollection = myCollectionList.slice(collectionindexes[0], collectionindexes[1]);

  //Row1
  let cosmeticsListCopy = [...cosmeticsList];
  const cosmeticsByHighestPrice = cosmeticsListCopy.sort((a,b) => b.price - a.price)
  const luxuryCosmeticsList = cosmeticsByHighestPrice.filter((luxuryCosmeticsList) => luxuryCosmeticsList.name.toLowerCase().includes(searchValue.toLowerCase()))
  const filterLuxuryCosmetic = luxuryCosmeticsList.slice(luxuryListindexes[0], luxuryListindexes[1]);
  
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
  
  
  
  const updateSearch = ((searchBar) => {
    setSearchValue(searchBar)
    setFaceListIndexes([0,5]);
    setEyesListIndexes([0,5]);
    setLipsListIndexes([0,5]);
    setLuxuryListIndexes([0,5]);
  
  })

function newProduct(product) {
  setMyCollectionList([...myCollectionList, product])
}

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
        MyCollectionList={filterMyCollection} 
        handleDeleteItem={handleDeleteItem}
        onSubmitUpdateExpiration={onSubmitUpdateExpiration}
        scrollThroughMoreItems={scrollThroughMoreItems} 
        scrollThroughPreviousItems={scrollThroughPreviousItems}
        row="Collection"
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
          <Route path="/submit" element={
            <SubmitMakeUp
              newProduct={newProduct}
            />
          }/>
         </Routes>
    </div>
  );
}

export default App;
