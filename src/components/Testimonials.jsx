import React from "react";
// import imgTestimonial from '../images/imgTestimonial.jpg'
import '../styles/Testimonials.css'

function Testimonials(props) {
  return (

<div className="card-body">
  <div className="d-flex mb-3">
       <figure className="containerImg">
      <img
        className="border border-primary border-4 rounded imgTestimonials"
        src={require(`../images/${props.image}.jpg`)}
      /></figure>
      <div className="ps-3">
        <h6 className="m-0 h6"><strong>{props.name}</strong></h6>
        <p className="m-0 h6">in {props.city}</p>
      </div>
        </div>
        <div>  
        <p className="m-0 h6">{props.testimonials}</p>
        <p className="fs-6 lh-1">{props.description}</p>
      </div>
      
</div>

 
  );
}
export default Testimonials;
