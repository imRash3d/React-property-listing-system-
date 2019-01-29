import React from "react";
const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="mb-5">
              <h3 class="footer-heading mb-4">About Homeland</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                pariatur reprehenderit vero atque, consequatur id ratione, et
                non dignissimos culpa? Ut veritatis, quos illum totam quis
                blanditiis, minima minus odio!
              </p>
            </div>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="row mb-5">
              <div class="col-md-12">
                <h3 class="footer-heading mb-4">Navigations</h3>
              </div>
              <div class="col-md-6 col-lg-6">
                <ul class="list-unstyled">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Buy</a>
                  </li>
                  <li>
                    <a href="#">Rent</a>
                  </li>
                  <li>
                    <a href="#">Properties</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 col-lg-6">
                <ul class="list-unstyled">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-5 mb-lg-0">
            <h3 class="footer-heading mb-4">Follow Us</h3>

            <div>
              <a href="#" class="pl-0 pr-3">
                <span class="icon-facebook" />
              </a>
              <a href="#" class="pl-3 pr-3">
                <span class="icon-twitter" />
              </a>
              <a href="#" class="pl-3 pr-3">
                <span class="icon-instagram" />
              </a>
              <a href="#" class="pl-3 pr-3">
                <span class="icon-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;