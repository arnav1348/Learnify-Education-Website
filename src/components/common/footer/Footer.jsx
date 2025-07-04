import React from "react";
import { blog } from "../../../data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        {/* Newsletter section */}
      </section>
      <footer>
        <div className='container padding'>
          {/* Logo box */}
          {/* Explore box */}
          {/* Quick Links box */}
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val, index) => ( // Added index parameter
              <div className='items flexSB' key={index}> {/* Added key prop */}
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span> 
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          {/* Contact box */}
        </div>
      </footer>
      <div className='legal'>
        {/* Legal information */}
      </div>
    </>
  );
};

export default Footer;
