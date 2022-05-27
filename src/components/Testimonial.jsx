import React from "react";

const Testimonial=(props)=>{

    return(
    <div className="card-body">
        <div key={props.id}>
       <h1> {props.name} </h1>
        <div className="d-flex mb-3 containerImg">
          <figure>
            <img
              className="border-primary border-4 imgTestimonials"
              src={props.img}
              alt="imgProduct"
            />
          </figure>
        </div>
        <p>{props.History}</p>
      </div>
      </div>
    )
};

export default Testimonial;

