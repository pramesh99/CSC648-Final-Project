/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

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
import DriverRegister from './pages/Login&Register/DriverRegister'
import RestaurantRegister from './pages/Login&Register/RestaurantRegister'
import Login from './pages/Login&Register/Login';
import Restaurant from './pages/restaurant/Restaurant';
import DriverLogin from './pages/Login&Register/DriverLogin'
import RestaurantLogin from './pages/Login&Register/RestaurantLogin'
import RestaurantDashboard from './pages/restaurantDashboard/RestaurantDashboard';
import DriverDashboard from './pages/driverDashboard/DriverDashboard';
import RestaurantSignup from './pages/restaurantSignup/RestaurantSignup';
import UserDashboard from './pages/userDashboard/UserDashboard';
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
  let resData = [];
  await fetch("http://34.82.124.237:3001/api/allRestaurants").then((r) => r.json()).then((data) =>
    resData = data
  )
  return resData;
}

async function getSearchRestaurants(search) {
  let resData = [];
  if (search) {
    search = "/" + search
  }
  await fetch(`http://34.82.124.237:3001/api/searchNoCuisine${search}`).then((r) => r.json()).then((data) => {
    resData = data;
  }
  )
  return resData;
}

async function getSearchRestaurantsWithCategory(category, search) {
  let resData = [];
  if (search) {
    search = "/" + search
  }
  await fetch(`http://34.82.124.237:3001/api/search/${category}${search}`).then((r) => r.json()).then((data) =>
    resData = data
  )
  return resData;
}

/*
async function getSearchRestaurantsByOnlyCategory(category) {
  let resData = [];
  await fetch(`http://34.82.124.237:3001/api/search/${category}`).then((r) => r.json()).then((data) =>
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
*/

async function updateCartCount(customerID, setCartCount) {
  let resData = [];
  await fetch(`http://34.82.124.237:3001/api/order/getOrder/${customerID}`).then((r) => r.json()).then((data) => {
     resData = data;
     let currentOrders = [];
     if (resData.length > 0) {
        for (let i = 0; i < resData.length; i++) {
           if (resData[i].OrderStatus === 1) {
              currentOrders.push(resData[i]);
           }
        }
        setCartCount(currentOrders.length);
     }
  }
  )
}

