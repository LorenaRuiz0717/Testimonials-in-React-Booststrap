import React from 'react';
// import imgTestimonail '../images/imgTestimonail.jpg';
import './App.css';
import './dist/main.css'
// import './scss/custom.css'
import Testimonials from './components/Testimonials'
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='page'>
    <NavBar></NavBar>
    <div className="container align-items-center justify-content-center height App">
      <div className='principalContainer'>
        <h1>Labor Social</h1>
        <h5>Hola bienvenid@, aqui encontraras historias con finales felices, gaticas embarazadas en condición de calle rescatadas para darle a ella y a sus bebés una excelente calidad de vida al igual que gatitos bebes recuperados.
          Hoy en día entregados a lindos hogares donde disfrutan de amor, cuidado y compañia siendo los más consentidos del hogar.</h5>
        <div className='row'>
          <div className="col-12 col-lg-9">
            <div className='row'>
              <div className="col-12 col-lg-7 p-3">
                <article className="card h-100 cardColor1">
                  <Testimonials
                    name='Emma'
                    image='imgTestimonial4'
                    city='Bogotá'
                    testimonials='Lindos productos happy pets'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing.'
                  />
                </article>
              </div>
              <div className="col-12 col-lg-5 p-3">
                <article className="card h-100 cardColor2">
                  <Testimonials
                    name='Emma'
                    image='imgTestimonial3'
                    city='Bogotá'
                    testimonials='Lindos productos happy pets'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing.'
                  />
                </article>
              </div>
              <div className="col-12 col-lg-5 p-3">
                <article className="card h-100 cardColor3">
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
                <article className="card h-100 cardColor1">
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
            <article className="card h-100 cardColor2">
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
    <Footer></Footer>
    </div>
  );

}

export default App;
