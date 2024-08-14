"use client"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './Ride.css'; // Make sure to import the CSS file
import React, {useState} from 'react'

let Ride=() =>{ 
const[value,setValue]=useState(null);
const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '100%',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const Ride = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAwq5UfM1YtF4HPyNFV6eeP1ye6x-WnPR8',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    < div className="container">
      <div className="box search-box">
      < div className="home-heading">
                           <h1>Get a ride</h1>
                            <div className='circle'></div>
                            <i className="fa-solid fa-paper-plane"></i>
                            <input type="text" className='pickup-input' placeholder='Pickup Location' autoFocus />
                            <div className='left-line'></div>
                            <div className='square'></div>
                            <input type="text" className='dropoff-input' placeholder='Dropoff Location' autoFocus />
                     <button className='search-button'>Search</button>
                     <GooglePlacesAutocomplete
         apiKey='AIzaSyAwq5UfM1YtF4HPyNFV6eeP1ye6x-WnPR8'            
      selectProps={{
        value,
        onChange: setValue,
      }}
    />
                        </div>
                        
                        
      
      </div>

      <div className="box map-box">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
};
};
export default Ride;