function App() {

  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [searchResultCategory, setSearchResultCategory] = useState('');

  const [serverData, setServerData] = useState([{}]);

  const [restaurantImages, setRestaurantImages] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const [selectedRestaurant, setSelectedRestaurant] = useState([]);

  const [searchRestaurants, setSearchRestaurants] = useState([]);

  // User data
  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');
  const [userType, setUserType] = useState('');
  const [RestaurantID, setRestaurantID] = useState(0);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    getAllRestaurants().then((r) => {
      setRestaurants(r);
    })

    getRestaurantImgs(restaurants.length).then((r) => {
      setRestaurantImages(r?.response?.results);
    })

  }, []);

  useEffect(() => {
    
  }, [cartCount]);

  // Search Use Effect
  useEffect(() => {
    if (searchResultCategory !== 'all') {
      let newRestaurants = [];
      getSearchRestaurantsWithCategory(searchResultCategory, searchResult).then((r) => {
        for (let i = 0; i < r.length; i++) {
          newRestaurants.push(r[i]);
        }
        for (let i = 0; i < r.length; i++) {
          newRestaurants[i]["ImgUrl"] = restaurantImages[i]?.urls?.regular;
        }
        setSearchRestaurants(newRestaurants);
      });
    } else if (searchResultCategory === 'all' && searchResult === '') {
      getAllRestaurants().then((r) => {
        let newRestaurants = [];
        for (let i = 0; i < r.length; i++) {
          newRestaurants.push(r[i]);
        }
        for (let i = 0; i < newRestaurants.length; i++) {
          newRestaurants[i]["ImgUrl"] = restaurantImages[i]?.urls?.regular;
        }
        setSearchRestaurants(newRestaurants);
      })
    } else {
      getSearchRestaurants(searchResult).then((r) => {
        let newRestaurants = [];
        for (let i = 0; i < r.length; i++) {
          newRestaurants.push(r[i]);
        }
        for (let i = 0; i < r.length; i++) {
          newRestaurants[i]["ImgUrl"] = restaurantImages[i]?.urls?.regular;
        }
        setSearchRestaurants(newRestaurants);
      });
    }

  }, [searchResult, searchResultCategory]);

  useEffect(() => {
    if(userType === "SFSUCustomer") {
      updateCartCount(userID, setCartCount)
    }
}, [userID])

  useEffect(() => {
    let storedData = localStorage.getItem('myData');
    if (storedData) {
      let myData = JSON.parse(storedData);
      setUserName(myData.name);
      setUserID(myData.id);
      setUserType(myData.type);
      if (myData.restID) {
        setRestaurantID(myData.restID);
      }
    }

    let newRestaurants = restaurants;

    for (let i = 0; i < restaurants.length; i++) {
      newRestaurants[i]["ImgUrl"] = restaurantImages[i]?.urls?.regular ?? 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
    }
    

    setRestaurants(newRestaurants);
  }, [restaurantImages, restaurants, userName]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar
            search={search}
            setSearch={setSearch}
            setSearchResult={setSearchResult}
            setSearchResultCategory={setSearchResultCategory}
            userName={userName}
            userID={userID}
            userType={userType}
            setUserName={setUserName}
            setUserID={setUserID}
            setUserType={setUserType}
            setRestaurantID={setRestaurantID}
            cartCount={cartCount}
            setCartCount={setCartCount}
          />

        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home restaurants={restaurants} />} />
        <Route path="/login" element={<Login setUserName={setUserName} userID={userID} setUserID={setUserID} setUserType={setUserType} cartCount={cartCount} setCartCount={setCartCount}> </Login>} />
        <Route path="/register" element={<Register> </Register>} />
        <Route path="/Driver-register" element={<DriverRegister />} />
        <Route path="/Driver-login" element={<DriverLogin setUserName={setUserName} setUserID={setUserID} setUserType={setUserType} />} />
        <Route path="/driverDashboard" element={<DriverDashboard userName={userName} userID={userID} userType={userType} setUserName={setUserName} setUserID={setUserID} setUserType={setUserType} />} />
        <Route path="/Restaurant-register" element={<RestaurantRegister> </RestaurantRegister>} />
        <Route path="/Restaurant-login" element={<RestaurantLogin setUserName={setUserName} setUserID={setUserID} setUserType={setUserType} setRestaurantID={setRestaurantID} />} />
        <Route path="/restaurantSignup" element={<RestaurantSignup />} />
        <Route path="/restaurantDashboard" element={<RestaurantDashboard userName={userName} userID={userID} userType={userType} setUserName={setUserName} setUserID={setUserID} setUserType={setUserType} setRestaurantID={setRestaurantID} RestaurantID={RestaurantID} />} />
        <Route path="/userDashboard" element={<UserDashboard userName={userName} userID={userID} userType={userType} setUserName={setUserName} setUserID={setUserID} setUserType={setUserType} cartCount={cartCount} setCartCount={setCartCount} />} />

        <Route path="/browse" element={<Browse restaurants={restaurants} setSelectedRestaurant={setSelectedRestaurant} />} />
        <Route path="/result" element={<Result restaurants={searchRestaurants} search={searchResult} setSelectedRestaurant={setSelectedRestaurant} />} />
        <Route path="/restaurant" element={<Restaurant restaurant={selectedRestaurant} userName={userName}/>} />
        {restaurants.map((restaurant) => (
          <Route key={"app.js" + restaurant?.RestaurantName} path={`${restaurant?.RestaurantName}`} element={<Restaurant restaurant={selectedRestaurant} userName={userName} userID={userID}  cartCount={cartCount} setCartCount={setCartCount}/>} />
        ))}
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
