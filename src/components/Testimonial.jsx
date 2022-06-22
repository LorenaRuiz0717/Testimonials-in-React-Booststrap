import React from "react";
import data from "../data.json";

const Testimonial = () => {
  const listTestimonials = data.map((d, id) => (
    <div className="col-12 col-lg-7 p-3" key={id}>
      <article className="card h-100 cardColor1">
        <h1> {d.Name}</h1>
        <h2> {d.History} </h2>
        <figure className="figureTestimonials">
          <img
            className="border-primary border-4 imgTestimonials"
            src={d.Img}
            alt="imgProduct"
          />
        </figure>
      </article>
    </div>
  ));
  console.log(listTestimonials);
  return (
    <div>{listTestimonials}</div>
  );
};

export default Testimonial;
