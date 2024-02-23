import React from "react";
import {truncate} from 'lodash'
import { useNavigate } from "react-router-dom";
import Heart from "./Heart";
const PropertyCard = ({card}) => {

  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-start r-card"
    onClick={()=>navigate(`../properties/${card.id}`)}
    >
      <Heart id={card?.id}/>
      <img src={card.image} alt="home" />
      <span className="text-orange-600 r-price">
        <span className="text-orange-600">KSH{'\u00A0'}</span>
        <span>{card.price}/month</span>
      </span>
      <span className="text-black font-roboto font-medium">{truncate(card.title, {length: 15})}</span>
      <span className="text-gray-400 font-roboto">{truncate(card.description, {length: 80})}</span>
    </div>
  );
};

export default PropertyCard;
