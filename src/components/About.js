import React from "react";
import "./About.css";
import pic from './images/3.jpg';
import mission from './images/mission.jpg';
import Navbar from "./HomeNavbar";

export default function About() {
  return (
    <section id="about">
      <div className="abt">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 column1" >
              <img src={pic} alt="Image" className="img-fluid" />
            </div>
            <div className="col-sm-6">
              <h3>About us</h3>
              <p>We are a team of tech enthusiasts who specialize in organizing and
                hosting online coding competitions. Our mission is to provide a safe
                and fun environment for coders of all skill levels to hone their
                skills and demonstrate their abilities. We provide an open platform
                for creative problem solving and collaboration that brings the best
                minds together from around the world.
                We believe that coding competitions are an excellent way
                to bring the best minds together from all over the world.</p>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>


        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h3>Our Mission</h3>
              <p>Our mission is to create an open platform for programming
                enthusiasts to compete in coding competitions. We strive to provide
                our users with a well-designed, interactive, and fun experience that
                taps into their creativity and helps them learn. Through our
                platform, we hope to foster an environment of collaboration and
                competition, one where programmers can engage in problem solving,
                challenge their skills, and become better coders in the process. In
                addition, we aim to support educators in their quest to teach
                students the fundamentals of coding and help create a new generation
                of tech professionals.</p>
            </div>
            <div className="col-sm-6">
              <img src={mission} alt="Image" className="img-fluid" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
