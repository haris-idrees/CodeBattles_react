import Navbar from './Navbar';
import CreatePost from './createpost';
import '../components/Timeline.css';
import ProfilePost from './ProfilePost';
import StickyFooter from './StickyFooter';
import React from 'react';
import { useEffect, useState } from 'react';
import APIServices from '../APIServices';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import FriendSuggestion from './friendSuggestion';

function Timeline() {
  useEffect(() => {
    APIServices.getAllPosts()
      .then(users => {
        setPosts(users); // Update the state with the fetched posts
      })
      .then(() => console.log("Posts fetched")) // Move the console.log inside the .then block
      .catch(error => {
        alert("Error in data fetching");
      });
  }, []);

  const [posts, setPosts] = useState([]);
  const image = require('../4.jpg');
  return (
    <div>
      <Navbar></Navbar>
      <div >
        <center>
          <div >
            <CreatePost />
          </div>
          
        </center>
        {/* <ProfilePost /><br />
          <ProfilePost /><br />
          <ProfilePost /><br /> */}
          <div className="post_css">
        {posts.map(post => (

          <div  className="f-card" key={post.id}>
            <div className="header">
              <div className="options">
                <i className="fa fa-chevron-down"></i>
              </div>
              <img src={`https://res.cloudinary.com/drvo4uxiv/image/upload/${post.user_img}`}  className="co-logo"/>

              <div className="co-name">
                <a href="#">{post.user_name}</a>
              </div>
              <div className="time">
                <a href="#">{post.date_added}</a> · <i className="fa fa-globe"></i>
              </div>
            </div>
            <div className="content">
              <p>
                {post.post_text}
              </p>
            </div>

            <div className="reference">
              <AdvancedImage cldImg={new CloudinaryImage(post.post_image, { cloudName: 'drvo4uxiv' })} className="reference-thumb" />
              <div className="reference-content">
                
                
                
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
        ))}
        </div>
      </div>
      <StickyFooter />
    </div>
  )
}

export default Timeline

