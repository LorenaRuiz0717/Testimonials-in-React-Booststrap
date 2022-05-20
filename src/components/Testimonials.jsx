import React from "react";
// import imgTestimonial from '../images/imgTestimonial.jpg'
import "../styles/Testimonials.css";

function Testimonials(props) {
  return (
    <div className="card-body">
      <div className="d-flex mb-3 containerImg">
        <figure> 
        
          <img
            className="border-primary border-4 imgTestimonials"
            src={require(`../images/${props.image}.jpg`)}
            alt="imgProduct"
          />
        </figure>
      </div>
      <div>
        <div className="ps-3 containerInfo">
          <h6 className="m-0 h6">
            <strong>{props.name}</strong>
          </h6>
          <p className="m-0 h6">in {props.city}</p>
          <p className="m-0 h6">{props.testimonials}</p>
          <p className="fs-6 lh-1">{props.description}</p>
        </div>
       
      </div>
    </div>
  );
}
export default Testimonials;
