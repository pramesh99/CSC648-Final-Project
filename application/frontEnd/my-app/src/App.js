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
import Browse from './pages/browse/Browse';
import Result from './pages/result/Result';
// import fetch from 'node-fetch';

function getRestaurantImgs(numOfRestaurants) {


  let search = {
    query: "restaurant",
    page: 1,
    perPage: 7,
  };

  const unsplash = createApi({ accessKey: 'jDOS2lqNJPGXsFtYum8aF9gYL__rke79aCNl03SMwAU' });
  return unsplash.search.getPhotos(search);
}

async function getAllRestaurants() {
  // let req1 = "/restaurants/:cuisine";
  // let req2 = "/allCuisines";
  // let req3 = "/allRestaurants";
  // let req4 = "/restOwners";
  let resData = [];
  const res = await fetch("http://34.82.124.237:3001/api/allRestaurants").then((r) => r.json()).then((data) =>
    resData = data
  )
  return resData;
}

function App() {

  const [search, setSearch] = useState('');
  const [serverData, setServerData] = useState([{}]);

  const [restaurantImages, setRestaurantImages] = useState([]);
  const [restaurants, setRestaurants] = useState([]);


  useEffect(() => {
    getAllRestaurants().then((r) => {
      setRestaurants(r);
      // console.log("restaurantss", r);
    })

    getRestaurantImgs(restaurants.length).then((r) => {
      setRestaurantImages(r.response.results);;
    })

    fetch("/test").then(
      response => response.json()
    ).then(
      data => {
        setServerData(data)
      }
    )
  }, []);

  useEffect(() => {
    let newRestaurants = restaurants;

    for (let i = 0; i < restaurants.length; i++) {
      newRestaurants[i]["ImgUrl"] = restaurantImages[i].urls.regular;
    }

    setRestaurants(newRestaurants);
  }, [restaurantImages, restaurants]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar search={search} setSearch={setSearch} />
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home restaurants={restaurants} />} />
        <Route path="/browse" element={<Browse restaurants={restaurants} />} />
        <Route path="/result" element={<Result restaurants={restaurants} search={search} />} />
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
