import React from 'react'
import { useParams } from 'react-router-dom';
import data from "./data.json";
import  "./PropertyPage.css";
import BedRoundedIcon from '@mui/icons-material/BedRounded';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function PropertyPage() {
  const { id } = useParams();

  let thePropObj;
  for (let i = 0; i < data.results.length; i++) {
    if (data.results[i].zpid == id) {
      thePropObj = data.results[i];
    }
  }
  let adress = thePropObj.streetAddress;
  let price = thePropObj.price;
  let img = thePropObj.imgSrc;
  let bathrooms = thePropObj.bathrooms;
  let bedrooms = thePropObj.bedrooms;
  let units = thePropObj.lotAreaUnit;
  let size = thePropObj.lotAreaValue;
  let country = thePropObj.country;
  let city = thePropObj.city;

  return (
    <div id="the-prop-container">
      <div id="top-section">
        <div id="the-prop-img" dataadredd={`${country}, ${city}`}>
          <img id="the-img" src={`${img}`} alt="" />
        </div>

        <div id="the-prop-info">
          <h1>Propetry Info</h1>
          <div id="adress" >
            <LocationOnOutlinedIcon />
            {`${adress}`}{" "}
          </div>
          <div id="info-bubble-section">
            <div id="size" className="info-bubble">
              <HomeOutlinedIcon />
              {`${size} ${units}`}{" "}
            </div>
            <div id="bedrooms" className="info-bubble">
              <BedRoundedIcon /> bedrooms: {bedrooms}
            </div>
            <div id="bathrooms" className="info-bubble">
              <BathtubOutlinedIcon /> bathrooms: {bathrooms}
            </div>
          </div>

          <div id="price-container">{price}$</div>
        </div>
      </div>
    </div>
  );
}

export default PropertyPage




// Welcome to [Your Real Estate Company], where we provide a seamless real estate experience. Our team offers personalized solutions for buying, selling, renting, and investing in properties. With our expertise, extensive portfolio, and cutting-edge technology, we guide you through every step. Trust us to exceed your expectations and help you find your dream property. Welcome to [Your Real Estate Company].
