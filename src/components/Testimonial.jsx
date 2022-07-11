import React from "react";
import data from "../data.json";


const Testimonial = () => {

  const swichCase=(props)=>{
    switch (props.id) {
    case 0||4:
      return "col-12 col-lg-7 p-3";
    case 1||2||3:      
      return "col-12 col-lg-5 p-3";
    default:
      return""
  }
}
const swichCaseArticle=(props)=>{
  switch (props.id) {
  case 0||4:
    return "card h-100 cardColor1";
  case 1||2||3:      
    return "card h-100 cardColor2";
  default:
    return""
}
}
  const listTestimonials = data.map((d, id) => (
    <div
     className= 
    //  {swichCase(id)}
      {id%2===0?"col-12 col-lg-7 p-3":"col-12 col-lg-5 p-3"}
       key={id}>
      <article className=
      //{swichCaseArticle(id)} 
      {id%2===0?"card h-100 cardColor1":"card h-100 cardColor2"}
      key={id}>
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
