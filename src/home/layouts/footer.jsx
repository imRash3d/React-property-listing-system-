import React from "react";
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="mb-5">
              <h3 className="footer-heading mb-4">About Homeland</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                pariatur reprehenderit vero atque, consequatur id ratione, et
                non dignissimos culpa? Ut veritatis, quos illum totam quis
                blanditiis, minima minus odio!
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="row mb-5">
              <div className="col-md-12">
                <h3 className="footer-heading mb-4">Navigations</h3>
              </div>
              <div className="col-md-6 col-lg-6">
                <ul className="list-unstyled">
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>
                    <Link to="">About Us</Link>
                  </li>
                  <li>
                    <Link to="">Contact Us</Link>
                  </li>
                 
                </ul>
              </div>
             
            </div>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <h3 className="footer-heading mb-4">Follow Us</h3>

            <div>
              <Link to="" className="pl-0 pr-3">
                <span className="icon-facebook" />
              </Link>
              <Link  to=""  className="pl-3 pr-3">
                <span className="icon-twitter" />
              </Link>
              <Link  to=""  className="pl-3 pr-3">
                <span className="icon-instagram" />
              </Link>
              <Link  to=""  className="pl-3 pr-3">
                <span className="icon-linkedin" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="col-md-12 text-center">  <a href="http://rash3d.me/">Developed By @Rashedul Islam</a> </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
