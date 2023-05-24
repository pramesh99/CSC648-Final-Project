/* 
Authors: Hieu Ma, Lin Tun, Shauhin Pourshayegan 
*/

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from 'react-bootstrap';
import styles from "./Navbar.module.css";
import { useNavigate } from 'react-router-dom';
import Register from '../../pages/Login&Register/Register';
import Result from '../../pages/result/Result';
import LogoPic from '../../images/logo.jpg'
import cart from '../../images/cart.png'
function Navbar(props) {

   const [category, setCategory] = useState('all');
   const [categories, setCategories] = useState([]);
   const navigate = useNavigate();
   const search = props.search;
   const setSearch = props.setSearch;
   const setSearchResult = props.setSearchResult;
   const setSearchResultCategory = props.setSearchResultCategory;

   const userName = props.userName;
   const userID = props.userID;
   const userType = props.userType;

   const setUserName = props.setUserName;
   const setUserID = props.setUserID;
   const setUserType = props.setUserType;
   const setRestaurantID = props.setRestaurantID;

   const logout = () => {
      setUserName('');
      setUserID('');
      setUserType('');
      setRestaurantID(0);
      navigate("/");
      localStorage.clear();
   }

   const handleChange = (event) => {
      setSearch(event.target.value);
   };

   const handleClick = () => {
      setSearchResult(search);
      setSearchResultCategory(category);
      navigate("/result");
   };

   async function getAllCategories() {
      const response = await fetch("http://34.82.124.237:3001/api/allCuisines")
      if (response.ok) {
         const data = await response.json();
         setCategories(data);
      } else {
         setCategories([{ CuisineName: 'American' }, { CuisineName: 'Chinese' }, { CuisineName: 'Indian' }, { CuisineName: 'Italian' }])
      }
   }

   useEffect(() => {
      getAllCategories();
   }, [])

   return (
      <div id={styles["navbar-container"]}>
         <div id={styles["banner"]}>SFSU Software Engineering Project CSC 648-848, Spring 2023. For Demonstration Only.</div>
         <div id={styles["navbar"]}>
            <div id={styles["home-icon"]}>
               <Link to="/" id={styles["icon-img"]}>
                  <img src={LogoPic} alt="Gator Grub Logo" />
               </Link>

            </div>
            <div id={styles["search-bar"]}>
               <select
                  id={styles["search-dropdown"]}
                  value={category}
                  onChange={e => setCategory(e.target.value)}
               >
                  <option value="all">All</option>
                  {categories.map((category) => (
                     <option value={category?.CuisineName}>{category?.CuisineName}</option>
                  ))}
               </select>
               <div id={styles["search-separator"]}></div>
               <input
                  type="text"
                  placeholder="search..."
                  id={styles["search-input"]}
                  name="search"
                  maxLength="80"
                  size="80"
                  onChange={handleChange}
                  value={search}
                  required
               />
               <div id={styles["search-icon-container"]} onClick={handleClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id={styles["search-icon"]}><path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path></svg>
               </div>

            </div>
            {/* <div id={styles["profile-icon-container"]}> */}
            <div id={styles["logout-profile-container"]}>
               {userID &&
                  <div id={styles["logout"]} onClick={() => logout()}>logout</div>
               }
               
               {userType === "SFSUCustomer" &&
                  <div>
                     <Link to="/userDashboard" >
                        <div style={{position: "absolute", 
                        color: "red",
                         right:"86px", 
                         top:"60px", 
                         width: "18px", 
                         height: "18px", 
                         borderRadius:"50%", 
                         backgroundColor:"white",
                         display:"flex",
                         justifyContent:"center",
                         alignItems: "center",
                         fontWeight: "bold"
                         }}>1</div>
                     <img style={{marginRight: "18px"}}src={cart} alt="cart-img">
                     </img>
                     </Link>
                  </div>
               }
               {userType === "SFSUCustomer" &&
                  <Link to="/userDashboard" id={styles["icon-img"]}>
                     <div id={styles["profile-icon"]}></div>
                  </Link>
               }
               {userType !== "SFSUCustomer" &&
                  <Link to="" id={styles["icon-img"]}>
                     <div id={styles["profile-icon"]}></div>
                  </Link>
               }
            </div>
         </div>

         <Nav id={styles["tabs"]}>
            <Nav id={styles["home-buttons"]}>
               <Link to="/" style={{ textDecoration: "none" }}>
                  <Nav.Link href="/" id={styles["left-buttons"]}>Home</Nav.Link>
               </Link>
            </Nav>
            <Nav id={styles["aboutus-buttons"]}>
               <Link to="/aboutUs" style={{ textDecoration: "none" }}>
                  <Nav.Link href="/aboutUs" id={styles["left-buttons"]}>About Us</Nav.Link>
               </Link>
            </Nav>

            <NavDropdown title="Delivery Driver" id={styles["dropdown"]}>
               <NavDropdown.Item as={Link} to="/Driver-register">Driver Register</NavDropdown.Item>
               <NavDropdown.Item as={Link} to="/Driver-login">Driver Login</NavDropdown.Item>
               {userType === "Driver" &&
                  <NavDropdown.Item as={Link} to="/driverDashboard">Driver Dashboard</NavDropdown.Item>
               }
            </NavDropdown>

            <NavDropdown title="Restaurant Owner" id={styles["dropdown"]}>
               <NavDropdown.Item as={Link} to="/Restaurant-register">Restaurant Register</NavDropdown.Item>
               <NavDropdown.Item as={Link} to="/Restaurant-login">Restaurant Login</NavDropdown.Item>
               {userType === "RestaurantOwner" &&
                  <NavDropdown.Item as={Link} to="/restaurantDashboard">Restaurant Dashboard</NavDropdown.Item>
               }
            </NavDropdown>

            <NavDropdown title="Register / Login" id={styles["dropdown"]}>
               <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
               <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
               {userType === "SFSUCustomer" &&
                  <NavDropdown.Item as={Link} to="/userDashboard">User Dashboard</NavDropdown.Item>
               }
            </NavDropdown>
         </Nav>
      </div>
   )
}

export default Navbar;
