import React, { Component }  from 'react';
// import imgTestimonail '../images/imgTestimonail.jpg';
import './App.css';
import './dist/main.css'
// import './scss/custom.css'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="container d-flex align-items-center justify-content-center height App">
      <div className='principalContainer'>
        <h1>Esto es lo que piensan nuestros clientes</h1>
        <div className='row'>
          <div className="col-12 col-lg-9">
            <div className='row'>
              <div className="col-12 col-lg-7 p-3">
              <article className="card h-100 bg-danger">
                <Testimonials
                  name='Emma'
                  image='imgTestimonial'
                  city='Bogotá'
                  testimonials='Lindos productos happy pets'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing.'
                />
                </article>
              </div>
              <div className="col-12 col-lg-5 p-3">
              <article className="card h-100 bg-success">
                <Testimonials
                  name='Emma'
                  image='imgTestimonial1'
                  city='Bogotá'
                  testimonials='Lindos productos happy pets'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing.'
                />
                </article>
              </div>
              <div className="col-12 col-lg-5 p-3">
              <article className="card h-100 bg-light">
                <Testimonials
                  name='Emma'
                  image='imgTestimonial'
                  city='Bogotá'
                  testimonials='Lindos productos happy pets'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing.'
                />
                </article>
              </div>
              <div className='col-12 col-lg-7 p-3'>
              <article className="card h-100 bg-danger">
                <Testimonials
                  name='Emma'
                  image='imgTestimonial2'
                  city='Bogotá'
                  testimonials='Lindos productos happy pets'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing.'
                />
                </article>
              </div>
            </div>
           
          </div>
          <div className='col-12 col-lg-3 p-3'>
          <article className="card h-100 bg-primary">
              <Testimonials
                name='Emma'
                image='imgTestimonial'
                city='Bogotá'
                testimonials='Lindos productos happy pets'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing.'
              />
              </article>
            </div>
        </div>
      </div>
    </div>
  );

}

export default App;
