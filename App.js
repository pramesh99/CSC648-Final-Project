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
import Register from './pages/Login&Register/Register';
import Login from './pages/Login&Register/Login';
// import fetch from 'node-fetch';

function getRestaurantImgs(numOfRestaurants) {


  let search = {
    query: "restaurant",
    page: 1,
    perPage: 8,
  };

  const unsplash = createApi({ accessKey: 'jDOS2lqNJPGXsFtYum8aF9gYL__rke79aCNl03SMwAU' });
  return unsplash.search.getPhotos(search);
}

async function getAllRestaurants() {
  // let req1 = "/restaurants/:cuisine";
  // let req2 = "/allCuisines";
  // let req3 = "/allRestaurants";
  // let req4 = "/restOwners";
  // const cuisines = await fetch("http://34.82.124.237:3001/api/allCuisines").then((r) => r.json()).then((data) =>
  //   console.log(data)
  // )

  let resData = [];
  const res = await fetch("http://34.82.124.237:3001/api/allRestaurants").then((r) => r.json()).then((data) =>
    resData = data
  )
  return resData;
}


async function getSearchRestaurants(search) {
  let resData = [];
  const res = await fetch(`http://34.82.124.237:3001/api/search/${search}`).then((r) => r.json()).then((data) =>
    resData = data
  )
  return resData;
}

async function getSearchRestaurantsWithCategory(search, category) {
  let resData = [];
  const res = await fetch(`http://34.82.124.237:3001/api/search/${category}/${search}`).then((r) => r.json()).then((data) =>
    resData = data
  )
  return resData;
}

async function getSearchRestaurantsByOnlyCategory(category) {
  let resData = [];
  const res = await fetch(`http://34.82.124.237:3001/api/search/${category}`).then((r) => r.json()).then((data) =>
    resData = data
  )
  return resData;
}

function App() {

  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [searchResultCategory, setSearchResultCategory] = useState('');

  const [serverData, setServerData] = useState([{}]);

  const [restaurantImages, setRestaurantImages] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const [searchRestaurants, setSearchRestaurants] = useState([]);

  useEffect(() => {
    getAllRestaurants().then((r) => {
      setRestaurants(r);
      // console.log("restaurantss", r);
    })

    getRestaurantImgs(restaurants.length).then((r) => {
      setRestaurantImages(r?.response?.results);
    })

  }, []);

  // Search Use Effect
  useEffect(() => {
    let newRestaurants = [];
    if(searchResultCategory !== 'all') {
      getSearchRestaurantsWithCategory(searchResult, searchResultCategory).then((r) => {
        for (let i = 0; i < r.length; i++) {
          r[i]["item"]["ImgUrl"] = restaurantImages[i]?.urls?.regular;
        }
        console.log("search restaurants use effect", r)
        setSearchRestaurants(r);
      });
    } else if (searchResultCategory === 'all' && searchResult === '') {
      getAllRestaurants().then((r) => {
        let newRestaurants = [];
        for(let i = 0; i < r.length; i++) {
          newRestaurants.push({item: r[i]});
        }
        for (let i = 0; i < newRestaurants.length; i++) {
          newRestaurants[i]["item"]["ImgUrl"] = restaurantImages[i]?.urls?.regular;
        }
        setSearchRestaurants(newRestaurants);
      })
    } else {
      getSearchRestaurants(searchResult).then((r) => {
        for (let i = 0; i < r.length; i++) {
          r[i]["item"]["ImgUrl"] = restaurantImages[i]?.urls?.regular;
        }
        setSearchRestaurants(r);
      });
    }

  }, [searchResult, searchResultCategory]);

  // useEffect(() => {
  //   let newRestaurants = restaurants;

  //   if (restaurantImages) {
  //     for (let i = 0; i < restaurants.length; i++) {
  //       console.log(restaurantImages[i]["urls"]["regular"]);
  //       newRestaurants[i]["ImgUrl"] = restaurantImages[i]["urls"]["regular"];
  //     }
  //   }

  //   setRestaurants(newRestaurants);
  // }, [restaurantImages, restaurants]);

  useEffect(() => {
    let newRestaurants = restaurants;
  
    // if (restaurantImages) {
      for (let i = 0; i < restaurants.length; i++) {
        newRestaurants[i]["ImgUrl"] = restaurantImages[i]?.urls?.regular ?? 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
      }
    // }
  
    setRestaurants(newRestaurants);
  }, [restaurantImages, restaurants]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar search={search} setSearch={setSearch} setSearchResult={setSearchResult} setSearchResultCategory={setSearchResultCategory} />
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home restaurants={restaurants} />} />
        <Route path="/register" element={<Register> </Register>}/>
        <Route path="/login" element={<Login> </Login>}/>
        <Route path="/browse" element={<Browse restaurants={restaurants} />} />
        <Route path="/result" element={<Result restaurants={searchRestaurants} search={searchResult} />} />
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