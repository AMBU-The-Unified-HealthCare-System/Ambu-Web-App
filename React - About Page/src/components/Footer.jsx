import React, { useState } from 'react';
import "./Footer.css"

function Footer() {
  const [showForm, setShowForm] = useState(false);

  const hideForm = ()=> {document.querySelector(".form-close-btn").addEventListener("click", () => {
    document.querySelector(".form").style.display = "none";
  });}
  const handleContactUsClick = () => {
    setShowForm(true);
    document.querySelector(".form").style.display = "block";

  };


  const handleSubmit = () => {
    // Your submission logic here
    // You may clear input values, display a thank you message, etc.
    document.querySelectorAll(".form-input").forEach((input) => (input.value = ""));
    document.querySelector(".form").innerHTML = `
      <div class="form-item" data-animation="fadeOff">
        <div>
          <figure><img loading="lazy" src="/images/Footer-images/ambu logo.webp" alt="ambu logo" class="form-logo"></figure>
        </div>
        <div>
          <h1>Thank You</h1>
        </div>
        <div>
          <p class="form-para-1">Our team will get back to you shortly!</p>
        </div>
        <p class="form-para-2">Stay Tuned</p>
      </div>
    `;

    // Add any additional logic you need here

    document.querySelector(".form").classList.add("fade1");
    document.querySelector(".form").classList.add("fadeOff");
    // document.querySelector("contact-us-form").style.display = "None"

    setInterval(() => {
      setShowForm(false); // Hide the form after 4 seconds
    }, 4000);
  };

  return (
    <div className="footer box">
      <div style={{ fontSize: '1.5vw', margin: '1vw', alignItems: 'center' }} className="footer-title">
        <img loading="lazy" src="images/Footer-images/indian-map.svg" alt="India map" style={{ width: '4vw' }} />
        <h1>&nbsp; India's First Unified Health Care Software</h1>
      </div>

      <div className="footer-options">
        {/* Know Us */}
        <div className="know-us">
          <h2>
            <abbr title="Know US">Know US</abbr>
          </h2>
          <ul>
            <li><a href="/"><abbr title="Home">Home</abbr></a></li>
            <li><a href="/"><abbr title="Profile">Profile</abbr></a></li>
            <li><a href="/"><abbr title="About us">About us</abbr></a></li>
            <li><a href="/"><abbr title="Services">Services</abbr></a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="services">
          <h2>
            <abbr title="Services">Services</abbr>
          </h2>
          <ul>
            <li><a href="/"><abbr title="BLS Ambulance">BLS Ambulance</abbr></a></li>
            <li><a href="/"><abbr title="PLS Ambulance">PLS Ambulance</abbr></a></li>
            <li><a href="/"><abbr title="Mortality Ambulance">Mortality Ambulance</abbr></a></li>
            <li><a href="/"><abbr title="ALS Ambulance">ALS Ambulance</abbr></a></li>
          </ul>
        </div>

        {/* Connect */}
        <div className="connect">
          <h2>
            <abbr title="Connect With Us">Connect With Us</abbr>
          </h2>
          <div className="contact-us-form" onClick={handleContactUsClick}>Contact Us</div>
        </div>

        {/* Contact Us */}
        <div className="contact-us">
          <h2>
            <abbr title="Contact Us">Contact Us</abbr>
          </h2>
          <ul style={{ maxWidth: '400px' }}>
            {/* Contact Info */}
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <div><abbr title="Location"><img loading="lazy" src="images/Footer-images/location icon.webp" alt="location" style={{ width: '3.5vw', marginRight: '1.5vw' }} /></abbr></div>
              <div style={{ fontSize: '1.2vw' }}>
                <a href="https://goo.gl/maps/Y2Eoynbw8ZAyd8NJ6">
                  <abbr title="XYZ ABC Technology Business Incubation Utter Pradesh India">
                    4th Floor TBI, KIET Group of Institutions<br />
                    Ghaziabad Delhi NCR<br />
                    201206
                  </abbr>
                </a>
              </div>
            </li>

            {/* Email */}
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <div><abbr title="Mail"><img loading="lazy" src="images/Footer-images/gmail.svg" alt="Mail" style={{ width: '3.5vw', marginRight: '1.5vw' }} /></abbr></div>
              <div style={{ fontSize: '1.2vw', alignItems:"baseline" }}>
                <a href="mailto:official.ambuvians@gmail.com">
                  <abbr title="official.ambuvians@gmail.com">official.ambuvians@gmail.com</abbr>
                </a>
                <a href="mailto:no-reply@ambuvians.in">
                  <abbr title="no-reply@ambuvians.in"> no-reply@ambuvians.in </abbr>
                </a>
              </div>
            </li>

            {/* Phone Numbers */}
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1vw' }}>
              <div><abbr title="Phone No."><img loading="lazy" src="images/Footer-images/icon_phone.webp" alt="Call" style={{ width: '3vw', marginRight: '1.5vw' }} /></abbr></div>
              <div style={{ fontSize: '1.2vw' }}>
                <a href="tel:+917505853812"><abbr title="7505853812">7505853812</abbr></a>
                <a href="tel:+918630729931"><abbr title="8630729931">8630729931</abbr></a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="connect">
        <p>Connect With Us</p>
        <div className="icons">
          {/* Instagram */}
          <abbr title="instagram" className="first-icon">
            <a href="https://www.instagram.com/official.ambuvians/" target="_blank">
              <img loading="lazy" src="images/Footer-images/instagram.webp" alt="Instagram" />
            </a>
          </abbr>

          {/* WhatsApp */}
          <abbr title="whatsapp" className="second-icon">
            <a href="https://wa.me/+7505853812" target="_blank">
              <img loading="lazy" src="images/Footer-images/whatsapp.webp" alt="Whatsapp" />
            </a>
          </abbr>

          {/* Twitter */}
          <abbr title="twitter" className="third-icon">
            <a href="https://www.threads.net/@official.ambuvians" target="_blank">
              <img loading="lazy" src="images/Footer-images/threads.webp" alt="Threads" />
            </a>
          </abbr>

          {/* LinkedIn */}
          <abbr title="linkedin" className="fourth-icon">
            <a href="https://www.linkedin.com/company/ambuvians-healthcare-pvt-ltd/?viewAsMember=true" target="_blank">
              <img loading="lazy" src="images/Footer-images/linkedin.webp" alt="LinkedIn" />
            </a>
          </abbr>
        </div>
      </div>

      {/* Download Section */}
      <div className="download">
        <div className="appstore">
          <abbr title="app-store">
            <img loading="lazy" src="images/Footer-images/app-store.webp" alt="App Store" />
          </abbr>
        </div>
        <div className="playstore">
          <abbr title="play-store">
            <img loading="lazy" src="images/Footer-images/play-store.webp" alt="Play Store" />
          </abbr>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <p style={{ marginLeft: '1vw' }} className="copy">
          <a href="/" style={{ color: 'white' }}>
            <abbr title="Click to Know More">copyright@2023 AMBUvians organization</abbr>
          </a>
        </p>
      </div>

      <div className="form" style={{ display: showForm ? 'block' : 'none' }} data-animation="fade">
      <div class="form-close-btn">
      <i class="fa-solid fa-xmark" onClick={hideForm}></i>
    </div>
        <h1 className='form-title'>Query Form</h1>
        <div className="form-item">
          <input type="text" placeholder="Enter Name" className="form-input" />
          <input type="text" placeholder="Enter Email-id/Phone No" className="form-input" />
          <select name="Select" className="form-dropdown">
            <option value="none" selected disabled hidden>Select</option>
            <option value="ambulance-services">Ambulance Services</option>
            <option value="data-security">Data Security</option>
            <option value="address-updates">Address Updates</option>
            <option value="know-more">Know More</option>
            <option value="others">Others</option>
          </select>
          <input type="text" placeholder="Description" className="form-input" />
          <button className="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
