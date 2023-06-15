import React from "react-dom";
import desktop_wallpaper from "../desktop_wallpaper.jpg";
import logo from "../logo.svg";
import './ProfilePost.css';

export default function ProfilePost() {
    const posts = [
        { likes: 10, dislikes: 2, name: "Hasan" },
        { likes: 5, dislikes: 1, name: "Nauman" },
        { likes: 7, dislikes: 3, name: "Haris" }
      ];
  
  return (
    <>
      <div className="f-card">
        <div className="header">
          <div className="options">
            <i className="fa fa-chevron-down"></i>
          </div>
          <img className="co-logo" src={logo} />
          <div className="co-name">
            <a href="#">PureCSS</a>
          </div>
          <div className="time">
            <a href="#">2hrs</a> · <i className="fa fa-globe"></i>
          </div>
        </div>
        <div className="content">
          <p>
            Height is optional, if no height is specified the image will be a
            square.Example:{" "}
            <a href="http://placehold.it/300">http://placehold.it/300</a> See
            More
          </p>
        </div>

        <div className="reference">
          <img className="reference-thumb" src={desktop_wallpaper} />
          <div className="reference-content">
            <div className="reference-title">
              A quick and simple image placeholder service. | PLACEHOLDER.it
            </div>
            <div className="reference-subtitle">
              How does it work? Just put your image size after our URL and
              you'll get a placeholder.
            </div>
            <div className="reference-font">placeholder.it</div>
          </div>
        </div>
        <div className="social">
          <div className="social-content"></div>
          <div className="social-buttons">
            <span>
              <i className="fa fa-thumbs-up"></i>Like
            </span>
            <span>
              <i className="fa fa-thumbs-down"></i>Dislike
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
