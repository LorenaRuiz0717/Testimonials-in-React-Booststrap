import React, { useState } from "react";
// import imgTestimonial from '../images/imgTestimonial.jpg'
import "../styles/Testimonials.css";
import Testimonial from "./Testimonial"
import data from "../data.json";


const Testimonials= (props) => {
  // const numeros=[1,2,3,4,5,6];
  // const testimonials=props;
  // console.log(testimonials)
  // const listTestimonials=data.map((d, id )=>
  // <div key={id}>{d.Name}</div>)
  return (
    <div className="row">
          <Testimonial></Testimonial>
     </div>
  
  );
}
export default Testimonials;
