import React from "react";
import { price } from "../../data";

const PriceCard = () => {
  return (
    <>
      {price.map((val, index) => ( // Added index parameter
        <div className='items shadow' key={index}> {/* Added key prop */}
          <h4>{val.name}</h4>
          <h1>
            <span>₹</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className='outline-btn'>GET STARTED</button>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
