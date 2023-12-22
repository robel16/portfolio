import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import AnimatedLetters from "./AnimatedLetters/Animated";
import { useEffect, useState } from "react";
import SkillAnimated from "./SkillAnimated/SkillAnimated";

export const Skills = () => {
  const [letterClass,setLettrClass]=useState('text-animate')
  const nameArray=['','S','k','i','l','l','s']
useEffect(()=>{
  setTimeout(()=>{
   setLettrClass('text-animate-hover')
 },4000)
},[])



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>  </h2>
                       <p>
  I am a web developer with expertise in a variety of technologies including JavaScript (both client-side and server-side with Node.js), React for building dynamic user interfaces, Git for version control, MongoDB for database management, Express.js for building web applications, and I'm also proficient in using the Tailwind CSS framework for creating stylish and responsive designs. I have experience working with other libraries and frameworks to create robust and efficient web applications. I'm passionate about creating web solutions that are both functional and user-friendly.
</p>

                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                              <SkillAnimated/>
                            </div>
                            
                           
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}