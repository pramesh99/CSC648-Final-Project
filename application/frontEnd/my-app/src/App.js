import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import AboutUs from './pages/about/AboutUs';
import Preetham from './pages/team/Preetham';
import Derrick from './pages/team/Derrick';
import Shauhin from './pages/team/Shauhin';
import Hieu from './pages/team/Hieu';
import Lin from './pages/team/Lin';
import Home from './pages/home/Home';
import { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
// import fetch from 'node-fetch';

function getRestaurantImgs(setRestaurantImages) {
  let restaurantImgs = [];

  let search = {
    query: "italian restaurant",
    page: 1,
    perPage: 3,
  };

  const unsplash = createApi({ accessKey: 'jDOS2lqNJPGXsFtYum8aF9gYL__rke79aCNl03SMwAU' });
  unsplash.search.getPhotos(search).then(data => {
    restaurantImgs = data.response.results;
    setRestaurantImages(restaurantImgs);
  });

  return restaurantImgs;
}

async function test() {
  let req1 = "/restaurants/:cuisine";
  let req2 = "/allCuisines";
  let req3 = "/allRestaurants";
  let req4 = "/restOwners";
  const res = await fetch("http://34.82.124.237:3001/api/restaurants/italian").then((r) => r.json()).then ((data) =>
    console.log(data)
  )
}

function App() {

  const [serverData, setServerData] = useState([{}]);

  const [restaurantImages, setRestaurantImages] = useState([]);

  
  useEffect(() => {
    getRestaurantImgs(setRestaurantImages);
    test();
    // console.log("images in root file", restaurantImages);
  }, []);

  useEffect(() => {
    fetch("/test").then(
      response => response.json()
    ).then(
      data => {
        setServerData(data)
      }
    )
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home restaurantImages={restaurantImages} />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/aboutUs/Shauhin" element={<Shauhin />} />
        <Route path="/aboutUs/Hieu" element={<Hieu />} />
        <Route path="/aboutUs/Preetham" element={<Preetham />} />
        <Route path="/aboutUs/Lin" element={<Lin />} />
        <Route path="/aboutUs/Derrick" element={<Derrick />} />
      </Routes>
    </>
  );
}

export default App;
