import React from "react";
// import imgTestimonial from '../images/imgTestimonial.jpg'
import "../styles/Testimonials.css";
import data from "../data.json";

function Testimonials(props) {
  return (
    <div className="card-body">
      {data.map((dat) => {
        return (
          <div key={dat.id}>
            {dat.Name}
            <div className="d-flex mb-3 containerImg">
              <figure>
                <img
                  className="border-primary border-4 imgTestimonials"
                  src={dat.Img}
                  alt="imgProduct"
                />
              </figure>
            </div>
          </div>
        );
      })}

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
