import React from "react";
import data from "../data.json";

const Testimonial = () => {
  const swichCase = (id) => {
    console.log(id);
    switch (id) {
      case 0:
      case 3:
        return "col-12 col-lg-7 p-3";
      case 1:
      case 2:
        return "col-12 col-lg-5 p-3";
      case 4:
        return "col-12 col-lg-3 p-3";
      default:
        return "";
    }
  };
  const swichCaseArticle = (id) => {
    switch (id) {
      case 0:
      case 3:
        return "card h-100 cardColor1";
      case 1:
      case 4:
        return "card h-100 cardColor2";
      case 2:
        return "card h-100 cardColor3";
      default:
      return"card h-100 cardColor1"
    }
  };

  const listTestimonials = data.map((d, id) => {
    if (id != 4) {
      return (
        // <div className= {id===5?"col-12 col-lg-3 p-3":"col-12 col-lg-9"} key={id}>
        <div className={swichCase(id)} key={id}>
          <article className={swichCaseArticle(id)} key={id}>
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
      );
    }
  });

  const verticalTestimonials = data.map((d, id) => {
    if (id === 4) {
      return (
        // <div className= {id===5?"col-12 col-lg-3 p-3":"col-12 col-lg-9"} key={id}>
        <div className={swichCase(id)} key={id}>
          <article className={swichCaseArticle(id)} key={id}>
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
      );
    }
  });


  console.log(listTestimonials);
  return (
    <div className="row">
      <div className="col-12 col-lg-9">
        <div className="row">{listTestimonials}</div>
      </div>
      {verticalTestimonials}
    </div>
  );
};

export default Testimonial;
