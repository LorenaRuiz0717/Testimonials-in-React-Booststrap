import React from "react";
import "../styles/footer.css"
import logo from '../images/logoRegistrado.png'

function Footer() {
  return (
      <footer class="bg-primary text-center text-lg-start text-white">
        <div class="container p-4">
          <div class="row my-4">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div
                class=" test rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto">
               <img
                className="logoFooter"
                src={logo}
                alt="Logo"/>
              </div>
              <p class="text-center">
               Pets Art, es un emprendimiento con motivación social, buscamos cambiar vidas, recuperar sueños y dar en adopción amor. 
               Recuerda "ADOPTA, NO COMPRES!"
              </p>
              <ul class="list-unstyled d-flex flex-row justify-content-center">
                <li>
                  <a class="text-white px-2" href="https://www.facebook.com/Happypetsart">
                    <i class="fab fa-facebook-square  fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a class="text-white px-2" href="https://www.instagram.com/happy_petsart/">
                    <i class="fab fa-instagram fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a class="text-white ps-2" href="https://api.whatsapp.com/send?phone=573202476526&text=Hola%20Lorena,%20me%20gustaria%20conocer%20mas%20de%20Pets%20Art">
                    <i class="fab fa-whatsapp  fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4">Animals</h5>

              <ul class="list-unstyled">
                <li class="mb-2">
                  <a href="#!" class="text-white">
                    <i class="fas fa-paw pe-3"></i>When your pet is missing
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#!" class="text-white">
                    <i class="fas fa-paw pe-3"></i>Recently found
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#!" class="text-white">
                    <i class="fas fa-paw pe-3"></i>How to adopt?
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#!" class="text-white">
                    <i class="fas fa-paw pe-3"></i>Pets for adoption
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#!" class="text-white">
                    <i class="fas fa-paw pe-3"></i>Material gifts
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#!" class="text-white">
                    <i class="fas fa-paw pe-3"></i>Help with walks
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#!" class="text-white">
                    <i class="fas fa-paw pe-3"></i>Volunteer activities
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4">Animals</h5>

              <ul class="list-unstyled">
                <li class="mb-2">
                  <a href="#!" class="text-white">
                    <i class="fas fa-paw pe-3"></i>General information
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#!" class="text-white">
                    <i class="fas fa-paw pe-3"></i>About the shelter
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#!" class="text-white">
                    <i class="fas fa-paw pe-3"></i>Statistic data
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#!" class="text-white">
                    <i class="fas fa-paw pe-3"></i>Job
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#!" class="text-white">
                    <i class="fas fa-paw pe-3"></i>Tenders
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#!" class="text-white">
                    <i class="fas fa-paw pe-3"></i>Contact
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4">Contact</h5>

              <ul class="list-unstyled">
                <li>
                  <p>
                    <i class="fas fa-map-marker-alt pe-2"></i>Bogotá, Colombia
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-phone pe-2"></i>+57 3202476526
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-envelope pe-2 mb-0"></i>petsart@hotmail.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="text-center p-3">
          © 2020 Copyright
        </div>
      </footer>
  );
}

export default Footer;
