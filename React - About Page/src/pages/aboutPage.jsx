// import React from 'react'
// import AboutUS from '../components/about-page/AboutUs'
// import TeamSlider from '../components/about-page/MeetOurTeem'
import "./aboutPage.css"

// function About() {
//   return (
//     <div>
//       {/* import all  the sections here from about-page  */}
//       {/* <TeamSlider /> */}
//       <AboutUS />
//     </div>
//   )
// }

// export default About

import React, { useEffect, useState } from 'react';
// import Swiper from 'swiper';

// import 'swiper/swiper-bundle.min.css';

const About = () => {
  const [titleIndex, setTitleIndex] = useState(1);
  const [whoWeAreIndex, setWhoWeAreIndex] = useState(1);

  const title = "Faster-Ontime-Reliable";
  const whoWeAreText = "As a dedicated team of individuals who deeply care about your precious time and the well-being of your loved ones, we intimately understand the distress that ensues from the untimely response of hospitals and ambulances during critical junctures. Our mission revolves around reshaping the perception of medical facilities in India, replacing fear with assurance. We aim to imbue our fellow citizens with a renewed sense of security, trusting in a healthcare system that values both time and lives.";

  useEffect(() => {
    const typeWriter = () => {
      const newTitle = title.slice(0, titleIndex);
      setTitleIndex(titleIndex > title.length ? 1 : titleIndex + 1);
      document.querySelector(".main_heading").innerText = newTitle;
    };
  
    // Adjust the interval duration (e.g., 1000 ms for 1 second)
    const interval = setInterval(typeWriter, 80);
  
    return () => {
      clearInterval(interval);
    };
  }, [titleIndex]);
  
  useEffect(() => {
    const typeWriterNew = () => {
      const newWhoWeAreText = whoWeAreText.slice(0, whoWeAreIndex);
      setWhoWeAreIndex(whoWeAreIndex + 1);
      document.querySelector(".who-we-are-text").innerText = newWhoWeAreText;
    }
      const int = setTimeout(typeWriterNew, 20);
      return () =>{
    };
    typeWriterNew();
  }, [whoWeAreIndex]);

  // useEffect(() => {
  //   var swiper = new Swiper(".swiper", {
  //     effect: "coverflow",
  //     grabCursor: true,
  //     centeredSlides: true,
  //     coverflowEffect: {
  //       rotate: 0,
  //       stretch: 0,
  //       depth: 100,
  //       modifier: 3,
  //       slideShadows: true,
  //     },
  //     keyboard: {
  //       enabled: true,
  //     },
  //     mousewheel: {
  //       thresholdDelta: 70,
  //     },
  //     loop: true,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     breakpoints: {
  //       640: {
  //         slidesPerView: 2,
  //       },
  //       768: {
  //         slidesPerView: 1,
  //       },
  //       1024: {
  //         slidesPerView: 2,
  //       },
  //       1560: {
  //         slidesPerView: 3,
  //       },
  //     },
  //   });
  //   return () => {
  //     swiper.destroy(true, true);
  //   };
  // }, []);

  const quotes = [
    { author: "Your health, our commitment." },
    { author: "Healthy citizens are the greatest asset any country can have." },
    { author: "Every single journey of your life starts with a healthy mind and a healthy journey." },
    { author: "Healthcare is not a job; it's a noble mission to save lives and improve well-being." },
    { author: "Healthcare is the heart of our community, and we're here to keep your heart healthy." },
    { author: "Every patient is a story waiting to be told, and we're here to help write the happiest chapter" },
    { author: "Your health is our priority, your well-being is our mission." },
    { author: "In the world of healthcare, every small act of kindness makes a big difference." },
    { author: "Together, we're building a healthier, happier tomorrow" },
  ];

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote-text").textContent = `- ${quote.author}`;
  };

  useEffect(() => {
    generateQuote();
  const interval = setInterval(generateQuote, 5000); // Adjust the interval time as needed (e.g., 2000 ms for 2 seconds)
  return () => clearInterval(interval);
  }, []);

  

  return (
    <div className="about-page-full-section">
      {/* Home section start */}
      <section className="home company" id="home" style={{ backgroundImage: 'url(./about-page-images/company-image.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <h1>AMBUvians</h1>
      </section>

      <p className="company-quote">India’s 1st One-Stop and Advanced Healthcare Services </p>

      {/* Feature */}
      <p className="main_heading"></p>

      {/* About Us */}
      <div className="about" style={{ backgroundImage: 'url(./about-page-images/about-us.png)' }}>
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            At Ambuvians, we are committed to revolutionizing the way healthcare organizations operate and deliver patient care. With a deep understanding of the complex challenges facing the healthcare industry, we have developed a state-of-the-art Healthcare and Management System that empowers healthcare providers to optimize their operations, enhance patient experiences, and ultimately, save lives.
          </p>
        </div>
        <picture>
          <source srcSet="./assets/about-page-images/about-us.webp" type="image/webp" />
          <source srcSet="./assets/about-page-images/about-us.jpg" type="image/jpeg" />
          <img src="./assets/about-page-images/about-us.jpg" alt="About Us" />
        </picture>
      </div>

      {/* Random Quotes Section */}
      <div className="quotes">
        <p id="quote-text">Your health journey, our priority - that's the Ambuvians way</p>
      </div>

      {/* About We */}
      <div className="about-we"  style={{ backgroundImage: 'url(./about-page-images/about-we.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div className="about-we-text">
          <h2>Who We Are</h2>
          <p className="who-we-are-text"></p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="choose-us" style={{
  backgroundImage: 'url(./about-page-images/choose-us-image.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
        <div className="choose-text">
          <h2>Why Choose Us?</h2>
          <div className="choose-img">
            <div className="img-one">
              <img className="scale" src="./about-page-images/img-one.webp" alt="first image of choose image that contains patient first policy" />
              <p>Patient first policy</p>
            </div>
            <div className="img-two">
              <img className="scale" src="./about-page-images/img-two.webp" alt="ksecond image of choose us image that contains Emergency assistance time of 15 minutes or less" />
              <p>Emergency assistance time of 15 minutes or less</p>
            </div>
            <div className="img-three">
              <img className="scale" src="./about-page-images/img-three.webp" alt="third image of the choose us image that contains 24/7 support" />
              <p>24/7 Support</p>
            </div>
            <div className="img-four">
              <img className="scale" src="./about-page-images/img-four.webp" alt="fourth image of the choose us image that contains customize and Reliable" />
              <p>Customize and Reliable</p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Teams Section */}
      
    </div>
  );
};

export default About;
