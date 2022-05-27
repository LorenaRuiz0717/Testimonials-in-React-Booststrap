import React, { useState } from "react";
// import imgTestimonial from '../images/imgTestimonial.jpg'
import "../styles/Testimonials.css";
import Testimonial from "./Testimonial"

// import data from "../data.json";

const Testimonials= () => {
  const [fact, setFact]=useState([
    {
        "id": 1,
        "Name": "Milu",
        "Img": "https://img.freepik.com/foto-gratis/primer-plano-gato-jengibre-abrazando-lamiendo-al-otro-aislado-pared-blanca_181624-32893.jpg?t=st=1653663557~exp=1653664157~hmac=25de5b4b9f570827b5d2c7d02cc702efdae60d678c44d3b47972ca50c28017b0&w=740",
        "History": "Milu es una gata"
    },
    {
        "id": 2,
        "Name": "GATO2",
        "Img": "https://assets.pinterest.com/ext/embed.html?id=43910165108078544",
        "History": "Milu es una gata"
    },
    {
        "id": 3,
        "Name": "GATO3",
        "Img": "https://assets.pinterest.com/ext/embed.html?id=43910165108078544",
        "History": "Milu es una gata"
    },
    {
        "id": 4,
        "Name": "GATO4",
        "Img": "https://assets.pinterest.com/ext/embed.html?id=43910165108078544",
        "History": "Milu es una gata"
    }
])

  return (
    <div className="card-body">
      {fact.map(fact => {
        return (
         <Testimonial name={fact.Name} img={fact.Img} History={fact.History}></Testimonial>
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
