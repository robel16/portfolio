import Cert1 from "../assets/certification/intro.jpg";
import cert2 from "../assets/certification/ReactBasic.jpg";
import cert3 from "../assets/certification/JS.jpg";
import cert4 from "../assets/certification/Rjsudemy.jpg";
import cert5 from "../assets/certification//UIUX.jpg";
import cert6 from "../assets/certification/VersionControl.jpg";
import cert7 from "../assets/certification/htmlcssdepth.jpg";
import cert8 from "../assets/certification/jsudemy.jpg";
import cert9 from "../assets/certification/pythonandflask.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";
import AnimatedLetters from "./AnimatedLetters/Animated";
import { useEffect, useState } from "react";

export const Certification = () => {
  const certifications = [
    {
      title: "intro",
      imageUrl: {Cert1},
    },
      {
      title: "web",
      imageUrl: "../assets/certification/Introtofrontend.jpg",
    },
    {
      title: "fsd",
      imageUrl: "../assets/certification/JS.jpg",
    },
  ];
  const [letterClass, setLettrClass] = useState("text-animate");
  const nameArray = [
    "",
    "C",
    "E",
    "R",
    "T",
    "I",
    "F",
    "I",
    "C",
    "A",
    "T",
    "I",
    "O",
    "N",
  ];
  useEffect(() => {
    setTimeout(() => {
      setLettrClass("text-animate-hover");
    }, 4000);
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="certificate" id="certificates">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="certificate-bx wow zoomIn">
              <h2>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />{" "}
              </h2>
             <p> this is my certification</p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme certificate-slider"
              >
             <div className="item">
                                <img src={Cert1} alt="Image" />
                                <h5 >Introduction To Frontend</h5>
                            </div> 
                            <div className="item">
                                <img src={cert2} alt="Image" />
                                <h5>Rect Basic</h5>
                            </div>
                            <div className="item">
                                <img src={cert3} alt="Image" />
                                <h5>JavaScript by meta</h5>
                            </div>
                            <div className="item">
                                <img src={cert4} alt="Image" />
                                <h5>React By Udemy</h5>
                            </div>
                            <div className="item">
                                <img src={cert5} alt="Image" />
                                <h5>UI/UX</h5>
                            </div>
                            <div className="item">
                                <img src={cert6} alt="Image" />
                                <h5>Version Control</h5>
                            </div>
                            <div className="item">
                                <img src={cert7} alt="Image" />
                                <h5>HTML and CSS in Depth</h5>
                            </div>
                            <div className="item">
                                <img src={cert8} alt="Image" />
                                <h5>JavaScript by Udemy</h5>
                            </div>
                            <div className="item">
                                <img src={cert9} alt="Image" />
                                <h5>Python Flask Demostration</h5>
                            </div>

              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
export default Certification;
