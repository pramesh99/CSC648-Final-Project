import React, { useState, useCallback } from 'react';
import styles from "./Result.module.css";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import RestaurantCard from '../../components/restaurantCard/RestaurantCard';

const containerStyle = {
   width: '100%',
   height: '100%'
};

const center = {
   lat: 37.726783,
   lng: -122.474973
};

function Result(props) {

   let search = props.search;

   let restaurants = props.restaurants.map((restaurant) => (
      <RestaurantCard name={restaurant.RestaurantName} img={restaurant.ImgUrl} />
   ))

   let markerPositions = [];

   for (let i = 0; i < props.restaurants.length; i++) {
      let coordinates = props.restaurants[i].RestaurantCoordinates;
      coordinates = coordinates.split(",");
      coordinates[0] = Number(coordinates[0]);
      coordinates[1] = Number(coordinates[1]);
      markerPositions.push({
         lat: coordinates[0],
         lng: coordinates[1]
      })
   }

   let markers = markerPositions.map((position) => (
      <Marker
         position={position}
      />
   ))

   // Google Maps Implementation
   const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyB1e6d80uVY5LiIsjTrVg2vFFgRupFH0YY"
   })

   const [map, setMap] = useState(null)

   const onLoad = useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      // console.log("MAP", map)
      map.setZoom = 14;
      setMap(map)

   }, [])

   const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
   }, [])

   return (
      <div id={styles["home"]}>
         <h2 id={styles["title"]}>Search for {search}</h2>
         <div id={styles["restaurant-and-map-container"]}>
            <div id={styles["restaurant-card-container"]}>
               {restaurants}
            </div>
            <div id={styles["map-container"]}>
               {isLoaded ? (
                  <GoogleMap
                     mapContainerStyle={containerStyle}
                     center={center}
                     zoom={14}
                     onLoad={onLoad}
                     onUnmount={onUnmount}
                  >
                     {markers}
                     { /* Child components, such as markers, info windows, etc. */}
                     <></>
                  </GoogleMap>
               ) : <></>}
            </div>
         </div>
      </div>
   )
}

export default Result;