import React, { useState } from "react";
// import imgTestimonial from '../images/imgTestimonial.jpg'
import "../styles/Testimonials.css";
import Testimonial from "./Testimonial"

import data from "../data.json";

const Testimonials= () => {
  return (
    <div className="card-body">
      {data.map(fact => {
        return (
         <Testimonial
          name={fact.Name}
          img={fact.Img}
          History={fact.History}>
         </Testimonial>
        );
      })}

      {/* <div>
        <div className="ps-3 containerInfo">
          <h6 className="m-0 h6">
            <strong>{props.name}</strong>
          </h6>
          <p className="m-0 h6">{props.city}</p>
          <p className="m-0 h6">{props.testimonials}</p>
          <p className="fs-6 lh-1">{props.description}</p>
        </div>
      </div> */}
    </div>
  );
}
export default Testimonials;
